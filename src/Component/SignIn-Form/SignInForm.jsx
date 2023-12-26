import { useState } from 'react'
import FormInput from '../Form-Input/FormInput';
import Button from '../Button/Button';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserEmailAndPassword } from '../../Utils/Firebase/FirebaseUtils';
import './SignInForm.scss';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFiedls] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFiedls(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    try{
      const { user } = await signInWithGooglePopup();
      createUserDocumentFromAuth(user);
    }
    catch(error){
      if (error.code === 'auth/popup-closed-by-user') {
        console.log('User closed the popup');
      } else {
        console.error('Google se sign in mein error:', error);
        throw error;
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    }
    catch (error) { 
      if(error.code == 'auth/invalid-credential'){
        alert('Email or Password is Incorrect')
      }else{
        console.log(error);
      }
    };
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFiedls({ ...formFields, [name]: value })
  }
  
  return (
    <div className='sign-up-container'>
      <h2>Already have an account.</h2>
      <span>Sign Up With Your Email and Password</span>
      <form onSubmit={handleSubmit} >
        <FormInput
          label='Email'
          type='email'
          required 
          onChange={handleChange}
          name='email'
          value={email} />

        <FormInput
          label='Password'
          type='password'
          required 
          onChange={handleChange}
          name='password'
          value={password} />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button buttonType='google' onClick={signInWithGoogle} type="button">Google Sign In</Button>
        </div>
      </form>
    </div>
  )
}
export default SignInForm;
