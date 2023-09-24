import React from 'react'
import { TranslationText } from '../../../constants'
import Button from '../../others/Button'
import TranslationDocument from '../../others/TranslationDocument'
import './style.css'

const MarginTop = "146px"

const Translation = () => {
  return (
    <div className='section' style={{marginTop: MarginTop}}>
      <div className="section-text">
        <h2>{TranslationText.title}</h2>
        <p className='text-section'>{TranslationText.description}</p> 
      </div>
      <div className="content content-translation">
        {TranslationText.documentsType.map((item, index) => (
          <TranslationDocument key={index} item={item} />
        ))}
      </div>
      <Button />
    </div>
  )
}

export default Translation