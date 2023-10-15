import React from 'react';
import './blogs.css';
import { Link } from 'react-router-dom';
import blogImage from '../../assets/blog-banner.png';
import { HeaderBanner } from '../terms-and-conditions/terms-and-conditions'
import Future from '../../components/future/future';
import { blogContent, newBlogContent } from './blogContent';

interface ArticleProps {
    heading: string;
    text: string;
    readingTime: string;
    id?: number;
}

export const OldArticle: React.FC<ArticleProps> = ({ heading, text, readingTime, id }) => (
    <div className='d-flex flex-column custom-col-md-4 old-article-container'>
        <div className='full0-width'>
            <img className='full-width' src={blogImage} alt='blog' />
        </div>
        <div className='d-flex flex-column sora-font article-container'>
            <div className='old-article-title bold-600'>{heading}</div>
            <div className='sora-font old-article-text'>{text}</div>
            <div className='old-article-reading-time'>{readingTime}</div>
            <div><Link to={`/blog/${id}`} className='violet-color bold-500'>Read More</Link></div>
        </div>
    </div>
)

const Blogs = () => {
    const NewArticle: React.FC<ArticleProps> = ({ heading, text, readingTime }) => (
        <div className='d-flex flex-column sora-font article-container'>
            <div className='article-title bold-600'>{heading}</div>
            <div className='sora-font article-text'>{text}</div>
            <div className='article-reading-time'>{readingTime}</div>
            <div><a className='violet-color bold-500' href='/'>Read More</a></div>
        </div>
    )

    return (
        <div className='d-flex flex-column'>
            <HeaderBanner title='Estility Blog' hasSubText={true} hasButton={false} subText='Stay up to date on all our news and read get access to insightful articles, stories, and information on a range of topics that matter to our community. ' />
            <div className='d-flex flex-column blogs-content-container'>
                <div className='fw-bold sora-font'>OUR LATEST POST</div>
                { newBlogContent?.map((blogItem) => (
                    <div key={blogItem?.id} className='custom-row latest-article justify-content-between'>
                    <div className='custom-col-md-6'>
                        <img className='full-width' src={blogImage} alt='blog' />
                    </div>
                    <div className='custom-col-md-6'>
                    <div className='d-flex flex-column sora-font article-container'>
            <div className='article-title bold-600'>{blogItem?.title}</div>
            <div className='sora-font article-text'>{blogItem?.content?.slice(0, 100)}</div>
            <div className='article-reading-time'>5 minutes</div>
            <div><Link to={`/blog/${blogItem?.id}`} className='violet-color bold-500'>Read More</Link></div>
        </div>
                    </div>
                </div>
                ))}
                <div className='fw-bold sora-font'>OLDER POST</div>
                <div className='custom-row new-articles justify-content-between'>
                    {blogContent.map((blog) => (
                        <OldArticle
                            heading={blog?.title}
                            text={blog?.content?.slice(0, 100)} 
                            readingTime='5 min read'
                            id={blog?.id}
                        />
                    ))}
                </div>
                <div className='violet-background blogs-future'><Future /></div>
            </div>
        </div>
    )
}

export default Blogs