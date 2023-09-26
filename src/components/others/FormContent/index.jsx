// import React, { useEffect, useState } from 'react'
import './style.css'
const FormContent = ({texts, currentComponent, changeStep, currentStep, isLastStep, handleSubmit}) => {
  // const [originalPosition, setOriginalPosition] = useState(0);
  // const [close, setClose] = useState(false)
  // const [closeButton, setCloseButton] = useState(false)
  // const [divStyle, setDivStyle] = useState({
  //   position: 'relative',
  // });
  // const handleClose = () => {
  //   setClose(true)
  //   setDivStyle({
  //     position: 'relative',
  //   });
  //   setCloseButton(false)
  // }
  // useEffect(() => {
  //   const div = document.getElementById('myForm');
  //   if (div) {
  //     setOriginalPosition(div.offsetTop);
  //   }

  //   const handleScroll = () => {
  //     if (!close) {
  //       const scrollTop = window.scrollY;
  //       if (scrollTop > originalPosition) {
  //         setDivStyle({
  //           position: 'fixed',
  //           top: '0',
  //           width: '300px',
  //           padding: '25px',
  //           borderRadius: '15px',
  //           height: '400px',
  //           border: '2px solid #C8982A'
  //         });
  //         setCloseButton(true)
  //       } else {
  //         setDivStyle({
  //           position: 'relative'
  //         });
  //         setCloseButton(false)
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [originalPosition, close]);
  return (
    <form name='Quotation' action='/Quotation' method='post' id='myForm' enctype="multipart/form-data">
        <h2>{texts.formSteps.title}</h2>
        <div className="inputs-container">

          {currentComponent}
        </div>
          <div className="actions">
          <button type="button" onClick={() => changeStep(currentStep - 1)}>
            <span>Voltar</span>
          </button>
        {!isLastStep ? (
          <button type="button" onClick={(e) => changeStep(currentStep + 1, e)}>
            <span>Avançar</span>
          </button>
        ) : (
          <button type="submit">
            <span>Enviar</span>
          </button>
        ) }
        </div>
      </form>
  )
}

export default FormContent