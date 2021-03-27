import {store} from '@risingstack/react-easy-state';
import firebase from '../util/firebase';
import CollectionNames from '../util/CollectionNames';

const collectionStore = store({
    isLoading : false,

    start_date : null,
    end_date : null,

    unsubscribe : null,

    data : [],

    todays_data : {cash:0,neft:0,cheque:0,date:new Date()},
    got_todays_data : false,
    

    getTodaysData(){

        if(collectionStore.got_todays_data){
            return;
        }

        collectionStore.got_todays_data = true;
        let today = new Date();

        var docRef = firebase.firestore().collection(CollectionNames.dailyCollection)
                                         .doc(collectionStore.getID(today));

        collectionStore.todays_unsubscribe = docRef.onSnapshot((doc)=>{
            if(!doc.exists){
                window.alert("Todays Data Doesnt Exist");
                return;
            }

            let temp = doc.data();
            temp["date"] = temp.date.toDate();
            collectionStore.todays_data = temp;
            return;
        },(err)=>{
            console.error(err);
            window.alert(err.message);
            return;
        })
    },
    

    setStartDate(date){
        if(date===null || date===undefined){
            window.alert("Invalid Date");
            return;
        }

        collectionStore.start_date = new Date(date);
        
        if(collectionStore.end_date!==null){
            collectionStore.getCustomData();
        }
    },

    setEndDate(date){
        if(date===null || date===undefined){
            window.alert("Invalid Date");
            return;
        }

        collectionStore.end_date = new Date(date);
        
        if(collectionStore.start_date!==null){
            collectionStore.getCustomData();
        }
    },  

    getCustomData(){
        if(collectionStore.start_date===null || collectionStore.end_date===null){
            return;
        }

        if(collectionStore.unsubscribe!==null){
            collectionStore.unsubscribe();
        }

        collectionStore.start_date.setHours(0,0,0,0);
        collectionStore.end_date.setHours(0,0,0,0);

        collectionStore.isLoading = true;
        var query = firebase.firestore().collection(CollectionNames.dailyCollection)
                                        .where("date",">=",collectionStore.start_date)
                                        .where("date","<=",collectionStore.end_date)
                                        .orderBy("date","desc");

        
        collectionStore.unsubscribe = query.onSnapshot((snap)=>{
            collectionStore.data = [];
            snap.forEach((doc)=>{
                let temp = doc.data();
                temp["date"] = temp.date.toDate().toLocaleDateString();
                collectionStore.data.push(temp);
            });
            collectionStore.isLoading = false;
        },(e)=>{
            console.error(e);
            window.alert(e.message);
        })  
    },


    getID(date){
         return (date.getDate()+"."+(date.getMonth()+1)+"."+(date.getFullYear()));
    }

})      

export default collectionStore;