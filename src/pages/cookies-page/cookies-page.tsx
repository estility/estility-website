import React from 'react'
import { HeaderBanner } from '../terms-and-conditions/terms-and-conditions'
import './cookies-page.css'
const CookiesPage: React.FC = () => {

  return (
    <div className='cookie-policy-container'>
      <div className='d-flex gap-2 justify-content-between full-width'>
        <div>
          <HeaderBanner
            title="Cookie Policy"
            hasSubText={false}
            hasButton={false}
          />
          <div className='cookie-content'>
            <div className='dark-color cookie-text mt-2'>
              <strong>Last updated</strong>: 16th November 2023

              This is the Cookies Policy (the "Policy") for Estility, accessible from estility.co. To make this site function properly, we sometimes place small data files called cookies on your device. These cookies are downloaded to your computer to improve your browsing experience as well as other purposes that are outlined in this Policy.

              Accordingly, this Policy is a legally binding agreement between you ("user," "visitor," "you," or "your") and this Website administrator or operator ("administrator," "operator," "we," "us," or "our"). This cookies policy page describes what cookies are, what information they gather, why, and how they're being used by Estility and any of its related products and services (the "Services"). We will also share how to control and disable these cookies and withdraw consent to collect cookies. However, please know that these actions may downgrade some aspects of this site's functionality.

              For further information on how we use, collect and manage your personal data and information, see our Privacy Policy.
            </div>
            <div className='bold-600  violet-color mt-1'>What are Cookies</div>
            <div className='dark-color cookie-text lh-base'>
              Cookies are small pieces of data stored in text files saved on your mobile device or computer when you visit a website. Cookies allow the website's server to record and store your actions and preferences, such as login information, user history, language settings, font settings, colour settings, and other display preferences, over a particular period.

              Cookies ensure visitors do not have to continuously re-enter their details or information whenever they revisit the site or surf between pages.

              Cookies are used to remember your preferences for single visits through sessional cookies or multiple repeat visits through permanent cookies.
            </div>

            <div className='bold-600  violet-color mt-1'>How we use Cookies</div>
            <div className='dark-color cookie-text lh-base'>
              Cookies are essential for our website to function optimally and enhance website performance for a better user experience. The website administrator(s) controls all cookies used on the site and grants third parties access for statistics and analytics purposes. Cookies are needed to identify visitors and remember their site actions and online behaviours.

              We use cookies for various reasons, which are explained in detail below. Please know that cookie-related information is not used to identify you personally.
            </div>

            <div className='bold-600  violet-color mt-1'>How to Control Cookies</div>
            <div className='dark-color cookie-text lh-base'>
              You can control and/or delete cookies on your mobile device or computer and adjust your browser settings to prevent cookies. Users can withdraw consent to collect cookies on the website. You can also determine whether you want to agree to the site's use of cookies. However, doing this may cause you to repeat your preferences every time you visit the site manually, and some of the site's services and functionality may not work optimally.
            </div>

            <div className='bold-600  violet-color mt-1'>Disabling Cookies</div>
            <div className='dark-color cookie-text lh-base'>
              You can disable cookies setting by adjusting the option on your browser settings (see your browser "Help" for more details). However, please be aware that the act of disabling cookies will affect your visit's functionality and the use of this website and many others. Unfortunately, disabling cookies will usually result in also disabling certain functionality and features of this site. In most cases, there are no website standard options for disabling cookies without completely disabling the functionality and features they add to the site. It is recommended that you enable cookies for optimal site functionality and service.
            </div>

            <div className='bold-600  violet-color mt-1'>The Cookies We Use</div>
            <ul className='violet-color lh-base mt-1'>
              <li><strong>Sessional Cookies:</strong>Sessional cookies are temporary cookies that are operational during your visit and expire when the user closes the browser.</li>

              <li><strong>Permanent Cookies:</strong>Permanent cookies store and retain your site preferences on your mobile device or computer even after you close the browser or your mobile device or computer.</li>

              <li><strong>Necessary Cookies:</strong>Necessary cookies allow the website to provide a better user experience when navigating the website, its services, and features. These cookies allow us to recognize if you have created and logged into an account to access site content.</li>

              <li><strong>Functionality Cookies:</strong>Functionality cookies allow the website to operate optimally, following your site preferences for future visits. These recognize your site username and customizations.</li>

              <li><strong>Analytical Cookies:</strong>Analytical cookies allow first-party and affiliated third-party services to collect and store aggregated sate for statistical and analytical purposes on how our visitors use the website. While these cookies respect visitors' privacy and personal information, they optimize the user experience.</li>

              <li><strong>Account Cookies:</strong>These cookies will help us manage the signup and general administration of creating or opening an account opening. These cookies may be deleted when you log out but sometimes remain afterwards to remember your site preferences.</li>

              <li><strong>Login Cookies:</strong>We use login cookies to remember your Login details and prevent you from logging in every time you visit a new page on the site. These cookies are often cleared when you log out to secure your account information and privacy and prevent access to restricted features.</li>

              <li><strong>Email Newsletters Cookies:</strong>This site uses cookies to offer newsletter or email subscription services and cookies and remember if you are already registered or subscribed to show specific notifications or features reserved for subscribed/unsubscribed users.</li>

              <li><strong>Orders-processing Cookies:</strong>We use cookies to store and remember your payment orders on our e-commerce or payment facilities for proper payment processing.</li>

              <li><strong>Survey Cookies:</strong>We periodically issue our users surveys and questionnaires to provide interesting insights, helpful tools or understand their preferences or opinions more accurately. These surveys may use cookies to remember participants or to generate accurate results even after you change pages.</li>

              <li><strong>Forms Cookies:</strong>We use cookies to remember your details for future correspondence when you submit information through forms like contact or comment forms.</li>

              <li><strong>Site Preferences Cookies:</strong>To provide you with a beautiful user experience and site interaction, we use cookies to provide the functionality to set your site preferences when you use it.</li>

              <li><strong>First-Party Cookies:</strong>First-party cookies are the cookies explained above that are set by the website. </li>

              <li><strong>Third-Party Cookies:</strong>In some cases, the website uses cookies provided by trusted third parties that serve content or render advertising and analytics services on this website. The following section explains the third-party cookies you may encounter while using this site.

                <ul className='third-party-cookies'>
                  <li><strong>Third-Party Cookies:</strong> In some cases, the website uses cookies provided by trusted third parties that serve content or render advertising and analytics services on this website.</li>

                  <li>
                    <strong>Google Analytics:</strong> This site uses Google Analytics, one of the most trusted analytics solutions on the global web, to understand how you use the site and ways to improve your site experience. As a result, these cookies may track your use of the site, time spent on the site, and its pages to allow us to continue producing engaging content. For more information on Google Analytics cookies, we refer you to see the official Google Analytics page: <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank">Google Analytics Cookie Usage</a>
                  </li>

                  <li>
                    <strong>Site Optimization:</strong> We periodically test new features and make subtle changes to our site's user interaction. Cookies may be used to provide you with a consistent experience on the site and understand our user's preferred optimizations.
                  </li>

                  <li>
                    <strong>Product Purchase Statistics:</strong> We use cookies to track and understand the statistics about the number of visitors that make purchases for the products that we sell. This allows us to accurately make informed business and market predictions that monitor our advertising and product costs to ensure the best equilibrium price.
                  </li>

                  <li>
                    <strong>Google AdSense:</strong> We use Google AdSense service, which uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times a particular ad is shown to our users. For more information on Google AdSense, we refer you to see the official Google AdSense privacy FAQ: <a href="https://support.google.com/adsense/answer/3394713" target="_blank">Google AdSense Privacy FAQ</a>
                  </li>

                  <li>
                    <strong>Behavioural Advertising:</strong> We rely on adverts to offset the running costs of this site and generate revenue for further development. We use behavioural advertising cookies to ensure that we provide you with the most relevant adverts where possible by anonymously tracking your specific interests and presenting similar interests.
                  </li>

                  <li>
                    <strong>Affiliate Tracking:</strong> Several partners advertise on our behalf, and we use affiliate tracking cookies to determine the number of our customers that visit the site through each of our partner sites to credit them appropriately. Where applicable, these cookies allow our affiliate partners to provide any bonus that they may provide you for making a purchase.
                  </li>

                  <li>
                    <strong>Social Media Integration:</strong> We use cookies for social media buttons and/or plugins on this site to connect with your social network in different ways. These cookies also allow us to track social network users when they visit our site or share content using a tagging mechanism provided by those social media sites.
                  </li>
                </ul>

              </li>
            </ul>

            <div className='bold-600  violet-color mt-1'>Amendments and Modifications </div>
            <div className='dark-color cookie-text lh-base'>
              Estility reserves the right to modify this Policy and its terms as they relate to this website and services at any time, effective and in full force upon posting the updated version on the website.

              Please check this page regularly for updates. The continued use of the website and its services after that shall constitute your consent to such amendments and modifications.
            </div>

            <div className='bold-600  violet-color mt-1'>Policy Acceptance</div>
            <div className='dark-color cookie-text lh-base'>
              You hereby acknowledge that you have read this Cookies Policy and agree to all its provisions, terms, and conditions. By continuing to access and use this website and its services, you also agree to be legally bound by this Cookies Policy. If you do not agree with the terms and conditions of this Policy, you are not permitted to access or use this website and its services.
            </div>

            <div className='bold-600  violet-color mt-1'>More Information</div>
            <div className='dark-color cookie-text lh-base'>
              We trust that you have gained clarity concerning our use of cookies. For further information about our cookies policy, please email us at <a href="mailto:support@estility.co">support@estility.co</a>.
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CookiesPage