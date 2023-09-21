import ArchiveType from '../ArchiveType'
import Archive from '../Archive'
import PersonalInfos from '../PersonalInfos'
import { useForm } from '../../../hooks/useForm'
import Steps from '../Steps'
import './style.css'
import FormContent from '../FormContent'


const Form = ({ texts}) => {

  const inputs = texts.formSteps.inputs

  const formComponents = [
    <ArchiveType inputs={inputs.step1} />,
    <Archive inputs={inputs.step2} />,
    <PersonalInfos inputs={inputs.step3} />
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