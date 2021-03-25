import {store} from '@risingstack/react-easy-state';
import collectionNames from '../util/CollectionNames';
import firebase from '../util/firebase';
import search from '../util/Search';

const customerStore = store({
    isLoading : false,

    isError : false,
    errorMessage : null,

    customerData : [],

    view_data : [],
    searchValue  : "",

    start_date : null,
    end_date : null,

    setStartDate(date){
        customerStore.start_date = date;

        if(customerStore.end_date!==null){
            customerStore.getCustomer();
        }
    },

    setEndDate(date){
        customerStore.end_date = date;

        if(customerStore.start_date!==null){
            customerStore.getCustomer();
        }
    },

    getCustomer(){
        console.log("Getting Customers")
        customerStore.isLoading = true;
        var startDate = new Date(customerStore.start_date);
        var endDate = new Date(customerStore.end_date);
        startDate.setHours(0,0,0,0);
        endDate.setHours(0,0,0,0);
        var query = firebase.firestore().collection(collectionNames.customer)
                                        .where("createDate",">=",startDate)
                                        .where("createDate","<=",endDate);

        return query.onSnapshot((snap)=>{
            var customerData = [];
            snap.forEach((doc)=>{
                customerData.push(doc.data());
            });

            customerStore.customerData = customerData;
            customerStore.searchValue = "";
            customerStore.view_data = customerData;
            customerStore.isLoading = false;
            customerStore.isError = false;
            customerStore.errorMessage = "";
        },(e)=>{
            console.error(e);
            customerStore.isLoading = false;
            customerStore.isError = true;
            customerStore.errorMessage = e.message;
            
        })
    },


    searchInData(){
        customerStore.view_data = search(customerStore.customerData, ["name","phone","email","phone2","father_husband_name"] ,customerStore.searchValue);
    }


    
    
})

export default customerStore;