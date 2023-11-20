// routes.js or routes.ts

import React from 'react';
import { termsArray } from './components/terms';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const AboutUs = React.lazy(() => import('./pages/About/AboutUs'));
const Products = React.lazy(() => import('./pages/Products/Products'));
const Vendors = React.lazy(() => import('./pages/Vendors/Vendors'));
const Faq = React.lazy(() => import('./pages/faq/faq'));
const Blogs = React.lazy(() => import('./pages/blogs/blogs'));
const Blog = React.lazy(() => import('./pages/blog-content/blog-content'));
const Terms = React.lazy(() => import('./pages/terms-and-conditions/terms-and-conditions'));
const Riders = React.lazy(() => import('./pages/riders/riders'));
const PrivacyPolicy = React.lazy(() => import('./pages/privacy-policy/privacy-policy'));
const Job = React.lazy(() => import('./pages/job/job'));
const Careers = React.lazy(() => import('./pages/careers/careers'));

export const routes = [
  {
    id: 1,
    path: '/',
    element: <Home />,
  },
  {
    id: 2,
    path: '/contact',
    element: <Contact />,
  },
  {
    id: 3,
    path: '/about-us',
    element: <AboutUs />,
  },
  {
    id: 4,
    path: '/products',
    element: <Products />,
  },
  {
    id: 5,
    path: '/vendors',
    element: <Vendors />,
  },
  {
    id: 6,
    path: '/faq',
    element: <Faq />,
  },
  {
    id: 7,
    path: '/terms-and-conditions',
    element: <Terms terms={termsArray} />,
  },
  {
    id: 10,
    path: '/riders',
    element: <Riders />,
  },
  {
    id: 11,
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    id: 12,
    path: '/careers',
    element: <Careers />,
  },
  {
    id: 13,
    path: '/job/:id',
    element: <Job />,
  },
];

export default routes;