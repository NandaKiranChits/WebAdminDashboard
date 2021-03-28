import {store} from '@risingstack/react-easy-state';
import firebase from '../../util/firebase';
import isEmpty from '../../util/isEmpty';
import CollectionNames from '../../util/CollectionNames';

const custProfileStore = store({    
    isLoading  : false,

    group_id : "",
    ticket_no : "",

    customer_data : null,

    groupCustomerData : [],

    auction_data : [],
    installments_data : [],
    payments_data : [],


    setGroupID(group_id){
        custProfileStore.group_id = group_id;
        
        if(!isEmpty(custProfileStore.ticket_no)){
            custProfileStore.getAllData();
        }
    },

    setTicketNo(ticket_no){
        custProfileStore.ticket_no = ticket_no;

        if(!isEmpty(custProfileStore.group_id)){
            custProfileStore.getAllData();
        }   
    },

    async getAllData(){

        if(isEmpty(custProfileStore.group_id) || isEmpty(custProfileStore.ticket_no)){
            custProfileStore.customer_data = null;
            return;
        }

        custProfileStore.isLoading = true;

        return custProfileStore.getCurrentTicketData().then((firstTicket)=>{
            if(firstTicket===-1){
                return;
            }
            let customerID = firstTicket["cust_id"];
            if(customerID===undefined) { // IMP company customer id will be null
                window.alert("Invalid Customer ID");
                custProfileStore.isLoading = false;
                return;
            }
            if(customerID!==null)custProfileStore.getCustomerData(customerID);
            custProfileStore.getTicketsData(customerID);
            custProfileStore.getAuctionData(customerID);
            custProfileStore.getInstallmentData(customerID);
            custProfileStore.getPaymentData(customerID);
            custProfileStore.isLoading = false;
            
        }).catch((err)=>{
            console.error(err);
            window.alert(err.message);
            custProfileStore.isLoading = false;
        })
        
    },

    getCurrentTicketData(){
        
        var groupCustDocumentID = custProfileStore.group_id + "-" + custProfileStore.ticket_no;
        var docRef = firebase.firestore().collection(CollectionNames.groupCustomer).doc(groupCustDocumentID);

        return docRef.get().then((doc)=>{
            if(!doc.exists){
                window.alert("Ticket Doesnt Exist");
                return -1;
            }
            return doc.data();
        }).catch((err)=>{
            window.alert(err.message);
            return -1;
        })
        
    },

    getCustomerData(customer_id){
       
        
        var documentRef = firebase.firestore().collection(CollectionNames.customer).doc(customer_id);

        return documentRef.get().then((doc)=>{
            if(!doc.exists){
                window.alert("Customer Data Doesnt exist");
                return;
            }
            custProfileStore.customer_data = doc.data();
        }).catch((err)=>{
            console.error(err);
            custProfileStore.customer_data = null;
            return;
        })
    
    },

    getTicketsData(customer_id){
        

        let ticketQuery = firebase.firestore()
                                  .collection(CollectionNames.groupCustomer)
                                  .where("cust_id","==",customer_id)
                                  .orderBy("createDate","desc");

        return ticketQuery.get().then((snap)=>{
            let ticketData = [];
            snap.forEach((doc)=>{
                ticketData.push(doc.data());
            })
            custProfileStore.groupCustomerData = ticketData;
        }).catch((err)=>{
            window.alert("Failed while fetching Tickets ",err.message);
            custProfileStore.groupCustomerData = [];
            console.error(err);
        })
        
    },

    getAuctionData(customer_id){
        
        let auctionRef = firebase.firestore()
                                 .collection(CollectionNames.auction)
                                 .where("bidder_details.cust_id","==",customer_id);
        
        return auctionRef.get().then((snap)=>{
            let auctionData = [];
            snap.forEach((doc)=>{
                var auctData = doc.data();
                if(auctData.bidder_details.ticket_id!==null){
                    auctionData.push(doc.data());
                }
            })
            custProfileStore.auction_data = auctionData;
        }).catch((err)=>{
            console.error(err);
            custProfileStore.auction_data = [];
        })
    },

    getInstallmentData(customer_id){
        let query = firebase.firestore().collection(CollectionNames.installment).where("cust_id","==",customer_id);

        return query.get().then((snap)=>{
            let installmentData = [];
            snap.forEach((doc)=>{
                installmentData.push(doc.data());
            })
            custProfileStore.installments_data = installmentData;
        }).catch((err)=>{
            console.error(err);
            custProfileStore.installments_data = [];
        })
    },


    getPaymentData(customer_id){
        let query = firebase.firestore().collection(CollectionNames.payments).where("cust_details.cust_id","==",customer_id);

        return query.get().then((snap)=>{
            let paymentData = [];
            snap.forEach((doc)=>{
                paymentData.push(doc.data());
            })
            custProfileStore.payments_data = paymentData;
        }).catch((err)=>{
            console.error(err);
            custProfileStore.payments_data = [];
        })
    }
})


export default custProfileStore;