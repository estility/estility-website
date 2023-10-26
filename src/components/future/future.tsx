import React from 'react';
import './future.css';
import { useDispatch, useSelector } from 'react-redux';
import { showForm } from '../../redux/reducers/display-form-reducer';
import { Link } from 'react-router-dom';

export interface Props {
  title: string;
  text: string;
  buttonText: string
  onClick?: () => void;
}

export const BottomBanner:React.FC<Props> = ({title, text, buttonText, onClick}) => {
  return (
    <div className='future-container text-center violet-background d-flex flex-column text-white sora-font align-items-center justify-center'>
        <div className='future-title'>{title}</div>
        <div className='future-subtitle'>{text}</div>
         {onClick ? <button onClick={onClick} className='violet-color future-button'>{buttonText}</button> : 
        <Link className='violet-color future-link' to='/contact' >{buttonText}</Link>
         }
    </div>
  )
}

const Future = () => {
  const dispatch = useDispatch();
  const display = useSelector((state: any) => state?.displayForm);
 
const toggle = () => {
  dispatch(showForm())
}

  return (
    <BottomBanner title='Embrace the future today!' buttonText='Request a Demo!' onClick={toggle}
    text='Experience the power of our product suite and let us guide you into the future of gated community management.'
    />
  )
}

export default Future;