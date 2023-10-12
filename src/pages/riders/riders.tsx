import React from 'react'
import { HeaderBanner } from '../terms-and-conditions/terms-and-conditions'
import Offers from '../../components/offers/offers'
import { BiBriefcaseAlt, BiCartAlt } from 'react-icons/bi'
import { IoBulbOutline } from 'react-icons/io5'
import { MdAccessibilityNew } from 'react-icons/md'
import { VendorMgtSystem } from '../Products/product-items'
import appChart from '../../assets/app-chart.png'
import Future from '../../components/future/future'
import VendorContent from '../Vendors/vendor-content';

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
  ]
  return (
    <div className='d-flex flex-column vendor-container'>
       <HeaderBanner title='Become an Estility Vendor Let’s Flourish Together' 
        subText='We welcome vendors to be a part of our vibrant network and contribute to elevating community living.'
       hasSubText={true} hasButton={true} buttonText='Request A Demo'/>
     
        <VendorContent 
      items={offers} 
      heading='Why choose us ?'
      text='Join hands with ESTILITY and embark on a partnership that 
      benefits your business and enriches the lives of communities.
       Become an essential part of the ESTILITY ecosystem today!'
      />
       <div className='vendor-div'>
      <VendorMgtSystem title='Vendor Management System FEATURES' 
      description='Join our Vendor Network to access a host of benefits and reach a wider audience. Our partnership is designed to elevate your business while enriching our community. Explore the features of our Vendor 
      Management System below and take your business to the next level with ESTILITY.'
      image={appChart}
       />
             </div>

       <Future />
       <br /><br /><br /><br />
    </div>
  )
}

export default Riders