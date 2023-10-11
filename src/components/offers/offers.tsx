import React from 'react'
import './offers.css';
interface Props {
  items: any
  heading?: string;
  text?: string
}
const Offers:React.FC<Props> = ({items, heading, text}) => {
  return (
    <div className='violet-background offers sora-font'>
    <div className='text bold-600'>{heading}</div>
    <div className='text-white suite-service'>{text}</div>
  <div className='offers-container'>
  {items.map((offer:any) => (
    <div key={offer?.id} className='offer-item text-white'>
      <div className='offer-icon bg-white'>{offer?.icon}</div>
      <div className='offer-item-header'>{offer.title}</div>
      <div className='offer-item-text'>{offer.text}</div>
    </div>
  ))}
  <div>
  </div>
  </div>
  </div>
  )
}

export default Offers