import React from 'react'
import { useParams } from 'react-router-dom'
import './blog-content.css';
import { blogContent } from '../blogs/blogContent'
import Future from '../../components/future/future'
import { OldArticle } from '../blogs/blogs'
import { BiLogoFacebookCircle, BiLogoInstagram } from 'react-icons/bi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';

const BloContent = () => {
  const param = useParams()
    console.log({param})
    const socialIcons = [
      {
        id: 1,
        name: 'facebook',
        link: 'https://www.facebook.com/estility',
        icon: <BiLogoFacebookCircle size={20} />
      },
  
      {
        id: 2,
        name: 'twitter',
        link: 'https://twitter.com/estility',
        icon: <AiFillTwitterCircle size={20} />
      },
      {
        id: 3,
        name: 'linkedin',
        link: 'https://www.linkedin.com/company/estility',
        icon: <IoLogoLinkedin size={20} />
      },
      
      {
        id: 4,
        name: 'instagram',
        link: 'https://www.instagram.com/estility/',
        icon: <BiLogoInstagram size={20} />
      }
    ]
    const filterBlog = blogContent?.find((blog) => Number(blog?.id) === Number(param?.id))
    console.log({filterBlog})
  return (
    <div className='d-flex flex-column blog-content-container'>
      <div className='gap-10 d-flex flex-column'>
        <div><img style={{ height: '400px'}}className='full-width' src={filterBlog?.img} alt='blog-image' /></div>
        <div className='d-flex justify-content-between sora-font blog-content-heading'>
            <div className='font-size-12'>By Precious 9 minutes read</div>
            <div className='d-flex gap-10'>
            {socialIcons.map((socialIcon) => (
          <div className='blog-social-icons d-flex align-items-center'>
          <a className='violet-color d-flex align-items-center' key={socialIcon.id} href={socialIcon.link} target='_blank' rel="noreferrer">
            {socialIcon.icon}
          </a>
          </div>
        ))}
            </div>
        </div>
        <div className='secondary-text'>{filterBlog?.content}</div>
      </div>
      <div className='fw-bold'>YOU MIGHT BE INTERESTED IN</div>
      <div className='custom-row new-articles justify-content-between'>
                    {blogContent.slice(0, 3).map((blog) => (
                        <OldArticle
                            heading={blog?.title}
                            text={blog?.content?.slice(0, 100)} 
                            readingTime='5 min read'
                        />
                    ))}
                </div>
                <div className='violet-background blogs-future'><Future /></div>
    </div>
  )
}

export default BloContent