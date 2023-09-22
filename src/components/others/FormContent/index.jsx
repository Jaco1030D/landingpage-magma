import React, { useEffect, useState } from 'react'

const FormContent = ({texts, currentComponent, changeStep, currentStep, isLastStep, handleSubmit}) => {
  const [originalPosition, setOriginalPosition] = useState(0);
  const [close, setClose] = useState(false)
  const [closeButton, setCloseButton] = useState(false)
  const [divStyle, setDivStyle] = useState({
    position: 'relative',
  });
  const handleClose = () => {
    setClose(true)
    setDivStyle({
      position: 'relative',
    });
    setCloseButton(false)
  }
  useEffect(() => {
    const div = document.getElementById('myForm');
    if (div) {
      setOriginalPosition(div.offsetTop);
    }

    const handleScroll = () => {
      if (!close) {
        const scrollTop = window.scrollY;
        if (scrollTop > originalPosition) {
          setDivStyle({
            position: 'fixed',
            top: '0',
            width: '300px',
            padding: '25px',
            borderRadius: '15px',
            height: '400px',
            border: '2px solid #C8982A'
          });
          setCloseButton(true)
        } else {
          setDivStyle({
            position: 'relative'
          });
          setCloseButton(false)
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [originalPosition, close]);
  return (
    <div className='form' id='myForm' style={divStyle}>
        <h2>{texts.formSteps.title}</h2>
        <button id='close' style={{display: !closeButton && 'none'}} onClick={handleClose}>x</button>
        <div className="inputs-container">

          {currentComponent}
        </div>
        {!isLastStep && (
          <div className="actions">
          <button type="button" onClick={() => changeStep(currentStep - 1)}>
            <span>Voltar</span>
          </button>
          <button type="button" onClick={(e) => changeStep(currentStep + 1, e)}>
            <span>Avançar</span>
          </button>
        </div>
        )}
      </div>
  )
}

export default FormContent