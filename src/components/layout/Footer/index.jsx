import React from 'react'
import { Logo } from '../../../constants/img'
import { FooterText } from '../../../constants'
import './style.css'
import { useNavigate } from 'react-router-dom'

const MarginTop = '77px'

const Footer = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/termos")
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }
  return (
    <div className="section footer" style={{marginTop: MarginTop}}>
      <img src={Logo} alt="Logo - magma translation" />

      <div className="texts-footer">
        <p>{FooterText.description}</p>
        <p>
          {FooterText.reserved} <br />
          <button className='terms' onClick={handleClick} >Termos de serviço</button>
        </p>
      </div>
    </div>
  )
}

export default Footer