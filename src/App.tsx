import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./pages/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import TermsAndConditions from "./pages/terms-and-conditions/terms-and-conditions";
import { termsArray } from "./components/terms";
import BlogContent from "./pages/blog-content/blog-content";

const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const AboutUs = lazy(() => import("./pages/About/AboutUs"));
const Products = lazy(() => import("./pages/Products/Products"));
const Vendors = lazy(() => import("./pages/Vendors/Vendors"));
const Faq = lazy(() => import("./pages/faq/faq"));
const Blogs = lazy(() => import("./pages/blogs/blogs"));

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
    element: <TermsAndConditions terms={termsArray} />
  },

  {
    id: 8,
    path: '/blogs',
    element: <Blogs />
  },

  {
    id: 9,
    path: '/blog/:id',
    element: <BlogContent />
  }
];

const NotFound = () => (
  <div>
    <h1>404 - Page Not Found</h1>
  </div>
);

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<div>Loading...</div>}>
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
    </ErrorBoundary>
  );
};

export default App;