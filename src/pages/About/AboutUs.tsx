import React from 'react'
import Future, { Props } from '../../components/future/future'
import './about-us.css';
import image from '../../assets/blog-banner.png';
import Offers from '../../components/offers/offers';
import { BiBriefcaseAlt, BiCartAlt } from 'react-icons/bi';
import { IoBulbOutline } from 'react-icons/io5';
import { MdAccessibilityNew } from 'react-icons/md';
import Contact from '../../components/contact/contact';
import imageBanner from '../../assets/bg-3.png';

export const BottomBanner:React.FC<Props> = ({title, text, buttonText}) => {
  return (
    <div className='about-container full-width text-center d-flex flex-column text-white sora-font align-items-center justify-center'>
        <div className='about-title'>{title}</div>
        <div className='about-subtitle'>{text}</div>
         <button className='violet-color about-button'>{buttonText}</button>
    </div>
  )
}

const AboutUs = () => {
 
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
      title: 'Purchase Electricity  ',
      text: 'Buy Prepaid/Postpaid electricity easily with our electricity purchase feature, 24 hours a day, anywhere in Nigeria. ',
      icon: <IoBulbOutline size={20}/>
    }
  ]
  
  return (
    <div className='d-flex flex-column about-page-container'>
      <div className='about-banner-bg'><BottomBanner title='Empowering Estates, Enriching Communities' buttonText='Request A Demo!' text='Where Innovation Meets Community, and Excellence Elevates Living.' /></div>
      <div className='d-flex flex-column about-content'>
       <div className=' mt-2 custom-row justify-content-between align-center'>
        <div className=' story-image custom-col-md-6'><img src={image} alt=''  /></div>
        <div className='custom-col-md-6'>
          <div className='d-flex flex-column justify-center align-items-center gap-10'>
          <div className='violet-color sora-font bold-600 font-size-24'>Our Story</div>
          <div className='dark-color sora-font story-text'>
          At Estility, we are driven by our love for innovation and our desire to serve. We set out to use technology to meet the ever-changing needs of contemporary communities, aiming 
          to simplify, secure, and enrich the lives of the people we serve.
          </div>
          </div>
        </div>
       </div>

       <div className='custom-row justify-content-between align-center mt-2'>
       <div className='custom-col-md-6'>
          <div className='d-flex flex-column justify-center align-items-center gap-10'>
          <div className='violet-color sora-font bold-600 font-size-24'>Our VISION AND MISSION</div>
          <div className='dark-color bold-600 font-size-20 sora-font'>Our Vision:</div>
          <div className='dark-color sora-font story-text'>Bring convenience to everyone</div>
          <div className='dark-color bold-600 font-size-20 sora-font'>Our Mission</div>
          <div className='dark-color sora-font story-text'>
          Improving the way people live in communities through innovative solutions and services.
          </div>
          </div>
        </div>
        <div className=' story-image custom-col-md-6'><img src={image} alt=''  /></div>
       </div>
      </div>
      <Offers items={offers} heading='Centered on You, the customer'/>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Contact />
      <Future />
      <br />
      <br />
    </div>
  )
}

export default AboutUs