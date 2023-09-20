import React from 'react'
import ArchiveType from '../ArchiveType'
import Archive from '../Archive'
import PersonalInfos from '../PersonalInfos'
import { useForm } from '../../../hooks/useForm'
import Steps from '../Steps'
import './style.css'
import FormContent from '../FormContent'

const formTemplate = {
  name: "",
  office: "",
  email: "",
  archive: [],
  typeContent: "",
  sourceLanguage: "",
  languageForTradution: "",
};


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
  const { currentStep, currentComponent, changeStep, isLastStep } = useForm(formComponents);

  const handleSubmit = (e) => {
    e.preventDefault()

    setData(formTemplate)

    changeStep(0, e)
  }

  return (
    <div className='form-container'>
      <div className="form-content">
      <Steps currentStep={currentStep}/>
      <div className="vertical-line"></div>
      <FormContent isLastStep={isLastStep} texts={texts} handleSubmit={handleSubmit} currentComponent={currentComponent} changeStep={changeStep} currentStep={currentStep} />
      </div>
    </div>
  )
}

export default Form