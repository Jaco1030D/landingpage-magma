import React from 'react'

const ArchiveType = () => {
  return (
    <div className='input-steps-content'>
        <div className="input">
            <label htmlFor="">Do que se trata o seu conteudo</label> <br />
            <input type="text" name='conteudo' placeholder='Tipo de conteudo: pdf, img ...' />
        </div>
        <div className="input">
            <label htmlFor="">Idioma da origem</label> <br />
            <input type="text" name='origem' placeholder='Qual é o idioma do documento?' />
        </div>
        <div className="input">
            <label htmlFor="">Idioma para tradução</label> <br />
            <input type="text" name='tradução' placeholder='Idimo para qual vocÊ quer traduzir'/>
        </div>
    </div>
  )
}

export default ArchiveType