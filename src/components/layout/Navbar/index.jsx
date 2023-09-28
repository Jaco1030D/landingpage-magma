import React from 'react'
import { Logo } from '../../../constants/img'
import './style.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }
  return (
    <div className='navbar-container'>
      <div className="navbar-content">
      <img src={Logo} onClick={handleClick} alt="logo" id='logo-navbar' />
      </div>
    </div>
  )
}

export default Navbar