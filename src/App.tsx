import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./pages/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import { termsArray } from "./components/terms";
import Careers from "./pages/careers/careers";
import Loading from "./components/not-found/loading";
import Requestdemo from "./modals/request-demo/request-demo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import routes from "./routes";

const NotFound = () => (
  <div>
    <h1>404 - Page Not Found</h1>
  </div>
);

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<Loading />}>
      <ToastContainer />
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
    </ErrorBoundary>
  );
};

export default App;