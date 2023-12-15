import  React from 'react';
//import { getRedirectResult } from 'firebase/auth' Redirect function use kiya jaye tu ye import karna parta hai
import { signInWithGooglePopup, createUserDocumentFromAuth, /*auth, signInWithGoogleRedirect,*/ } from '../../Utils/Firebase/FirebaseUtils';
import SignUpForm from '../../Component/SignUp-Form/SignUpForm';

const SignIn = () => {

  // ---- Just an Example for Google Redirect the Login In Function
  // useEffect(() => {
  //   getRedirectResult(auth)
  //     .then((response) => {
  //        if(response){
  //         const userDocRef = createUserDocumentFromAuth(response.user)
  //        }
  //     }).catch(console.error);
  // }, [])
  
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> Google Redriect Login Button  */} 
      <SignUpForm />
    </div>
  )
}

export default SignIn;
