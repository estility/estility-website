import React from 'react';
import Contact from '../../components/contact/contact';
import Future from '../../components/future/future';
import '../../components/contact/contact.css';
import './contact.css';

const ContactForm = () => {
  return (
    <div className='contact-form-component'>
      <Contact />
      <div className='d-flex justify-center'><Future /></div><br /><br />
    </div>
  )
}

export default ContactForm