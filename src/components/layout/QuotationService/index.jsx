import React from 'react'
import Form from '../../others/Form'
import { QuotationServiceText } from '../../../constants'

const QuotationService = () => {

  return (
    <div className='section' id='quotation-section'>
      <h1>{QuotationServiceText.title}</h1>
      <Form texts={QuotationServiceText} />
    </div>
  )
}

export default QuotationService