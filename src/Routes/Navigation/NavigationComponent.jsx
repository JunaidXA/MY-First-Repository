import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../Contexts/UserContext';
import { userSignOut } from '../../Utils/Firebase/FirebaseUtils';
import './Navigationstyle.scss'

const NavigationComponent = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  
  const signOutHandler = async () => {
    await userSignOut();
    setCurrentUser(null);

    }

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
            <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
            {currentUser ? (
                <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>) 
                :(
                  <Link className='nav-link' to='/auth'>
                  SIGN IN
                </Link> 
              )}
        </div>
      </div>
        <Outlet />
    </Fragment> 
  )
}
export default NavigationComponent;
