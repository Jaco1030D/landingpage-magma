import { useRef, useState } from 'react'
import './style.css'

const Archive = ({data, updateFieldHandler}) => {
  const [numArchives, setNumArchives] = useState(0)
  const input = useRef()
  const file1 = useRef()
  const file2 = useRef()
  const file3 = useRef()
  const file4 = useRef()
  const file5 = useRef()
  const file6 = useRef()
  const refsArray = [file1, file2, file3, file4, file5, file6]
  const handleFileChange = (e) => {
    const count = e.target.files.length;
    const files = e.target.files
    updateFieldHandler("files", files)
    // addFiles(files, e)
    // let arrayFile = []
    // for (let index = 0; index < files.length; index++) {
    //   const element = files[index];
    //   arrayFile.push(element)
    // }
    setNumArchives(count);
  }
  const addFiles = (files, e) => {
    
    
    for (let index = 0; index < files.length; index++) {
      let data = new DataTransfer()
      const element = files[index];

      data.items.add(element)

      // console.log(data.items.length, data.files[0]);

      const input = refsArray[index]

      input.current.files = data.files

      
    }

    limparInputFile();
    // files.forEach((file, index) => {
    //   const inputRef = refsArray[index]
    //   inputRef.current.files = [file]
    // } )
  }
  const handleDrop = (e) => {
    e.preventDefault()
    if (e.dataTransfer.files.length > 0) {
      addFiles(e.dataTransfer.files)
      input.current.files = e.dataTransfer.files; 
      updateFieldHandler("files", e.dataTransfer.files)
      setNumArchives(e.dataTransfer.files.length)
    }
  }
  const limparInputFile = () => {
    input.current.value = ""
  };
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