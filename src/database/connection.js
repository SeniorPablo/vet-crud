import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAhJg0g4bU1cxeWlGlu_fWqu3b8iVB6baQ",
    authDomain: "vet-crud.firebaseapp.com",
    projectId: "vet-crud",
    storageBucket: "vet-crud.appspot.com",
    messagingSenderId: "370109714046",
    appId: "1:370109714046:web:a9be7353775d134657122f"
}

export const connection = firebase.initializeApp(firebaseConfig)