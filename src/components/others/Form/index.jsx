import React from 'react'
import ArchiveType from '../ArchiveType'
import Archive from '../Archive'
import PersonalInfos from '../PersonalInfos'
import { useForm } from '../../../hooks/useForm'
import Steps from '../Steps'
import './style.css'

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
  const { currentStep, changeStep, isLastStep } = useForm(formComponents);

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
      <form name='cotacao' data-netlify="true" >

        <h2>{texts.formSteps.title}</h2>
          <div className="inputs-container">

          <div className='input-steps-content'>
              <div className="input">
                  <label htmlFor="">Do que se trata o seu conteudo</label> <br />
                  <input type="text" name='conteudo' placeholder='Tipo de conteudo: pdf, img ...' value={data.typeContent} onChange={(e) => setData('typeContent', e.target.value)} />
              </div>
              <div className="input">
                  <label htmlFor="">Idioma da origem</label> <br />
                  <input type="text" name='origem' placeholder='Qual é o idioma do documento?' value={data.sourceLanguage} onChange={(e) => setData('sourceLanguage', e.target.value)} />
              </div>
              <div className="input">
                  <label htmlFor="">Idioma para tradução</label> <br />
                  <input type="text" name='traducao' placeholder='Idimo para qual vocÊ quer traduzir' value={data.languageForTradution} onChange={(e) => setData('languageForTradution', e.target.value)} />
              </div>
          </div>
        </div>
        <div className="actions">
        <div data-netlify-recaptcha="true" ></div>
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