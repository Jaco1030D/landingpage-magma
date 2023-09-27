import React from 'react'
import './style.css'
import { ThanksText } from '../../constants'
import Button from '../../components/others/Button'
import { useNavigate } from 'react-router-dom'

const Thanks = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/")
  }
  return (
    <center>
      <section className='section' id='section-thanks'>
          <div className='text'>
            <h1>{ThanksText.title}</h1>
            <p>
              {ThanksText.text}
            </p>
            <Button handleClick={handleClick} text={ThanksText.btnText} />
          </div>
          <div className='img'>
            <img src={ThanksText.image} alt="Thanks" />
          </div>
      </section>
    </center>
  )
}

export default Thanks