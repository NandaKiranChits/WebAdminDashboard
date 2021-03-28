import {store} from '@risingstack/react-easy-state';
import firebase from '../util/firebase';
import CollectionNames from '../util/CollectionNames';
import getEmptyVariablesOfObject from '../util/getEmptyVariablesOfObject';
import isEmpty from '../util/isEmpty';



/*

CLEAR ON EACH PAYMENT

1. NEEDS SERVER TIME TO PROCESS DATA , CAN BE ACHEIVED BY MAKING USER SPEND MORE TIME FILLING FORMS

*/

const addPaymentStore = store({
    isLoading : false,

    group_id : "",
    ticket_no : "",

    groupCustData : null,
    unsubscribe : null,
    installment_data : [],
    inst_unsubscribe : null,
    inst_stats : null,

    manual_receipt_no : "",
    manual_receipt_date : "",

    inst_id : null,//selected inst id
    total_paid : 0,
    payment_method : "",

    cheque_no : "",
    cheque_date : "",
    cheque_status : "",

    neft_no : "",
    neft_details : "",

    comments : "",




    addPayment(){

        console.log("Installment ID = ",addPaymentStore.inst_id)

        if(addPaymentStore.payment_method==="CASH"){
            addPaymentStore.cheque_details = "";
            addPaymentStore.cheque_date = "";
            addPaymentStore.cheque_status = "";
            addPaymentStore.neft_details = "";
            addPaymentStore.neft_no = "";
        }

        if(addPaymentStore.payment_method==="CHEQUE"){
            addPaymentStore.neft_details = "";
            addPaymentStore.neft_no = "";
        }

        if(addPaymentStore.payment_method ==="NEFT"){
            addPaymentStore.cheque_date = "";
            addPaymentStore.cheque_details = "";
            addPaymentStore.cheque_status = "";
        }

        var paymentData = {
            payment_id : null, //will be added at the functions 

            group_id : addPaymentStore.group_id,
            ticket_no : addPaymentStore.ticket_no,

            comments : addPaymentStore.comments,

            cust_details : {
                name : addPaymentStore.groupCustData.name,
                phone : addPaymentStore.groupCustData.phone,
                email : addPaymentStore.groupCustData.email,
                cust_id : addPaymentStore.groupCustData.cust_id,
            },

            inst_details :{
                inst_no : addPaymentStore.inst_id,
            },
            
            payment_details :{
                total_paid: addPaymentStore.total_paid,
                payment_method : addPaymentStore.payment_method,
            },

            cheque_details : {
                cheque_no : addPaymentStore.cheque_no,
                cheque_date : isEmpty(addPaymentStore.cheque_date)?null:new Date(addPaymentStore.cheque_date),
                cheque_status : addPaymentStore.cheque_status,
            },

            neft_details : {
                neft_no : addPaymentStore.neft_no,
                neft_details:addPaymentStore.neft_details,
            },

            mr_details :{
                mr_no : addPaymentStore.manual_receipt_no,
                mr_date : isEmpty(addPaymentStore.manual_receipt_date)?null:new Date(addPaymentStore.manual_receipt_date),
            },

            date : new Date(),

            status : "success",

        };


        console.log(paymentData);

        var emptyFields = getEmptyVariablesOfObject(paymentData);

        if(emptyFields.includes("group_id") || emptyFields.includes("ticket_no")){
            window.alert("Please Select Group ID and Ticket No");
            return;
        }

        if(isEmpty(paymentData.inst_details.inst_no)){
            window.alert("Please Select Inst id");
            return;
        }

        if(isEmpty(paymentData.payment_details.total_paid) ||
           isEmpty(paymentData.payment_details.payment_method)){
            window.alert("Please Enter Total PAid Amount and PAyment Method");
            return;
        }

        if(paymentData.payment_method==="CHEQUE" && 
           (isEmpty(paymentData.cheque_details.cheque_no) || 
           isEmpty(paymentData.cheque_details.cheque_status) || 
           isEmpty(paymentData.cheque_details.cheque_date))){
            window.alert("Please Enter Cheque Details");
            return;
        }


        if(paymentData.payment_method==="NEFT" &&
           (isEmpty(paymentData.neft_details.neft_no) ||
            isEmpty(paymentData.neft_details.neft_details))){
                window.alert("Please Enter NEFT Details");
                return;
        }


        if(paymentData.payment_details.total_paid===0){
            window.alert("Total Paid Cannot be 0");
            return;
        }

    
        addPaymentStore.isLoading = true;

        var paymentDocRef = firebase.firestore().collection(CollectionNames.payments);
        
        return paymentDocRef.add(paymentData).then(()=>{
            console.log("Payment Data added");
            addPaymentStore.isLoading = false;
            window.alert("Payment Added Succesfully");
            addPaymentStore.clearAll();
            addPaymentStore.group_id = "";
            addPaymentStore.ticket_no = "";
        }).catch((err)=>{
            console.error(err);
            addPaymentStore.isLoading = false;
            window.alert(err.message);
        })

    },



    setInstallmentID(id){
        if(id<=0){
            return;
        }

        console.log("Search for id =",id);
        addPaymentStore.inst_id = id;
        
        for(var i=0;i<addPaymentStore.installment_data.length;i++){
            console.log("Scanning ",addPaymentStore.installment_data[i].auction_no);
            if(id===addPaymentStore.installment_data[i].auction_no.toString()){
                console.log("Found at index = ",i);
                addPaymentStore.inst_stats = addPaymentStore.getSelectInstallmentValue(addPaymentStore.installment_data[i]);
                break;
            }
        }

        console.log("Inst ID = ",addPaymentStore.inst_id);

    },  


    getSelectInstallmentValue(selected_inst_data){
            addPaymentStore.inst_id = selected_inst_data.auction_no; // cause it gets called off directly sometimes
            var total_without_interest = (
                  (selected_inst_data.installment_value - selected_inst_data.dividend)
                - (selected_inst_data.total_paid - selected_inst_data.advance_paid) 
            );
            
            var total = total_without_interest + selected_inst_data.interest;

            selected_inst_data["total_without_interest"] = total_without_interest;
            selected_inst_data["total"] = total;

            return selected_inst_data;
    },


    setGroupId(group_id){
        addPaymentStore.group_id = group_id;
        if(!isEmpty(addPaymentStore.ticket_no)){
            addPaymentStore.getGroupCustomerData();
        }
    },

    setTicketNo(ticket){
        if(parseInt(ticket)<0){
            return;
        }
        addPaymentStore.ticket_no = ticket;
        if(!isEmpty(addPaymentStore.group_id)){
            addPaymentStore.getGroupCustomerData();
        }
    },

    getGroupCustomerData(){
        //console.log("Getting group customer");

        if(addPaymentStore.unsubscribe!==null){
            addPaymentStore.unsubscribe();
            addPaymentStore.unsubscribe = null;
        }

        addPaymentStore.isLoading = true;

        addPaymentStore.clearAll();

        var id = addPaymentStore.group_id + "-" + addPaymentStore.ticket_no;
        var ref = firebase.firestore().collection(CollectionNames.groupCustomer).doc(id);

        addPaymentStore.getInstallmentData(addPaymentStore.group_id,addPaymentStore.ticket_no);

        addPaymentStore.unsubscribe = ref.onSnapshot((doc)=>{
            if(!doc.exists){
                addPaymentStore.clearAll();
                addPaymentStore.groupCustData = null;
                addPaymentStore.installment_data = [];
                addPaymentStore.inst_stats = null;
                addPaymentStore.isLoading = false;
                return;
            }
            addPaymentStore.groupCustData = doc.data();
            addPaymentStore.isLoading = false;
        },(e)=>{
            console.error(e);
            console.log("Customer not found");
            addPaymentStore.isLoading = false;
            addPaymentStore.installment_data = [];
            addPaymentStore.groupCustData = null;
            addPaymentStore.inst_stats = null;
        })
    },

    getInstallmentData(group_id,ticket_no){
        if(addPaymentStore.inst_unsubscribe!==null){
            addPaymentStore.inst_unsubscribe();
            addPaymentStore.inst_unsubscribe = null;
        }

        var query = firebase.firestore().collection(CollectionNames.installment)
                                        .where("group_id","==",group_id)
                                        .where("ticket_no","==",ticket_no)
                                        .orderBy("generated_date","desc");
        
        return query.onSnapshot((snap)=>{
            addPaymentStore.installment_data = [];
            snap.forEach((doc)=>{
                addPaymentStore.installment_data.push(doc.data());
            });
            console.log("Installment Data = ",addPaymentStore.installment_data[0]);
            if(addPaymentStore.installment_data.length>0){
                var firstElement = addPaymentStore.installment_data[0];
                addPaymentStore.inst_stats = addPaymentStore.getSelectInstallmentValue(firstElement);
            }
        },(e)=>{
            console.error(e);
        })
    },


    clearAll(){
        addPaymentStore.installment_data = [];
        addPaymentStore.inst_stats = null;
        addPaymentStore.inst_id = null;
        addPaymentStore.groupCustData = null;
        addPaymentStore.waive_interest = false;
        addPaymentStore.total_paid = 0;
        addPaymentStore.payment_method = "";
        addPaymentStore.cheque_no = "";
        addPaymentStore.cheque_date = "";
        addPaymentStore.cheque_status = "";
        addPaymentStore.neft_no = "";
        addPaymentStore.neft_details = "";
        addPaymentStore.comments = "";
        addPaymentStore.manual_receipt_date = "";
        addPaymentStore.manual_receipt_no = "";

    }

});



export default addPaymentStore;