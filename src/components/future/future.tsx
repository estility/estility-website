import React from 'react';
import './future.css';

interface Props {
  title: string;
  text: string;
  buttonText: string
}
export const BottomBanner:React.FC<Props> = ({title, text, buttonText}) => {
  return (
    <div className='future-container text-center violet-background d-flex flex-column text-white sora-font align-items-center justify-center'>
        <div className='future-title'>{title}</div>
        <div className='future-subtitle'>{text}</div>
         <button className='violet-color future-button'>{buttonText}</button>
    </div>
  )
}

const Future = () => {
  return (
    <BottomBanner title='Embrace the future today!' buttonText='Request A Demo!'
    text='Experience the power of our product suite and let us guide you into the future of gated community management.'
    />
  )
}

export default Future;