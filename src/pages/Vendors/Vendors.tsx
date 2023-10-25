import React from 'react'
import { HeaderBanner } from '../terms-and-conditions/terms-and-conditions'
import Offers from '../../components/offers/offers'
import { BiBriefcaseAlt, BiCartAlt } from 'react-icons/bi'
import { IoBulbOutline } from 'react-icons/io5'
import { MdAccessibilityNew } from 'react-icons/md'
import { VendorMgtSystem } from '../Products/product-items'
import vendors from '../../assets/vendors-image.png'
import Future from '../../components/future/future'
import './vendor.css';
import VendorContent from './vendor-content'

const Vendors = () => {
  const offers = [
    {
      id: 1,
      title: 'Reach More People ',
      text: 'With a vast user base across multiple estates, partnering with ESTILITY opens doors to a broader customer network..  ',
      icon: <BiBriefcaseAlt size={20}/>
    },

    {
      id: 2,
      title: ' Efficient Operations',
      text: 'Our Vendor Management System simplifies order processing, inventory management, and earnings tracking, streamlining your business processes.',
      icon:  <MdAccessibilityNew size={20}/>
    },

    {
      id: 3,
      title: 'Enhanced Visibility',
      text: 'Show your services to a ready audience through our platform, increasing your brand’s visibility and recognition.',
      icon: <BiCartAlt size={20}/>
    },
  ]

  return (
    <div className='d-flex flex-column vendor-container'>
       <HeaderBanner title='Become an Estility Vendor Let’s Flourish Together' 
        subText='We welcome vendors to be a part of our vibrant network and contribute to elevating community living.'
       hasSubText={true} hasButton={false} hasLink={true} linkText='/contact' buttonText='BECOME A PARTNER' />
     
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
      image={vendors}
       />
             </div>

       <Future />
       <br /><br /><br /><br />
    </div>
  )
}

export default Vendors