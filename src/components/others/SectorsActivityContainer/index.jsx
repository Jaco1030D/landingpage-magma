import React from 'react'

import './style.css'

const SectorsActivityContainer = ({item}) => {
  return (
    <div className='card'>
        <div className="content-card">
            <img src={item.icon} alt={item.text} />
            <p>
                {item.text}
            </p>
        </div>
    </div>
  )
}

export default SectorsActivityContainer