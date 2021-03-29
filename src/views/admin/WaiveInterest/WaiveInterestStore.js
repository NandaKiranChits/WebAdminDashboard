import {store} from '@risingstack/react-easy-state';
import isEmpty from '../util/isEmpty';
import firebase from '../util/firebase';
import CollectionNames from '../util/CollectionNames';


const WaiveInterestStore = store({
    isLoading : false,

    installment_no : "",
    ticket_id : "",
    group_id : "",

    ticket_data : null,
    installment_data : null,

    interestToWaive : 0,

    getData(){
        if(isEmpty(WaiveInterestStore.group_id) || isEmpty(WaiveInterestStore.ticket_id) ||
           isEmpty(WaiveInterestStore.installment_no)
        ){
            console.log("Group is = ",WaiveInterestStore.group_id, " Ticket no = ",WaiveInterestStore.ticket_id," Installment No = ".WaiveInterestStore.installment_no)
            window.alert("Invalid Ticket or installment Data");
            return;
        }

        WaiveInterestStore.isLoading = true;

        return WaiveInterestStore.getTicketData().then(()=>{
            return WaiveInterestStore.getInstallmentData().then(()=>{
                WaiveInterestStore.isLoading = false;
            }).catch((err)=>{
                console.error(err);
                WaiveInterestStore.isLoading = false;
            })
        }).catch((err)=>{
            console.error(err);
            WaiveInterestStore.isLoading = false;
        })

    },

    getTicketData(){

        let ticket_doc_id = WaiveInterestStore.group_id + "-" + WaiveInterestStore.ticket_id;
        let ticketRef = firebase.firestore().collection(CollectionNames.groupCustomer).doc(ticket_doc_id);

        return ticketRef.get().then((doc)=>{
            if(!doc.exists){
                WaiveInterestStore.ticket_data = null;
                throw new Error("Ticket Doesnt exist");
            }

            WaiveInterestStore.ticket_data = doc.data();
        }).catch((err)=>{
            window.alert(err.message);
            WaiveInterestStore.ticket_data = null;
            console.error(err);
            return;
        })
    },

    getInstallmentData(){
        let inst_doc_id = WaiveInterestStore.group_id + '-' + WaiveInterestStore.installment_no + "-" + WaiveInterestStore.ticket_id;
        let installmentRef = firebase.firestore().collection(CollectionNames.installment).doc(inst_doc_id);

        return installmentRef.get().then((doc)=>{
            if(!doc.exists){
                WaiveInterestStore.installment_data = null;
                throw new Error("Installment Doesnt Exist");
            }
            WaiveInterestStore.installment_data = doc.data();
        }).catch((err)=>{
            window.alert(err.message);
            WaiveInterestStore.installment_data = null;
            return;
        })
     },

     waiveInterest(){
        if(isEmpty(WaiveInterestStore.group_id) || isEmpty(WaiveInterestStore.ticket_id) ||
                isEmpty(WaiveInterestStore.installment_no)
            ){
                console.log("Group is = ",WaiveInterestStore.group_id, " Ticket no = ",WaiveInterestStore.ticket_id," Installment No = ".WaiveInterestStore.installment_no)
                window.alert("Available information is too less. Cannot update installment");
                return;
            }
    
        if(isEmpty(WaiveInterestStore.interestToWaive)){
            window.alert("Interest to Waive is not available");
            return;
        }

        if(isEmpty(WaiveInterestStore.installment_data)){
            window.alert("Installment Data is not available");
            return;
        }

        if(WaiveInterestStore.interestToWaive > WaiveInterestStore.installment_data.interest){
            window.alert("Interest Waived cannot be more than actual interest");
            return;
        }
        
        WaiveInterestStore.isLoading = true;
        let inst_doc_id = WaiveInterestStore.group_id + '-' + WaiveInterestStore.installment_no + "-" + WaiveInterestStore.ticket_id;
        let instRef = firebase.firestore().collection(CollectionNames.installment).doc(inst_doc_id);

        return instRef.update({waived_interest:firebase.firestore.FieldValue.increment(WaiveInterestStore.interestToWaive)}).then(()=>{
            console.log("Installment Updated Succesfully");
            window.alert("Interest Waived succesfully");
            WaiveInterestStore.isLoading = false;
            return;
        }).catch((err)=>{
            console.error(err);
            window.alert(err.message);
            WaiveInterestStore.isLoading = false;
            return;
        })
        
     }
})  

export default WaiveInterestStore ;