import {store} from '@risingstack/react-easy-state';
import isEmpty from '../util/isEmpty';
import firebase from '../util/firebase';
import collections from '../util/CollectionNames';

const addVoucherStore = store({
    isLoading : false,

    group_id : "",
    ticket_no : "",

    type : "",
    amount : "",
    comments : "",

    ticket_details : null,

    setGroupId(group_id){
        addVoucherStore.group_id = group_id;
        if(isEmpty(group_id)){
            return;
        }
        if(!isEmpty(addVoucherStore.ticket_no)){
            addVoucherStore.getTicketDetails();
        }

    },

    setTicketNo(ticket_no){

        addVoucherStore.ticket_no = ticket_no;
        if(isEmpty(ticket_no)){
            return;
        }
        if(!isEmpty(addVoucherStore.group_id)){
            addVoucherStore.getTicketDetails();
        }   
    },


    getTicketDetails(){
        if(isEmpty(addVoucherStore.group_id) || isEmpty(addVoucherStore.ticket_no)){
            console.log("group id or ticket no is empty");
            return;
        }

        addVoucherStore.isLoading = true;

        let groupCustId = addVoucherStore.group_id + "-" + addVoucherStore.ticket_no;
        let groupCustRef = firebase.firestore().collection(collections.groupCustomer).doc(groupCustId);

        return groupCustRef.get().then((doc)=>{
            if(!doc.exists){
                window.alert("Ticket doesnt exist");
                addVoucherStore.ticket_details = null;
                addVoucherStore.isLoading = false;
                return;
            }
            addVoucherStore.ticket_details = doc.data();
            addVoucherStore.isLoading = false;
        }).catch((err)=>{
            console.error(err);
            window.alert(err.message);
            addVoucherStore.ticket_details = null;
            addVoucherStore.isLoading =false;
        })
    },


    addNewVoucher(){
     if(isEmpty(addVoucherStore.ticket_details) || isEmpty(addVoucherStore.type) || isEmpty(addVoucherStore.amount)){
         console.log("Something is Empty");
         window.alert("Please Select Ticket , voucher type and amount");
         return;
     }

     let voucherDetails = {
         voucher_no : null,

         group_id : addVoucherStore.group_id,
         ticket_no : addVoucherStore.ticket_no,

         name : addVoucherStore.ticket_details.name,
         phone : addVoucherStore.ticket_details.phone,

         type : addVoucherStore.type,
         amount : parseFloat(addVoucherStore.amount),

         date : new Date(),

         comments : addVoucherStore.comments,

         status : "success",
     };

    addVoucherStore.isLoading = true;

    let ref = firebase.firestore().collection(collections.voucher);

    return ref.add(voucherDetails).then(()=>{
        addVoucherStore.isLoading = false;
        addVoucherStore.ticket_details = null;
        addVoucherStore.type = "";
        addVoucherStore.amount = "";
        addVoucherStore.ticket_no = "";
        window.alert("Voucher Added Succesfully");
        return;
    }).catch((err)=>{
        addVoucherStore.isLoading = false;
        console.error(err);
        window.alert(err.message);
        return;
    })


    }
})

export default addVoucherStore;