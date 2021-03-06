import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxnYp-6cm6aJEZv5nSbvIE_kMY6iEg94E",
  authDomain: "react-native-4a40f.firebaseapp.com",
  projectId: "react-native-4a40f",
  storageBucket: "react-native-4a40f.appspot.com",
  messagingSenderId: "152408935909",
  appId: "1:152408935909:web:5192785594de20cdd2730c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };