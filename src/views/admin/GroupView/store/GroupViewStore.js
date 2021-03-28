import {store} from '@risingstack/react-easy-state';
import CollectionNames from '../../util/CollectionNames';
import isEmpty from '../../util/isEmpty';
import firebase from '../../util/firebase';

const groupViewStore = store({
    isLoading : false,
    hasError : false,
    errorMessage : null,

    group_id : "",

    group_data : null, // object

    group_members : [],
    auction_data : [],
    payments_data : [],

    unsubscribe : null,
    groupCustUnsubscribe  : null,
    auctionUnsubscribe : null,
    paymentsUnsubscribe : null,

    getGroup(){
        if(isEmpty(groupViewStore.group_id)){
            window.alert("Please Enter Group ID");
            return;
        }

        if(groupViewStore.unsubscribe!==null){
            groupViewStore.unsubscribe();
            groupViewStore.unsubscribe = null;
        }


        groupViewStore.isLoading = true;

        groupViewStore.getGroupMembers(groupViewStore.group_id);
        groupViewStore.getAuction(groupViewStore.group_id);
        groupViewStore.getPaymentsData(groupViewStore.group_id);

        var ref = firebase.firestore().collection(CollectionNames.group).doc(groupViewStore.group_id);

        groupViewStore.unsubscribe =  ref.onSnapshot((doc)=>{
            if(!doc.exists){
                window.alert("Group Doesnt Exist");
                return;
            }
            groupViewStore.group_data = doc.data();
            groupViewStore.isLoading = false;
            groupViewStore.hasError = false;
            groupViewStore.errorMessage = "";
        },(err)=>{
            console.error(err);
            groupViewStore.isLoading = false;
            groupViewStore.hasError = true;
            groupViewStore.errorMessage = err.message;
        })
    },


    getGroupMembers(group_id){
        if(groupViewStore.groupCustUnsubscribe!==null){
            groupViewStore.groupCustUnsubscribe();
            groupViewStore.groupCustUnsubscribe = null;
        }


        var ref = firebase.firestore().collection(CollectionNames.groupCustomer).where("group_id","==",group_id);

        groupViewStore.groupCustUnsubscribe = ref.onSnapshot((snap)=>{
            groupViewStore.group_members = [];
            snap.forEach((doc)=>{
                groupViewStore.group_members.push(doc.data());
            })
        },(e)=>{
            console.error(e);
        })
    },

    getAuction(group_id){
        if(groupViewStore.auctionUnsubscribe!==null){
            groupViewStore.auctionUnsubscribe();
            groupViewStore.auctionUnsubscribe = null;
        }

        var ref = firebase.firestore().collection(CollectionNames.auction).where("group_id","==",group_id).orderBy("date_and_time","desc");

        groupViewStore.auctionUnsubscribe = ref.onSnapshot((snap)=>{
            groupViewStore.auction_data = [];
            snap.forEach((doc)=>{
                groupViewStore.auction_data.push(doc.data());
            })
        },(e)=>{
            console.error(e);
        })
    },

    getPaymentsData(group_id){
        if(groupViewStore.paymentsUnsubscribe!==null){
            groupViewStore.paymentsUnsubscribe();
            groupViewStore.paymentsUnsubscribe = null;
        }

        var paymentsRef = firebase.firestore().collection(CollectionNames.payments).where("group_id","==",group_id);

        groupViewStore.paymentsUnsubscribe = paymentsRef.onSnapshot((snap)=>{
            var paymentsData = [];
            snap.forEach((doc)=>{
                paymentsData.push(doc.data());
            })
            groupViewStore.payments_data = paymentsData;
        },(e)=>{
            console.error(e);
        })
    }





})

export default groupViewStore;