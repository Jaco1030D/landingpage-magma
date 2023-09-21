import React from 'react'

const ArchiveType = ({data}) => {
  return (
    <div className='input-steps-content'>
        <div className="input">
            <label htmlFor="">Do que se trata o seu conteudo</label> <br />
            <input type="text" name='conteudo' placeholder='Tipo de conteudo: pdf, img ...' value={data | ""} required/>
        </div>
        <div className="input">
            <label htmlFor="">Idioma da origem</label> <br />
            <input type="text" name='origem' placeholder='Qual é o idioma do documento?' required/>
        </div>
        <div className="input">
            <label htmlFor="">Idioma para tradução</label> <br />
            <input type="text" name='tradução' placeholder='Idimo para qual vocÊ quer traduzir' required/>
        </div>
    </div>
  )
}

export default ArchiveType