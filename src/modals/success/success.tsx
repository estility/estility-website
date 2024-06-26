import React, { useState } from 'react'
import closeIcon from '../../assets/close-icon.svg';
import successIcon from '../../assets/Light.png';

import './success.css';

interface SuccessProps {
  title: string;
  text: string;
  isModalOpen: boolean;
  handleModalOpen: (isOpen: boolean) => void;
}

const SecondSuccess = ({ title, text, isModalOpen, handleModalOpen }: SuccessProps) => {

  if (!isModalOpen) return null;
  return (
    <div className='success-modal-overlay'>
      <div className='modal-container'>
        <div className='success-container sora-font'>
          <div className='full-width d-flex justify-content-between align-center'>
            <div className='success-title flexgrow-1 text-center'>{title}</div>
            <button onClick={() => handleModalOpen(false)} className='close-button'><img src={closeIcon} alt='close-icon' /></button>
          </div>
          <div className='success-button'><img src={successIcon} alt='success-icon' /></div>
          <div className='success-text'><p>{text}</p></div>
        </div>
      </div>
    </div>
  )
}

export default SecondSuccess