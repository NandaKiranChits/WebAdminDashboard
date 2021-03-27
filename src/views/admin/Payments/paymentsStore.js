import {store} from '@risingstack/react-easy-state';
import firebase from '../util/firebase';
import search from '../util/Search';
import CollectionNames from '../util/CollectionNames';
import isEmpty from '../util/isEmpty';

const paymentsStore = store({
    isLoading : false,

    payments_data : [],
    view_data : [],

    start_date : new Date() , // to get todays data
    end_date : new Date() , // to get todays date

    gotTodaysData : false,
    unsubscribe : null,

    searchValue :"",

    setStartDate(date){
        if(isEmpty(date)){
            return;
        }
        paymentsStore.start_date = new Date(date);
        paymentsStore.start_date.setHours(0,0,0,0);
        if(!isEmpty(paymentsStore.end_date)){
            paymentsStore.getPaymentData(paymentsStore.start_date,paymentsStore.end_date);
        }
    },

    setEndDate(date){
        if(isEmpty(date)){
            return;
        }
        paymentsStore.end_date = new Date(date);
        paymentsStore.end_date.setHours(0,0,0,0);
        if(!isEmpty(paymentsStore.start_date)){
            paymentsStore.getPaymentData(paymentsStore.start_date,paymentsStore.end_date);
        }
    },  

    getTodaysData(){
        if(paymentsStore.gotTodaysData){
            return;
        }
        paymentsStore.gotTodaysData = true;
        paymentsStore.start_date.setHours(0,0,0,0);
        paymentsStore.end_date.setDate(paymentsStore.end_date.getDate()+1); //make tommorows date
        paymentsStore.end_date.setHours(0,0,0,0);
        paymentsStore.getPaymentData(paymentsStore.start_date,paymentsStore.end_date);
    },

    getPaymentData(start_date,end_date){
        paymentsStore.isLoading = true;

        if(paymentsStore.unsubscribe!==null){
            paymentsStore.unsubscribe();
            paymentsStore.unsubscribe = null;
        }

        var query = firebase.firestore()
                            .collection(CollectionNames.payments)
                            .where("date",">=",start_date)
                            .where("date","<=",end_date)
                            .orderBy("date","desc");
        
        
        paymentsStore.unsubscribe = query.onSnapshot((snap)=>{
            var data_list = [];
            snap.forEach((doc)=>{
                var payment = doc.data();
                payment.mr_details.mr_date = (payment.mr_details.mr_date===null?null:payment.mr_details.mr_date.toDate().toLocaleDateString());
                payment.date = (payment.date === null ? null : payment.date.toDate().toLocaleDateString());
                data_list.push(payment);
            });
            
            paymentsStore.isLoading = false;
            paymentsStore.payments_data = data_list;
            paymentsStore.view_data = data_list;
        },(err)=>{
            console.error(err);
            window.alert(err.message);
            paymentsStore.isLoading = false;
        })

    },


    searchData(searchKey){
        console.log("Search key = ",searchKey);
        if(isEmpty(searchKey)){
            paymentsStore.view_data = paymentsStore.payments_data;
            return;
        }
        var sortedList = search(paymentsStore.payments_data,
                                ["group_id","comments","cust_details.name","cust_details.email","cust_details.phone",
                                "mr_details.mr_no","payment_id","ticket_no","cheque_details.cheque_no","payment_details.total_paid",
                                "payment_details.payment_method","neft_details.neft_details","neft_details.neft_no"],
                                searchKey);
        console.log("Searching for ",searchKey," Data = ",sortedList);
        paymentsStore.view_data = sortedList;
    }
});

export default paymentsStore;