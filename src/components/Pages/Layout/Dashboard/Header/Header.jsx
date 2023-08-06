/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../../../../logo.svg'
import './Header.css'
import Logout from './Logout'

const Header = () => {
  return (
    <header className='App-header'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <a className='navbar-brand' href='#'>
            <img
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt=''
            />
            React to-do app
          </a>
          <div className='navbar-nav mr-auto mt-2 mt-lg-0'></div>
          <Logout/>
        </div>
      </nav>
    </header>
  )
}

export default Header
