import { useRef, useState } from 'react'
import './style.css'

const Archive = ({data, updateFieldHandler}) => {
  const [numArchives, setNumArchives] = useState(0)
  const input = useRef()
  const handleFileChange = (e) => {
    const count = e.target.files.length;
    const files = e.target.files
    console.log(e.target.files);
    updateFieldHandler("files", files)
    setNumArchives(count);
  }
  const handleDrop = (e) => {
    e.preventDefault()
    if (e.dataTransfer.files.length > 0) {
      input.current.files = e.dataTransfer.files;
      e.target.files = e.dataTransfer.files;
      updateFieldHandler("files", e.target.files)
      setNumArchives(e.dataTransfer.files.length)
    }
  }
  return (
    <div>
      <div className='input-steps-content'>
      
        
      <div className="input file" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
            <p>Adicione seus arquivos:</p>
            <br />
            <label htmlFor='file'>Adicione seus arquivos <br />
            Adicionados: {numArchives} <br />
            </label>
            
            <input ref={input} onDragOver={(e) => e.preventDefault()} type="file" id='file' name='archive8' onDrop={handleDrop} onChange={handleFileChange} multiple/>
        </div>
    </div>
    </div>
    
  )
}

export default Archive