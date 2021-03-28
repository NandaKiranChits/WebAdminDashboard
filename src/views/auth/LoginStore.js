import {store} from '@risingstack/react-easy-state';
import isEmpty from '../admin/util/isEmpty';
import firebase from '../admin/util/firebase';

const LoginStore = store({
    isLoading : false,

    email : "",
    password : "",

    isLoggedIn : false,

    authListener(){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                LoginStore.isLoading = false;
                LoginStore.isLoggedIn = true;
            } else {
              // No user is signed in.
                LoginStore.isLoading = false;
                LoginStore.isLoggedIn = false;
            }
          });
    },

    

    login(){
        if(isEmpty(LoginStore.email) || isEmpty(LoginStore.password)){
            window.alert("Please Enter Email and Password");
            return;
        }
        LoginStore.isLoading = true;
        LoginStore.authListener();
        return firebase.auth().signInWithEmailAndPassword(LoginStore.email, LoginStore.password)
        .then((userCredential) => {
          // Signed in
            var user = userCredential.user;
            console.log("User = ",user);
           LoginStore.isLoading = false;
          // ...
        })
        .catch((error) => {
          LoginStore.isLoggedIn = false;
          LoginStore.isLoading = false;
          window.alert(error.message);
        });
    },

    signout(){
        if(!LoginStore.isLoggedIn){
            window.alert("Already Logged Out");
            return;
        }
        return firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log("Succcesfull signout");
          }).catch((error) => {
            // An error happened.
            console.log(error.message);
            window.alert(error.message);
          });
    }
})

export default LoginStore;