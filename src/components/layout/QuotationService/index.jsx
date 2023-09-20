import React, { useRef, useState } from 'react'
import Form from '../../others/Form'
import { QuotationServiceText } from '../../../constants'
import { useSendQuotation } from '../../../hooks/useSendQuotation';

const formTemplate = {
  name: "",
  office: "",
  email: "",
  archive: [],
  typeContent: "",
  sourceLanguage: "",
  languageForTradution: "",
};

const QuotationService = () => {
  const [data, setData] = useState(formTemplate);


  const { send } = useSendQuotation()

  const handleSubmit = (e) => {
    e.preventDefault()

  }
  return (
    <div className='section' id='quotation-section'>
      <h1>{QuotationServiceText.title}</h1>
      <Form data={data} setData={setData} handleSubmit={handleSubmit} texts={QuotationServiceText} />
    </div>
  )
}

export default QuotationService