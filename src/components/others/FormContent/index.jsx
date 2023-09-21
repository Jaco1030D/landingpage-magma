import React, { useEffect, useState } from 'react'

const FormContent = ({texts, currentComponent, changeStep, currentStep, isLastStep, handleSubmit}) => {
  const [originalPosition, setOriginalPosition] = useState(0);
  const [divStyle, setDivStyle] = useState({
    position: 'relative',
  });

  useEffect(() => {
    const div = document.getElementById('myForm');
    if (div) {
      setOriginalPosition(div.offsetTop);
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > originalPosition) {
        setDivStyle({
          position: 'fixed',
          top: '0',
          width: '400px',
          padding: '25px',
          borderRadius: '15px',
          height: '400px'
        });
      } else {
        setDivStyle({
          position: 'relative',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [originalPosition]);
  return (
    
    // <form name='Quotation' action='/Quotation' method='post' id='myForm' style={divStyle} enctype="multipart/form-data">
      <div className='form' id='myForm' style={divStyle}>
        <h2>{texts.formSteps.title}</h2>
        <div className="inputs-container">

          {currentComponent}
        </div>
        {!isLastStep && (
          <div className="actions">
          <button type="button" onClick={() => changeStep(currentStep - 1)}>
            <span>Voltar</span>
          </button>

          {!isLastStep ? (
            <button type="button" onClick={(e) => changeStep(currentStep + 1, e)}>
              <span>Avançar</span>
            </button>
          ) : (
            <button type="submit" onClick={handleSubmit}>
              <span>Enviar</span>
            </button>
          )}
        </div>
        )}
        
      {/* </form> */}
      </div>
  )
}

export default FormContent