import React from 'react'
import { HeaderBanner } from '../terms-and-conditions/terms-and-conditions'
import { AiOutlineCheck } from 'react-icons/ai'
import frame3 from '../../assets/estate-mgt.png'
import frame1 from '../../assets/estate-resident.png'
import frame2 from '../../assets/estate-sec.png'
import './product.css';
import { BottomBanner } from '../About/AboutUs';
import Future from '../../components/future/future';
import { Solutions, ResidentApp, SecuritySystem } from './product-items';
import { useDispatch, useSelector } from 'react-redux'
import { showForm } from '../../redux/reducers/display-form-reducer'

const Products = () => {
  
  const dispatch = useDispatch();
 
const toggle = () => {
  dispatch(showForm())
}

  return (
    <div className='d-flex flex-column product-container'>
      <HeaderBanner title='Smart Solutions for Easy Living' 
        subText="At ESTILITY, we simplify your life, enhance your security, and keep you connected to your community."
       hasSubText={true} hasButton={true} buttonText='Request A Demo' linkText='/contact'
       onClick={toggle}
        />
       <div className='d-flex flex-column product-display'>
        <Solutions title='ESTATE MANAGEMENT SOFTWARE' 
        description='Make estate management easy with our advanced software. Effortlessly manage resident information and due payments. Our software provides a centralized hub for property management and communication.'
        image={frame3}
         />
        <SecuritySystem title='Estate Security System' 
        description='Take control of your security with our comprehensive Estate Security System. Monitor access in real-time, verify identities, and safeguard your community.'
        image={frame2} />

        <ResidentApp title='ESTATE RESIDENT APP' 
        description=' Our dedicated Residents App empowers residents with a variety of essential functions for easy living.'
        image={frame1}
        />
       </div>
       <br /><br />
       <Future />
    </div>
  )
}

export default Products