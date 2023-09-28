import React from 'react'

const PersonalInfos = ({inputs, data, updateFieldHandler}) => {
  return (
    <div className='input-steps-content'>
        <div className="input">
            <label htmlFor="">{inputs[0]}</label> <br />
            <input type="text" name='name' placeholder='Seu nome ...' value={data.name || ""} onChange={(e) => updateFieldHandler("name", e.target.value)} required/>
        </div>
        <div className="input">
            <label htmlFor="">{inputs[1]}</label> <br />
            <input type="text" name='office' placeholder='Qual é o idioma do documento?' value={data.office || ""} onChange={(e) => updateFieldHandler("office", e.target.value)} required/>
        </div>
        <div className="input">
            <label htmlFor="">{inputs[2]}</label> <br />
            <input type="email" name='email' placeholder='Idimo para qual você quer traduzir' value={data.email || ""} onChange={(e) => updateFieldHandler("email", e.target.value)} required/>
        </div>
    </div>
  )
}

export default PersonalInfos