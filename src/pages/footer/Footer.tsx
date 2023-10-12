import React from 'react';
import './footer.css';
import logo from '../../assets/footer-logo.png';
import { BiLogoFacebookCircle, BiLogoInstagram } from 'react-icons/bi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialIcons = [
    {
      id: 1,
      name: 'facebook',
      link: 'https://www.facebook.com/estility',
      icon: <BiLogoFacebookCircle />
    },

    {
      id: 2,
      name: 'twitter',
      link: 'https://twitter.com/estility',
      icon: <AiFillTwitterCircle />
    },
    {
      id: 3,
      name: 'linkedin',
      link: 'https://www.linkedin.com/company/estility',
      icon: <IoLogoLinkedin />
    },
    
    {
      id: 4,
      name: 'instagram',
      link: 'https://www.instagram.com/estility/',
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
      link: '/contact',
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

    {
      id: 3,
      title: 'Blogs',
      link: '/blogs',
    },

    {
      id: 4,
      title: 'Terms and Conditions',
      link: '/terms-and-conditions',
    },

    {
      id: 5,
      title: 'Privacy Policy',
      link: '/privacy policy',
    }
  ]
  

  return (
    <div className='footer violet-background sora-font'>
      <div className='estility-copy-right'>
       <div className='estility-logo-footer'>
        <img src={logo} alt='logo'/>
        <div>Estility</div>
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
      <div className='footer-links'>
        <div className='header'>Company</div>
        <div className='footer-links-container'>
        {footerLinks.map((footerLink) => (
          <div className='footer-link-item'>
            <a href={footerLink.link}>{footerLink.title}</a>
          </div>
        ))}
        </div>
      </div>
      <div className='footer-links'>
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
        <input className='footer-input' type='text' placeholder='Enter your email address'/>
      </div>
      </div>
  )
}

export default Footer