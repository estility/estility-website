import React, { useState } from 'react'
import { HeaderBanner } from '../terms-and-conditions/terms-and-conditions'
import Offers from '../../components/offers/offers'
import { BiBriefcaseAlt, BiCartAlt, BiMoney, BiSupport } from 'react-icons/bi'
import { IoBulbOutline } from 'react-icons/io5'
import { MdAccessibilityNew } from 'react-icons/md'
import { RiderMgtSystem, VendorMgtSystem } from '../Products/product-items'
import appChart from '../../assets/app-chart.png'
import Future, { BottomBanner } from '../../components/future/future'
import VendorContent from '../Vendors/vendor-content';
import riderimg from '../../assets/estility-rider.png';
import './riders.css';
import { RiCommunityFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux'
import { showForm } from '../../redux/reducers/display-form-reducer'
import { useNavigate } from 'react-router-dom'

const Riders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(showForm())
  }
  const offers = [
    {
      id: 1,
      title: 'Earn with Flexibility ',
      text: "As an Estility rider, you'll have the flexibility to choose your working hours and manage your deliveries as per your convenience.",
      icon: <BiMoney size={20} />
    },

    {
      id: 2,
      title: 'Great Earning Potential ',
      text: "Your earnings are a direct result of your dedication. Each successful delivery not only adds to your income but also provides you with a transparent view of your earnings.",
      icon: <MdAccessibilityNew size={20} />
    },

    {
      id: 3,
      title: 'Supportive Platform ',
      text: "Our user-friendly delivery app is designed to provide you with step-by-step guidance through each order, ensuring the entire process is smooth and effective. ",
      icon: <BiSupport size={20} />
    },

    {
      id: 4,
      title: 'Community Impact ',
      text: "Being a delivery rider isn't just about delivering groceries and other utilities – it's about bringing smiles to people's lives. Your timely deliveries contribute to the convenience of residents' lives.",
      icon: <RiCommunityFill size={20} />
    },
  ]
  return (
    <div className='d-flex flex-column vendor-container'>
      <HeaderBanner title='Deliver Convenience, One Order at a Time!'
        hasSubText={false} hasButton={false} hasLink={true} buttonText='Become a rider' linkText='/contact' />
      <VendorContent items={offers} heading='Why Choose Estility?' />
      <div className='rider-div'>
        <RiderMgtSystem title='Who Qualifies as an Estility Rider?'
          description='An ideal Estility rider should possess the following qualifications:'
          image={riderimg}
        />
      </div>
      <br /><br /><br />
      <BottomBanner title='Making a difference – one doorstep at a time.' buttonText='Become a rider!' onClick={() =>navigate('/contact')}
        text='Are you ready to embark on this journey of convenience and service? 
    Join us as an Estility rider by filling out our application form and becoming a part of our dedicated team.'
      />
      <br /><br /><br /><br />
    </div>
  )
}

export default Riders