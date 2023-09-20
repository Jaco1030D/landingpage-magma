import React from 'react'

const PersonalInfos = ({inputs, data, setData}) => {
  return (
    <div className='input-steps-content'>
        {inputs.map((item, index) => (
            <div key={index} className="input">
                <label htmlFor="">{item}</label> <br />
                <input type="text"  placeholder='' />
            </div>
        ))}
    </div>
  )
}

export default PersonalInfos