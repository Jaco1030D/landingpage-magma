import React from 'react'
import Form from '../../others/Form'
import { QuotationServiceText } from '../../../constants'

const QuotationService = () => {

  return (
    <section className='section' id='quotation-section'>
      <center>
      <h1>{QuotationServiceText.title}</h1>
      </center>
      <Form texts={QuotationServiceText} />
    </section>
  )
}

export default QuotationService