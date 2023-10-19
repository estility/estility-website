import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./pages/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import { termsArray } from "./components/terms";
import Careers from "./pages/careers/careers";
import Loading from "./components/not-found/loading";
import Requestdemo from "./modals/request-demo/request-demo";
import { Portal } from 'react-portal';

const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const AboutUs = lazy(() => import("./pages/About/AboutUs"));
const Products = lazy(() => import("./pages/Products/Products"));
const Vendors = lazy(() => import("./pages/Vendors/Vendors"));
const Faq = lazy(() => import("./pages/faq/faq"));
const Blogs = lazy(() => import("./pages/blogs/blogs"));
const Blog = lazy(() => import("./pages/blog-content/blog-content"));
const Terms = lazy(() => import("./pages/terms-and-conditions/terms-and-conditions"));
const Riders = lazy(() => import("./pages/riders/riders"));
const PrivacyPolicy = lazy(() => import("./pages/privacy-policy/privacy-policy"));
const Job = lazy(() => import('./pages/job/job'))

const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/contact",
    element: <Contact />,
  },
  {
    id: 3,
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    id: 4,
    path: "/products",
    element: <Products />,
  },
  {
    id: 5,
    path: "/vendors",
    element: <Vendors />,
  },

  {
    id: 6,
    path: '/faq',
    element: <Faq />
  },

  {
    id: 7,
    path: '/terms-and-conditions',
    element: <Terms terms={termsArray} />
  },

  // {
  //   id: 8,
  //   path: '/blogs',
  //   element: <Blogs />
  // },

  // {
  //   id: 9,
  //   path: '/blog/:id',
  //   element: <Blog />
  // },

  {
    id: 10,
    path: '/riders',
    element: <Riders />
  },

  {
    id: 11,
    path: '/privacy-policy',
    element: <PrivacyPolicy />
  },

  {
    id: 12,
    path: '/careers',
    element: <Careers />
  },

  {
    id: 13,
    path: '/job/:id',
    element: <Job />
  }
];

const NotFound = () => (
  <div>
    <h1>404 - Page Not Found</h1>
  </div>
);

const App = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleToggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<Loading />}>
      <Requestdemo />
        <Router>
        <Navbar />
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
      <Footer />
      
        <Portal container={document.body}>
          <div className="jsd-widget">
            <JSDWidget />
          </div>
        </Portal>
      

      {/* <button onClick={handleToggleWidget}>Toggle Widget</button> */}
    </ErrorBoundary>
  );
};

const JSDWidget = () => {
  return (
    <script data-jsd-embedded data-key="24f6f973-a447-4964-9819-92d7d8611e76" data-base-url="https://jsd-widget.atlassian.com" src="https://jsd-widget.atlassian.com/assets/embed.js"></script>
  );
};

export default App;