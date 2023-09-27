import React from 'react'
import { Logo } from '../../../constants/img'
import { FooterText } from '../../../constants'
import './style.css'

const MarginTop = '77px'

const Footer = () => {
  return (
    <div className="section footer" style={{marginTop: MarginTop}}>
      <img src={Logo} alt="Logo - magma translation" />

      <div className="texts-footer">
        <p>{FooterText.description}</p>
        <p>
          {FooterText.reserved} <br />
        <a href="/">Termos de serviço</a>
        </p>
      </div>
    </div>
  )
}

export default Footer