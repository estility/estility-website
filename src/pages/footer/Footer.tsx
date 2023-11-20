import React from 'react';
import './footer.css';
import logo from '../../assets/footer-logo.png';
import { BiLogoFacebookCircle, BiLogoInstagram } from 'react-icons/bi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SecondSuccess from '../../modals/success/success';
import { toast } from 'react-toastify';

const Footer = () => {
  const [ userEmail, setUserEmail ] = React.useState('');
  const [ loading, setLoading ] = React.useState(false);
  const [ onFinish, setOnFinish ] = React.useState(false);

  const onChange = (e: any) => {
    setUserEmail(e.target.value)
  }

  const baseUrl = process.env.REACT_APP_BASE_URL || 'https://node-backend-landing-page.herokuapp.com';

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: userEmail
    }
    try {
      const response = await axios.post(
        `${baseUrl}estility/v1/3231/newsletter/subscribe`,
        data
      );
      setLoading(false);
      setOnFinish(true);
    } catch (error) {
      setLoading(false);
      console.error('Axios request error:', error);
      toast.error('Something went wrong, please try again');
    }
  }

  const socialIcons = [
    {
      id: 1,
      name: 'facebook',
      link: 'https://www.facebook.com/estilityng',
      icon: <BiLogoFacebookCircle />
    },

    {
      id: 2,
      name: 'twitter',
      link: 'https://www.twitter.com/estilityng',
      icon: <AiFillTwitterCircle />
    },
    {
      id: 3,
      name: 'linkedin',
      link: 'https://www.linkedin.com/company/estilityng',
      icon: <IoLogoLinkedin />
    },
    
    {
      id: 4,
      name: 'instagram',
      link: 'https://www.instagram.com/estilityng',
      icon: <BiLogoInstagram />
    }
  ]

  const footerLinks = [
    {
      id: 1,
      title: 'About Us',
      link: '/about-us',
    },

    {
      id: 2,
      title: 'Careers',
      link: '/careers',
    },

    {
      id: 3,
      title: 'Products',
      link: '/products',
    },

    {
      id: 4,
      title: 'Vendors',
      link: '/vendors',
    },

    {
      id: 5,
      title: 'Riders',
      link: '/riders',
    }
  ]

  const supportFooterLinks = [
    {
      id: 1,
      title: 'FAQs',
      link: '/faq',
    },

    {
      id: 2,
      title: 'Contact Us',
      link: '/contact',
    },

    // {
    //   id: 3,
    //   title: 'Blogs',
    //   link: '/blogs',
    // },

    {
      id: 4,
      title: 'Terms and Conditions',
      link: '/terms-and-conditions',
    },

    {
      id: 5,
      title: 'Privacy Policy',
      link: '/privacy-policy',
    }
  ]
  

  return (
    <div className='footer violet-background sora-font'>
      <div className='estility-copy-right'>
       <div className='estility-logo-footer'>
        <img src={logo} alt='logo'/>
        <div className='rosario-font'>Estility</div>
      </div>
      <div className='copyright-text sora-font'>Copyright © 2023 Estility. All rights reserved</div>
      <div className='social-icons'>
        {socialIcons.map((socialIcon) => (
          <div className='social-link-item violet-background'>
          <a className='' key={socialIcon.id} href={socialIcon.link} target='_blank' rel="noreferrer">
            {socialIcon.icon}
          </a>
          </div>
        ))}
      </div>
      </div>
      <div className='footer-links sora-font'>
        <div className='header'>Company</div>
        <div className='footer-links-container'>
        {footerLinks.map((footerLink) => (
          <div className='footer-link-item'>
            <a href={footerLink.link}>{footerLink.title}</a>
          </div>
        ))}
        </div>
      </div>
      <div className='footer-links sora-font'>
        <div className='header'>Support</div>
        <div className='footer-links-container'>
        {supportFooterLinks.map((footerLink) => (
          <div className='footer-link-item'>
            <a href={footerLink.link}>{footerLink.title}</a>
          </div>
        ))}
        </div>
      </div>
      <div className='copyright-text-small sora-font text-center'>Copyright © 2023 Estility. All rights reserved</div>
      <div className='footer-links stay-upto-date'>
        <div className='header'>Stay up to date</div>
        <form className='d-flex gap-10 subscription-form' onSubmit={handleSubmit}>
          <input onChange={onChange} className='footer-input' type='email' required placeholder='Enter your email address'/>
          <button type='submit' disabled={userEmail==="" || loading} className='footer-subscription-button bold-500 violet-color'>{loading ? "Sending..." : 'Subscribe'}</button>
        </form>
      </div>
      <SecondSuccess title='Superb!' text='Now, you’d never miss out on future updates from us' isModalOpen={onFinish} handleModalOpen={setOnFinish} />
      </div>
  )
}

export default Footer