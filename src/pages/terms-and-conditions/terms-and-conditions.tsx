import React from "react";
import { termsArray } from "../../components/terms";
import "./terms-and-conditions.css";
import Future from "../../components/future/future";
import { Link } from "react-router-dom";

interface Props {
  terms: typeof termsArray;
}

interface HeaderBannerProps {
  title: string;
  hasSubText: boolean;
  subText?: string;
  hasButton?: boolean;
  buttonText?: string;
  hasLink?: boolean;
  linkText?: string;
  onClick?: () => void;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({
  title,
  onClick,
  hasLink,
  linkText,
  hasSubText,
  subText,
  hasButton,
  buttonText,
}) => (
  <div className="d-flex flex-column violet-background terms-and">
    <div
      style={{ width: "70%", alignSelf: "center" }}
      className="terms-and-condition-banner d-flex flex-column text-center sora-font text-white bold-600"
    >
      {title}
    </div>
    {hasSubText ? (
      <div
        style={{ width: "70%", alignSelf: "center" }}
        className="sora-font t-andc-subtext text-center text-white"
      >
        {subText}
      </div>
    ) : null}
    {hasButton === true ? (
      <button
        onClick={onClick}
        className="violet-color bold-500 sora-font banner-button"
      >
        {buttonText}
      </button>
    ) : null}
    {hasLink === true && linkText ? (
      <Link
        to={linkText}
        className="violet-color bold-500 sora-font banner-button"
      >
        {buttonText}
      </Link>
    ) : null}
  </div>
);
const TermsAndConditions = ({ terms }: Props) => {
  const highlightEstility = (text: string) => {
    return text.replace(
      /Estility/gi,
      '<span class="estility-text">Estility</span>'
    );
  };

  return (
    <div className="d-flex flex-column sora-font T-and-C">
      <HeaderBanner
        title="Terms and Conditions"
        hasSubText={false}
        hasButton={false}
      />
      <div className="terms-container d-flex flex-column">
        <h2>OUR TERMS OF USE </h2>
        <p>
          We are Estility Ltd ('Company', 'we', 'us', or 'our'), a company
          registered in Nigeria at 14 Rockville Estate, Ajah, Lagos, Lagos
          105102.
        </p>

        <p>
          We operate the website{" "}
          <a href="https://www.estility.com">https://www.estility.com</a> (the
          'Site'), the mobile application Estility Platform (the 'App'), as well
          as any other related products and services that refer or link to these
          legal terms (the 'Legal Terms') (collectively, the 'Services').
        </p>

        <p>
          You can contact us by phone at [...], email at{" "}
          <a href="mailto:support@estility.co">support@estility.co</a>.
        </p>

        <p>
          These Legal Terms constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity ('you'), and
          Estility Ltd, concerning your access to and use of the Services. You
          agree that by accessing the Services, you have read, understood, and
          agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE
          WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM
          USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>

        <p>
          Updates to these Terms of Use will be communicated on the platform.
        </p>

        <p>
          The Services are intended for users who are at least 18 years old.
          Persons under the age of 18 are not permitted to use or register for
          the Services.
        </p>

        <p>
          We recommend that you print a copy of these Legal Terms for your
          records.
        </p>

        <div>
      <h1>TABLE OF CONTENTS</h1>

      <ol className="violet-color">
        <li><a href="#services">OUR SERVICES</a></li>
        <li><a href="#intellectual-property">INTELLECTUAL PROPERTY RIGHTS</a></li>
        <li><a href="#user-representations">USER REPRESENTATIONS</a></li>
        <li><a href="#user-registration">USER REGISTRATION</a></li>
        <li><a href="#purchases-payment">PURCHASES AND PAYMENT</a></li>
        <li><a href="#cancellation">CANCELLATION</a></li>
        <li><a href="#software">SOFTWARE</a></li>
        <li><a href="#prohibited-activities">PROHIBITED ACTIVITIES</a></li>
        <li><a href="#user-generated-contributions">USER GENERATED CONTRIBUTIONS</a></li>
        <li><a href="#contribution-license">CONTRIBUTION LICENCE</a></li>
        <li><a href="#reviews-guidelines">GUIDELINES FOR REVIEWS</a></li>
        <li><a href="#mobile-app-license">MOBILE APPLICATION LICENCE</a></li>
        <li><a href="#services-management">SERVICES MANAGEMENT</a></li>
        <li><a href="#privacy-policy">PRIVACY POLICY</a></li>
        <li><a href="#term-termination">TERM AND TERMINATION</a></li>
        <li><a href="#modifications-interruptions">MODIFICATIONS AND INTERRUPTIONS</a></li>
        <li><a href="#governing-law">GOVERNING LAW</a></li>
        <li><a href="#dispute-resolution">DISPUTE RESOLUTION</a></li>
        <li><a href="#corrections">CORRECTIONS</a></li>
        <li><a href="#disclaimer">DISCLAIMER</a></li>
        <li><a href="#limitations-of-liability">LIMITATIONS OF LIABILITY</a></li>
        <li><a href="#indemnification">INDEMNIFICATION</a></li>
        <li><a href="#user-data">USER DATA</a></li>
        <li><a href="#electronic-communications">ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</a></li>
        <li><a href="#miscellaneous">MISCELLANEOUS</a></li>
        <li><a href="#contact-us">CONTACT US</a></li>
      </ol>
      </div>

      <div>
      <h1>1. OUR SERVICES</h1>

      <p>
        The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.
        Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
      </p>

      <h1>2. INTELLECTUAL PROPERTY RIGHTS</h1>

      <h2>Our Intellectual Property</h2>

      <p>
        We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the 'Content'), as well as the trademarks, service marks, and logos contained therein (the 'Marks').
      </p>

      <p>
        Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
      </p>

      <p>
        The Content and Marks are provided in or through the Services 'AS IS' for your personal, non-commercial use or internal business purpose only.
      </p>

      <h2>Your Use of Our Services</h2>

      <p>
        Subject to your compliance with these Legal Terms, including the 'PROHIBITED ACTIVITIES' section below, we grant you a non-exclusive, non-transferable, revocable licence to:
      </p>

      <ol>
        <li>access the Services; and</li>
        <li>download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use or internal business purpose.</li>
      </ol>

      <p>
        Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
      </p>

      <p>
        If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: legal@estility.co. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
      </p>

      <p>
        We reserve all rights not expressly granted to you in and to the Services, Content, and Marks. Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms, and your right to use our Services will terminate immediately.
      </p>

      <h2>Your Submissions</h2>

      <p>
        Please review this section and the 'PROHIBITED ACTIVITIES' section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
      </p>

      <h3>Submissions:</h3>

      <p>
        By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ('Submissions'), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
      </p>

      <h3>You are responsible for what you post or upload:</h3>

      <p>
        By sending us Submissions through any part of the Services, you:
      </p>

      <ol>
        <li>confirm that you have read and agree with our 'PROHIBITED ACTIVITIES' and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
        <li>to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</li>
        <li>warrant that any such Submission is original to you or that you have the necessary rights and licences to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions;</li>
        <li>warrant and represent that your Submissions do not constitute confidential information.</li>
      </ol>

      <p>
        You are solely responsible for your Submissions, and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law.
      </p>
    </div>

    <h1>3. USER REPRESENTATIONS</h1>

<p>
  By using the Services, you represent and warrant that:
</p>

<ol>
  <li>all registration information you submit will be true, accurate, current, and complete;</li>
  <li>you will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
  <li>you have the legal capacity, and you agree to comply with these Legal Terms;</li>
  <li>you are not a minor in the jurisdiction in which you reside;</li>
  <li>you will not access the Services through automated or non-human means, whether through a bot, script, or otherwise;</li>
  <li>you will not use the Services for any illegal or unauthorized purpose; and</li>
  <li>your use of the Services will not violate any applicable law or regulation.</li>
</ol>

<p>
  If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
</p>

<h1>4. USER REGISTRATION</h1>

<p>
  You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
</p>

<h1>5. PURCHASES AND PAYMENT</h1>

<p>We accept the following forms of payment:</p>

<ul>
  <li>Visa</li>
  <li>Mastercard</li>
  <li>Bank Transfer</li>
  <li>Verve</li>
</ul>

<p>
  You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in Naira.
</p>

<p>
  You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
</p>

<p>
  We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
</p>

<h1>6. CANCELLATION</h1>

<p>
  All purchases are non-refundable. You can cancel your subscription at any time by contacting us using the contact information provided below. Your cancellation will take effect at the end of the current paid term.
</p>

<p>
  If you are unsatisfied with our Services, please email us at support@estility.co or call us at [...].
</p>

<h1>7. SOFTWARE</h1>

<p>
  We may include software for use in connection with our Services. If such software is accompanied by an end user license agreement ('EULA'), the terms of the EULA will govern your use of the software. If such software is not accompanied by a EULA, then we grant to you a non-exclusive, revocable, personal, and non-transferable license to use such software solely in connection with our services and in accordance with these Legal Terms. Any software and any related documentation are provided 'AS IS' without warranty of any kind, either express or implied, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. You accept any and all risk arising out of use or performance of any software. You may not reproduce or redistribute any software except in accordance with the EULA or these Legal Terms.
</p>

<h1>8. PROHIBITED ACTIVITIES</h1>

<p>
  You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
</p>

<p>
  As a user of the Services, you agree not to:
</p>

<ul>
  <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
  <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
  <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
  <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
  <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
  <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
  <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
  <li>Engage in unauthorized framing of or linking to the Services.</li>
  <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
  <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
  <li>Delete the copyright or other proprietary rights notice from any Content.</li>
  <li>Attempt to impersonate another user or person or use the username of another user.</li>
  <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ('gifs'), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as 'spyware' or 'passive collection mechanisms' or 'pcms').</li>
  <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
  <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
  <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
  <li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
  <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
  <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
  <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
  <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
  <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
  <li>Sell or otherwise transfer your profile.</li>
</ul>

      </div>

      <Future />
      <br />
    </div>
  );
};

export default TermsAndConditions;
