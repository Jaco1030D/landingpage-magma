import ArchiveType from '../ArchiveType'
import Archive from '../Archive'
import PersonalInfos from '../PersonalInfos'
import { useForm } from '../../../hooks/useForm'
import Steps from '../Steps'
import './style.css'
import FormContent from '../FormContent'
import { useState } from 'react'

const formTemplate = {
  typeArchive: '',
  origin: '',
  translation: '',
  archive1: '',
  archive2: '',
  archive3: '',
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
    <Archive inputs={inputs.step2} />,
    <PersonalInfos inputs={inputs.step3} data={data} />
  ]
  const { currentStep, currentComponent, changeStep, isLastStep } = useForm(formComponents);

  return (
    <div className='form-container'>
      <div className="form-content">
      <Steps currentStep={currentStep}/>
      <div className="vertical-line"></div>
      <FormContent isLastStep={isLastStep} texts={texts} currentComponent={currentComponent} changeStep={changeStep} currentStep={currentStep} />
      </div>
    </div>
  )
}

export default Form