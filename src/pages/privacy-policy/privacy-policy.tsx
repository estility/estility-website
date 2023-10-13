import React from 'react'
import TermsAndConditions from '../terms-and-conditions/terms-and-conditions'
import { termsArray } from '../../components/terms'

const PrivacyPolicy = () => {
  return (
    <TermsAndConditions terms={termsArray}/>
  )
}

export default PrivacyPolicy