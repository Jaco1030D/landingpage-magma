import React from 'react'
import { SectorsActivityText } from '../../../constants'
import SectorsActivityContainer from '../../others/SectorsActivityContainer'
import './style.css'
import Button from '../../others/Button'

const SectorsActivity = () => {
  return (
    <div className='section'>
      <center>
        <h2>{SectorsActivityText.title}</h2>
      </center>
      <div className="content content-sectorsactivity">
        {SectorsActivityText.sector.map((item, index) => (
          <SectorsActivityContainer key={index} item={item} />
        ))}
      </div>
      <Button />
    </div>
  )
}

export default SectorsActivity