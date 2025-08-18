"use client";

import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import Container from "@/components/container";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  // Define validation schema with Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string().email("Invalid email format").required("Please enter your email"),
    message: Yup.string().required("Please enter your message"),
    acceptPolicy: Yup.boolean().oneOf([true], "You must accept the Privacy Policy")
  });
  
  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      acceptPolicy: false
    },
    validationSchema,
    validateOnBlur: true, // Validate when field loses focus
    validateOnChange: false, // Don't validate on every keystroke
    onSubmit: (values, { resetForm }) => {
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
            setIsLoading(false);
            setIsSubmitted(true);
            setSubmissionMessage("Form submitted successfully!");
            resetForm();
          },
          () => {
            setIsLoading(false);
            setIsSubmitted(true);
            setSubmissionMessage("Failed to send message, please try again.");
          }
        );
    }
  });
  
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
            <form id="contactForm" onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-4">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your name"
                    className="border-white placeholder:text-white text-white border bg-transparent h-[43px] p-4 w-full focus:outline-none"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm mt-1">*{formik.errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your email address"
                    className="border-white placeholder:text-white text-white border bg-transparent h-[43px] p-4 w-full focus:outline-none"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">*{formik.errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your message"
                    className="placeholder:text-white p-4 w-full h-[120px] bg-transparent border border-white text-white focus:outline-none"
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-sm mt-1">*{formik.errors.message}</p>
                  )}
                </div>
                
                {/* Privacy Policy Checkbox */}
                <div className="">
                  <label className="flex items-center text-white">
                    <input
                      type="checkbox"
                      id="acceptPolicy"
                      name="acceptPolicy"
                      checked={formik.values.acceptPolicy}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="mr-2"
                    />
                    <span>Please tick this box to agree to our <a href="/privacy-policy" className="text-primary  hover:text-white"> Privacy Policy</a> before continuing.</span>
                  </label>
                  {formik.touched.acceptPolicy && formik.errors.acceptPolicy && (
                    <p className="text-red-500 text-sm mt-1">*{formik.errors.acceptPolicy}</p>
                  )}
                </div>
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
              
              {isSubmitted && (
                <div className={`mt-4 p-3 rounded ${submissionMessage.includes("success") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  {submissionMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
