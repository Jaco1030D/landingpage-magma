import React from 'react'
import { PartnershipsText } from '../../../constants'
import PartnerShipsContainer from '../../others/PartnerShipsContainer'
import './style.css'

const Partnerships = () => {
  return (
    <div id='section-partnership' className='section'>
        <center>
          <h2>{PartnershipsText.title}</h2>
        </center>
        <PartnerShipsContainer />
    </div>
  )
}

export default Partnerships