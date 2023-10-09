import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./pages/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import TermsAndConditions from "./pages/terms-and-conditions/terms-and-conditions";
import { termsArray } from "./components/terms";

const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const AboutUs = lazy(() => import("./pages/About/AboutUs"));
const Products = lazy(() => import("./pages/Products/Products"));
const Vendors = lazy(() => import("./pages/Vendors/Vendors"));
const Faq = lazy(() => import("./pages/faq/faq"));

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/vendors",
    element: <Vendors />,
  },

  {
    path: '/faq',
    element: <Faq />
  },

  {
    path: '/terms-and-conditions',
    element: <TermsAndConditions terms={termsArray} />
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