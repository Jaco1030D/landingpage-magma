import ArchiveType from '../ArchiveType'
import Archive from '../Archive'
import PersonalInfos from '../PersonalInfos'
import { useForm } from '../../../hooks/useForm'
import Steps from '../Steps'
import './style.css'
import FormContent from '../FormContent'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const formTemplate = {
  typeArchive: '',
  origin: '',
  translation: '',
  name: '',
  office: '',
  email: ''
}

const Form = ({ texts}) => {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const inputs = texts.formSteps.inputs

  const formComponents = [
    <ArchiveType inputs={inputs.step1} data={data} updateFieldHandler={updateFieldHandler} />,
    <PersonalInfos inputs={inputs.step3} data={data} updateFieldHandler={updateFieldHandler} />,
    <Archive inputs={inputs.step2} data={data} updateFieldHandler={updateFieldHandler} />,
  ]
  const { currentStep, currentComponent, changeStep, isLastStep } = useForm(formComponents);

  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/obrigado")
  }

  return (
    <div className='form-container'>
      <div className="form-content">
      <Steps currentStep={currentStep}/>
      <div className="vertical-line"></div>
      <FormContent isLastStep={isLastStep} data={data} texts={texts} currentComponent={currentComponent} changeStep={changeStep} handleSubmit={handleSubmit} currentStep={currentStep} />
      </div>
    </div>
  )
}

export default Form