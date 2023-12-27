import { useState,useContext } from 'react'
import FormInput from '../Form-Input/FormInput';
import Button from '../Button/Button';
import { createAuthUserEmailAndPassword, createUserDocumentFromAuth } from '../../Utils/Firebase/FirebaseUtils';
import { UserContext } from '../../Contexts/UserContext';
import './SignUpForm.scss';


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFiedls] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const{setCurrentUser} = useContext(UserContext);

  const resetFormFields = () => {
    setFormFiedls(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password & Confirm Password Does not Match');
      return;
    }
    try {
      const { user } = await createAuthUserEmailAndPassword(
        email, 
        password
        );
        setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName })
      
      resetFormFields();
    }
    catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, Email already in use')
      } else {
        console.log('Some Error Occur', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFiedls({ ...formFields, [name]: value })
  }
  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign Up With Your Email and Password</span>
      <form onSubmit={handleSubmit} >
        <FormInput
          label='Display Name'
          type='text'
          required 
          onChange={handleChange}
          name='displayName'
          value={displayName} />

        <FormInput
          label='Email'
          type='email'
          required onChange={handleChange}
          name='email'
          value={email} />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password} />

        <FormInput
          label='Confirm Password'
          type='password'
          required onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword} />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}
export default SignUpForm;