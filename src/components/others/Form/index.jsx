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
      <form  name="contato-brasil" action="/obrigado" method="post"  data-netlify="true" onSubmit={handleSubmit}>

            <input type="hidden" name="form-name" value="contato-brasil" />

              <input required type="text" className="nome" name="Nome" placeholder="Seu Nome"    />

              <input required type="text" className="cargo" name="Cargo" placeholder="Seu Cargo"  />

              <input required type="email" className="e-mail" name="E-mail" placeholder="Seu E-mail"   />

              <textarea name="Messagem" placeholder="Deixe sua mensagem" className="mensagem" cols="30" rows="10"></textarea>
          
              <button type="submit"  className="botaoenviar" >Enviar</button>

            </form>
      </div>
    </div>
  )
}

export default Form