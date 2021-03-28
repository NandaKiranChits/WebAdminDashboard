
import { store } from '@risingstack/react-easy-state';
import getEmptyVariablesOfObject from "../util/getEmptyVariablesOfObject";
import firebase from '../util/firebase';
import CollectionNames from '../util/CollectionNames';

const addGroupStore = store({
    isLoading : false,

    group_name : "",
    start_date : new Date(),
    end_date : "",
    no_of_months : "",
    monthly_subscription : "",
    group_value : "",

    first_auction_date : "",
    min_bid : "",
    max_bid : "",
    foreman_commission : "",
    company_chit_exists : true,
    company_chit_no : "",
    first_auction_is_company_auction :true,

    prizedInterestRate : "",
    nonPrizedInterestRate : "",
    interestStartsAfterHowManyDays : 15,

    pso_no : "",
    pso_date : "",

    cc_no  :"",
    cc_date : "",

    deposit_cert_no : "",
    deposit_amount : "",
    deposit_date : "",
    deposit_bank : "",
    rate_of_interest:  "",

    addNewGroup(){
        addGroupStore.isLoading = true;

        const groupData = {
            group_name : addGroupStore.group_name,
            start_date : new Date(addGroupStore.start_date),
            end_date : new Date(addGroupStore.end_date),
            no_of_months : addGroupStore.no_of_months,
            monthly_subscription : addGroupStore.monthly_subscription,
            group_value : addGroupStore.group_value,

            first_auction_date : new Date(addGroupStore.first_auction_date),
            min_bid : addGroupStore.min_bid,
            max_bid : addGroupStore.max_bid,
            foreman_commission : addGroupStore.foreman_commission,
            company_chit_exists : addGroupStore.company_chit_exists,
            company_chit_no : addGroupStore.company_chit_no,
            first_auction_is_company_auction : addGroupStore.first_auction_is_company_auction,

            prizedInterestRate : addGroupStore.prizedInterestRate,
            nonPrizedInterestRate : addGroupStore.nonPrizedInterestRate,
            interestStartsAfterHowManyDays : addGroupStore.interestStartsAfterHowManyDays,

            pso_no : addGroupStore.pso_no,
            pso_date : new Date(addGroupStore.pso_date),

            cc_no : addGroupStore.cc_no,
            cc_date : new Date(addGroupStore.cc_date),

            deposit_cert_no : addGroupStore.deposit_cert_no,
            deposit_amount : addGroupStore.deposit_amount,
            deposit_date : new Date(addGroupStore.deposit_date),
            deposit_bank : addGroupStore.deposit_bank,
            rate_of_interest : addGroupStore.rate_of_interest,

            total_members : addGroupStore.no_of_months,
            occupied_members : 0,

            no_of_auctions_completed : 0,

            createDate : new Date(),
        };

        var emptyFields = getEmptyVariablesOfObject(groupData);

        if(groupData.company_chit_exists && emptyFields.includes(groupData.company_chit_no)){
            console.log("Please Enter Chit No.");
            window.alert("Please Enter Chit No.");
            addGroupStore.isLoading  = false;
            return;
        }

        if(
            emptyFields.includes("group_name")           ||
            emptyFields.includes("start_date")           ||
            emptyFields.includes("end_date")             ||
            emptyFields.includes("no_of_months")         ||
            emptyFields.includes("monthly_subscription") ||  
            emptyFields.includes("group_value")          ||
            emptyFields.includes("first_auction_date")   ||
            emptyFields.includes("min_bid")              ||
            emptyFields.includes("max_bid")              ||
            emptyFields.includes("foreman_comission")    ||
            emptyFields.includes("company_chit_exists")  ||
            emptyFields.includes("first_auction_is_company_auction") ||
            emptyFields.includes("prizedInterestRate")   ||
            emptyFields.includes("nonPrizedInterestRate") || 
            emptyFields.includes("interestStartsAfterHowManyDays") 
        ){
            window.alert("Please fill this field",emptyFields.pop());
            addGroupStore.isLoading  = false;
            return;
        }

        var db = firebase.firestore();

        var dbRef = db.collection(CollectionNames.group).doc(groupData.group_name);

        return db.runTransaction((transaction)=>{
            return transaction.get(dbRef).then((doc)=>{
                if(doc.exists){
                    window.alert("The group name already exists");
                    throw new Error("Group Name Already Exists");
                }
                transaction.set(dbRef,groupData);
            })
        }).then(()=>{
            console.log("The group has been added succesfully");
            window.alert("Group Added Succesfully");
            addGroupStore.isLoading  = false;
            addGroupStore.clearAll();
            return;
        })
        .catch((err)=>{
            console.error(err);
            addGroupStore.isLoading  = false;
            window.alert(err.message);
        })
    },


    clearAll(){

    addGroupStore.group_name = "";
    addGroupStore.start_date = new Date();
    addGroupStore.end_date = "";
    addGroupStore.no_of_months = "";
    addGroupStore.monthly_subscription = "";
    addGroupStore.group_value = "";

    addGroupStore.first_auction_date = "";
    addGroupStore.min_bid = "";
    addGroupStore.max_bid = "";
    addGroupStore.foreman_commission = "";
    addGroupStore.company_chit_exists = true;
    addGroupStore.company_chit_no = "";
    addGroupStore.first_auction_is_company_auction  = true;

    addGroupStore.prizedInterestRate = "";
    addGroupStore.nonPrizedInterestRate = "";
    addGroupStore.interestStartsAfterHowManyDays = 15;

    addGroupStore.pso_no = "";
    addGroupStore.pso_date = "";

    addGroupStore.cc_no  = "";
    addGroupStore.cc_date = "";

    addGroupStore.deposit_cert_no = "";
    addGroupStore.deposit_amount = "";
    addGroupStore.deposit_date = "";
    addGroupStore.deposit_bank = "";
    addGroupStore.rate_of_interest = "";
    }
})

export default addGroupStore;