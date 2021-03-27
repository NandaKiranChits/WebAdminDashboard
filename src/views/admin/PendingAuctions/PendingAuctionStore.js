import {store} from '@risingstack/react-easy-state';
import firebase from '../util/firebase';
import CollectionNames from '../util/CollectionNames';

const pendingAuction = store({
    isLoading : false,

    pendingData : [],

    started : false,

    getPendingAuctionData(){

        if(pendingAuction.started){
            return;
        }
        pendingAuction.started = true;

        pendingAuction.isLoading = true;

        var query = firebase.firestore().collection(CollectionNames.auction).where("status","==","pending").orderBy("date_and_time","desc");

        return query.onSnapshot((snap)=>{
            pendingAuction.pendingData = [];
            snap.forEach((doc)=>{
                pendingAuction.pendingData.push(doc.data());
            })
            pendingAuction.isLoading = false;
        },(err)=>{
            console.error(err);
            window.alert(err.message);
            pendingAuction.isLoading = false;
        })
    }

})

export default pendingAuction;