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
      title: 'Earn with Flexibility ',
      text:   "As an Estility rider, you'll have the flexibility to choose your working hours and manage your deliveries as per your convenience.",
      icon: <BiBriefcaseAlt size={20}/>
    },

    {
      id: 2,
      title: 'Great Earning Potential ',
      text: "Your earnings are a reflection of your efforts. With every successful delivery, you contribute to your income and get a clear overview of your earnings.",
      icon:  <MdAccessibilityNew size={20}/>
    },

    {
      id: 3,
      title: 'Supportive Platform ',
      text: "Our user-friendly delivery app ensures that you're guided through every order, making the entire process easy and efficient.",
      icon: <BiCartAlt size={20}/>
    },

    {
      id: 4,
      title: 'Community Impact ',
      text: "Being a delivery rider isn't just about delivering groceries – it's about bringing smiles to people's faces. Your timely deliveries contribute to the convenience of residents' lives.",
      icon: <BiCartAlt size={20}/>
    },
  ]
  return (
    <div className='d-flex flex-column vendor-container'>
       <HeaderBanner title='Deliver Convenience One Order at a Time!' 
       hasSubText={false} hasButton={true} buttonText='Request A Demo'/>
        <VendorContent items={offers} heading='Why Estility?'/>
       <div className='rider-div'>
      <RiderMgtSystem title='WHO CAN BE AN ESTILITY RIDER ?' 
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