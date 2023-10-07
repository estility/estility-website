import React from 'react'
import './offers.css';
interface Props {
  items: any
}
const Offers:React.FC<Props> = ({items}) => {
  return (
    <div className='violet-background offers sora-font'>
    <div className='text'>What we offer</div>
    <div className='text-white suite-service'>Our Suite of Services enhances our daily living experience</div>
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