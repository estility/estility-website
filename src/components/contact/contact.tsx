import React, { useState } from 'react';
import './contact.css';
import { BiLogoFacebookCircle, BiLogoInstagram } from 'react-icons/bi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';
import axios from 'axios';
import SecondSuccess from '../../modals/success/success';
import { toast } from 'react-toastify';

const Contact = () => {
    const socialContacts = [
        {
            id: 1,
            title: "Lets's Talk",
            text: "Feel free to get in touch with us for any inquiries, feedback, or collaborations. We're always eager to connect."
        },

        {
            id: 2,
            title: 'Location',
            text: 'Lekki, Lagos, Nigeria',
        },

        {
            id: 3,
            title: 'Email',
            text: 'support@estility.co'
        }
    ]

    const socialIcons = [
        {
            id: 1,
            name: 'facebook',
            link: 'https://www.facebook.com/estilityng',
            icon: <BiLogoFacebookCircle size={20} color='#424246' />
        },

        {
            id: 2,
            name: 'twitter',
            link: 'https://www.twitter.com/estilityng',
            icon: <AiFillTwitterCircle size={20} color='#424246' />
        },
        {
            id: 3,
            name: 'linkedin',
            link: 'https://www.linkedin.com/company/estilityng',
            icon: <IoLogoLinkedin size={20} color='#424246' />
        },

        {
            id: 4,
            name: 'instagram',
            link: 'https://www.instagram.com/estilityng',
            icon: <BiLogoInstagram size={20} color='#424246' />
        }
    ]

    const [selectedTopic, setSelectedTopic] = useState('');

    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        message: '',
        topic: selectedTopic,
        mobile: '',
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }
   
    const purposeForm = [
        {
            id: 1,
            title: 'General',
        },

        {
            id: 2,
            title: 'Our Services'
        },

        {
            id: 3,
            title: 'Support'
        },

        {
            id: 4,
            title: 'Partnership'
        },

        {
            id: 5,
            title: 'Become a Vendor'
        },

        {
            id: 5,
            title: 'Become a Rider'
        }
    ]

    const [ onFinish, setOnFinish ] = useState(false);
    const [onError, setOnError] = useState(false);
    const baseUrl = process.env.REACT_APP_BASE_URL || 'https://node-backend-landing-page.herokuapp.com';
    const [loading, setLoading] = useState(false);

    const isFullNameValid = formValues.fullName.trim() !== '';
        const isEmailValid = formValues.email.includes('@') && formValues.email.includes('.');
        const isAddressValid = formValues.address.trim() !== '';
        const isCityValid = formValues.city.trim() !== '';
        const isStateValid = formValues.state.trim() !== '';
        const isMessageValid = formValues.message.trim() !== '';
        const isMobileValid = /^\+\d+([\s-]\d+)*$/.test(formValues.mobile);
        const isMessageTooLong = formValues.message.length > 500;
        const isTypeValid = selectedTopic.trim() !== '';

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
      
        if (!isFullNameValid) {
          toast.error('Full Name is required');
        }
      
        if (!isEmailValid) {
          toast.error('Email is invalid');
        }
      
        if (!isAddressValid) {
          toast.error('Address is required');
        }
      
        if (!isCityValid) {
          toast.error('City is required');
        }
      
        if (!isStateValid) {
          toast.error('State is required');
        }
      
        if (!isMessageValid) {
          toast.error('Message is required');
        }
      
        if (!isMobileValid) {
          toast.error('Mobile number is invalid');
        }

        if(isMessageTooLong) {
            toast.error('Message must not be more than 500 characters')
        }

        if(!isTypeValid) {
            toast.error('Please pick a reason for contacting us')
        }
      
        if (
          !isFullNameValid ||
          !isEmailValid ||
          !isAddressValid ||
          !isCityValid ||
          !isStateValid ||
          !isMessageValid ||
          !isMobileValid ||
          isMessageTooLong ||
          !isTypeValid
        ) {
          setLoading(false);
          setOnError(true);
          return;
        }
      
        // Validation passed; continue with the request
        const info = {
          type: selectedTopic,
          name: formValues.fullName,
          email: formValues.email,
          mobile: formValues.mobile,
          address: formValues.address,
          city: formValues.city,
          state: formValues.state,
          message: formValues.message,
        };
      
        try {
          const response = await axios.post(
            `${baseUrl}estility/v1/3231/website/contact`,
            info
          );
          setLoading(false);
          console.log(response.data?.status);
          setOnFinish(true);
        } catch (error) {
          setLoading(false);
          console.error('Axios request error:', error);
        }
      };
      

    return (
        <div className='d-flex justify-content-between contact-container'>
            <div className='d-flex flex-column sora-font flexgrow-1 social-contact'>
                {window.location.pathname === '/contact' ? <div className='contact-image' /> : null}
                {socialContacts?.map((contact) => (
                    <div className='d-flex flex-column social-talks'>
                        <div className='fw-bold social-title sora-font'>{contact?.title}</div>
                        <div className='social-text'>{contact?.text}</div>
                    </div>
                ))}
                <div className='d-flex flex-column social-talks'>
                    <div className='fw-bold violet-color social-title'>Socials</div>
                    <div className='d-flex social-contact-icons gap-10'>
                        {socialIcons.map((socialIcon) => (
                            <div className=''>
                                <a className='violet-color social-link-icons' key={socialIcon.id} href={socialIcon.link} target='_blank' rel="noreferrer">
                                    {socialIcon?.icon}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='gap-10 flexgrow-1 d-flex flex-column form-container'>
                <div className='d-flex flex-column sora-font input-div'>
                    <div className='form-label sora-font'>Full Name</div>
                    <input required name='fullName' onChange={handleChange} className='flexgrow-1' placeholder='Enter your name' type='text' />
                </div>

                <div className='d-flex flex-column sora-font input-div'>
                    <div className='form-label sora-font'>Email</div>
                    <input required name='email' onChange={handleChange} className='flexgrow-1' placeholder='Enter your email address' type='email' />
                </div>

                <div className='d-flex flex-column sora-font input-div'>
                    <div className='form-label sora-font'>Address</div>
                    <input required name='address' onChange={handleChange} className='flexgrow-1' placeholder='Your current address' type='text' />
                </div>

                <div className='d-flex flex-column sora-font input-div'>
                    <div className='form-label sora-font'>Phone Number</div>
                    <input required name='mobile' onChange={handleChange} className='flexgrow-1' placeholder='Your phone number' type='text' />
                </div>

                <div className='d-flex gap-10 justify-content-between city-state'>
                    <div className='d-flex flex-column flexgrow-1 sora-font input-div'>
                        <div className='form-label sora-font'>City</div>
                        <input required name='city' onChange={handleChange} className='flexgrow-1' placeholder='Enter your city' type='text' />
                    </div>
                    <div className='d-flex flex-column flexgrow-1 sora-font input-div'>
                        <div className='form-label sora-font'>State</div>
                        <input required name='state' onChange={handleChange} className='flexgrow-1' placeholder='State' type='text' />
                    </div>
                </div>

                <div className='purpose-heading sora-font'>What are you reaching about</div>

                <div className='d-flex flex-wrap justify-content-between purpose-button'>
                    {purposeForm?.map((purpose) => (
                        <button type='button' onClick={() => setSelectedTopic(purpose?.title)} className={`sora-font flexgrow-1 ${selectedTopic === purpose?.title ? 'selected' : ''}`} key={purpose?.id}>{purpose?.title}</button>
                    ))}
                </div>

                <div className='sora-font'>Message</div>

                <textarea name='message' onChange={handleChange} placeholder='Type your message'></textarea>

                <div className="char-count sora-font">
                    {formValues.message.length}/500 Characters
                 </div>
                 {formValues?.message?.length > 500 ? <p className='text-danger font-size-14 fw-bold'>Characters must not be more than 500</p> : null }
                <div className='d-flex justify-content-center contact-button'>
                    <button type='submit' disabled={loading} className='text-white violet-background'>{loading ? 'Sending...' : 'Submit'}</button>
                </div>
            </form>
            <SecondSuccess title='Message Recieved' text='Your message has been recieved. Someone from our team  will reach out to you soon' isModalOpen={onFinish} handleModalOpen={setOnFinish} />
        </div>
    )
}

export default Contact