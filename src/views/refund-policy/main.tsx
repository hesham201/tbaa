import Container from "@/components/container";

const Main = () => {
  return (
    <>
      <div className="py-20 pt-39">
        <Container>
          <h1 className="text-primary mb-3 text-5xl">REFUND & CANCELLATION POLICY</h1>

          <div className="mb-4">
            <p className="mb-2 text-midnight">
              We understand that plans can change, and we aim to be as clear and fair as possible with our cancellation terms.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-primary">
              Annual Conference
            </h2>
            <ul className="list-disc pl-5 text-midnight">
              <li className="mb-2">
                <span className="font-bold">60 days or more prior to arrival:</span> Cancellations will be subject to an administration fee of <span className="font-bold">£150.00</span>.
              </li>
              <li className="mb-2">
                <span className="font-bold">Less than 60 days prior to arrival:</span> Cancellations are <span className="font-bold">non-refundable</span> and will be subject to full charges.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="mb-3 text-2xl font-two font-bold text-primary">
              Masterclasses
            </h2>
            <ul className="list-disc pl-5 text-midnight">
              <li className="mb-2">
                <span className="font-bold">30 days or more prior to arrival:</span> Cancellations will be subject to an administration fee of <span className="font-bold">£50.00</span>.
              </li>
              <li className="mb-2">
                <span className="font-bold">Less than 30 days prior to arrival:</span> Cancellations are <span className="font-bold">non-refundable</span> and will be subject to full charges.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="text-midnight">
              If you have any questions about this policy or require further information, please contact the BAAD team at <a href="mailto:info@baad.org.uk" className="font-bold underline">info@baad.org.uk</a>.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Main;