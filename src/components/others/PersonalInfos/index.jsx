import React from 'react'

const PersonalInfos = ({inputs}) => {
  return (
    <div className='input-steps-content'>
        <div className="input">
            <label htmlFor="">{inputs[0]}</label> <br />
            <input type="text" name='name' placeholder='Tipo de conteudo: pdf, img ...' />
        </div>
        <div className="input">
            <label htmlFor="">{inputs[1]}</label> <br />
            <input type="text" name='office' placeholder='Qual é o idioma do documento?' />
        </div>
        <div className="input">
            <label htmlFor="">{inputs[2]}</label> <br />
            <input type="email" name='email' placeholder='Idimo para qual vocÊ quer traduzir' />
        </div>
    </div>
  )
}

export default PersonalInfos