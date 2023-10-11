import React from 'react'
import { HeaderBanner } from '../terms-and-conditions/terms-and-conditions'
import { AiOutlineCheck } from 'react-icons/ai'
import frame3 from '../../assets/frame-3.png'
import './product.css';
import { BottomBanner } from '../About/AboutUs';
import Future from '../../components/future/future';

const Products = () => {
  const EstateMgtSoftware = () => (
    <div className='gap-10 custom-col-md-6 mt-1'>
     <div style={{float: 'left', borderRadius: '50px', padding: '3px', marginRight: '3px' }} className='d-flex align-items-center violet-background'><AiOutlineCheck color='#fff' /></div>
     <div className='d-flex flex-column'>
      <div className='dark-font sora-font bold-600 estate-mgt-product'>RESIDENT DATABASE MANAGEMENT</div>
      <div className='font-size-14 dark-font estate-mg-product-desc'>Keep track of all residents effortlessly. Our software centralizes 
        resident data, making communication and record-keeping seamless.</div>
     </div>
    </div>
  )

  const Solutions = () => (
    <div className='custom-row justify-content-between mt-3'>
    <div className='custom-col-md-6'>
      <div className='d-flex flex-column'>
       <div className='violet-color sora-font bold-600 estate-software-title'>ESTATE MANAGEMENT SOFTWARE</div>
       <div className='dark-color sora-font estate-software-text'>Estate Management Software: Make estate management easy with our advanced software. Effortlessly manage resident information and due payments. Our software provides a 
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
    <div className='d-flex flex-column product-container'>
      <HeaderBanner title='Smart Solutions for Easy Living' 
        subText='At ESTILITY, we believe in simplifying your life, enhancing security, and connecting communities.'
       hasSubText={true} hasButton={true} buttonText='Request A Demo'/>
       <div className='d-flex flex-column product-display'>
        <Solutions />
        <Solutions />
        <Solutions />
       </div>
       <br /><br /><br /><br /><br /><br /><br />
       <Future />
    </div>
  )
}

export default Products