import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white">
      <div className="py-5 bg-black">
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
            <div className="w-[calc(50%-15px)] lg:w-[16%] relative">
              <div className="flex mb-4">
                {/* <div className="relative w-12 h-6 before:content-[''] before:w-6 before:h-6 before:rounded-full before:bg-primary before:absolute before:top-0 before:left-0 after:content-[''] after:absolute after:bg-primary after:rounded-full after:top-0 after:right-2 after:w-6 after:h-6"></div> */}
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
                {/* <li>LinkedIn</li> */}
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
                {/* <div className="relative w-12 h-6 before:content-[''] before:w-6 before:h-6 before:rounded-full before:bg-primary before:absolute before:top-0 before:left-0 after:content-[''] after:absolute after:bg-primary after:rounded-full after:top-0 after:right-2 after:w-6 after:h-6"></div> */}
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
              <div className="absolute bottom-0 w-[150%] left-1/2 ">
                <Image
                  src={"/ifed.webp"}
                  className="w-full h-[70px] object-contain"
                  alt="logo"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            {/* <div className="flex flex-col gap-3 w-[calc(50%-15px)] lg:w-[16%]"></div> */}
            <div className="w-full sm:w-[calc(50%-15px)] lg:w-[17%]">
              <div className="flex gap-2 mb-4">
                {/* <div className="relative w-12 h-6 before:content-[''] before:w-6 before:h-6 before:rounded-full before:bg-primary before:absolute before:top-0 before:left-0 after:content-[''] after:absolute after:bg-primary after:rounded-full after:top-0 after:right-2 after:w-6 after:h-6"></div> */}
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
              {/* <ul>
                <li>Phone</li>
                <li>Email</li>
              </ul> */}

              <p className="">
                The British Academy of Aesthetic Dentistry, Gower House, 18
                Ashmere Lane, Felpham, West Sussex, PO22 7QT
              </p>
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
      <div className="py-5 bg-black">
        <Container>
          <div>
            <p className="text-center">
              © 1996 - 2025 BAAD. All Rights Reserved{" "}
              <p className="text-center">
                <a href="">Refund Policy</a> | <a href="">Terms & Conditions</a>{" "}
                | <a href="">Privacy Policy</a>
              </p>
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
