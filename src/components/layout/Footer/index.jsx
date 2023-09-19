import React from 'react'
import { Logo } from '../../../constants/img'
import { FooterText } from '../../../constants'
import './style.css'

const Footer = () => {
  return (
    <div className="section footer">
      <img src={Logo} alt="Logo - magma translation" />

      <div className="texts-footer">
        <p>{FooterText.description}</p>
        <p>{FooterText.reserved}</p>
      </div>
    </div>
  )
}

export default Footer