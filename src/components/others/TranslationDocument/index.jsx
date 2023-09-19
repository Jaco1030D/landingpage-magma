import React from 'react'
import './style.css'

const TranslationDocument = ({item}) => {
  return (
    <div>
        <div className='card'>
            <div className="content-card">
                <img src={item.icon} alt={item.name} />
                <p className='text'>
                    {item.name}
                </p>
            </div>
        </div>
    </div>
  )
}

export default TranslationDocument