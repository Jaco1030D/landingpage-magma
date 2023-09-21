import React from 'react'
import ArchiveType from '../ArchiveType'
import { useForm } from '../../../hooks/useForm'
import Steps from '../Steps'
import './style.css'
// import FormContent from '../FormContent'

// const formTemplate = {
//   name: "",
//   office: "",
//   email: "",
//   archive: [],
//   typeContent: "",
//   sourceLanguage: "",
//   languageForTradution: "",
// };


const Form = ({data, setData, texts}) => {

  const inputs = texts.formSteps.inputs

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <ArchiveType inputs={inputs.step1} data={data} setData={updateFieldHandler} />,
  ]
  const { currentStep } = useForm(formComponents);

  const handleSubmit = (event) => {

    
    // Get the email input value
    const email = event.target.elements['E-mail'].value.toLowerCase(); // Convert to lowercase for case insensitivity
    
    // Check if the email contains "hotmail," "gmail," or "yahoo"
    if (email.includes('hotmail') || email.includes('gmail') || email.includes('yahoo')) {
      // Redirect to "/obrigadodois" for the specified email domains
      window.location.href = "/um-obrigado-da-magma";
    } else {
      // Redirect to "/obrigado" for other email domains
      window.location.href = "/obrigado";
    }
  };

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
      {/* <FormContent isLastStep={isLastStep} texts={texts} handleSubmit={handleSubmit} currentComponent={currentComponent} changeStep={changeStep} currentStep={currentStep} /> */}
      </div>
    </div>
  )
}

export default Form