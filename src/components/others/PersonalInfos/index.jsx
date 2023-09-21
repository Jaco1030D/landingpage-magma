import React from 'react'

const PersonalInfos = ({inputs, data}) => {
  return (
    <div className='input-steps-content'>
      <div className="input display-none">
            <label htmlFor="">Do que se trata o seu conteudo</label> <br />
            <input type="text" name='conteudo' value={data.typeArchive} placeholder='Tipo de conteudo: pdf, img ...' required/>
        </div>
        <div className="input display-none">
            <label htmlFor="">Idioma da origem</label> <br />
            <input type="text" name='origem' value={data.origin} placeholder='Qual é o idioma do documento?' required/>
        </div>
        <div className="input display-none">
            <label htmlFor="">Idioma para tradução</label> <br />
            <input type="text" name='tradução' value={data.translation} placeholder='Idimo para qual você quer traduzir' required/>
        </div>
        <div className="input file display-none">
            <label htmlFor="">Adicione seus arquivos</label> <br />
            <input type="file" name='archive1'/>
        </div>
      <div className="input file display-none">
            <label htmlFor="">Adicione seus arquivos</label> <br />
            <input type="file" name='archive2'/>
        </div>
      <div className="input file display-none">
            <label htmlFor="">Adicione seus arquivos</label> <br />
            <input type="file" name='archive3'/>
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