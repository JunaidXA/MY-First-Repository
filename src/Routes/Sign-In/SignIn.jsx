import React from 'react';
import {signInWithGooglePopup, createYserDocumentFromAuth } from '../../Utils/Firebase/FirebaseUtils';

const SignIn =() => {
    const logGoogleUser = async () => {
     const {user} = await signInWithGooglePopup();
     createYserDocumentFromAuth(user)
    }
  return (
    <div>
         <h1>Sign In Page</h1>
         <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  )
}

export default SignIn;
