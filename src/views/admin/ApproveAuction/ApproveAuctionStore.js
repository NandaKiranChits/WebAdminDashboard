import {store} from '@risingstack/react-easy-state';
import firebase from '../util/firebase';
import isEmpty from '../util/isEmpty';
import CollectionNames from '../util/CollectionNames';

const approveAuctionStore = store({
    isLoading : false,
    
    auct_no : null,
    group_id : null,

    ticket_id : "",

    groupCustomerData : null,
    auctionData : null, 

    bid_amount : 0,
    next_auction_date : "",

    auctionUnsubscribe : null,
    groupCustomerUnsubscribe : null,

    clearAll(){
        approveAuctionStore.groupCustomerData = null;
        approveAuctionStore.auctionData = null;
        approveAuctionStore.bid_amount = 0;
        approveAuctionStore.next_auction_date = "";
        approveAuctionStore.ticket_id = null;

        if(approveAuctionStore.auctionUnsubscribe!==null){
            approveAuctionStore.auctionUnsubscribe();
            approveAuctionStore.auctionUnsubscribe = null;
        }
        if(approveAuctionStore.groupCustomerUnsubscribe!==null){
            approveAuctionStore.groupCustomerUnsubscribe();
            approveAuctionStore.groupCustomerUnsubscribe = null;
        }
    },

    setAuctNo(auct_no){
        approveAuctionStore.auct_no = auct_no;

        if(approveAuctionStore.group_id!==null){
            approveAuctionStore.getAuctionData();
        }
    },

    setGroupID(group_id){
     
        approveAuctionStore.group_id = group_id;


        if(approveAuctionStore.auct_no!==null){
            approveAuctionStore.getAuctionData();
        }
    },

    setTicketNo(ticket_no){
     
        approveAuctionStore.ticket_id = ticket_no;

        if(approveAuctionStore.group_id!==null){
            approveAuctionStore.getGroupCustomerData();
        }
    },


    getAuctionData(){
        console.log("At srore auction_no = ",approveAuctionStore.auct_no," and group_id = ",approveAuctionStore.group_id);
        
        if(isEmpty(approveAuctionStore.auct_no) || isEmpty(approveAuctionStore.group_id)){
            window.alert("Invalid Auction No. or group_id");
            return;
        }

        if(approveAuctionStore.auctionUnsubscribe!==null){
            approveAuctionStore.auctionUnsubscribe();
            approveAuctionStore.auctionUnsubscribe = null;
        }   

        approveAuctionStore.isLoading = true;

        var id = approveAuctionStore.group_id + "-" + approveAuctionStore.auct_no;

        console.log("ID = ",id);

        var ref = firebase.firestore().collection(CollectionNames.auction).doc(id);

        approveAuctionStore.auctionUnsubscribe = ref.onSnapshot((doc)=>{
            if(!doc.exists){
                window.alert("Auction Doesnt exist");
                approveAuctionStore.auctionUnsubscribe();
                approveAuctionStore.auctionUnsubscribe = null;
                approveAuctionStore.isLoading = false;
                return;
            }
            approveAuctionStore.auctionData = doc.data();
            approveAuctionStore.isLoading = false;
        },(e)=>{
            console.error(e);
            window.alert(e.message);
            approveAuctionStore.isLoading = false;
        })
    },

    getGroupCustomerData(){
        if(isEmpty(approveAuctionStore.group_id) || isEmpty(approveAuctionStore.ticket_id)){
            return;
        }


        if(approveAuctionStore.groupCustomerUnsubscribe!==null){
            approveAuctionStore.groupCustomerUnsubscribe();
            approveAuctionStore.groupCustomerUnsubscribe = null;
        }

        console.log("Getting group Customer");

        var id = approveAuctionStore.group_id + "-" + approveAuctionStore.ticket_id;
        var ref = firebase.firestore().collection(CollectionNames.groupCustomer).doc(id);


        approveAuctionStore.groupCustomerUnsubscribe = ref.onSnapshot((doc)=>{
            if(!doc.exists){
                approveAuctionStore.groupCustomerData = null;
                window.alert("Group Customer Not Found");
                return;
            }
            approveAuctionStore.groupCustomerData = doc.data();
        },(e)=>{
            console.error(e);
            approveAuctionStore.groupCustomerData = null;
            window.alert(e.message);
        })
    },


    submitForApproval(){
        if(isEmpty(approveAuctionStore.group_id) || isEmpty(approveAuctionStore.auct_no)){
            window.alert("Invalid Group Id or auction no");
            return;
        }
        if(isEmpty(approveAuctionStore.ticket_id) || isEmpty(approveAuctionStore.groupCustomerData)){
            window.alert("Invalid Ticket");
            return;
        }
        if(isEmpty(approveAuctionStore.bid_amount) || isEmpty(approveAuctionStore.next_auction_date)){
            window.alert("Please Fill bid amount and next auction date");
            return;
        }

        if(approveAuctionStore.groupCustomerData.status==="Prized"){
            window.alert("Ticket Cannot be Prized");
            return;
        }
        
        if(approveAuctionStore.groupCustomerData.lean_details.isLean){
            window.alert("Customer is Leaned and cannot be awarded");
            return;
        }


        var groupRef = firebase.firestore().collection(CollectionNames.group).doc(approveAuctionStore.group_id);

        return groupRef.get().then((doc)=>{
            if(!doc.exists){
                throw new Error("Group Doesnt Exist");
            }
            let group_data = doc.data();
            let bid_amount = parseFloat(approveAuctionStore.bid_amount);
            let chit_value = approveAuctionStore.auctionData.chit_value;
            let min_bid =  chit_value * (approveAuctionStore.auctionData.bidding_policy.min_bid/100);
            let foreman_comission = chit_value * (approveAuctionStore.auctionData.bidding_policy.foreman_comission/100);
            let max_bid =  chit_value * (approveAuctionStore.auctionData.bidding_policy.max_bid/100);
            let total_members = group_data.total_members;

            if(bid_amount < min_bid){
                throw new Error("Bid Amount cannot be lesser than the minimum bid value of ",min_bid);
            }
            if(bid_amount > max_bid){
                throw new Error("Bid amount Cannot be greater than the maximum bid value of ".max_bid);
            }
            let dividend = ( (bid_amount-foreman_comission) / total_members);


            var toUpdate = {
                bidder_details : {
                    cust_id : approveAuctionStore.groupCustomerData.cust_id,
                    ticket_id : approveAuctionStore.groupCustomerData.ticket_no,
                },
                bidding_details : {
                    bid_amount : bid_amount,
                    dividend : dividend,
                },
                next_auction_details : {
                    next_auction_date : new Date(approveAuctionStore.next_auction_date),
                },
                status : "inCollectionAccount",
            };

            var auction_id = approveAuctionStore.group_id + "-" +   approveAuctionStore.auct_no;
            var auction_ref = firebase.firestore().collection(CollectionNames.auction).doc(auction_id);

            return firebase.firestore().runTransaction((transaction)=>{
                return transaction.get(auction_ref).then((doc)=>{
                    if(!doc.exists){
                        throw new Error("Auction Doesnt Exist");
                    }
                    var transAuctionData = doc.data();
                    console.log("Auction Status = ",transAuctionData.status);
                    if(transAuctionData.status!=="pending"){
                        throw new Error("Auction is not in pending status");
                    }
                    transaction.update(auction_ref,toUpdate);
                    return "success";
                })
            }).then(()=>{
                console.log("Auction Updated Succesfully");
                window.alert("Auction Updated Succesfully");
                approveAuctionStore.clearAll();
                return;
            }).catch((err)=>{
                throw err;
            })
            

        }).catch((err)=>{
            console.error(err);
            window.alert(err.message);
        })

        

        
    }

})

export default approveAuctionStore;