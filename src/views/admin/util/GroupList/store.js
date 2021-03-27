import {store} from '@risingstack/react-easy-state';
import CollectionNames from '../CollectionNames'
import firebase from '../firebase';

const groupStore = store({
    isLoading : false,

    group_list : [],

    getGroupData(){
        groupStore.isLoading = true;
        var groupRef = firebase.firestore().collection(CollectionNames.group);

        return groupRef.onSnapshot((snap)=>{
            groupStore.group_list  = [];
            snap.forEach((doc)=>{
                groupStore.group_list.push(doc.data());
            });
            groupStore.isLoading = false;
            console.log("Group List Data = ",groupStore.group_list);
        },(e)=>{
            console.error(e);
            groupStore.isLoading = false;
        })
    }
})

export default groupStore;