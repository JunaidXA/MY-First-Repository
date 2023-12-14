import { initializeApp } from 'firebase/app';  // yaha firebase ko chalya gya hai ta k firebase data ko pata chal sakay
import {  // yaha firebase app se library ko import kiya gya hai authication or authorized karne k liye
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
  // yaha kuch or library ko import kiya gya hai takay document set kar sakay get kar sakay 
import { getFirestore, doc, getDoc, setDoc, Firestore } from 'firebase/firestore';

const firebaseConfig = { // yaha firebase app ko cinfig kiya gya hai 
  apiKey: "AIzaSyBMF6A_EXLmWWol2XloIt7Nqqro1A3Gj2Q",
  authDomain: "crwn-clothing-db-ab2ea.firebaseapp.com",
  projectId: "crwn-clothing-db-ab2ea",
  storageBucket: "crwn-clothing-db-ab2ea.appspot.com",
  messagingSenderId: "827824097871",
  appId: "1:827824097871:web:d165b73a13c88a4fdbb83a"
};


const firebaseapp = initializeApp(firebaseConfig); // yaha firebase configration ko firebase app me chalya gya hai 

const provider = new GoogleAuthProvider(); // yha google auth provider method ko ek variable me store karya gya hai  

provider.getCustomParameters({
  prompt: 'Select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createYserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists()); // yaha is ki value false hai 

  // yaha nichy ( ! ) ye sign is liye hai k is ki value true ho jaye agr userSnapshort Exist nai karta tu ye code run ho jaye  
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;    // yaha user ko auth kiya jaye ga
    const createdAt = new Date();  // yaha ye object is ly banaya gaya k kab user login hua

    try { // ye is liye hai k user data ko database me set kiya jaye 
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });

    } catch (error) { // yaha agr set karte wqt agr koi error aye to wo console me catch kar sakte sath me error message b show ho
      console.log('error creating the user', error.message);
    }
  }

  // if the user data does not exist
  // create / set the document with the data from userAuth im my collection 

  // if user data exists
  // return userDocRef
}