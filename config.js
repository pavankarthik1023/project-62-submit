 import firebase from 'firebase';
 
 
const firebaseConfig = {
  apiKey: "AIzaSyAEhK0iyqY3Pd2tBvQDU3gNehsXS3RUuug",
  authDomain: "attendance-app-aa544.firebaseapp.com",
  databaseURL: "https://attendance-app-aa544.firebaseio.com",
  projectId: "attendance-app-aa544",
  storageBucket: "attendance-app-aa544.appspot.com",
  messagingSenderId: "673342764075",
  appId: "1:673342764075:web:c12ce07ceae58ce4bde66e"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();