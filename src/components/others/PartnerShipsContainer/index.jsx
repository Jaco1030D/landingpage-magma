import React from 'react'

import './style.css'
import { PartnershipsText } from '../../../constants'

const PartnerShipsContainer = () => {
  return (
    <div className='content logos-Partner'>
        {PartnershipsText.logo.map((item, index) => (
            <img key={index} src={item} alt='Logo' />
        ))}
    </div>
  )
}

export default PartnerShipsContainer