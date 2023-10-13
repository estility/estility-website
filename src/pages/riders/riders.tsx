import React from 'react'
import { HeaderBanner } from '../terms-and-conditions/terms-and-conditions'
import Offers from '../../components/offers/offers'
import { BiBriefcaseAlt, BiCartAlt } from 'react-icons/bi'
import { IoBulbOutline } from 'react-icons/io5'
import { MdAccessibilityNew } from 'react-icons/md'
import { RiderMgtSystem, VendorMgtSystem } from '../Products/product-items'
import appChart from '../../assets/app-chart.png'
import Future from '../../components/future/future'
import VendorContent from '../Vendors/vendor-content';
import riderimg from '../../assets/estility-rider.png';
import './riders.css';

const Riders = () => {
  const offers = [
    {
      id: 1,
      title: 'Collect Estate Levies and Dues ',
      text: 'Receive prompt and automated payments of  community resident levies, eliminating the need for manual or coercive collection means.  ',
      icon: <BiBriefcaseAlt size={20}/>
    },

    {
      id: 2,
      title: 'Security and Access Control ',
      text: 'Secure your residential and gated community with our visitor management solution. Monitor entries and exits, guarantee resident safety, and effortlessly maintain a secure environment. ',
      icon:  <MdAccessibilityNew size={20}/>
    },

    {
      id: 3,
      title: 'Grocery Shopping and Cooking Gas Delivery ',
      text: 'Buy your grocery items and cooking gas from trusted vendors in Nigeria, using our online store and gas delivery platform. Enjoy prompt deliveries of your purchases to your doorstep.',
      icon: <BiCartAlt size={20}/>
    },

    {
      id: 4,
      title: 'Grocery Shopping and Cooking Gas Delivery ',
      text: 'Buy your grocery items and cooking gas from trusted vendors in Nigeria, using our online store and gas delivery platform. Enjoy prompt deliveries of your purchases to your doorstep.',
      icon: <BiCartAlt size={20}/>
    },
  ]
  return (
    <div className='d-flex flex-column vendor-container'>
       <HeaderBanner title='Deliver Convenience One Order at a Time!' 
       hasSubText={false} hasButton={true} buttonText='Request A Demo'/>
        <VendorContent items={offers} heading='Why Estility?'/>
       <div className='rider-div'>
      <RiderMgtSystem title='Who can be an Estility rider?' 
      description='An Ideal Estility rider must have the following:'
      image={riderimg}
       />
             </div>
             <br /><br /><br />
       <Future />
       <br /><br /><br /><br />
    </div>
  )
}

export default Riders