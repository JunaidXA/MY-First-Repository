import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers';
import { initializeApp } from 'firebase/app';
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth';
import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc 
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyByRAvcijwHU9c7sFLZ9mXuy554DK6aHJ0",
    authDomain: "crwn-clothing-db-5e3d9.firebaseapp.com",
    projectId: "crwn-clothing-db-5e3d9",
    storageBucket: "crwn-clothing-db-5e3d9.appspot.com",
    messagingSenderId: "226608501262",
    appId: "1:226608501262:web:cdf101703a59a01b84225f"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  provider.getCustomParameters({
    prompt: 'Select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
