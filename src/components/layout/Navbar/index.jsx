import React from 'react'
import { Logo } from '../../../constants/img'
import './style.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="navbar-content">
      <img src={Logo} alt="logo" id='logo-navbar' />
      </div>
    </div>
  )
}

export default Navbar