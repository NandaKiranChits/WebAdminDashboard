import firebase from '../util/firebase';
import CollectionNames from '../util/CollectionNames';
import { store } from '@risingstack/react-easy-state';

const GroupListStore = store({
    isLoading : false,
    isError : false,
    errorDetails : null,

    groupData : [],

    getGroupData(){
        GroupListStore.isLoading = true;

        var dbRef = firebase.firestore().collection(CollectionNames.group).orderBy("createDate");

        return dbRef.onSnapshot((snap)=>{
            var data = [];
            snap.forEach((doc)=>{
                data.push(doc.data());
            })
            GroupListStore.groupData = data;
            GroupListStore.isLoading = false;
            GroupListStore.isError = false;
            GroupListStore.errorDetails = null;
        },(err)=>{
            console.error(err);
            GroupListStore.isLoading = false;
            GroupListStore.isError = true;
            GroupListStore.errorDetails = err.message;
        })
    
    }
})  

export default GroupListStore;