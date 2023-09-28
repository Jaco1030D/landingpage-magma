import React from 'react'
import { SectorsActivityText } from '../../../constants'
import SectorsActivityContainer from '../../others/SectorsActivityContainer'
import './style.css'
import Button from '../../others/Button'

const MarginTop = "192.8px"

const SectorsActivity = () => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }
  return (
    <div className='section' style={{marginTop: MarginTop}}>
      <h2>{SectorsActivityText.title}</h2>
      <div className="content content-sectorsactivity">
        {SectorsActivityText.sector.map((item, index) => (
          <SectorsActivityContainer key={index} item={item} />
        ))}
      </div>
      <Button handleClick={handleClick} />
    </div>
  )
}

export default SectorsActivity