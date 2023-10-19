import React, { useState } from 'react';
import './contact.css';
import { BiLogoFacebookCircle, BiLogoInstagram } from 'react-icons/bi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';
import axios from 'axios';
import SecondSuccess from '../../modals/success/success';

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
            text: 'info@estility.co'
        }
    ]

    const socialIcons = [
        {
            id: 1,
            name: 'facebook',
            link: 'https://www.facebook.com/estility',
            icon: <BiLogoFacebookCircle size={20} color='#424246' />
        },

        {
            id: 2,
            name: 'twitter',
            link: 'https://twitter.com/estility',
            icon: <AiFillTwitterCircle size={20} color='#424246' />
        },
        {
            id: 3,
            name: 'linkedin',
            link: 'https://www.linkedin.com/company/estility',
            icon: <IoLogoLinkedin size={20} color='#424246' />
        },

        {
            id: 4,
            name: 'instagram',
            link: 'https://www.instagram.com/estility/',
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
        }
    ]

    const [ onFinish, setOnFinish ] = useState(false);
    const [onError, setOnError] = useState(false);
    const baseUrl = process.env.REACT_APP_BASE_URL || 'https://node-backend-landing-page.herokuapp.com';
    const [loading, setLoading] = useState(false);

    const isValid = formValues.fullName === '' || formValues.email === '' || 
    formValues.address === '' || formValues.city === '' || formValues.state === '' || 
    formValues.message === '' || formValues.mobile === '' || selectedTopic === '' || 
    loading || !formValues.email.includes('@') || !formValues.email.includes('.') ||
    formValues.mobile.length < 11 || formValues.mobile.length > 11;

    const handleSubmit = async(e:any) => {
        e.preventDefault();
        setLoading(true);    
        const info = {
            type: selectedTopic,
            name: formValues.fullName,
            email: formValues.email,
            mobile: formValues.mobile,
            address: formValues.address,
            city: formValues.city,
            state: formValues.state,
            message: formValues.message,
        }

        try {
            const response = await axios.post(`${baseUrl}estility/v1/3231/website/contact`, info);
            // Handle the response data as needed
            setLoading(false)
            console.log(response.data?.status);
            setOnFinish(true);
            // setTimeout(() => {
            //     dispatch(hideForm());
            // }, 2000)
          } catch (error) {
            setLoading(false)
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
                    <div className='d-flex social-contact-icons'>
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
                    <input name='fullName' onChange={handleChange} className='flexgrow-1' placeholder='Enter your name' type='text' />
                </div>

                <div className='d-flex flex-column sora-font input-div'>
                    <div className='form-label sora-font'>Email</div>
                    <input name='email' onChange={handleChange} className='flexgrow-1' placeholder='Enter your email address' type='email' />
                </div>

                <div className='d-flex flex-column sora-font input-div'>
                    <div className='form-label sora-font'>Address</div>
                    <input name='address' onChange={handleChange} className='flexgrow-1' placeholder='Your current address' type='text' />
                </div>

                <div className='d-flex flex-column sora-font input-div'>
                    <div className='form-label sora-font'>Phone Number</div>
                    <input name='mobile' onChange={handleChange} className='flexgrow-1' placeholder='Your phone number' type='text' />
                </div>

                <div className='d-flex gap-10 justify-content-between city-state'>
                    <div className='d-flex flex-column flexgrow-1 sora-font input-div'>
                        <div className='form-label sora-font'>City</div>
                        <input name='city' onChange={handleChange} className='flexgrow-1' placeholder='Enter ur city' type='text' />
                    </div>
                    <div className='d-flex flex-column flexgrow-1 sora-font input-div'>
                        <div className='form-label sora-font'>State</div>
                        <input name='state' onChange={handleChange} className='flexgrow-1' placeholder='State' type='text' />
                    </div>
                </div>

                <div className='purpose-heading sora-font'>What are you reaching about</div>

                <div className='d-flex flex-wrap justify-content-between purpose-button'>
                    {purposeForm?.map((purpose) => (
                        <button type='button' onClick={() => setSelectedTopic(purpose?.title)} className={`sora-font flexgrow-1 ${selectedTopic === purpose?.title ? 'selected' : ''}`} key={purpose?.id}>{purpose?.title}</button>
                    ))}
                </div>

                <div className='sora-font'>Message</div>

                <textarea name='message' onChange={handleChange} placeholder='Start typing'></textarea>

                <div className='char-count sora-font'>0/500 Characters</div>

                <div className='d-flex justify-content-center contact-button'>
                    <button className='text-white violet-background'>{loading ? 'Sending' : 'Submit'}</button>
                </div>
            </form>
            <SecondSuccess title='Request Sent' text='Your request has been sent successfully' isModalOpen={onFinish} handleModalOpen={setOnFinish} />
        </div>
    )
}

export default Contact