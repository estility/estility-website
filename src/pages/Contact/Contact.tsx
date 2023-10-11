import React from 'react';
import Contact from '../../components/contact/contact';
import Future from '../../components/future/future';

const ContactForm = () => {
  return (
    <div>
      <Contact />
      <div className='d-flex justify-center'><Future /></div><br /><br />
    </div>
  )
}

export default ContactForm