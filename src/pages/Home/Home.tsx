import React, { useState } from 'react'
import './home.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Offers from '../../components/offers/offers';
import { BiBriefcaseAlt, BiCartAlt } from 'react-icons/bi';
import { MdAccessibilityNew } from 'react-icons/md';
import { IoBulbOutline } from 'react-icons/io5';
import frameOne from '../../assets/estate-sec.png';
import frameTwo from '../../assets/estate-mgt.png';
import frameThree from '../../assets/estate-resident.png';
import amico from '../../assets/vendors.png';
import Faq from '../../components/faq/questions';
import Contact from '../../components/contact/contact';
import Future from '../../components/future/future';
import { useDispatch, useSelector } from 'react-redux';
import { showForm } from '../../redux/reducers/display-form-reducer';

const Home = () => {
  const offers = [
    {
      id: 1,
      title: 'Estate levies collection ',
      text: 'Receive prompt and automated payments of  community resident levies, eliminating the need for manual or coercive collection means.  ',
      icon: <BiBriefcaseAlt size={20}/>
    },

    {
      id: 2,
      title: 'Security and Access Control ',
      text: "Secure your residential and gated community with our visitor management solution. Monitor entries and exits, guarantee resident safety, and effortlessly maintain a secure environment.",
      icon:  <MdAccessibilityNew size={20}/>
    },

    {
      id: 3,
      title: 'Grocery Shopping and Cooking Gas Delivery ',
      text: "Experience the convenience of online grocery shopping in Nigeria. Buy your groceries and cooking gas from trusted vendors in Nigeria, using our online store and gas delivery platform. Enjoy prompt deliveries of your purchases to your doorstep.",
      icon: <BiCartAlt size={20}/>
    },

    {
      id: 4,
      title: 'Electricity unit Purchase ',
      text: "Buy Prepaid/Postpaid electricity easily with our electricity purchase feature, 24 hours a day, anywhere in Nigeria",
      icon: <IoBulbOutline size={20}/>
    }
  ]

  const ourProducts = [
    {
      id: 1,
      title: 'Our Products',
      subtitle: 'Estate Management Software',
      text: 'You can now remotely oversee your estate and gated community with the ability to add property units, add or remove residents, track estate financial records, monitor visitor logs, attend to resident complaints, and manage estate personnel. ',
      image: frameTwo
    },

    {
      id: 2,
      title: '',
      subtitle: 'Estate Security System',
      text: 'Experience a new level of safety with our state-of-the-art Estate Security System. Gain real-time visitor access monitoring, identity verification, and an overall security enhancement. Stay in control and promote a secure environment within your community. ',
      image: frameOne,
    }, 

    {
      id: 3,
      title: '',
      subtitle: 'Estate Resident App',
      text: "Our comprehensive Residents App provides residents with a wide range of essential features to simplify and enhance their living experience. Whether it's paying estate dues and levies, lodging complaints, generating visitor access codes, or buying groceries and cooking gas online , you can do it all, effortlessly and stress-free.",
      image: frameThree,
    }
  ]
  
  const dispatch = useDispatch();
  const display = useSelector((state: any) => state?.displayForm);
 
const toggle = () => {
  dispatch(showForm())
}

  return (
    <div className='homepage-container'>
      <div className='banner'>
        <div className='sora-font violet-color banner-header'>
        Elevate Your Community and Estate Management in Nigeria with innovative solutions. 
        </div>
        <div className='banner-subheader sora-font'>
        Our software solution automates estate and facility management for Nigerian property owners and residents, See how our software simplifies estate management. 
         </div>
      <div className='request-demo'>
        <button onClick={toggle} className='violet-background'>Request Demo</button>
      </div>
      
      <div className='learn-more'>
        <a href='/products' className='violet-color sora-font learn-more'>
        Learn more about our products <AiOutlineArrowRight />
        </a>
      </div>
      <div className='table-banner' />
      </div>
     <Offers items={offers} heading='What we offer' text='Our Suite of Services enhances our daily living experience' />
      <div className='d-flex flex-column products'>
        {ourProducts.map((product) => (
        <div className='d-flex justify-content-between product'>
          <div className='d-flex product-descriptions flex-column flexgrow-1 justify-center'>
            <div className='product-title sora-font'>{product?.title}</div>
            <div className='product-subtitle violet-color'>{product?.subtitle}</div>
            <div className='product-text'>{product.text}</div>
            <div className='violet-color learn-more'><a className='d-flex align-center sora-font' href='/products'>Learn More&nbsp;<AiOutlineArrowRight /></a></div>
          </div>
          <div className='flexgrow-1 product-images'>
            <img src={product.image} alt='product' />
          </div>
        </div>
        ))}
      </div>
      <div className='violet-background d-flex justify-content-between align-center vendor-group mt-2'>
        <div className='flexgrow-1 d-flex flex-column vendor-item'>
         <div className='vendors-header sora-font text-white'>Vendors</div>
         <div className='vendor-text sora-font text-white'>Grow your business significantly by connecting with an extensive network of residents spanning multiple estates around you. Manage your products and your orders directly from your computer or mobile phone!  Join our ecosystem of vendors committed to delivering excellence and convenience. </div>
          <a href='/contact' className='text-white no-wrap'>Become A Vendor</a>
        </div>
        <div className='flexgrow-1 vendor-group-img'>
          <img src={amico} alt='amico' />
        </div>
      </div>
            <div className='faq-and-contact'>

      <Faq />
      <Contact />
      </div>
      <Future /><br /><br />
    </div>
  )
}

export default Home