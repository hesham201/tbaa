import Container from "@/components/container";

const Main = () => {
  return (
    <>
      <div className="py-20 pt-39">
        <Container>
          <h1 className="text-primary mb-3 text-6xl">TERMS AND CONDITIONS</h1>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-primary">
              Last updated: 16th August 2025
            </h2>
            <p className="mb-2 text-midnight">
              Welcome to the website of the British Academy of Aesthetic
              Dentistry (BAAD). By accessing and using this website, you agree
              to comply with the following terms and conditions. Please read
              them carefully before using the site.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-primary">
              1. About Us
            </h2>
            <p className="text-midnight">
              The British Academy of Aesthetic Dentistry (&apos;BAAD&apos;,
              &apos;we&apos;, &apos;us&apos;, &apos;our&apos;) is a professional
              membership organisation dedicated to advancing knowledge,
              standards, and education in aesthetic dentistry. Our registered
              address is [insert address if applicable].
            </p>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-primary">
              2. Website Use
            </h2>
            <ul className="list-disc pl-5 text-midnight">
              <li className="mb-2">
                This website is provided for informational, educational, and
                membership purposes only.
              </li>
              <li className="mb-2">
                You agree to use the site lawfully and not in any way that may
                impair its performance, corrupt content, or reduce its overall
                functionality.
              </li>
              <li>
                You must not attempt to gain unauthorised access to any part of
                the site, its servers, or any data.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-primary">
              3. Intellectual Property
            </h2>
            <ul className="list-disc pl-5 text-midnight">
              <li className="mb-2">
                All content on this website, including text, images, logos,
                graphics, and downloadable materials, is the property of BAAD
                unless otherwise stated.
              </li>
              <li className="mb-2">
                You may view, download, and print content for personal and
                non-commercial use only.
              </li>
              <li>
                Reproduction, distribution, or modification of any content
                without prior written consent from BAAD is prohibited.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-primary">
              4. Membership and Events
            </h2>
            <ul className="list-disc pl-5 text-midnight">
              <li className="mb-2">
                Membership of BAAD is subject to eligibility criteria and
                approval by the Executive Council.
              </li>
              <li className="mb-2">
                Fees for membership and events are payable as advertised at the
                time of application or booking.
              </li>
              <li className="mb-2">
                Cancellations for events must be made in accordance with
                BAAD&apos;s published cancellation policy. Refunds, where
                applicable, will be processed within a reasonable timeframe.
              </li>
              <li>
                BAAD reserves the right to amend, postpone, or cancel events,
                including scientific meetings and study clubs. In such cases,
                registered participants will be notified promptly.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-primary">
              5. Third-Party Links
            </h2>
            <p className="text-midnight">
              This website may contain links to third-party websites for your
              convenience. BAAD does not endorse, control, or take
              responsibility for the content or practices of third-party sites.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-primary">
              6. Disclaimer and Limitation of Liability
            </h2>
            <ul className="list-disc pl-5 text-midnight">
              <li className="mb-2">
                The information provided on this website is for general guidance
                and educational purposes only. It should not be relied upon as
                professional or clinical advice.
              </li>
              <li className="mb-2">
                BAAD does not guarantee that the website will be uninterrupted,
                error-free, or free of viruses.
              </li>
              <li>
                To the fullest extent permitted by law, BAAD shall not be liable
                for any loss or damage arising from your use of the site or
                reliance on its content.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-primary">
              7. Privacy and Data Protection
            </h2>
            <p className="text-midnight">
              Your use of this website is also governed by our Privacy Policy,
              which explains how we collect, use, and safeguard your personal
              data in accordance with UK data protection laws.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-primary">
              8. Amendments
            </h2>
            <p className="text-midnight">
              BAAD reserves the right to update or amend these Terms and
              Conditions at any time. Any changes will be effective immediately
              upon posting on the website. Continued use of the site after
              changes are published constitutes your acceptance of the revised
              terms.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-primary">
              9. Governing Law
            </h2>
            <p className="text-midnight">
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of England and Wales. Any disputes
              arising shall be subject to the exclusive jurisdiction of the
              courts of England and Wales.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Main;
