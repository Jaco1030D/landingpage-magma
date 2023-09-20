import React from 'react'

const FormContent = ({texts, currentComponent, changeStep, currentStep, isLastStep, handleSubmit}) => {
  return (
    <form name='cotação' data-netlify="true" >

        <h2>{texts.formSteps.title}</h2>
        <div className="inputs-container">

          {currentComponent}
        </div>
        <div className="actions">
        <div data-netlify-recaptcha="false" ></div>
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
  )
}

export default FormContent