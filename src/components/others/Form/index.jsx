import React, { useRef } from 'react'
import ArchiveType from '../ArchiveType'
import Archive from '../Archive'
import PersonalInfos from '../PersonalInfos'
import { useForm } from '../../../hooks/useForm'
import Steps from '../Steps'
import './style.css'

const Form = ({data, setData, texts}) => {

  const inputs = texts.formSteps.inputs

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <ArchiveType inputs={inputs.step1} data={data} setData={updateFieldHandler} />,
    <Archive inputs={inputs.step2} data={data} setData={setData} />,
    <PersonalInfos inputs={inputs.step3} data={data} setData={updateFieldHandler} />
  ]
  const { currentStep } = useForm(formComponents);

  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='form-container'>
      <div className="form-content">
      <Steps currentStep={currentStep}/>
      <div className="vertical-line"></div>
      <form onSubmit={handleSubmit} data-netlify="true">
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        id="name"
        name="name"
        value="jhbnfjmcjcxj"
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value="olajnnjfsnjfnd"
        required
      />

      <button type="submit">Enviar</button>
    </form>
      </div>
    </div>
  )
}

export default Form