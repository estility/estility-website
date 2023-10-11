import React from 'react'
import { HeaderBanner } from '../terms-and-conditions/terms-and-conditions'
import { AiOutlineCheck } from 'react-icons/ai'
import frame3 from '../../assets/frame-3.png'
import './product.css';

const Products = () => {
  const EstateMgtSoftware = () => (
    <div className='gap-10 custom-col-md-6 mt-1'>
     <div style={{float: 'left', borderRadius: '50px', padding: '3px', marginRight: '3px' }} className='d-flex align-items-center violet-background'><AiOutlineCheck color='#fff' /></div>
     <div className='d-flex flex-column'>
      <div>Resident Database ManagemenT</div>
      <div>Keep track of all residents effortlessly. Our software centralizes 
        resident data, making communication and record-keeping seamless.</div>
     </div>
    </div>
  )

  const Solutions = () => (
    <div className='custom-row justify-content-between mt-3'>
    <div className='custom-col-md-6'>
      <div className='d-flex flex-column'>
       <div>Estate Management Software</div>
       <div>Estate Management Software: Make estate management easy with our advanced software. Effortlessly manage resident information and due payments. Our software provides a 
        centralized hub for property management and communication.</div>
      </div>
      <div className='custom-row'>
       <EstateMgtSoftware />
       <EstateMgtSoftware />
       <EstateMgtSoftware />
       <EstateMgtSoftware />
      </div>
      <div>
      </div>
    </div>
    <div className='custom-col-md-6 justify-center software-img'>
     <img className='full-width' src={frame3} alt='software' />
    </div>
    </div>
  )
  return (
    <div className='d-flex flex-column'>
      <HeaderBanner title='Smart Solutions for Easy Living' 
        subText='At ESTILITY, we believe in simplifying your life, enhancing security, and connecting communities.'
       hasSubText={true} hasButton={true} buttonText='Request A Demo'/>
       <div className='d-flex flex-column product-display'>
        <Solutions />
        <Solutions />
       </div>
    </div>
  )
}

export default Products