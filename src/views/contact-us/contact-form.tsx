"use client";

import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import Container from "@/components/container";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submission, setSubmition] = useState(
    "Thank you for taking the time to complete the contact form. A member of our team will be in touch with you soon. We look forward to helping you achieve your best smile."
  );
  const [privacyChecked, setPrivacyChecked] = useState(false);

  // Define validation schema with Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter your email"),
    message: Yup.string().required("Please enter your message"),
    privacyPolicy: Yup.boolean().oneOf(
      [true],
      "You must accept the Privacy Policy"
    ),
  });
  const sendEmail = (
    values: {
      name: string;
      email: string;
      message: string;
      privacyPolicy: boolean;
    },
    formikHelpers: FormikHelpers<{
      name: string;
      email: string;
      message: string;
      privacyPolicy: boolean;
    }>
  ) => {
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_2cnqd96",
        "template_ur2kjim",
        "#contactForm",
        "nQBJzdhm_0rQ4QbLv"
      )
      .then(
        () => {
          console.log(values);
          setIsLoading(false);
          setIsSubmitted(true);
          // alert("Message sent successfully!");
          formikHelpers.resetForm(); // Reset the form after successful submission
          // setPrivacyChecked(false); // Reset custom checkbox
        },
        () => {
          // console.log(error.text);
          console.log(values);
          setSubmition("Failed to send message, please try again.");
          setIsSubmitted(true);
          setIsLoading(false);
        }
      );
  };

  const animRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const jsonPaths = [
    "/location_white_min.json",
    "/incoming_call_offwhite_min.json",
    "/email_white_min.json",
  ];
  const labels = [
    "Gower House, 18 Ashmere Lane, Felpham, West Sussex, PO22 7QT",
    "+44 (0)1243 585577",
    "info@baad.org.uk",
  ];

  useEffect(() => {
    const animations = animRefs.map((ref, index) => {
      if (!ref.current) return null;

      return lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: jsonPaths[index],
      });
    });

    return () => {
      animations.forEach((anim) => anim?.destroy());
    };
  }, []);

  return (
    <div className="py-12 relative">
      <div className="absolute inset-0 h-full lg:w-[75%] bg-primary"></div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          {/* Left side */}
          <div className="text-white">
            <h2 className="mb-4 text-3xl">We’d love to hear from you</h2>
            <p className="text-lg">
              Whether you have a question about membership, upcoming events, or
              the work of the British Academy of Aesthetic Dentistry, please get
              in touch using the details below or complete the contact form.
            </p>
            <div className="mt-4">
              {animRefs.map((ref, index) => (
                <div key={index} className="flex flex-row gap-3 items-center">
                  <div ref={ref} className="w-[50px] h-[50px]" />
                  <p className="mt-2 font-medium text-white">{labels[index]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side (form) */}
          <div className="bg-midnight py-10 px-4 shadow-2xl">
            <h3 className="text-4xl mb-4 text-white">Get In Touch</h3>
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
                privacyPolicy: false,
              }}
              validationSchema={validationSchema}
              onSubmit={sendEmail}
            >
              {({ setFieldValue }) => (
                <Form id="contactForm">
                  <div className="flex flex-col gap-4">
                    {/* Name */}
                    <div>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="border-white placeholder:text-white text-white border bg-transparent h-[43px] p-4 w-full focus:outline-none"
                      />
                      <ErrorMessage
                        name="name"
                        component="p"
                        className="text-[#b30000] font-bold mt-2 text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="border-white placeholder:text-white text-white border bg-transparent h-[43px] p-4 w-full focus:outline-none"
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-[#b30000] font-bold mt-2 text-sm"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        placeholder="Enter your message"
                        className="placeholder:text-white p-4 w-full h-[120px] bg-transparent border border-white text-white focus:outline-none"
                      ></Field>
                      <ErrorMessage
                        name="message"
                        component="p"
                        className="text-[#b30000] font-bold mt-2 text-sm"
                      />
                    </div>

                    {/* Privacy Policy Checkbox */}
                    <div className="">
                      <label className="flex items-center text-white">
                        <Field
                          type="checkbox"
                          checked={privacyChecked}
                          className="h-[22px] w-[22px]"
                          name="privacyPolicy"
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setPrivacyChecked(e.target.checked); // Update custom checkbox state
                            setFieldValue("privacyPolicy", e.target.checked); // Update Formik's field value
                          }}
                        />
                        <span>
                          Please tick this box to agree to our{" "}
                          <a
                            href="/privacy-policy"
                            className="text-primary  hover:text-white"
                          >
                            {" "}
                            Privacy Policy
                          </a>{" "}
                          before continuing.
                        </span>
                      </label>
                    </div>
                    <ErrorMessage
                      name="privacyPolicy"
                      component="p"
                      className="text-[#b30000] font-bold mt-2 text-sm"
                    />
                  </div>

                  <div className="mt-3">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="text-xl uppercase cursor-pointer text-white bg-primary px-7 py-2"
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Container>
      {isSubmitted && (
        <div
          className="fixed inset-0 backdrop-blur bg-black/50 flex items-center justify-center z-[10003]"
          onClick={() => setIsSubmitted(false)}
        >
          <div
            className={` relative flex-col lg:flex-row justify-between items-center bg-cover px-9 py-10 rounded-tr-3xl rounded-bl-3xl max-w-[800px] bg-primary`}
          >
            <div className="w-full">
              <p className="text-white text-center text-xl ">{submission}</p>
            </div>
            <div className="w-full lg:w-[40%]">
              <button
                className="absolute cursor-pointer top-5 right-5 text-white text-2xl"
                onClick={() => setIsSubmitted(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
