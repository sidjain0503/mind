import {initializeApp} from 'firebase/app'
import {getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"; 




const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESS_SEND_ID}`,
  appId: `${process.env.REACT_APP_API_ID}`
};

// Initialize firebase 
const app = initializeApp(firebaseConfig);

var authentication = getAuth(app);
const db = getFirestore(app);

export {authentication,db};
