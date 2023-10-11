import React from 'react'
import { termsArray } from '../../components/terms'
import './terms-and-conditions.css';
import Future from '../../components/future/future';

interface Props {
    terms: typeof termsArray
}

interface HeaderBannerProps {
    title: string;
    hasSubText: boolean;
    subText?: string;
    hasButton?: boolean
    buttonText?: string;
}

export const HeaderBanner:React.FC<HeaderBannerProps> = ({title, hasSubText, subText, hasButton, buttonText}) => (
  <div className='d-flex flex-column violet-background terms-and'>
  <div className='terms-and-condition-banner d-flex flex-column text-center sora-font text-white bold-600'>{title}</div>
  { hasSubText ? <div className='sora-font t-andc-subtext text-center text-white'>{subText}</div> : null }
  { hasButton===true ? <button className='sora-font banner-button'>{buttonText}</button> : null }
  </div>
)
const TermsAndConditions = ({terms}: Props) => {

    const highlightEstility = (text: string) => {
        // Use a regular expression to find and replace "Estility" with the colored version
    return text.replace(/Estility/gi, '<span class="estility-text">Estility</span>');
      };

  return (
    <div className='d-flex flex-column sora-font T-and-C'>
      <HeaderBanner title='Terms and Conditions' hasSubText={false} hasButton={false} />
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
      <Future /><br /><br />
    </div>
  )
}

export default TermsAndConditions