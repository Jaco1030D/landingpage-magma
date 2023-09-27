import { useRef, useState } from 'react'
import './style.css'

const Archive = ({data, updateFieldHandler}) => {
  const [numArchives, setNumArchives] = useState(0)
  // const [archives, setArchives] = useState([''])
  const input = useRef()
  const handleFileChange = (e) => {
    const count = e.target.files.length;
    const files = e.target.files
    let arrayFileName = []
    for (let index = 0; index < files.length; index++) {
      const element = files[index].name;
      arrayFileName.push(element)
    }
    // setArchives(arrayFileName);
    setNumArchives(count);
  }
  const handleDrop = (e) => {
    e.preventDefault()
    if (e.dataTransfer.files.length > 0) {
      input.current.files = e.dataTransfer.files; 
      setNumArchives(e.dataTransfer.files.length)
    }
  }
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
      <div className="input file" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
            <p>Adicione seus arquivos:</p>
            <br />
            <label htmlFor='file'>Adicione seus arquivos <br />
            Aquivos adicionados: {numArchives} <br />
            </label>
            
            <input ref={input}  onDragOver={(e) => e.preventDefault()} type="file" id='file' name='archive1' onDrop={handleDrop} onChange={handleFileChange} multiple/>
        </div>
      {/* <div className="input file">
            <label htmlFor="">Adicione seus arquivos</label> <br />
            <input type="file" name='archive2'/>
        </div>
      <div className="input file">
            <label htmlFor="">Adicione seus arquivos</label> <br />
            <input type="file" name='archive3'/>
        </div> */}
    </div>
    </div>
    
  )
}

export default Archive