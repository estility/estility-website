import React from 'react'
import './vendor.css';

interface Props {
    items: any
    heading?: string;
    text?: string
  }

const VendorContent:React.FC<Props> = ({items, heading, text}) => {
  return (
    <div className='vendors sora-font'>
    <div className='text bold-500 dark-color'>{heading}</div>
    <div className='dark-font suite-service'>{text}</div>
  <div className='vendors-container'>
  {items.map((vendor:any) => (
    <div key={vendor?.id} className='vendor-item sora-font dark-color'>
      <div className='vendor-icon bg-white'>{vendor?.icon}</div>
      <div className='vendor-item-header'>{vendor.title}</div>
      <div className='vendor-item-text'>{vendor.text}</div>
    </div>
  ))}
  <div>
  </div>
  </div>
  </div>
  )
}

export default VendorContent;