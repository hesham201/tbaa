import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white">
      <div className="py-5 bg-black">
        <Container>
          <div className="grid grid-cols-4">
            <div>
              <Link href={"/"}>
                <Image
                  src={"/header-logo.png"}
                  className="w-[150px] h-[100px] object-contain"
                  alt="logo"
                  width={500}
                  height={500}
                />
              </Link>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="relative w-12 h-6 before:content-[''] before:w-6 before:h-6 before:rounded-full before:bg-primary before:absolute before:top-0 before:left-0 after:content-[''] after:absolute after:bg-primary after:rounded-full after:top-0 after:right-2 after:w-6 after:h-6"></div>
                <p>Follow Us</p>
              </div>
              <ul>
                <li>Instagrem</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
              </ul>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="relative w-12 h-6 before:content-[''] before:w-6 before:h-6 before:rounded-full before:bg-primary before:absolute before:top-0 before:left-0 after:content-[''] after:absolute after:bg-primary after:rounded-full after:top-0 after:right-2 after:w-6 after:h-6"></div>
                <p>Contact</p>
              </div>
              <ul>
                <li>Phone</li>
                <li>Email</li>
              </ul>
            </div>
            <div>
              <div className="flex gap-2">
                <div className="relative w-12 h-6 before:content-[''] before:w-6 before:h-6 before:rounded-full before:bg-primary before:absolute before:top-0 before:left-0 after:content-[''] after:absolute after:bg-primary after:rounded-full after:top-0 after:right-2 after:w-6 after:h-6"></div>
                <p>Address</p>
              </div>
              <ul>
                <li>Phone</li>
                <li>Email</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-5 bg-black/90">
        <Container>
          <ul className="flex justify-center gap-3">
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
      </div>
      <div className="py-5 bg-black">
        <Container>
          <div>
            <p className="text-center">
              © 1996 - 2025 BAAD. All Rights Reserved{" "}
            </p>
            <p className="text-center">
              Site Design by Smile Marketing & Consultancy
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
