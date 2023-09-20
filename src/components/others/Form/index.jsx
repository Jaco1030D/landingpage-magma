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
  const { currentStep, currentComponent, changeStep, isLastStep } = useForm(formComponents);

  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formElement = formRef.current;

    // Envia o formulário manualmente
    formElement.submit();
  }

  return (
    <div className='form-container'>
      <div className="form-content">
      <Steps currentStep={currentStep}/>
      <div className="vertical-line"></div>
      <form onSubmit={(e) => changeStep(currentStep + 1, e)} name="contato" method='POST' data-netlify="true" ref={formRef} >
        <h2>{texts.formSteps.title}</h2>
        <div className="inputs-container">
          {currentComponent}
        </div>
        <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <span>Voltar</span>
            </button>

            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
              </button>
            ) : (
              <button type="button" onClick={handleSubmit}>
                <span>Enviar</span>
              </button>
            )}
          </div>
      </form>
      </div>
    </div>
  )
}

export default Form