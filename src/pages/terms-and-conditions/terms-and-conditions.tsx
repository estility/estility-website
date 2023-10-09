import React from 'react'
import { termsArray } from '../../components/terms'
import './terms-and-conditions.css';
import Future from '../../components/future/future';

interface Props {
    terms: typeof termsArray
}

const TermsAndConditions = ({terms}: Props) => {

    const highlightEstility = (text: string) => {
        // Use a regular expression to find and replace "Estility" with the colored version
    return text.replace(/Estility/gi, '<span class="estility-text">Estility</span>');
      };

  return (
    <div className='d-flex flex-column sora-font T-and-C'>
      <div className='terms-and-condition-banner text-center sora-font violet-background text-white fw-bold'>Terms and Conditions of Usage</div>
      <div className='terms-container d-flex flex-column'>
        {terms.map((term: any) => (
            term?.id !== 4 ?
            <div className='d-flex flex-column gap-10'>
                <div className='bold-600 dark-color sora-font t-and-c-title'
                dangerouslySetInnerHTML={{ __html: highlightEstility(term?.title) }}
                />
                <div
                className='sora-font t-and-c-text'
                dangerouslySetInnerHTML={{ __html: highlightEstility(term?.text) }}
              />
            </div>
            :
            <div className='d-flex flex-column gap-10'>
                <div className='bold-600 dark-color sora-font t-and-c-title'>{term?.title}</div>
                <div>
                    {term?.text?.map((item:any, index:number) => (
                        <div className='sora-font t-and-c-text'
                        dangerouslySetInnerHTML={{ __html: highlightEstility(item) }}
                        />
                    ))}
                </div>
            </div> 
        ))}
      </div>
      <Future />
    </div>
  )
}

export default TermsAndConditions