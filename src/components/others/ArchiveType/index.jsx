import React, { useState } from 'react'
import { languages, typeContent } from '../../../constants'
import { MultiSelect } from 'react-multi-select-component';

const ArchiveType = ({data, updateFieldHandler, inputs}) => {
    const [selected, setSelected] = useState([]);
    const [selectedOrigin, setSelectedOrigin] = useState([]);
    const [selectedArchiveType, setSelectedArchiveType] = useState([])

    const handleChangeOrigin = (option) => {
      console.log(option);
      if (selectedOrigin[0]) {
        setSelectedOrigin(prev => {
          if (option[1]) {
            updateFieldHandler("origin", option[1].label)
            return [option[1]]  
          } else {
            updateFieldHandler("origin", [])
            return []
          }
        })
      } else {
        setSelectedOrigin(prev => {
          updateFieldHandler("origin", option[0].label || "")
          return option
        })
      }
    }
    const handleChangeTranslation = (options) => {
      let string = []
      options.forEach(element => {
        string.push(element.label)
      });
      setSelected(prev => {
        updateFieldHandler("translation", string.join(", "))
        return options
      })
    }
    const handleChangeContent = (option) => {
      console.log(option);
      if (selectedArchiveType[0]) {
        setSelectedArchiveType(prev => {
          if (option[1]) {
            updateFieldHandler("typeArchive", option[1].label)
            return [option[1]]  
          } else {
            updateFieldHandler("typeArchive", [])
            return []
          }
        })
      } else {
        setSelectedArchiveType(prev => {
          updateFieldHandler("typeArchive", option[0].label || "")
          return option
        })
      }
    }
    
  return (
    <div className='input-steps-content'>
        <div className="input">
            <label htmlFor="">{inputs[0]}</label> <br />
            <MultiSelect
              options={typeContent}
              value={selectedArchiveType}
              onChange={handleChangeContent}
              labelledBy="Select"
              hasSelectAll={false}
              closeOnChangedValue={true}
            />
            
            {/* <input type="text" name='conteudo' value={data.typeArchive || ""} onChange={(e) => updateFieldHandler("typeArchive", e.target.value)}  placeholder='Tipo de conteudo: pdf, img ...' required/> */}
        </div>
        <div className="input">
            <label htmlFor="">{inputs[1]}</label> <br />
            <MultiSelect
              options={languages}
              value={selectedOrigin}
              onChange={handleChangeOrigin}
              labelledBy="Select"
              hasSelectAll={false}
              closeOnChangedValue={true}
            />
            {/* <select value={data.origin} name="origem" onChange={(e) => updateFieldHandler("origin", e.target.value)} id="">
              {languages.map((item, index) => (
                <option value={item.value}>{item.label}</option>
              ))}

            </select> */}
            {/* <input type="text" name='origem' value={data.origin || ""} onChange={(e) => updateFieldHandler("origin", e.target.value)} placeholder='Qual é o idioma do documento?' required/> */}
        </div>
        <div className="input">
          
            <label htmlFor="">{inputs[2]}</label> <br />
            <MultiSelect
              options={languages}
              value={selected}
              onChange={handleChangeTranslation}
              labelledBy="Select"
              hasSelectAll={false}
            />
            {/* <select value={""} name="tradução" id="traducao">
              {languages.map((item, index) => (
                <option value={item.value}>{item.label}</option>
              ))}

            </select> */}
            {/* <input type="text" name='tradução' value={data.translation || ""} onChange={(e) => updateFieldHandler("translation", e.target.value)} placeholder='Idimo para qual você quer traduzir' required/> */}
        </div>
    </div>
  )
}

export default ArchiveType