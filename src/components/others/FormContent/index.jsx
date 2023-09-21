import React from 'react'

const FormContent = ({texts, currentComponent, changeStep, currentStep, isLastStep, handleSubmit}) => {
  return (
    <form onSubmit={(e) => changeStep(currentStep + 1, e)} name='Quotation' data-netlify="true" >

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
              <button type="submit" onClick={handleSubmit}>
                <span>Enviar</span>
              </button>
            )}
          </div>
      </form>
  )
}

export default FormContent