import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBeCEUxfhu8_6E7YQaufR45E8IQoHnQUck",
  authDomain: "nft-analytics-e4789.firebaseapp.com",
  projectId: "nft-analytics-e4789",
  storageBucket: "nft-analytics-e4789.appspot.com",
  messagingSenderId: "995047004208",
  appId: "1:995047004208:web:97195d6eeedd800fd7f5f5"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;