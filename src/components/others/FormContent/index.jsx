import React, { useEffect, useState } from 'react'

const FormContent = ({texts, currentComponent, changeStep, currentStep, isLastStep, handleSubmit}) => {
  const [originalPosition, setOriginalPosition] = useState(0);
  const [divStyle, setDivStyle] = useState({
    position: 'relative',
  });

  // UseEffect para adicionar um ouvinte de evento durante a montagem do componente
  useEffect(() => {
    // Obtém a posição original da div quando o componente é montado
    const div = document.getElementById('myForm');
    if (div) {
      setOriginalPosition(div.offsetTop);
    }

    // Função para atualizar o estilo da div com base na posição de rolagem
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > originalPosition) {
        // Quando a posição de rolagem for maior que a posição original, fixe a div.
        setDivStyle({
          position: 'fixed',
          top: '0',
        });
      } else {
        // Caso contrário, volte à posição relativa.
        setDivStyle({
          position: 'relative',
        });
      }
    };

    // Adiciona o ouvinte de evento durante a montagem
    window.addEventListener('scroll', handleScroll);

    // Remove o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [originalPosition]);
  return (
    
    <form name='Quotation' action='/Quotation' method='post' id='myForm' style={divStyle} enctype="multipart/form-data">
        <input type='hidden' name='form-name' value="Quotation" />
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
              <button type="submit" onClick={handleSubmit}>
                <span>Enviar</span>
              </button>
            )}
          </div>
      </form>
  )
}

export default FormContent