import {store} from '@risingstack/react-easy-state';
import getEmptyVariablesOfObject from '../util/getEmptyVariablesOfObject';
import collectionNames from '../util/CollectionNames';
import firebase from '../util/firebase';

const addCustomerStore = store({
    isLoading : false,

    name : "",
    father_husband_name : "",
    dob : null,

    phone : "",
    phone2 : "",
    email : "",
    address : "",

    nominee_name : "",
    nominee_relationship : "",
    nominee_phone : "",

    bank_name : "",
    ifsc : "",
    account_no : "",


    aadhar_no : "",
    pan_no : "",
    gst : "",
    income_pa : "",


    addCustomer(){
        addCustomerStore.isLoading = true;

        var customerData = {
            id :  addCustomerStore.phone,

            name : addCustomerStore.name,
            father_husband_name : addCustomerStore.father_husband_name,
            dob : new Date(addCustomerStore.dob),

            phone : addCustomerStore.phone,
            phone2 : addCustomerStore.phone2,
            email  : addCustomerStore.email,
            address : addCustomerStore.address,

            nominee_name : addCustomerStore.nominee_name,
            nominee_relationship : addCustomerStore.nominee_relationship,
            nominee_phone : addCustomerStore.nominee_phone,

            bank_name : addCustomerStore.bank_name,
            ifsc : addCustomerStore.ifsc,
            account_no : addCustomerStore.account_no,


            aadhar_no : addCustomerStore.aadhar_no,
            pan_no : addCustomerStore.pan_no,
            gst : addCustomerStore.gst,
            income_pa : addCustomerStore.income_pa,

            no_of_tickets : 0,

            createDate : new Date(),
        };

        var emptyFields = getEmptyVariablesOfObject(customerData);

        if(emptyFields.includes("name") || emptyFields.includes("phone")){
            window.alert("Please fill field ",emptyFields.pop());
            return;
        }

        var idQuery = firebase.firestore()
                              .collection(collectionNames.customer)
                              .doc(customerData.phone)

        return firebase.firestore().runTransaction((transaction)=>{
            return transaction.get(idQuery).then((doc)=>{

                if(doc.exists){
                    throw new Error("Customer With Phone Already Exists");
                }

                var newCustomerRef = firebase.firestore()
                                             .collection(collectionNames.customer)
                                             .doc(customerData.phone);

                transaction.set(newCustomerRef,customerData);

                return;
            })
        }).then(()=>{
            console.log("Customer Added Succesfully");
            window.alert("Customer Added Succesfully");
            addCustomerStore.isLoading = false;
            return;
        }).catch((err)=>{
            console.error(err);
            addCustomerStore.isLoading = false;
            window.alert(err.message);
        });
    }



})

export default addCustomerStore;