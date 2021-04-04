import {store} from '@risingstack/react-easy-state';
import collections from '../util/CollectionNames';
import firebase from '../util/firebase';
import search from '../util/Search';
import isEmpty from '../util/isEmpty';


const voucherStore = store({
    isLoading : false,

    vouchers_data : [],
    view_data : [],

    searchValue  : "",

    start_date : "",
    end_date : "",

    setStartDate(date){
        voucherStore.start_date = new Date(date);
        if(!isEmpty(voucherStore.end_date)){
            voucherStore.getVoucherData();
        }
    },

    setEndDate(date){
        voucherStore.end_date = new Date(date);
        if(!isEmpty(voucherStore.start_date)){
            voucherStore.getVoucherData();
        }
    },


    searchData(searchValue){
        voucherStore.view_data = search(voucherStore.vouchers_data,["voucher_no","name","group_id","phone","type"],searchValue);
    },

    getVoucherData(){
        if(isEmpty(voucherStore.start_date) || isEmpty(voucherStore.end_date)){
            console.log("Start Date or end date is empty");
            return;
        }

        voucherStore.isLoading = true;
        voucherStore.start_date.setHours(0,0,0,0);
        voucherStore.end_date.setHours(0,0,0,0);

        let query = firebase.firestore()
                            .collection(collections.voucher)
                            .where("date",'>=',voucherStore.start_date)
                            .where("date","<=",voucherStore.end_date)
                            .orderBy("date","desc");


        return query.onSnapshot((snap)=>{

            let temp = [];

            snap.forEach((doc)=>{
                temp.push(doc.data());
            })

            voucherStore.vouchers_data = temp;
            voucherStore.view_data = temp;
            voucherStore.isLoading = false;
        },(e)=>{
            console.error(e);
            window.alert(e.message);
            return;
        });
         

    }
    
})

export default voucherStore;