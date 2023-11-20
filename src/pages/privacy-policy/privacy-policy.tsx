import React from "react";
import TermsAndConditions, {
  HeaderBanner,
} from "../terms-and-conditions/terms-and-conditions";
import { termsArray } from "../../components/terms";
import Future from "../../components/future/future";

const PrivacyPolicy = () => {
  return (
    <div className="d-flex flex-column sora-font T-and-C">
      <HeaderBanner
        title="Privacy Policy"
        hasSubText={false}
        hasButton={false}
      />
      <div className="terms-container d-flex flex-column">
        <div className="d-flex flex-column gap-2">
          <h3>Estility’s Privacy Notice</h3>

          <div>
            <h3 className="mt-1 mb-1">Introduction</h3>
            <p>
              Estility Ltd (“Estility”, the “Company”, or “we” or “us”) values
              the personal data of the persons (“Users”, “you”, “your”) who use
              our website or any of our mobile applications (the “Platform”). We
              have made it our obligation to ensure that your personal data is
              protected whenever you use our Platform. We have, therefore, set
              out to describe how we treat your personal data and the rights you
              have with respect to your data as a user of our Platform. Please
              read this Privacy Notice (the “Notice”) to understand how we
              collect, use, share, process, and store your personal data. Please
              note that the application of this Notice does not extend to
              services that are not owned or controlled by Estility, including
              third-party websites and the services of other Estility’s
              partners. Estility handles personal data provided to us by our
              Users in strict compliance with applicable data privacy and
              protection laws.
            </p>
          </div>

          <div className="d-flex flex-column gap-2">
            <h3>The Information we Collect</h3>
            <p>
              To access Estility’s Services and for optimal use of the Platform,
              we collect personal data from you...
            </p>
            <ul className="d-flex flex-column gap-2">
              <li>
                <strong>Sign-up Data:</strong> This includes your full name,
                date of birth, nationality, residential address, country of tax
                residence, marital status, email address, phone number, and
                occupation. This information is necessary for us to carry out
                our know-your-customer checks (KYC) on you when you register to
                use our services. We may not collect all of this information and
                may typically only require a few of the items listed, but we
                reserve the right to request for any or all of the above-listed
                categories of sign-up data, should we need to.
              </li>
              <li>
                <strong>Employment Related Data:</strong> This may be
                categorized into:
                <ul className="d-flex flex-column gap-2">
                  <li>
                    <strong>As a prospective employee:</strong> If you apply for
                    a role with Estility, during your recruitment process,
                    information we collect may include your full name, phone
                    number, email address, information related to your previous
                    employment, and other personal information as you may
                    disclose in your curriculum vitae or resume. Depending on
                    how far you get with our recruitment process, we may share
                    your data with background verification platforms for
                    screening checks. You have the right to object to this
                    processing. However, objecting means we may be unable to
                    proceed with your recruitment exercise with us.
                  </li>
                  <li>
                    <strong>As an employee:</strong> In addition to the
                    information above, we may collect and process your tax
                    information, bank account information, marital status,
                    information from your previous employers and/or referees,
                    evidence of your home address, and such other information as
                    we may require to ensure a healthy employment relationship
                    with us.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Sales/Marketing Data:</strong> This includes data we
                collect when you sign up for our newsletter, you provide to our
                sales or marketing team at a physical outreach or event, you
                provide during a social media campaign, you provide when you
                commence the process of onboarding on our Platform without
                completing it.
              </li>
              <li>
                <strong>Complaint Resolution Data:</strong> We collect and
                process your name, contact email and phone number, including
                other information you voluntarily provide in relation to an
                issue you need us to resolve, or any feedback you provide, when
                you reach out to us through channels like our social media
                platforms, or the contact page on our website. This information
                is used solely for the purpose of resolving the issues you
                raise.
              </li>
              <li>
                <strong className="">Other Information:</strong>
                <ul className="d-flex flex-column gap-2 mt-1">
                  <li>
                    <strong>Analytics:</strong> We analyze our relationship and
                    transactional information to derive unique data. For
                    example, we may generate propensities, attributes, and/or
                    scores for marketing, security, or fraud purposes.
                  </li>
                  <li>
                    <strong>
                      Information derived from your use of our website and other
                      technical products:
                    </strong>{" "}
                    This includes information regarding your interactions with
                    our websites, applications or advertisements, including IP
                    address, device identifiers, settings, characteristics,
                    advertising ID, browsing history, web server logs, server
                    log records, activity log records, keystroke timing, and
                    other information collected using cookies and similar
                    technologies. We may also use such data to improve features,
                    website content and analyze data to develop products and
                    services.
                  </li>
                  <li>
                    <strong>Audio and Visual Information:</strong> This includes
                    audio, electronic, visual, or similar information relating
                    to your interactions with us, including photographs, video
                    images, CCTV recordings, call center recordings, call
                    monitoring records, and voicemails.
                  </li>
                  <li>
                    <strong>Government-Issued Identification Numbers:</strong>{" "}
                    Whether as an employee or a shareholder or director of any
                    of our partners, we may request a government-issued ID to
                    carry our verification of your identity. We may use third
                    party services for this verification. We may also collect
                    information about your device including Cookies: We use
                    cookies on our website. You may check out our cookies policy
                    here.
                  </li>
                  <li>
                    <strong>Minors:</strong> We do not collect the information
                    of minors. If you are under the age of 18, you are not
                    eligible to use our service. Kindly refer to our Terms of
                    Use.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h3>Uses of Information</h3>
            <p className="mt-1">We use your personally identifiable information to...</p>
            <ul className="d-flex flex-column gap-2">
              <li>
                Provide you with our services and customer support, including
                processing your transaction requests.
              </li>
              <li>
                Process your requests, resolve disputes, and troubleshoot
                problems.
              </li>
              <li>
                Prevent potentially prohibited or illegal activities and enforce
                our Terms of Use and any other agreement which you may sign with
                us.
              </li>
              <li>Customize, measure, and improve our services.</li>
              <li>
                Customize and improve the layout of our website and Platform
                generally.
              </li>
              <li>
                Compare information for accuracy and verify with third parties.
              </li>
              <li>Update our databases and provide user support.</li>
              <li>
                Provide you with information about other services we offer which
                you may not have signed up for or may not be available at the
                time of your onboarding.
              </li>
              <li>Authenticate your access to a user account.</li>
              <li>Communicate with you about your account.</li>
              <li>
                Manage risk, fraud, and abuse of our services and protect you
                from fraud by verifying your identity.
              </li>
              <li>
                Comply with our obligations and enforce the terms of our sites
                and services, including complying with all applicable laws and
                regulations.
              </li>
              <li>
                Trail information breach and remediate such identified breaches.
              </li>
              <li>Resolve disputes and troubleshoot problems.</li>
            </ul>
          </div>

          <div>
            <h3>Marketing</h3>
            <p className="mt-1">
              We may use your personal data for the purpose of providing
              targeted marketing services about our services or any of our
              partners’ services to you. We may send marketing communications to
              you by SMS or email. You have the right to opt out of any of these
              channels at any time, if you do not want to receive them.
            </p>
          </div>

          <h3>What Constitutes your Consent?</h3>
          <p>
            Consent has to be expressly given and so given through a positive
            action. We obtain your consent when you either click on a consent
            icon shown to you on our platform or sign or imprint your name or
            initial on a consent request form.
          </p>

          <p>
            We do not always rely on consent as the lawful basis for our
            processing of your personal data. However, where processing of your
            personal data is based on consent, we will obtain the requisite
            consent at the time of collection of the personal data by expressly
            asking that you consent to the processing of your personal data when
            you access our Platforms or use the services we provide on them. You
            can withdraw your consent at any time. But, when you do, your
            withdrawal will not affect the processing of your personal data
            which we already carried out based on your consent before your
            withdrawal.
          </p>

          <p>
            We may retrieve personal data about you from third parties,
            including financial and security institutions.
          </p>

          <h3>Sharing of Information</h3>

          <p>
            We assure you that your personal data will only be used for the
            purpose for which we obtained it. However, we may share your
            personal data with our partners subject to appropriate data security
            and protection measures.
          </p>

          <p>
            We will comply with applicable data protection laws when
            transferring your data out of the jurisdiction where it is primarily
            used.
          </p>

          <p>
            In the event that our platform contains third-party links or links
            to other websites, we advise that you check the privacy notices and
            safeguards in place on such websites as we are not responsible for
            the privacy practices or safeguards of these sites and will not be
            responsible for your use of such websites. Estility will not accept
            any responsibility for any loss or damage in whatever manner
            resulting from your disclosure of your personal information to such
            third parties.
          </p>

          <p>
            We may share your Personal Data or other information about you with
            others for the following reasons:
          </p>

          <h4>With our partners:</h4>
          <p>
            These include for the purpose of security checks, KYC verifications,
            transaction monitoring, fraud prevention, regulatory compliance,
            customer support services, and marketing services.
          </p>

          <h4>
            With other third parties for our business purposes or as permitted
            or required by law:
          </h4>
          <p>This may include:</p>
          <ul>
            <li>To comply with a law, guidelines, or regulations;</li>
            <li>
              To law enforcement authorities or other government officials or
              other third parties pursuant to a court order or other legal
              process or requirements applicable to Estility’s or Estility’s
              corporate family;
            </li>
            <li>
              If we have reasonable cause to believe that the disclosure of your
              personal data is necessary or appropriate to prevent physical harm
              or financial loss or in connection with an investigation of
              suspected or actual illegal activity;
            </li>
            <li>To protect the vital interests of a person;</li>
            <li>
              To investigate violations of or enforce our terms of use or other
              legal terms applicable to any service;
            </li>
            <li>To protect our property, services, and legal rights;</li>
            <li>
              To facilitate a purchase or sale of all or part of our business;
            </li>
            <li>
              To companies that we plan to merge with or be acquired by; and
            </li>
            <li>
              To support our audit, compliance, and corporate governance
              functions.
            </li>
          </ul>

          <p>
            In each of the instances listed above, we will only share such
            personal information as is relevant and necessary to comply with the
            particular process concerned.
          </p>

          <h4>
            We may also share your Personal Data and other information with your
            consent or direction.
          </h4>

          <h3>Your Rights</h3>

          <p>
            You can exercise the following rights with respect to your personal
            data with Estility:
          </p>

          <ul>
            <li>
              Request and access your personal data which we collected and
              stored;
            </li>
            <li>
              Withdraw your consent at any time. For example, you can withdraw
              your consent to receive our marketing or promotional materials or
              unsubscribe to our newsletters;
            </li>
            <li>Object to automated decision making;</li>
            <li>
              Request rectification and modification of your personal data;
            </li>
            <li>Request for deletion of your personal data;</li>
            <li>
              Be informed of and entitled to provide consent prior to the
              processing of personal data for purposes other than that for which
              the personal data were collected;
            </li>
            <li>
              Request that we restrict processing of your personal data; and
            </li>
            <li>
              Request for information regarding any specific processing of your
              personal data.
            </li>
          </ul>

          <p>
            You may exercise any of these rights by sending an email to{" "}
            <a href="mailto:support@Estility.co">support@Estility.co</a> where
            your requests will be treated promptly.
          </p>

          <h3>Lawful Basis for Processing Personal Data</h3>

          <p>
            We will only use your Personal Data if we have a lawful reason to do
            so. Our various lawful bases for using your Personal Data may
            include:
          </p>

          {/* Include more sections as needed */}
          <h3>Purpose of Collecting and Processing</h3>
          <h4>Lawful Basis</h4>

          <p>
            <strong>KYC Verification and Onboarding</strong>
          </p>
          <ul>
            <li>
              <strong>Your Consent</strong>
            </li>
            <li>
              <strong>Lawful purpose -</strong> we are required by our
              regulators to collect this information
            </li>
            <li>
              <strong>To fulfil the terms of the contract</strong> which you
              sign with us at the point of onboarding
            </li>
            <li>
              <strong>Legitimate interests (ours and those of others)</strong>{" "}
              such as to protect you, us, or others from threats (such as
              security threats or fraud); to enable or administer our business,
              such as for quality control, compliance, consolidated reporting
              and customer service; to manage corporate transactions, such as
              mergers or acquisitions; and to understand and improve our
              business or customer relationships generally
            </li>
          </ul>

          <p>
            <strong>Transaction Processing and Monitoring</strong>
          </p>
          <ul>
            <li>
              <strong>Lawful purpose -</strong> we are required by our
              regulators to collect this information
            </li>
            <li>
              <strong>To fulfil the terms of the contract</strong> which you
              sign with us at the point of onboarding
            </li>
            <li>
              <strong>Legitimate interests (ours and those of others)</strong>
            </li>
          </ul>

          <p>
            <strong>Issues Resolution</strong>
          </p>
          <ul>
            <li>
              <strong>To fulfil the terms of the contract</strong> which you
              sign with us at the point of onboarding
            </li>
          </ul>

          <p>
            <strong>Sales and marketing</strong>
          </p>
          <ul>
            <li>
              <strong>Your consent</strong>
            </li>
          </ul>

          <p>
            <strong>Recruitment/Employment</strong>
          </p>
          <ul>
            <li>
              <strong>Your consent;</strong>
            </li>
            <li>
              <strong>For our legitimate interests or those of others;</strong>
            </li>
            <li>
              <strong>To fulfil the terms of your employment contract;</strong>
            </li>
            <li>
              <strong>To comply with labour laws applicable to us.</strong>
            </li>
          </ul>

          <p>
            <strong>
              Generating de-personalized information for product development and
              improvement
            </strong>
          </p>
          <ul>
            <li>
              <strong>For our legitimate interests or those of others</strong>
            </li>
          </ul>

          <p>
            <strong>
              Fraud Monitoring, Chargebacks and Dispute Resolution
            </strong>
          </p>
          <ul>
            <li>
              <strong>For our legitimate interests or those of others;</strong>
            </li>
            <li>
              <strong>To fulfil the terms of your employment contract;</strong>
            </li>
            <li>
              <strong>To comply with labour laws applicable to us.</strong>
            </li>
          </ul>

          <h3>Disclosure of Personal Data</h3>

          <p>
            We may disclose any information we collect about current and former
            customers, including Personal Data, to affiliates and non-affiliated
            third parties as follows:
          </p>

          <ul>
            <li>
              With law enforcement officers, customer onboarding partners,
              transaction monitoring tools, and transaction partners. Disclosure
              will only be on an absolute-necessity basis.
            </li>
            <li>
              With another user, when you sign up for Estility’s services via a
              referral link. The user that referred you may receive information
              indicating that you have enrolled with Estility. You may avoid
              this sharing by not using a referral link to enrol.
            </li>
          </ul>

          <p>
            In connection with our everyday business purposes, we may also share
            personal data about you as follows:
          </p>

          <ul>
            <li>
              In response to a request for personal data, if we are required by,
              or we believe disclosure is in accordance with, any applicable
              law, regulation or legal process.
            </li>
            <li>
              With relevant law enforcement officials or other third parties,
              such as investigators or auditors, if we believe it is appropriate
              to investigate fraud.
            </li>
            <li>
              If we believe your actions are inconsistent with the spirit or
              language of our user agreements or policies, or to protect the
              rights, property and safety of Estility or others.
            </li>
            <li>
              In connection with, or during negotiations of, any merger, sale of
              Estility’s assets, financing or acquisition of all or a portion of
              our business to another company; and
            </li>
            <li>
              With your consent or at your direction, including if we notify you
              that the personal data you provide will be shared in a particular
              manner and you provide such personal data.
            </li>
          </ul>

          <p>
            We may also share aggregated or de-identified personal data, which
            cannot reasonably be used to identify you. For example, we may share
            transaction zip codes with third parties to improve our accuracy in
            geo-locating transactions and to improve the clarity of transaction
            descriptions.
          </p>

          <p>
            We will usually not share your personal data with other third
            parties without your consent, or where, via a legal contract, you
            have authorised us to do so. Where we need to transfer your personal
            data to another country, we shall do so, taking into account the
            data protection law of such a country. We will seek your consent
            where we need to send your data to a country without, in our view,
            an adequate data protection law.
          </p>

          <div>
            <h3>Security</h3>
            <p>
              Estility is committed to managing customer information with the
              highest standards of information security...
              {/* Include the rest of the security section */}
            </p>
          </div>

          <section>
            <h3>Account Monitoring</h3>
            <p>
              You accept that Estility shall have the right to monitor your
              account usage and if required, will disclose personal information
              to local enforcement or investigative agencies or any competent
              regulatory or governmental agencies to assist in the prevention,
              detection, or prosecution of fraud or criminal activities.
            </p>
          </section>

          <section>
            <h3>Estility Employee Obligation</h3>
            <p>
              Estility employees who handle personal information are under an
              obligation to treat it confidentially and may not disclose it to
              third parties. Estility employees are also responsible for the
              internal security of the information. Employees who violate
              Estility's privacy policies are subject to the company’s
              disciplinary procedures.
            </p>
          </section>

          <section>
            <h3>Submitting Information Through Estility</h3>
            <p>
              Any person submitting information to Estility through our platform
              may be granted access rights to that information. Estility has
              developed systems that enable users to access and correct their
              personal information submitted to it. Estility is committed to
              ensuring that personal data processed by the company is accurate
              and up to date in line with the provisions of the applicable data
              protection law.
            </p>
            <p>
              In order to ensure that your personal data with the company is
              current, complete, and accurate, please update us if there are
              changes to your personal information by informing the company’s
              Data Protection Office via the stated contact details. We shall
              take it that your records with the company are current, complete,
              and accurate if we do not receive any update from you.
            </p>
          </section>

          <section>
            <h3>Security</h3>
            <p>
              Estility is committed to managing customer information with the
              highest standards of information security. We protect your
              personal information using physical, technical, and administrative
              security measures to reduce the risks of loss, misuse,
              unauthorized access, disclosure, and alteration.
            </p>
          </section>

          <section>
            <h3>Phishing</h3>
            <p>
              Phishing is the name given to attempts to steal personal details
              and financial account details from a website user. "Phishers" use
              fake or "spoof" emails to lead users to counterfeit websites where
              the user is tricked into entering their personal details, such as
              credit card numbers, usernames, and passwords.
            </p>
          </section>

          <section>
            <h3>Retention of your personal data</h3>
            <p>
              Estility takes appropriate measures to ensure that your Personal
              Data is only processed and retained for a period in line with the
              purposes set out in this Notice, as is stated under our data
              retention policy, or as required by applicable laws. We will also
              determine what action is to be carried out after the period stated
              in policies expired.
            </p>
          </section>

          <section>
            <h3>Inquiries</h3>
            <p>
              Estility is responsible for ensuring that our day-to-day
              procedures are aligned with this Privacy Notice. Should you have
              any questions about this Privacy Notice, Estility's information
              services or your transactions on Estility, you can contact us via
              our customer helplines or by email to support@Estility.co.
            </p>
          </section>
        </div>
      </div>
      <Future />
      <br />
    </div>
  );
};

export default PrivacyPolicy;
