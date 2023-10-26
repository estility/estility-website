import React from 'react'
import Future, { Props } from '../../components/future/future'
import './about-us.css';
import image from '../../assets/our-story.png';
import Offers from '../../components/offers/offers';
import { BiBriefcaseAlt, BiCartAlt } from 'react-icons/bi';
import { IoBulbOutline } from 'react-icons/io5';
import { MdAccessibilityNew } from 'react-icons/md';
import Contact from '../../components/contact/contact';
import imageBanner from '../../assets/our-vision.png';
import { useDispatch, useSelector } from 'react-redux';
import { showForm } from '../../redux/reducers/display-form-reducer';

export const BottomBanner:React.FC<Props> = ({title, text, buttonText}) => {
  const dispatch = useDispatch();
  const display = useSelector((state: any) => state?.displayForm);
 
const toggle = () => {
  dispatch(showForm())
}
  return (
    <div className='about-container full-width text-center d-flex flex-column text-white sora-font align-items-center justify-center'>
        <div className='about-title'>{title}</div>
        <div className='about-subtitle'>{text}</div>
         <button onClick={toggle} className='violet-color about-button'>{buttonText}</button>
    </div>
  )
}

const AboutUs = () => {
 
  const offers = [
    {
      id: 1,
      title: 'Customer-Centric Focus ',
      text: "We are servants of your needs. Our solutions are crafted to simplify your tasks, amplify convenience, and heighten security. Our focus isn't just on technology; it's on your experience, your satisfaction, and your success.",
      icon: <BiBriefcaseAlt size={20}/>
    },

    {
      id: 2,
      title: 'Thriving Partnership Network',
      text: "Collaboration is at our core. We don't just offer products; we provide gateways to a network of valuable partnerships. Our ecosystem empowers you with connections to elevate your estate management journey.",
      icon:  <MdAccessibilityNew size={20}/>
    },

    {
      id: 3,
      title: 'Innovative Approach',
      text: "Innovation is woven into the fabric of our company. We are trailblazers, unafraid to challenge conventions, set trends, and create solutions. With us, you're not merely keeping pace; you're forging ahead in an ever-evolving landscape.",
      icon: <BiCartAlt size={20}/>
    },

    {
      id: 4,
      title: 'Comprehensive Solutions ',
      text: 'Our product suite is a reflection of our commitment. From our Estate Management Software to, our Resident App, designed for seamless interaction, each solution is borne of a deep understanding of the ecosystem, our customers, and your needs.',
      icon: <IoBulbOutline size={20}/>
    }
  ]
  
  return (
    <div className='d-flex flex-column about-page-container'>
      <div className='about-banner-bg'><BottomBanner title='Empowering Estates, Enriching Communities' buttonText='Request a Demo!' text='Where Innovation Meets Community, and Excellence Elevates Living.' /></div>
      <div className='d-flex flex-column about-content'>
       <div className=' mt-2 custom-row justify-content-between align-center'>
        <div className=' story-image custom-col-md-6'><img src={image} alt=''  /></div>
        <div className='custom-col-md-6 violet-background our-story-container'>
          <div className='d-flex flex-column justify-center align-items-center gap-10 violet-background'>
          <div className='violet-color ourstory-heading text-center sora-font bold-600 font-size-24 border-8'>Our Story</div>
          <div className='sora-font story-text'>
          At Estility, we are driven by our love for innovation and our desire to serve. We set out to use technology to meet the ever-changing needs of contemporary communities, aiming 
          to simplify, secure, and enrich the lives of the people we serve.
          </div>
          </div>
        </div>
       </div>

       <div className='custom-row justify-content-between align-center mt-2'>
       <div className='custom-col-md-6 violet-background our-story-container text-center'>
          <div className='d-flex flex-column justify-center align-items-center gap-10'>
          <div className='violet-color sora-font bold-600 font-size-24  ourstory-heading text-center border-8'>Our VISION AND MISSION</div>
          <div className='story-text bold-600 font-size-20 sora-font'>Our Vision:</div>
          <div className='sora-font story-text'>To bring convenience to everyone</div>
          <div className='story-text bold-600 font-size-20 sora-font'>Our Mission</div>
          <div className='sora-font story-text'>
          <span style={{ width: '70%'}}>Improving the way people live in communities through innovative solutions and services.</span>
          </div>
          </div>
        </div>
        <div className='story-image custom-col-md-6'><img src={imageBanner} alt=''  /></div>
       </div>
      </div>
      <Offers items={offers} heading='Centered on You, the customer'/>
      <Contact />
      <Future />
      <br />
      <br />
    </div>
  )
}

export default AboutUs