import React, { useState } from 'react'
import { languages } from '../../../constants'
import { MultiSelect } from 'react-multi-select-component';

const ArchiveType = ({data, updateFieldHandler, inputs}) => {
   const [selectedValue, setSelectedValue] = useState('');
    const [selected, setSelected] = useState([]);

   const handleSelectChange = (event) => {
     const selectedOption = event.target.value;
     
     setSelectedValue(selectedOption);
   };
  return (
    <div className='input-steps-content'>
        <div className="input">
            <label htmlFor="">{inputs[0]}</label> <br />
            
            <input type="text" name='conteudo' value={data.typeArchive || ""} onChange={(e) => updateFieldHandler("typeArchive", e.target.value)}  placeholder='Tipo de conteudo: pdf, img ...' required/>
        </div>
        <div className="input">
            <label htmlFor="">{inputs[1]}</label> <br />
            <select value={selectedValue} name="origem" onChange={handleSelectChange} id="">
              {languages.map((item, index) => (
                <option value={item.value}>{item.label}</option>
              ))}

            </select>
            {/* <input type="text" name='origem' value={data.origin || ""} onChange={(e) => updateFieldHandler("origin", e.target.value)} placeholder='Qual é o idioma do documento?' required/> */}
        </div>
        <div className="input">
          
            <label htmlFor="">{inputs[2]}</label> <br />
            <MultiSelect
              options={languages}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
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