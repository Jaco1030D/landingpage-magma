import "./style.css";

const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      
      <ul className='progress-bar'>
      <li className={currentStep === 0 ? 'stop' : ''} >
        <p>Selecione o Idioma</p>
      </li>
      <li className={currentStep === 1 ? 'stop' : ''}>
        <p>Envie os Arquivos</p>
      </li>
      <li >
        <p>Adicione Informações</p>
      </li>
    </ul>
    </div>
  );
};

export default Steps;