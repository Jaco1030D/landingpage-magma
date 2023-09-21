import React from 'react'

const PersonalInfos = ({inputs, data, setData}) => {
  return (
    <div className='input-steps-content'>
        <div className="input">
            <label htmlFor="">{inputs[0]}</label> <br />
            <input type="text" name='conteudo' placeholder='Tipo de conteudo: pdf, img ...' value={data.typeContent} onChange={(e) => setData('typeContent', e.target.value)} />
        </div>
        <div className="input">
            <label htmlFor="">{inputs[1]}</label> <br />
            <input type="text" name='origem' placeholder='Qual é o idioma do documento?' value={data.sourceLanguage} onChange={(e) => setData('sourceLanguage', e.target.value)} />
        </div>
        <div className="input">
            <label htmlFor="">{inputs[2]}</label> <br />
            <input type="text" name='tradução' placeholder='Idimo para qual vocÊ quer traduzir' value={data.languageForTradution} onChange={(e) => setData('languageForTradution', e.target.value)} />
        </div>
    </div>
  )
}

export default PersonalInfos