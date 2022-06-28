import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyByyuxO6pORPzjMBwx1jaCuy3dfmu_R-ms",
  authDomain: "project-managment-site.firebaseapp.com",
  projectId: "project-managment-site",
  storageBucket: "project-managment-site.appspot.com",
  messagingSenderId: "1082582425933",
  appId: "1:1082582425933:web:413789ed8b1695d5305704"
};


//init firebase
firebase.initializeApp(firebaseConfig)

//init servicess
const projectFirestore=firebase.firestore()
const projectAuth=firebase.auth()
const projectStorage=firebase.storage()
//firebase timestamp
const timeStamp=firebase.firestore.Timestamp

export {projectFirestore,projectAuth,projectStorage,timeStamp}