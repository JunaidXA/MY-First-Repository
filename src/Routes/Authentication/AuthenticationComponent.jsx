import  React from 'react';
import './AuthenticationComponent.scss';
import SignUpForm from '../../Component/SignUp-Form/SignUpForm';
import SignInForm from '../../Component/SignIn-Form/SignInForm';

const AuthenticationComponent = () => {

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}
export default AuthenticationComponent;