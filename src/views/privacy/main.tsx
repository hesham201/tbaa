import Container from "@/components/container";
// import HeadingTwo from "@/components/heading-two";

const Main = () => {
  return (
    <>
      <div className="py-38">
        <Container>
          <h1 className="text-primary mb-3 text-6xl">PRIVACY POLICY</h1>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-midnight">
              Who are we?
            </h2>
            <p className="mb-2">
              The British Academy of Aesthetic Dentistry Ltd (BAAD Ltd) respects
              your privacy and is committed to maintaining the confidentiality
              of your personal information which you provide to us.
            </p>
            <p className="mb-2">
              Our privacy policy is intended to inform you as to how we take
              care of your data when you interact with us and to tell you about
              your rights.
            </p>
            <p>
              We reserve the right to update or amend our Privacy Policy and
              therefore, you should review the terms of this policy from time to
              time, in order to ensure that you are aware of how BAAD Ltd
              collects and uses your personal information.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-midnight">
              Personal information
            </h2>
            <p>
              You have control over your personal information. Your data may be
              collected if you request us to provide you with a product or
              service – ie when you apply for a service, request marketing
              information or other communication from us or when you send us a
              message via our website. You may visit our website without
              providing us with your personal information, but by completing an
              on-line contact form, you are consenting to the collection and use
              of your personal information by BAAD Ltd.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-midnight">
              How we use your information
            </h2>
            <p className="mb-2">
              The information stored and collected about you, helps us to
              provide and improve the services you need and we may contact you
              regarding products and services which we think may be of interest
              to you or which you may have committed to previously.
            </p>
            <p>
              Whilst we do not sell, trade or transfer your information to third
              parties, we may share your information with our business partners
              for marketing purposes or for the provision of services.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-midnight">
              Service providers
            </h2>
            <p className="mb-2">
              We may employ third-party companies/individuals to facilitate our
              service, to provide a service on our behalf, to perform
              service-related services, or to assist in analysing how our
              service is used.
            </p>
            <p>
              We wish to inform our service users, that these third parties may
              have access to your personal information in order to perform tasks
              assigned to them on our behalf. However, they are obligated not to
              disclose or use the information for any other purpose.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-midnight">
              Links to other sites
            </h2>
            <p>
              The BAAD Ltd website offers links to third party websites. Such
              external sites are not operated by us and we would advise you to
              review the Privacy Policy of these websites. We do not control or
              assume responsibility for the content, practices or privacy
              policies of any third-party sites or service.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-midnight">
              Security
            </h2>
            <p>
              We value your trust in providing us with your personal information
              and strive to protect it. However, no method of transmission via
              the internet or electronic storage is 100% secure and reliable and
              therefore we are unable to guarantee its absolute security.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-midnight">
              Changes to this policy
            </h2>
            <p>
              From time to time, we may update our Privacy Policy. We would
              therefore advise that you periodically review this policy for
              changes
            </p>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-midnight">
              How to access & control your information
            </h2>
            <p className="mb-2">
              You have the right to request a copy of your information, to amend
              your information, to opt out of receiving marketing information
              and to request the deletion of your information. Please contact
              <a href="mailto:info@baad.org.uk">info@baad.org.uk</a>
            </p>
            <p>
              Any data no longer required for the specified reasons or by UK law
              will be deleted as appropriate.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-midnight">
              Contact Us
            </h2>
            <p>
              Should you have any questions concerning our Privacy Policy,
              please do not hesitate to contact us{" "}
              <a href="mailto:info@baad.org.uk">info@baad.org.uk</a>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Main;
