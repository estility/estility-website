import React from 'react';
import cookie from '../../assets/cookie.png';
import { FaTimes } from 'react-icons/fa';
import './cookie.css';

interface CookiesProps {
  showPopup: boolean;
  setShowPopup: (value: boolean) => void;
}

const Cookies: React.FC<CookiesProps> = ({ showPopup, setShowPopup }) => {

  const cookies = localStorage.getItem('cookies');

  React.useEffect(() => {
    if (cookies === 'true') {
      setShowPopup(false);
    }
  }, [cookies, setShowPopup]);

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem('cookies', 'true');
  };

  const navigateToCookiePolicy = (event: React.MouseEvent) => {
    event.preventDefault();
    closePopup();
    window.location.href='/cookie-policy'
  };

  if (!showPopup) return null;

  return (
    <div className='cookie-container'>
      <div className='d-flex gap-2 justify-content-between full-width'>
        <div className='cookie-image'>
          <img src={cookie} alt='cookie' />
        </div>
        <div>
          <div className='bold-600 cookie-title violet-color'>This website uses cookies</div>
          <div className='dark-color cookie-text lh-base'>
            We use cookies to make the website function properly, improve performance and serve targeted advertisements. Note that if you do not accept optional cookies, your experience may be disrupted. By continuing to use this site, you consent to the use of cookies as specified in your cookie preferences. You can update your cookie preferences at any time. For more information please see our{' '}
            <a href='/cookie-policy' onClick={navigateToCookiePolicy}>
              Cookie Policy
            </a>
            .
          </div>
        </div>
        <button onClick={closePopup} className='d-flex align-center justify-content-center text-white violet-background close-cookie'>
          <FaTimes />
        </button>
      </div>
      <div className='d-flex justify-content-end cookie-buttons mt-1'>
        <button onClick={closePopup} className='text-white violet-background accept-cookie'>
          Accept
        </button>
        <button onClick={closePopup} className='reject-cookie violet-color'>
          Reject
        </button>
      </div>
    </div>
  );
};

export default Cookies;
