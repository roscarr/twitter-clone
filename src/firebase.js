import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDA0CQV9b_q3GomtqxCa-4UdaDsVg5PiOM",
  authDomain: "twitter-clone-b8a11.firebaseapp.com",
  projectId: "twitter-clone-b8a11",
  storageBucket: "twitter-clone-b8a11.appspot.com",
  messagingSenderId: "9085804763",
  appId: "1:9085804763:web:a3931ee5279276fe0a6cfe"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const db=app.firestore()

export default db