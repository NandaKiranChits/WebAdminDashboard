import {store} from '@risingstack/react-easy-state';
import collectionNames from '../util/CollectionNames';
import firebase from '../util/firebase';
import isEmpty from '../util/isEmpty';
import getEmptyVariablesOfObject from '../util/getEmptyVariablesOfObject';

const addMemberStore = store({
    isLoading : false,

    customer_id : "",
    name : "",
    phone : "",
    email : "",
    no_of_tickets : "",

    group_id : "",
    ticket_no : "",

    customerData : null,

    setCustomerID(customer_id){
        if(isEmpty(customer_id)){
            addMemberStore.customer_id = customer_id;
            return;
        }
        addMemberStore.customer_id = customer_id;
        var custRef = firebase.firestore().collection(collectionNames.customer).doc(customer_id);

        return custRef.get(customer_id).then((doc)=>{
            if(!doc.exists){
                throw new Error("Doesnt exist");
            }
            var custData = doc.data();
            addMemberStore.name = custData.name;
            addMemberStore.phone = custData.phone;
            addMemberStore.email = custData.email;
            addMemberStore.no_of_tickets = custData.no_of_tickets;
            addMemberStore.customerData = custData;
        }).catch((err)=>{
            console.error(err);
            addMemberStore.name = "";
            addMemberStore.phone = "";
            addMemberStore.email = "";
            addMemberStore.no_of_tickets = "";
            addMemberStore.customerData = null;
        })
    },


    addMemberToGroup(){
        if(addMemberStore.customerData===null){
            window.alert("Please Select A valid customer");
            return;
        }

        addMemberStore.isLoading = true;

        var groupCustomerData = {
            DOB : addMemberStore.customerData.dob.toDate(),
            account_balance : 0,
            createDate : new Date(),
            cust_id : addMemberStore.customer_id,
            email : addMemberStore.customerData.email,
            father_husband_name : addMemberStore.customerData.father_husband_name,
            group_id : addMemberStore.group_id,
            lean_details : {
                isLean : false,
                leanReason : null,
            },
            name : addMemberStore.customerData.name,
            phone : addMemberStore.customerData.phone,
            prizedInstallment : null,
            removal_details : {
                removed : false,
                removed_date : null,
                removed_reason : null,
            },
            status : "NonPrized",
            ticket_no : addMemberStore.ticket_no,
            total_amount_paid : 0,
        };

        var emptyFields = getEmptyVariablesOfObject(groupCustomerData);

        if(emptyFields.includes("group_id") ||
           emptyFields.includes("ticket_no")
        ){
            window.alert("Please Enter ",emptyFields.pop());
            return;
        }

        var doc_id = groupCustomerData.group_id + "-" + groupCustomerData.ticket_no;
        var groupCustomerRef = firebase.firestore().collection(collectionNames.groupCustomer).doc(doc_id);
        var groupRef = firebase.firestore().collection(collectionNames.group).doc(groupCustomerData.group_id);

        return groupRef.get().then((doc)=>{
        
            if(!doc.exists){
                window.alert("group Doesnt Exist");
                return;
            }
            var groupData = doc.data();
            if(groupData.no_of_months===groupData.occupied_members){
                window.alert("Group is Fulll");
                return;
            }
        return firebase.firestore().runTransaction((transaction)=>{
            return transaction.get(groupCustomerRef).then((doc)=>{
                if(doc.exists){
                    throw new Error("Member with ticket already exists");
                }
                transaction.set(groupCustomerRef,groupCustomerData);
            })
        }).then(()=>{
            window.alert("Member added to group Succesfully");
            addMemberStore.isLoading = false;
            addMemberStore.setCustomerID("");
            addMemberStore.group_id = "";
            addMemberStore.ticket_no = "";
            return;
        }).catch((err)=>{
            console.error(err);
            addMemberStore.isLoading = false;
            window.alert(err.message);
        })
        
    }).catch((err)=>{console.error(err);addMemberStore.isLoading =false;})
    }





})

export default addMemberStore;