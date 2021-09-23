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


    selected_ticket_no : null,
    selected_group_id : null,
    view_installments_data : [],
    view_payments_data : [],


    sortData(){
        if(isEmpty(custProfileStore.selected_ticket_no) || isEmpty(custProfileStore.selected_group_id)){
            custProfileStore.view_installments_data = custProfileStore.installments_data;
            custProfileStore.view_payments_data = custProfileStore.payments_data;
            return;
        }

        console.log("Installment Data = ",custProfileStore.installments_data);
        console.log("Payments dAta  =",custProfileStore.payments_data);

        custProfileStore.view_installments_data = custProfileStore.getFiltered(custProfileStore.installments_data,custProfileStore.selected_ticket_no,custProfileStore.selected_group_id);
        custProfileStore.view_payments_data = custProfileStore.getFiltered(custProfileStore.payments_data,custProfileStore.selected_ticket_no,custProfileStore.selected_group_id);
    },

    getFiltered(data,ticket_no,group_id){
        var temp = [];
        console.log("Got data = ",data);
        data.forEach((doc)=>{
            if(doc["group_id"]===group_id && doc["ticket_no"].toString()===ticket_no.toString()){
                temp.push(doc);
            } 
        })
        return temp;
    },


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
            if(customerID!==null)
            {
                custProfileStore.getDataUsingCustomerID(customerID);
                custProfileStore.isLoading = false;
            }
            
        }).catch((err)=>{
            console.error(err);
            window.alert(err.message);
            custProfileStore.isLoading = false;
        })
        
    },


    getDataUsingCustomerID(customerID){
        custProfileStore.getCustomerData(customerID);
        custProfileStore.getTicketsData(customerID);
        custProfileStore.getAuctionData(customerID);
        custProfileStore.getInstallmentData(customerID);
        custProfileStore.getPaymentData(customerID);
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
        let query = firebase.firestore().collection(CollectionNames.installment).where("cust_id","==",customer_id).orderBy("auction_no");

        return query.get().then((snap)=>{
            let installmentData = [];
            snap.forEach((doc)=>{
                installmentData.push(doc.data());
            })
            custProfileStore.installments_data = installmentData;
            custProfileStore.view_installments_data = installmentData;
        }).catch((err)=>{
            console.error(err);
            custProfileStore.installments_data = [];
            custProfileStore.view_installments_data = [];
        })
    },


    getPaymentData(customer_id){
        let query = firebase.firestore().collection(CollectionNames.payments)
                                        .where("cust_details.cust_id","==",customer_id)
                                        .orderBy("payment_id");

        return query.get().then((snap)=>{
            let paymentData = [];
            snap.forEach((doc)=>{
                paymentData.push(doc.data());
            })
            custProfileStore.payments_data = paymentData;
            custProfileStore.view_payments_data = paymentData;
        }).catch((err)=>{
            console.error(err);
            custProfileStore.payments_data = [];
            custProfileStore.view_payments_data = [];
        })
    },


    async generateIntimationLetter(customer_id,group_id,ticket_no){
        try{
            custProfileStore.isLoading = true;
            var customerData = await getCustomerData(customer_id);
            var nextAuctData = await getNextAuctionData(group_id);
            var latestArrearInstallmentData = await getLatestArrearInstallmentData(group_id,ticket_no);
            var allArrearInstallmentData = await getAllArrearInstallments(group_id,ticket_no);

            console.log("Got data. Customer Data = ",customerData," nextAuctData = ",nextAuctData," latestArrearInstallmentData = ",latestArrearInstallmentData," allArrearInstallmentData = ",allArrearInstallmentData);

            openInitmationLetterPage(group_id,ticket_no,customerData,nextAuctData,latestArrearInstallmentData,allArrearInstallmentData)
            custProfileStore.isLoading = false;
        }   
        catch(e){
            custProfileStore.isLoading = false;
            console.error(e);
        }
    }
});

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

async function openInitmationLetterPage(group_id,ticket_no,customerData,nextAuctData,latestArrearInstallmentData,allArrearInstallmentData){
    var totalArrears = 0;

    allArrearInstallmentData.forEach((doc)=>{
        totalArrears += (doc["installment_value"] - doc["total_paid"] );
    })
    
    window.open(`http://nandakiranchits.com/IntimationLetter/index.html`+
                `?groupId=${group_id}` +
                `&ticketId=${ticket_no}` +
	            `&custName=${customerData["name"]}` +
	            `&custAddress=${customerData["address"].replace("#","")}` +
	            `&custPhone=${customerData["phone"]}` +
	            `&chitValue=${nextAuctData["chit_value"]}` +
	            `&bidAmount=0` +
	            `&dividend=0` +
	            `&auctionDate=${nextAuctData["date_and_time"].toDate().toDateString()}` +
	            `&auctionTime=${formatAMPM(nextAuctData["date_and_time"].toDate())}` +
    	        `&lastDueInstallmentNo=${latestArrearInstallmentData!=null?(latestArrearInstallmentData["auction_no"]-1):""}` +
	            `&lastDueInstallmentMonth=${latestArrearInstallmentData!=null?latestArrearInstallmentData["due_date"].toDate().getMonth()+"-"+latestArrearInstallmentData["due_date"].toDate().getFullYear():"None"}` +
	            `&currentArrears=${latestArrearInstallmentData!=null?latestArrearInstallmentData["installment_value"]-latestArrearInstallmentData["total_paid"]:0}` +
	            `&arrears=${totalArrears-(latestArrearInstallmentData!=null?latestArrearInstallmentData["installment_value"]-latestArrearInstallmentData["total_paid"]:0)}`,"_blank");
}

async function getCustomerData(customer_id){
    console.log("GetCustomerData customer_id = ",customer_id);
    let custQuery = firebase.firestore().collection(CollectionNames.customer).doc(customer_id);
    return custQuery.get().then((doc)=>{
        if(!doc.exists){
            console.log("Customer not found");
            throw new Error("Customer not found");
        }
        return doc.data();
    });
}

async function getNextAuctionData(group_id){
    let nextAuction = firebase.firestore().collection(CollectionNames.auction)
                                          .where("group_id","==",group_id)
                                          .where("status","==","pending")
                                          .limit(1);
    return nextAuction.get().then((snap)=>{
        if(snap.size===0){
            console.log("Next Auction not found");
            throw new Error("Next Auction not found");
        }

        var nextAuctionData = snap.docs[0].data();
        return nextAuctionData;
    });
}


async function getLatestArrearInstallmentData(group_id,ticket_no){
    let latestArrearInstallment = firebase.firestore().collection(CollectionNames.installment)
                                                        .where("group_id","==",group_id)
                                                        .where("ticket_no","==",ticket_no)
                                                        .where("status","in",["due","part"])
                                                        .orderBy("auction_no","desc")
                                                        .limit(1);
    return latestArrearInstallment.get().then((snap)=>{
        if(snap.size===0){
            return null;
        }
        var latestArrearInstallmentData = snap.docs[0].data();
        return latestArrearInstallmentData;
    });

}


async function getAllArrearInstallments(group_id,ticket_no){
    let allArrearInstallment = firebase.firestore().collection(CollectionNames.installment)
                                                    .where("group_id","==",group_id)
                                                    .where("ticket_no","==",ticket_no)
                                                    .where("status","in",["part","due"]);

    return allArrearInstallment.get().then((snap)=>{
            var allArrearInstallmentData = [];
            snap.forEach((doc)=>{
                allArrearInstallmentData.push(doc.data());
            })
            return allArrearInstallmentData;
    }).catch((err)=>{
        console.error(err);
        return {status:"failure",message:err.message};
    });

}
export default custProfileStore;