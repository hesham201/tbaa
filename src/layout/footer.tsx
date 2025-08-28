import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white">
      <div className="py-5 bg-midnight">
        <Container>
          <div className="flex flex-wrap flex-row gap-4 lg:gap-0 justify-between">
            <div className="w-full sm:w-[calc(60%-15px)] lg:w-[30%]">
              <Link href={"/"}>
                <Image
                  src={"/baad-footer-logo.webp"}
                  className="w-full h-[150px] object-contain"
                  alt="logo"
                  width={500}
                  height={500}
                />
              </Link>
              <p>
                The British Academy of Aeshetic Dentistry is the leading
                authority of aesthetic dentistry in the UK and Europe. Our
                members include world-class dentists, technicians, therapists
                and specialists on our panel who stand at the pinnacle of their
                respective fields and share a commitment to dental excellence.
              </p>
            </div>
            <div className="w-[calc(50%-15px)] lg:w-[16%] lg:mt-9 relative">
              <div className="flex mb-4">
                <div className="">
                  <Image
                    src={"/baad-footer-icon.webp"}
                    alt="image"
                    height={100}
                    className="w-8 h-8 object-contain"
                    width={100}
                  />
                </div>
                <p>Follow Us</p>
              </div>
              <ul className="mb-4">
                <li>
                  <a
                    href="https://www.instagram.com/baadaestheticdentistry/"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/british-academy-of-aesthetic-dentistry/about/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/BAADacademy/"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
              <div className="flex mb-4">
                <div className="">
                  <Image
                    src={"/baad-footer-icon.webp"}
                    alt="image"
                    height={100}
                    className="w-8 h-8 object-contain"
                    width={100}
                  />
                </div>
                <p>Contact</p>
              </div>
              <ul>
                <li>
                  <a href="mailto:info@baad.org.uk">info@baad.org.uk</a>
                </li>
                <li>
                  <a href="tel:+44 (0)1243 585577">+44 (0)1243 585577</a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-[calc(50%-15px)] lg:w-[25%] lg:mt-9">
              <div className="flex gap-2 mb-4">
                <div className="">
                  <Image
                    src={"/baad-footer-icon.webp"}
                    alt="image"
                    height={100}
                    className="w-8 h-8 object-contain"
                    width={100}
                  />
                </div>
                <p>Address</p>
              </div>
              <p className="">
                Gower House, <br />
                18 Ashmere Lane,
                <br />
                Felpham,
                <br />
                West Sussex,
                <br />
                PO22 7QT
              </p>
              <div className="mt-2 w-full h-[65px]">
                <Image
                  src={"/ifed.webp"}
                  className="w-full h-full object-contain"
                  alt="logo"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* <div className="py-5 bg-black/90">
        <Container>
          <ul className="flex flex-wrap justify-center gap-3">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>About Us</Link>
            </li>
            <li>
              <Link href={"/"}>Scientific Conferences</Link>
            </li>
            <li>
              <Link href={"/"}>Masterclasses</Link>
            </li>
            <li>
              <Link href={"/"}>Contact Us</Link>
            </li>
          </ul>
        </Container>
      </div> */}
      <div className="py-5 bg-midnight">
        <Container>
          <div>
            <p className="text-center">
                © 1996 - 2025 BAAD. All Rights Reserved{" "}
                <span className="text-center block">
                  <a href="/refund-policy">Refund Policy</a> | <a href="/terms-and-conditions">Terms & Conditions</a>{" "}
                  | <a href="/privacy-policy">Privacy Policy</a>
                </span>
              </p>
            <p className="text-center">
              <Link href={"https://www.smile-mc.co.uk/"} target="_blank">
                site designed and maintained by smile marketing & consultancy
              </Link>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
