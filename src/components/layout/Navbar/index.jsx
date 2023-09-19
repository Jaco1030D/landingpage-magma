import React from 'react'
import { Logo } from '../../../constants/img'
import './style.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <img src={Logo} alt="logo" id='logo-navbar' />
    </div>
  )
}

export default Navbar