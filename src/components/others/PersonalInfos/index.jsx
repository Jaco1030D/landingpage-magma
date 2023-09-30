import React, { useEffect, useRef } from 'react'

const PersonalInfos = ({inputs, data, updateFieldHandler}) => {
  const input = useRef()
  const file1 = useRef()
  const file2 = useRef()
  const file3 = useRef()
  const file4 = useRef()
  const file5 = useRef()
  const file6 = useRef()
  const refsArray = [file1, file2, file3, file4, file5, file6]

  const addFiles = (files, e) => {
    
    
    for (let index = 0; index < files.length; index++) {
      let data = new DataTransfer()
      const element = files[index];

      data.items.add(element)

      // console.log(data.items.length, data.files[0]);

      const input = refsArray[index]

      input.current.files = data.files

      
    }
    // files.forEach((file, index) => {
    //   const inputRef = refsArray[index]
    //   inputRef.current.files = [file]
    // } )
  }
  useEffect(() => {
    console.log(data.files);
    addFiles(data.files)
  },[])
  return (
    <div className='input-steps-content'>
      
      <input type='hidden' name='form-name' value="Quotation" />
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
        <div className="input display-none">
            <label htmlFor="">Do que se trata o seu conteudo</label> <br />
            <input type="text" name='conteudo' value={data.typeArchive || ""} placeholder='Tipo de conteudo: pdf, img ...' />
        </div>
        <div className="input display-none">
            <label htmlFor="">Idioma da origem</label> <br />
            <input type="text" name='origem' value={data.origin || ""} placeholder='Qual é o idioma do documento?' />
        </div>
        <div className="input display-none">
            <label htmlFor="">Idioma para tradução</label> <br />
            <input type="text" name='tradução' value={data.translation || ""} placeholder='Idimo para qual você quer traduzir' />
        </div>
        <div className="input display-none">
          <input ref={file1} type="file" name='archive1' multiple/>
          <input ref={file2} type="file" name='archive2' multiple/>
          <input ref={file3} type="file" name='archive3' multiple/>
          <input ref={file4} type="file" name='archive4' multiple/>
          <input ref={file5} type="file" name='archive5' multiple/>
          <input ref={file6} type="file" name='archive6' multiple/>
        </div>
    </div>
  )
}

export default PersonalInfos