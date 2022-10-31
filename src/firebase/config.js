import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDH5EBL3B6tVaPhlhIeLPUDnIH7LUSxIZM",
    authDomain: "ecommercesite-80fcc.firebaseapp.com",
    projectId: "ecommercesite-80fcc",
    storageBucket: "ecommercesite-80fcc.appspot.com",
    messagingSenderId: "222550573209",
    appId: "1:222550573209:web:956954815cd43cd40df808"
  };

  // init firebase 

  firebase.initializeApp(firebaseConfig)

  // init services 

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  // timestamp

  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore, projectAuth, timestamp}