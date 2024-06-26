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
        title="Terms of use"
        hasSubText={false}
        hasButton={false}
      />
      <div className="terms-container d-flex flex-column gap-2">
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
          You can contact us by phone at +2349169578082, email at{" "}
          <a href="mailto:support@estility.co">support@estility.co</a>.</p>

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
          <h3>TABLE OF CONTENTS</h3>

          <ol className="violet-color">
            <li>
              <a href="#services">OUR SERVICES</a>
            </li>
            <li>
              <a href="#intellectual-property">INTELLECTUAL PROPERTY RIGHTS</a>
            </li>
            <li>
              <a href="#user-representations">USER REPRESENTATIONS</a>
            </li>
            <li>
              <a href="#user-registration">USER REGISTRATION</a>
            </li>
            <li>
              <a href="#purchases-payment">PURCHASES AND PAYMENT</a>
            </li>
            <li>
              <a href="#cancellation">CANCELLATION</a>
            </li>
            <li>
              <a href="#software">SOFTWARE</a>
            </li>
            <li>
              <a href="#prohibited-activities">PROHIBITED ACTIVITIES</a>
            </li>
            <li>
              <a href="#user-generated-contributions">
                USER GENERATED CONTRIBUTIONS
              </a>
            </li>
            <li>
              <a href="#contribution-license">CONTRIBUTION LICENCE</a>
            </li>
            <li>
              <a href="#reviews-guidelines">GUIDELINES FOR REVIEWS</a>
            </li>
            <li>
              <a href="#mobile-app-license">MOBILE APPLICATION LICENCE</a>
            </li>
            <li>
              <a href="#services-management">SERVICES MANAGEMENT</a>
            </li>
            <li>
              <a href="#privacy-policy">PRIVACY POLICY</a>
            </li>
            <li>
              <a href="#term-termination">TERM AND TERMINATION</a>
            </li>
            <li>
              <a href="#modifications-interruptions">
                MODIFICATIONS AND INTERRUPTIONS
              </a>
            </li>
            <li>
              <a href="#governing-law">GOVERNING LAW</a>
            </li>
            <li>
              <a href="#dispute-resolution">DISPUTE RESOLUTION</a>
            </li>
            <li>
              <a href="#corrections">CORRECTIONS</a>
            </li>
            <li>
              <a href="#disclaimer">DISCLAIMER</a>
            </li>
            <li>
              <a href="#limitations-of-liability">LIMITATIONS OF LIABILITY</a>
            </li>
            <li>
              <a href="#indemnification">INDEMNIFICATION</a>
            </li>
            <li>
              <a href="#user-data">USER DATA</a>
            </li>
            <li>
              <a href="#electronic-communications">
                ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
              </a>
            </li>
            <li>
              <a href="#miscellaneous">MISCELLANEOUS</a>
            </li>
            <li>
              <a href="#contact-us">CONTACT US</a>
            </li>
          </ol>
        </div>

        <div className="d-flex flex-column gap-2">
          <h3 id='services'>1. OUR SERVICES</h3>

          <p>
            The information provided when using the Services is not intended for
            distribution to or use by any person or entity in any jurisdiction
            or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration
            requirement within such jurisdiction or country. Accordingly, those
            persons who choose to access the Services from other locations do so
            on their own initiative and are solely responsible for compliance
            with local laws, if and to the extent local laws are applicable.
          </p>

          <h3 id='intellectual-property'>2. INTELLECTUAL PROPERTY RIGHTS</h3>

          <h4>Our Intellectual Property</h4>

          <p>
            We are the owner or the licensee of all intellectual property rights
            in our Services, including all source code, databases,
            functionality, software, website designs, audio, video, text,
            photographs, and graphics in the Services (collectively, the
            'Content'), as well as the trademarks, service marks, and logos
            contained therein (the 'Marks').
          </p>

          <p>
            Our Content and Marks are protected by copyright and trademark laws
            (and various other intellectual property rights and unfair
            competition laws) and treaties in the United States and around the
            world.
          </p>

          <p>
            The Content and Marks are provided in or through the Services 'AS
            IS' for your personal, non-commercial use or internal business
            purpose only.
          </p>

          <h2>Your Use of Our Services</h2>

          <p>
            Subject to your compliance with these Legal Terms, including the
            'PROHIBITED ACTIVITIES' section below, we grant you a non-exclusive,
            non-transferable, revocable licence to:
          </p>

          <ol>
            <li>access the Services; and</li>
            <li>
              download or print a copy of any portion of the Content to which
              you have properly gained access, solely for your personal,
              non-commercial use or internal business purpose.
            </li>
          </ol>

          <p>
            Except as set out in this section or elsewhere in our Legal Terms,
            no part of the Services and no Content or Marks may be copied,
            reproduced, aggregated, republished, uploaded, posted, publicly
            displayed, encoded, translated, transmitted, distributed, sold,
            licensed, or otherwise exploited for any commercial purpose
            whatsoever, without our express prior written permission.
          </p>

          <p>
            If you wish to make any use of the Services, Content, or Marks other
            than as set out in this section or elsewhere in our Legal Terms,
            please address your request to: <a href="mailto:support@estility.co">support@estility.co</a>.. If we ever grant
            you the permission to post, reproduce, or publicly display any part
            of our Services or Content, you must identify us as the owners or
            licensors of the Services, Content, or Marks and ensure that any
            copyright or proprietary notice appears or is visible on posting,
            reproducing, or displaying our Content.
          </p>

          <p>
            We reserve all rights not expressly granted to you in and to the
            Services, Content, and Marks. Any breach of these Intellectual
            Property Rights will constitute a material breach of our Legal
            Terms, and your right to use our Services will terminate
            immediately.
          </p>

          <h2>Your Submissions</h2>

          <p>
            Please review this section and the 'PROHIBITED ACTIVITIES' section
            carefully prior to using our Services to understand the (a) rights
            you give us and (b) obligations you have when you post or upload any
            content through the Services.
          </p>

          <h3>Submissions:</h3>

          <p>
            By directly sending us any question, comment, suggestion, idea,
            feedback, or other information about the Services ('Submissions'),
            you agree to assign to us all intellectual property rights in such
            Submission. You agree that we shall own this Submission and be
            entitled to its unrestricted use and dissemination for any lawful
            purpose, commercial or otherwise, without acknowledgment or
            compensation to you.
          </p>

          <h3>You are responsible for what you post or upload:</h3>

          <p>
            By sending us Submissions through any part of the Services, you:
          </p>

          <ol>
            <li>
              confirm that you have read and agree with our 'PROHIBITED
              ACTIVITIES' and will not post, send, publish, upload, or transmit
              through the Services any Submission that is illegal, harassing,
              hateful, harmful, defamatory, obscene, bullying, abusive,
              discriminatory, threatening to any person or group, sexually
              explicit, false, inaccurate, deceitful, or misleading;
            </li>
            <li>
              to the extent permissible by applicable law, waive any and all
              moral rights to any such Submission;
            </li>
            <li>
              warrant that any such Submission is original to you or that you
              have the necessary rights and licences to submit such Submissions
              and that you have full authority to grant us the above-mentioned
              rights in relation to your Submissions;
            </li>
            <li>
              warrant and represent that your Submissions do not constitute
              confidential information.
            </li>
          </ol>

          <p>
            You are solely responsible for your Submissions, and you expressly
            agree to reimburse us for any and all losses that we may suffer
            because of your breach of (a) this section, (b) any third party’s
            intellectual property rights, or (c) applicable law.
          </p>
        </div>

        <h3 id='user-representations'>3. USER REPRESENTATIONS</h3>

        <p>By using the Services, you represent and warrant that:</p>

        <ol>
          <li>
            all registration information you submit will be true, accurate,
            current, and complete;
          </li>
          <li>
            you will maintain the accuracy of such information and promptly
            update such registration information as necessary;
          </li>
          <li>
            you have the legal capacity, and you agree to comply with these
            Legal Terms;
          </li>
          <li>you are not a minor in the jurisdiction in which you reside;</li>
          <li>
            you will not access the Services through automated or non-human
            means, whether through a bot, script, or otherwise;
          </li>
          <li>
            you will not use the Services for any illegal or unauthorized
            purpose; and
          </li>
          <li>
            your use of the Services will not violate any applicable law or
            regulation.
          </li>
        </ol>

        <p>
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Services
          (or any portion thereof).
        </p>

        <h3 id='user-registration'>4. USER REGISTRATION</h3>

        <p>
          You may be required to register to use the Services. You agree to keep
          your password confidential and will be responsible for all use of your
          account and password. We reserve the right to remove, reclaim, or
          change a username you select if we determine, in our sole discretion,
          that such username is inappropriate, obscene, or otherwise
          objectionable.
        </p>

        <h3 id='purchases-payment'>5. PURCHASES AND PAYMENT</h3>

        <p>We accept the following forms of payment:</p>

        <ul>
          <li>Visa</li>
          <li>Mastercard</li>
          <li>Bank Transfer</li>
          <li>Verve</li>
        </ul>

        <p>
          You agree to provide current, complete, and accurate purchase and
          account information for all purchases made via the Services. You
          further agree to promptly update account and payment information,
          including email address, payment method, and payment card expiration
          date, so that we can complete your transactions and contact you as
          needed. Sales tax will be added to the price of purchases as deemed
          required by us. We may change prices at any time. All payments shall
          be in Naira.
        </p>

        <p>
          You agree to pay all charges at the prices then in effect for your
          purchases and any applicable shipping fees, and you authorize us to
          charge your chosen payment provider for any such amounts upon placing
          your order. We reserve the right to correct any errors or mistakes in
          pricing, even if we have already requested or received payment.
        </p>

        <p>
          We reserve the right to refuse any order placed through the Services.
          We may, in our sole discretion, limit or cancel quantities purchased
          per person, per household, or per order. These restrictions may
          include orders placed by or under the same customer account, the same
          payment method, and/or orders that use the same billing or shipping
          address. We reserve the right to limit or prohibit orders that, in our
          sole judgment, appear to be placed by dealers, resellers, or
          distributors.
        </p>

        <h3 id='cancellation'>6. CANCELLATION</h3>

        <p>
          All purchases are non-refundable. You can cancel your subscription at
          any time by contacting us using the contact information provided
          below. Your cancellation will take effect at the end of the current
          paid term.
        </p>

        <p>
          If you are unsatisfied with our Services, please email us at{" "}
          <a href="mailto:support@estility.co">support@estility.co</a>. or call us at +2349169578082.
        </p>

        <h3 id='software'>7. SOFTWARE</h3>

        <p>
          We may include software for use in connection with our Services. If
          such software is accompanied by an end user license agreement
          ('EULA'), the terms of the EULA will govern your use of the software.
          If such software is not accompanied by a EULA, then we grant to you a
          non-exclusive, revocable, personal, and non-transferable license to
          use such software solely in connection with our services and in
          accordance with these Legal Terms. Any software and any related
          documentation are provided 'AS IS' without warranty of any kind,
          either express or implied, including, without limitation, the implied
          warranties of merchantability, fitness for a particular purpose, or
          non-infringement. You accept any and all risk arising out of use or
          performance of any software. You may not reproduce or redistribute any
          software except in accordance with the EULA or these Legal Terms.
        </p>

        <h3 id='prohibited-activities'>8. PROHIBITED ACTIVITIES</h3>

        <p>
          You may not access or use the Services for any purpose other than that
          for which we make the Services available. The Services may not be used
          in connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.
        </p>

        <p>As a user of the Services, you agree not to:</p>

        <ul className="d-flex flex-column gap-2">
          <li>
            Systematically retrieve data or other content from the Services to
            create or compile, directly or indirectly, a collection,
            compilation, database, or directory without written permission from
            us.
          </li>
          <li>
            Trick, defraud, or mislead us and other users, especially in any
            attempt to learn sensitive account information such as user
            passwords.
          </li>
          <li>
            Circumvent, disable, or otherwise interfere with security-related
            features of the Services, including features that prevent or
            restrict the use or copying of any Content or enforce limitations on
            the use of the Services and/or the Content contained therein.
          </li>
          <li>
            Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
            Services.
          </li>
          <li>
            Use any information obtained from the Services in order to harass,
            abuse, or harm another person.
          </li>
          <li>
            Make improper use of our support services or submit false reports of
            abuse or misconduct.
          </li>
          <li>
            Use the Services in a manner inconsistent with any applicable laws
            or regulations.
          </li>
          <li>Engage in unauthorized framing of or linking to the Services.</li>
          <li>
            Upload or transmit (or attempt to upload or to transmit) viruses,
            Trojan horses, or other material, including excessive use of capital
            letters and spamming (continuous posting of repetitive text), that
            interferes with any party’s uninterrupted use and enjoyment of the
            Services or modifies, impairs, disrupts, alters, or interferes with
            the use, features, functions, operation, or maintenance of the
            Services.
          </li>
          <li>
            Engage in any automated use of the system, such as using scripts to
            send comments or messages, or using any data mining, robots, or
            similar data gathering and extraction tools.
          </li>
          <li>
            Delete the copyright or other proprietary rights notice from any
            Content.
          </li>
          <li>
            Attempt to impersonate another user or person or use the username of
            another user.
          </li>
          <li>
            Upload or transmit (or attempt to upload or to transmit) any
            material that acts as a passive or active information collection or
            transmission mechanism, including without limitation, clear graphics
            interchange formats ('gifs'), 1×1 pixels, web bugs, cookies, or
            other similar devices (sometimes referred to as 'spyware' or
            'passive collection mechanisms' or 'pcms').
          </li>
          <li>
            Interfere with, disrupt, or create an undue burden on the Services
            or the networks or services connected to the Services.
          </li>
          <li>
            Harass, annoy, intimidate, or threaten any of our employees or
            agents engaged in providing any portion of the Services to you.
          </li>
          <li>
            Attempt to bypass any measures of the Services designed to prevent
            or restrict access to the Services, or any portion of the Services.
          </li>
          <li>
            Copy or adapt the Services' software, including but not limited to
            Flash, PHP, HTML, JavaScript, or other code.
          </li>
          <li>
            Except as permitted by applicable law, decipher, decompile,
            disassemble, or reverse engineer any of the software comprising or
            in any way making up a part of the Services.
          </li>
          <li>
            Except as may be the result of standard search engine or Internet
            browser usage, use, launch, develop, or distribute any automated
            system, including without limitation, any spider, robot, cheat
            utility, scraper, or offline reader that accesses the Services, or
            use or launch any unauthorized script or other software.
          </li>
          <li>
            Use a buying agent or purchasing agent to make purchases on the
            Services.
          </li>
          <li>
            Make any unauthorized use of the Services, including collecting
            usernames and/or email addresses of users by electronic or other
            means for the purpose of sending unsolicited email, or creating user
            accounts by automated means or under false pretenses.
          </li>
          <li>
            Use the Services as part of any effort to compete with us or
            otherwise use the Services and/or the Content for any
            revenue-generating endeavor or commercial enterprise.
          </li>
          <li>Sell or otherwise transfer your profile.</li>
        </ul>

        <h3 id='user-generated-contributions'>9. USER GENERATED CONTRIBUTIONS</h3>

        <p>
          The Services do not offer users to submit or post content. We may
          provide you with the opportunity to create, submit, post, display,
          transmit, perform, publish, distribute, or broadcast content and
          materials to us or on the Services, including but not limited to text,
          writings, video, audio, photographs, graphics, comments, suggestions,
          or personal information or other material (collectively,
          'Contributions'). Contributions may be viewable by other users of the
          Services and through third-party websites. When you create or make
          available any Contributions, you thereby represent and warrant that:
        </p>

        <ul>
          <li>
            The creation, distribution, transmission, public display, or
            performance, and the accessing, downloading, or copying of your
            Contributions do not and will not infringe the proprietary rights,
            including but not limited to the copyright, patent, trademark, trade
            secret, or moral rights of any third party.
          </li>
          <li>
            You are the creator and owner of or have the necessary licenses,
            rights, consents, releases, and permissions to use and to authorize
            us, the Services, and other users of the Services to use your
            Contributions in any manner contemplated by the Services and these
            Legal Terms.
          </li>
          <li>
            You have the written consent, release, and/or permission of each and
            every identifiable individual person in your Contributions to use
            the name or likeness of each and every such identifiable individual
            person to enable inclusion and use of your Contributions in any
            manner contemplated by the Services and these Legal Terms.
          </li>
          <li>Your Contributions are not false, inaccurate, or misleading.</li>
          <li>
            Your Contributions are not unsolicited or unauthorized advertising,
            promotional materials, pyramid schemes, chain letters, spam, mass
            mailings, or other forms of solicitation.
          </li>
          <li>
            Your Contributions are not obscene, lewd, lascivious, filthy,
            violent, harassing, libelous, slanderous, or otherwise objectionable
            (as determined by us).
          </li>
          <li>
            Your Contributions do not ridicule, mock, disparage, intimidate, or
            abuse anyone.
          </li>
          <li>
            Your Contributions are not used to harass or threaten (in the legal
            sense of those terms) any other person and to promote violence
            against a specific person or class of people.
          </li>
          <li>
            Your Contributions do not violate any applicable law, regulation, or
            rule.
          </li>
          <li>
            Your Contributions do not violate the privacy or publicity rights of
            any third party.
          </li>
          <li>
            Your Contributions do not violate any applicable law concerning
            child pornography or otherwise intended to protect the health or
            well-being of minors.
          </li>
          <li>
            Your Contributions do not include any offensive comments that are
            connected to race, national origin, gender, sexual preference, or
            physical handicap.
          </li>
          <li>
            Your Contributions do not otherwise violate, or link to material
            that violates, any provision of these Legal Terms, or any applicable
            law or regulation.
          </li>
        </ul>

        <p>
          Any use of the Services in violation of the foregoing violates these
          Legal Terms and may result in, among other things, termination or
          suspension of your rights to use the Services.
        </p>

        <h3 id='contribution-license'>10. CONTRIBUTION LICENSE</h3>

        <p>
          You and Services agree that we may access, store, process, and use any
          information and personal data that you provide and your choices
          (including settings).
        </p>

        <p>
          By submitting suggestions or other feedback regarding the Services,
          you agree that we can use and share such feedback for any purpose
          without compensation to you.
        </p>

        <p>
          We do not assert any ownership over your Contributions. You retain
          full ownership of all of your Contributions and any intellectual
          property rights or other proprietary rights associated with your
          Contributions. We are not liable for any statements or representations
          in your Contributions provided by you in any area on the Services. You
          are solely responsible for your Contributions to the Services and you
          expressly agree to exonerate us from any and all responsibility and to
          refrain from any legal action against us regarding your Contributions.
        </p>

        <h3 id='reviews-guidelines'>11. GUIDELINES FOR REVIEWS</h3>

        <p>
          We may provide you areas on the Services to leave reviews or ratings.
          When posting a review, you must comply with the following criteria:
        </p>

        <ol>
          <li>
            You should have firsthand experience with the person/entity being
            reviewed.
          </li>
          <li>
            Your reviews should not contain offensive profanity or abusive,
            racist, offensive, or hateful language.
          </li>
          <li>
            Your reviews should not contain discriminatory references based on
            religion, race, gender, national origin, age, marital status, sexual
            orientation, or disability.
          </li>
          <li>
            Your reviews should not contain references to illegal activity.
          </li>
          <li>
            You should not be affiliated with competitors if posting negative
            reviews.
          </li>
          <li>
            You should not make any conclusions as to the legality of conduct.
          </li>
          <li>You may not post any false or misleading statements.</li>
          <li>
            You may not organize a campaign encouraging others to post reviews,
            whether positive or negative.
          </li>
        </ol>

        <p>
          We may accept, reject, or remove reviews in our sole discretion. We
          have absolutely no obligation to screen reviews or to delete reviews,
          even if anyone considers reviews objectionable or inaccurate. Reviews
          are not endorsed by us and do not necessarily represent our opinions
          or the views of any of our affiliates or partners. We do not assume
          liability for any review or for any claims, liabilities, or losses
          resulting from any review. By posting a review, you hereby grant to us
          a perpetual, non-exclusive, worldwide, royalty-free, fully paid,
          assignable, and sublicensable right and license to reproduce, modify,
          translate, transmit by any means, display, perform, and/or distribute
          all content relating to the review.
        </p>

        <h3 id='mobile-app-license'>12. MOBILE APPLICATION LICENSE</h3>

        <h2>Use License</h2>

        <p>
          If you access the Services via the App, then we grant you a revocable,
          non-exclusive, non-transferable, limited right to install and use the
          App on wireless electronic devices owned or controlled by you, and to
          access and use the App on such devices strictly in accordance with the
          terms and conditions of this mobile application license contained in
          these Legal Terms. You shall not:
        </p>

        <ol>
          <li>
            Except as permitted by applicable law, decompile, reverse engineer,
            disassemble, attempt to derive the source code of, or decrypt the
            App.
          </li>
          <li>
            Make any modification, adaptation, improvement, enhancement,
            translation, or derivative work from the App.
          </li>
          <li>
            Violate any applicable laws, rules, or regulations in connection
            with your access or use of the App.
          </li>
          <li>
            Remove, alter, or obscure any proprietary notice (including any
            notice of copyright or trademark) posted by us or the licensors of
            the App.
          </li>
          <li>
            Use the App for any revenue-generating endeavor, commercial
            enterprise, or other purpose for which it is not designed or
            intended.
          </li>
          <li>
            Make the App available over a network or other environment
            permitting access or use by multiple devices or users at the same
            time.
          </li>
          <li>
            Use the App for creating a product, service, or software that is,
            directly or indirectly, competitive with or in any way a substitute
            for the App.
          </li>
          <li>
            Use the App to send automated queries to any website or to send any
            unsolicited commercial email.
          </li>
          <li>
            Use any proprietary information or any of our interfaces or our
            other intellectual property in the design, development, manufacture,
            licensing, or distribution of any applications, accessories, or
            devices for use with the App.
          </li>
        </ol>

        <h2>Apple and Android Devices</h2>

        <p>
          The following terms apply when you use the App obtained from either
          the Apple Store or Google Play (each an 'App Distributor') to access
          the Services:
        </p>

        <ol>
          <li>
            The license granted to you for our App is limited to a
            non-transferable license to use the application on a device that
            utilizes the Apple iOS or Android operating systems, as applicable,
            and in accordance with the usage rules set forth in the applicable
            App Distributor’s terms of service.
          </li>
          <li>
            We are responsible for providing any maintenance and support
            services with respect to the App as specified in the terms and
            conditions of this mobile application license contained in these
            Legal Terms or as otherwise required under applicable law, and you
            acknowledge that each App Distributor has no obligation whatsoever
            to furnish any maintenance and support services with respect to the
            App.
          </li>
          <li>
            In the event of any failure of the App to conform to any applicable
            warranty, you may notify the applicable App Distributor, and the App
            Distributor, in accordance with its terms and policies, may refund
            the purchase price, if any, paid for the App, and to the maximum
            extent permitted by applicable law, the App Distributor will have no
            other warranty obligation whatsoever with respect to the App.
          </li>
          <li>
            You represent and warrant that (i) you are not located in a country
            that is subject to a US government embargo, or that has been
            designated by the US government as a 'terrorist supporting' country
            and (ii) you are not listed on any US government list of prohibited
            or restricted parties.
          </li>
          <li>
            You must comply with applicable third-party terms of agreement when
            using the App, e.g., if you have a VoIP application, then you must
            not be in violation of their wireless data service agreement when
            using the App.
          </li>
          <li>
            You acknowledge and agree that the App Distributors are third-party
            beneficiaries of the terms and conditions in this mobile application
            license contained in these Legal Terms, and that each App
            Distributor will have the right (and will be deemed to have accepted
            the right) to enforce the terms and conditions in this mobile
            application license contained in these Legal Terms against you as a
            third-party beneficiary thereof.
          </li>
        </ol>

        <h3 id='services-management'>13. SERVICES MANAGEMENT</h3>

        <p>We reserve the right, but not the obligation, to:</p>

        <ol>
          <li>Monitor the Services for violations of these Legal Terms.</li>
          <li>
            Take appropriate legal action against anyone who, in our sole
            discretion, violates the law or these Legal Terms, including without
            limitation, reporting such user to law enforcement authorities.
          </li>
          <li>
            In our sole discretion and without limitation, refuse, restrict
            access to, limit the availability of, or disable (to the extent
            technologically feasible) any of your Contributions or any portion
            thereof.
          </li>
          <li>
            In our sole discretion and without limitation, notice, or liability,
            to remove from the Services or otherwise disable all files and
            content that are excessive in size or are in any way burdensome to
            our systems.
          </li>
          <li>
            Otherwise manage the Services in a manner designed to protect our
            rights and property and to facilitate the proper functioning of the
            Services.
          </li>
        </ol>

        <h3 id='privacy-policy'>14. PRIVACY POLICY</h3>

        <p>
          We care about data privacy and security. By using the Services, you
          agree to be bound by our Privacy Policy posted on the Services, which
          is incorporated into these Legal Terms. Please be advised the Services
          are hosted in Nigeria. If you access the Services from any other
          region of the world with laws or other requirements governing personal
          data collection, use, or disclosure that differ from applicable laws
          in Nigeria, then through your continued use of the Services, you are
          transferring your data to Nigeria, and you expressly consent to have
          your data transferred to and processed in Nigeria.
        </p>

        <h3 id='term-termination'>15. TERM AND TERMINATION</h3>

        <p>
          These Legal Terms shall remain in full force and effect while you use
          the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL
          TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT
          NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING
          BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO
          REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION,
          WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY
          APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
          PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT
          OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR
          SOLE DISCRETION.
        </p>

        <p>
          If we terminate or suspend your account for any reason, you are
          prohibited from registering and creating a new account under your
          name, a fake or borrowed name, or the name of any third party, even if
          you may be acting on behalf of the third party. In addition to
          terminating or suspending your account, we reserve the right to take
          appropriate legal action, including without limitation pursuing civil,
          criminal, and injunctive redress.
        </p>

        <h3 id='modifications-interruptions'>16. MODIFICATIONS AND INTERRUPTIONS</h3>

        <p>
          We reserve the right to change, modify, or remove the contents of the
          Services at any time or for any reason at our sole discretion without
          notice. However, we have no obligation to update any information on
          our Services. We will not be liable to you or any third party for any
          modification, price change, suspension, or discontinuance of the
          Services.
        </p>

        <p>
          We cannot guarantee the Services will be available at all times. We
          may experience hardware, software, or other problems or need to
          perform maintenance related to the Services, resulting in
          interruptions, delays, or errors. We reserve the right to change,
          revise, update, suspend, discontinue, or otherwise modify the Services
          at any time or for any reason without notice to you. You agree that we
          have no liability whatsoever for any loss, damage, or inconvenience
          caused by your inability to access or use the Services during any
          downtime or discontinuance of the Services. Nothing in these Legal
          Terms will be construed to obligate us to maintain and support the
          Services or to supply any corrections, updates, or releases in
          connection therewith.
        </p>

        <h3 id='governing-law'>17. GOVERNING LAW</h3>

        <p>
          These Legal Terms shall be governed by and defined following the laws
          of Nigeria. Estility Ltd and yourself irrevocably consent that the
          courts of Nigeria shall have exclusive jurisdiction to resolve any
          dispute which may arise in connection with these Legal Terms.
        </p>

        <h3 id='dispute-resolution'>18. DISPUTE RESOLUTION</h3>

        <h4>Informal Negotiations</h4>

        <p>
          To expedite resolution and control the cost of any dispute,
          controversy, or claim related to these Legal Terms (each a 'Dispute'
          and collectively, the 'Disputes') brought by either you or us
          (individually, a 'Party' and collectively, the 'Parties'), the Parties
          agree to first attempt to negotiate any Dispute (except those Disputes
          expressly provided below) informally for at least thirty (30) days
          before initiating arbitration. Such informal negotiations commence
          upon written notice from one Party to the other Party.
        </p>

        <h4>Binding Arbitration</h4>

        <p>
          Any dispute arising out of or in connection with these Legal Terms,
          including any question regarding its existence, validity, or
          termination, shall be referred to and finally resolved by the
          International Commercial Arbitration Court under the European
          Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according
          to the Rules of this ICAC, which, as a result of referring to it, is
          considered as the part of this clause. The number of arbitrators shall
          be one (1). The seat, or legal place, or arbitration shall be Lagos,
          Nigeria. The language of the proceedings shall be English. The
          governing law of these Legal Terms shall be the substantive law of
          Nigeria.
        </p>

        <h4>Restrictions</h4>

        <p>
          The Parties agree that any arbitration shall be limited to the Dispute
          between the Parties individually. To the full extent permitted by law,
          (a) no arbitration shall be joined with any other proceeding; (b)
          there is no right or authority for any Dispute to be arbitrated on a
          class-action basis or to utilize class action procedures; and (c)
          there is no right or authority for any Dispute to be brought in a
          purported representative capacity on behalf of the general public or
          any other persons.
        </p>

        <h4>Exceptions to Informal Negotiations and Arbitration</h4>

        <p>
          The Parties agree that the following Disputes are not subject to the
          above provisions concerning informal negotiations binding arbitration:
          (a) any Disputes seeking to enforce or protect, or concerning the
          validity of, any of the intellectual property rights of a Party; (b)
          any Dispute related to, or arising from, allegations of theft, piracy,
          invasion of privacy, or unauthorized use; and (c) any claim for
          injunctive relief. If this provision is found to be illegal or
          unenforceable, then neither Party will elect to arbitrate any Dispute
          falling within that portion of this provision found to be illegal or
          unenforceable, and such Dispute shall be decided by a court of
          competent jurisdiction within the courts listed for jurisdiction
          above, and the Parties agree to submit to the personal jurisdiction of
          that court.
        </p>

        <h3 id='corrections'>19. CORRECTIONS</h3>

        <p>
          There may be information on the Services that contains typographical
          errors, inaccuracies, or omissions, including descriptions, pricing,
          availability, and various other information. We reserve the right to
          correct any errors, inaccuracies, or omissions and to change or update
          the information on the Services at any time, without prior notice.
        </p>

        <h3 id='disclaimer'>20. DISCLAIMER</h3>

        <p>
          THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
          AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE
          FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS
          OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF,
          INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
          ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF
          ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES, AND WE
          WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS,
          MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL
          INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM
          YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO
          OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION
          AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR
          CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS,
          VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
          THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR
          OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF
          ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
          TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT
          WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT
          OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE
          SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE
          APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL
          NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
          TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR
          SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY
          MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND
          EXERCISE CAUTION WHERE APPROPRIATE.
        </p>

        <h3 id='limitations-of-liability'>21. LIMITATIONS OF LIABILITY</h3>

        <p>
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
          TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
          EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
          PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR
          USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY
          OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED
          HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS
          OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT
          PAID, IF ANY, BY YOU TO US DURING THE ONE (1) MONTH PERIOD PRIOR TO
          ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL
          LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION
          OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR
          ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND
          YOU MAY HAVE ADDITIONAL RIGHTS.
        </p>

        <h3 id='indemnification'>22. INDEMNIFICATION</h3>

        <p>
          You agree to defend, indemnify, and hold us harmless, including our
          subsidiaries, affiliates, and all of our respective officers, agents,
          partners, and employees, from and against any loss, damage, liability,
          claim, or demand, including reasonable attorneys’ fees and expenses,
          made by any third party due to or arising out of: (1) use of the
          Services; (2) breach of these Legal Terms; (3) any breach of your
          representations and warranties set forth in these Legal Terms; (4)
          your violation of the rights of a third party, including but not
          limited to intellectual property rights; or (5) any overt harmful act
          toward any other user of the Services with whom you connected via the
          Services. Notwithstanding the foregoing, we reserve the right, at your
          expense, to assume the exclusive defense and control of any matter for
          which you are required to indemnify us, and you agree to cooperate, at
          your expense, with our defense of such claims. We will use reasonable
          efforts to notify you of any such claim, action, or proceeding which
          is subject to this indemnification upon becoming aware of it.
        </p>

        <h3 id='user-data'>23. USER DATA</h3>

        <p>
          We will maintain certain data that you transmit to the Services for
          the purpose of managing the performance of the Services, as well as
          data relating to your use of the Services. Although we perform regular
          routine backups of data, you are solely responsible for all data that
          you transmit or that relates to any activity you have undertaken using
          the Services. You agree that we shall have no liability to you for any
          loss or corruption of any such data, and you hereby waive any right of
          action against us arising from any such loss or corruption of such
          data.
        </p>

        <h3 id='electronic-communications'>24. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h3>

        <p>
          Visiting the Services, sending us emails, and completing online forms
          constitute electronic communications. You consent to receive
          electronic communications, and you agree that all agreements, notices,
          disclosures, and other communications we provide to you
          electronically, via email and on the Services, satisfy any legal
          requirement that such communication be in writing. YOU HEREBY AGREE TO
          THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER
          RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS
          OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You
          hereby waive any rights or requirements under any statutes,
          regulations, rules, ordinances, or other laws in any jurisdiction
          which require an original signature or delivery or retention of
          non-electronic records, or to payments or the granting of credits by
          any means other than electronic means.
        </p>

        <h3 id='miscellaneous'>25. MISCELLANEOUS</h3>

        <p>
          These Legal Terms and any policies or operating rules posted by us on
          the Services or in respect to the Services constitute the entire
          agreement and understanding between you and us. Our failure to
          exercise or enforce any right or provision of these Legal Terms shall
          not operate as a waiver of such right or provision. These Legal Terms
          operate to the fullest extent permissible by law. We may assign any or
          all of our rights and obligations to others at any time. We shall not
          be responsible or liable for any loss, damage, delay, or failure to
          act caused by any cause beyond our reasonable control. If any
          provision or part of a provision of these Legal Terms is determined to
          be unlawful, void, or unenforceable, that provision or part of the
          provision is deemed severable from these Legal Terms and does not
          affect the validity and enforceability of any remaining provisions.
          There is no joint venture, partnership, employment or agency
          relationship created between you and us as a result of these Legal
          Terms or use of the Services. You agree that these Legal Terms will
          not be construed against us by virtue of having drafted them. You
          hereby waive any and all defenses you may have based on the electronic
          form of these Legal Terms and the lack of signing by the parties
          hereto to execute these Legal Terms.
        </p>

        <h3 id='contact-us'>26. CONTACT US</h3>

        <p>
          In order to resolve a complaint regarding the Services or to receive
          further information regarding use of the Services, please contact us
          at:
        </p>

        <p>Estility Ltd</p>
        <p>Maben Condominium Estate</p>
        <p>Lagos 105102</p>
        <p>Nigeria</p>
        <p>Phone: +234 916 957 8082</p>
        <p>Email: info@estility.co</p>
      </div>

      <Future />
      <br />
    </div>
  );
};

export default TermsAndConditions;
