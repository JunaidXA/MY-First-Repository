import React from 'react'
import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

const NavigationComponent = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='nav-logo-container' to='/'>
            <div>Logo</div>
        </Link>
        <div className='nav-links -container'>
            <Link className='nav-link' to='/shop'>Shop</Link>
        </div>
      </div>
        <Outlet />
    </Fragment> 
  )
}
export default NavigationComponent;