import React from 'react'
import Form from '../../others/Form'
import { QuotationServiceText } from '../../../constants'

import './style.css'

const QuotationService = () => {

  return (
    <section className='section' id='quotation-section'>
      <h1>{QuotationServiceText.title}</h1>
      <Form texts={QuotationServiceText} />
    </section>
  )
}

export default QuotationService