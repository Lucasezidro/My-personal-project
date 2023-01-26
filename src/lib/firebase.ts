import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDTJCDR3kBQCVVk0R6ihG4lLF9pRZ8as2A",
    authDomain: "my-personal-project-4aa90.firebaseapp.com",
    projectId: "my-personal-project-4aa90",
    storageBucket: "my-personal-project-4aa90.appspot.com",
    messagingSenderId: "956935418055",
    appId: "1:956935418055:web:5bf6a1d7cf12118874cee2"
  };

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export { auth, firebase }
