import React from 'react'
import { PartnershipsText } from '../../../constants'
import PartnerShipsContainer from '../../others/PartnerShipsContainer'

const MarginTop = "98px";

const Partnerships = () => {
  return (
    <div id='section-partnership' className='section' style={{marginTop: MarginTop}}>
        <center>
          <h2>{PartnershipsText.title}</h2>
        </center>
        <PartnerShipsContainer />
    </div>
  )
}

export default Partnerships