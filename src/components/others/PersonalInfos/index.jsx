import React from 'react'

const PersonalInfos = ({inputs}) => {
  return (
    <div className='input-steps-content'>
      <div className="input display-none">
            <label htmlFor="">Do que se trata o seu conteudo</label> <br />
            <input type="text" name='conteudo' placeholder='Tipo de conteudo: pdf, img ...'value="seilameu" required/>
        </div>
        <div className="input">
            <label htmlFor="">{inputs[0]}</label> <br />
            <input type="text" name='name' placeholder='Tipo de conteudo: pdf, img ...' required/>
        </div>
        <div className="input">
            <label htmlFor="">{inputs[1]}</label> <br />
            <input type="text" name='office' placeholder='Qual é o idioma do documento?' required/>
        </div>
        <div className="input">
            <label htmlFor="">{inputs[2]}</label> <br />
            <input type="email" name='email' placeholder='Idimo para qual vocÊ quer traduzir' required/>
        </div>
    </div>
  )
}

export default PersonalInfos