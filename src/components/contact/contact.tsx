import React from 'react';
import './contact.css';
import { BiLogoFacebookCircle, BiLogoInstagram } from 'react-icons/bi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';

interface Props {
    placeholder: string;
    label: string;
    type: string;
}

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

    const FormInput = ({ placeholder, label, type }: Props) => (
        <div className='d-flex flex-column sora-font input-div'>
            <div className='form-label sora-font'>{label}</div>
            <input className='flexgrow-1' placeholder={placeholder} type={type} />
        </div>
    )

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
    return (
        <div className='d-flex justify-content-between contact-container'>
            <div className='d-flex flex-column sora-font flex-grow-1 social-contact'>
                {socialContacts?.map((contact) => (
                    <div className='d-flex flex-column social-talks'>
                        <div className='fw-bold social-title sora-font'>{contact?.title}</div>
                        <div className='social-text'>{contact?.text}</div>
                    </div>
                ))}
                <div className='d-flex flex-column social-talks'>
                    <div className='fw-bold violet-color social-title'>Socials</div>
                    <div className='d-flex'>
                        {socialIcons.map((socialIcon) => (
                            <div className=''>
                                <a className='violet-color social-link-icons' key={socialIcon.id} href={socialIcon.link} target='_blank' rel="noreferrer">
                                    {socialIcon.icon}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <form style={{ border: '1px solid red' }} className='gap-10 flexgrow-1 d-flex flex-column form-container'>
                <FormInput label='Full Name' type='text' placeholder='Enter your name' />
                <FormInput label='Email' type='email' placeholder='Enter your email' />
                <FormInput label='Address' type='text' placeholder='Your current address' />
                <div className='d-flex gap-10 justify-content-between'>
                    <div className='d-flex flex-column flexgrow-1 sora-font input-div'>
                        <div className='form-label sora-font'>City</div>
                        <input className='flexgrow-1' placeholder='Enter ur city' type='text' />
                    </div>
                    <div className='d-flex flex-column flexgrow-1 sora-font input-div'>
                        <div className='form-label sora-font'>State</div>
                        <input className='flexgrow-1' placeholder='State' type='text' />
                    </div>
                </div>
               
                <div className='purpose-heading sora-font'>What are you reaching about</div>
                <div className='d-flex justify-content-between purpose-button'>
                    {purposeForm?.map((purpose) => (
                        <button key={purpose?.id}>{purpose?.title}</button>
                    ))}
                </div>
                
                <div>Message</div>
                <textarea></textarea>

                {/* the characters should be not more than 500 */}
                0/500 characters
                <div className='d-flex justify-content-center'>
                    <button className='text-white violet-background'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact