import {store} from '@risingstack/react-easy-state';
import isEmpty from '../util/isEmpty';
import CollectionNames from '../util/CollectionNames';
import firebase from '../util/firebase';

const cancelPayment = store({
    isLoading : false,

    payment_id : "",

    payment_data : null,
    payment_doc_id : null,
    unsubscribe : null,


    setPaymentId(id){
        if(isEmpty(id)){
            cancelPayment.payment_id = "";
            return;
        }

        cancelPayment.payment_id = id;
        cancelPayment.getPaymentData();
    },

    getPaymentData(){
        if(isEmpty(cancelPayment.payment_id)){
            return;
        }

        if(cancelPayment.unsubscribe!==null){
            cancelPayment.unsubscribe();
            cancelPayment.unsubscribe = null;
        }

        cancelPayment.isLoading = true;
        var paymentQuery = firebase.firestore().collection(CollectionNames.payments).where("payment_id","==",parseInt(cancelPayment.payment_id));

        cancelPayment.unsubscribe =  paymentQuery.onSnapshot((snap)=>{
            cancelPayment.payment_data = null;
            cancelPayment.payment_doc_id = null;
            snap.forEach((doc)=>{
                cancelPayment.payment_data = doc.data();
                cancelPayment.payment_doc_id = doc.id;
            })
            
            cancelPayment.isLoading = false;
        },(e)=>{
            console.error(e);
            cancelPayment.payment_data = null;
            cancelPayment.payment_doc_id = null;
            cancelPayment.isLoading = false;
        })
    },

    cancelPayment(){
        if(isEmpty(cancelPayment.payment_id) || isEmpty(cancelPayment.payment_doc_id)){
            window.alert("Please Enter a payment id");
            return;
        }

        cancelPayment.isLoading = false;
        var paymentRef = firebase.firestore().collection(CollectionNames.payments).doc(cancelPayment.payment_doc_id);

        return firebase.firestore().runTransaction((transaction)=>{
            return transaction.get(paymentRef).then((doc)=>{
                if(!doc.exists){
                    throw new Error("Payment Doesnt Exist");
                }
                var paymentData = doc.data();
                if(paymentData["status"]==="failure"){
                    throw new Error("Payment is Already Removed");
                }
                transaction.update(paymentRef,{status:"failure",failure_date:new Date()});
                return "success";
            })
        }).then(()=>{
            console.log("Payment Cancelled Successful");
            window.alert("PAyment Cancelled Succesfully");
            cancelPayment.payment_data = null;
            cancelPayment.payment_doc_id = null;
            cancelPayment.payment_id = null;
            cancelPayment.isLoading = false;
            return;
        }).catch((Err)=>{
            console.error(Err);
            window.alert("Error : "+Err.message);
            cancelPayment.isLoading = false;
            return;
        })
    }

})

export default cancelPayment;