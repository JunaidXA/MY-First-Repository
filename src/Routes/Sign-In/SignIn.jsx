import React from 'react';
import {signInWithGooglePopup } from '../../Utils/Firebase/FirebaseUtils';

const SignIn =() => {
    const logGoogleUser = async () =>{
     const response = await signInWithGooglePopup();
     console.log(response);
    }
  return (
    <div>
         <h1>This is Sign In Page</h1>
         <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  )
}

export default SignIn;
