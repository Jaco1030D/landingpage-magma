import React from 'react'

const Archive = ({data, updateFieldHandler}) => {
  return (
    <div>
      <input type='hidden' name='form-name' value="Quotation" />
      <div className='input-steps-content'>
      <div className="input display-none">
            <label htmlFor="">Do que se trata o seu conteudo</label> <br />
            <input type="text" name='conteudo' value={data.typeArchive} placeholder='Tipo de conteudo: pdf, img ...' />
        </div>
        <div className="input display-none">
            <label htmlFor="">Idioma da origem</label> <br />
            <input type="text" name='origem' value={data.origin} placeholder='Qual é o idioma do documento?' />
        </div>
        <div className="input display-none">
            <label htmlFor="">Idioma para tradução</label> <br />
            <input type="text" name='tradução' value={data.translation} placeholder='Idimo para qual você quer traduzir' />
        </div>
        <div className="input display-none">
            <input type="text" name='name' placeholder='Tipo de conteudo: pdf, img ...' value={data.name || ""} required/>
        </div>
        <div className="input display-none">
            <input type="text" name='office' placeholder='Qual é o idioma do documento?' value={data.office || ""} />
        </div>
        <div className="input display-none">
            <input type="email" name='email' placeholder='Idimo para qual você quer traduzir' value={data.email || ""} required/>
        </div>
      <div className="input file">
            <label htmlFor="">Adicione seus arquivos</label> <br />
            <input type="file" name='archive1' />
        </div>
      <div className="input file">
            <label htmlFor="">Adicione seus arquivos</label> <br />
            <input type="file" name='archive2'/>
        </div>
      <div className="input file">
            <label htmlFor="">Adicione seus arquivos</label> <br />
            <input type="file" name='archive3'/>
        </div>
    </div>
    </div>
    
  )
}

export default Archive