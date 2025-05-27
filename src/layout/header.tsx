"use client";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS } from "@/constant/data";
import Container from "@/components/container";
const Header = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  // const [isHoveredOne, setIsHoveredOne] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [dropdown, setDropdown] = useState<null | number>(null);
  const splitMenuInner = new SplitType("#menu-inner", {
    types: "words,chars",
  });

  const splitClose = new SplitType("#close", { types: "words,chars" });
  function dropdownOpen(index: number) {
    const tl: GSAPTimeline = gsap.timeline();
    tl.to("#main-nav", {
      opacity: 0,
      duration: 1,
      visibility: "hidden",
    });

    tl.to("#dropdown-nav", {
      y: 10,
      opacity: 1,
      duration: 1,
    });

    setDropdown(index);
  }
  function hoveredOpen() {
    const split = new SplitType("#menu", { types: "words,chars" });

    const splitOpen = new SplitType("#open", { types: "words,chars" });
    gsap.to(splitOpen.chars, {
      yPercent: -100,
      top: 0,
      opacity: 1,
      stagger: 0.05,
    });
    gsap.to(split.chars, {
      y: -100,
      opacity: 0,
      stagger: 0.05,
    });
    setIsHovered(true);
  }
  function hoveredClose() {
    const split = new SplitType("#menu", { types: "words,chars" });

    const splitOpen = new SplitType("#open", { types: "words,chars" });
    gsap.to(splitOpen.chars, {
      yPercent: 100,
      bottom: 0,
      opacity: 0,
      stagger: 0.05,
    });
    gsap.from(split.chars, {
      yPercent: -100,
      opacity: 1,
      stagger: 0.05,
    });
    setIsHovered(false);
  }
  function openMenuFunct() {
    setOpenMenu(true);
    setIsHovered(false);
    const tl: GSAPTimeline = gsap.timeline();
    // gsap.set("#main-menu-nav", { opacity: 0, y: 100 });
    // gsap.set(".nav-items", { stagger: 0.1, opacity: 0, y: -10 });
    tl.to("#menu", {
      yPercent: -100,
    });
    tl.to("#overlay", {
      clipPath: "ellipse(0% 0% at 50% 50%)",
      yPercent: -200,
      duration: 1,
      opacity: 1,
    });
    tl.to("#menu", {
      //   yPercent: -100,
      zIndex: 1000,
      height: "100%",
      bottom: "100%",
    });
    tl.from("#main-menu-nav", {
      opacity: 0,
      y: 100,
    });
    tl.from(".nav-items", {
      stagger: 0.1,
      opacity: 0,
      y: -10,
      duration: 0.2,
    });
  }
  function CloseMenuFunct() {
    setOpenMenu(false);
    const tl: GSAPTimeline = gsap.timeline();
    tl.to(".nav-items", {
      stagger: 0.1,
      opacity: 0,
      y: -10,
      duration: 0.2,
    });
    tl.to("#main-menu-nav", {
      opacity: 0,
      y: 100,
    });
    tl.to("#overlay", {
      clipPath: "ellipse(0% 0% at 50% 50%)",
      duration: 2,
      ease: "power2.inOut",
    });
    // tl.to("#menu", {
    //   //   yPercent: -100,
    //   zIndex: 1000,
    //   height: "100%",
    //   bottom: "100%",
    // });
    // tl.to("#menu", {
    //   yPercent: 100,
    // });
    tl.to("#menu", {
      yPercent: 100,
      onComplete: () => {
        // Optional reset values
        gsap.set("#menu", { clearProps: "all" });
        gsap.set("#main-menu-nav", { clearProps: "all" });
        gsap.set(".nav-items", { clearProps: "all" });
        gsap.set("#overlay", { clearProps: "all" });
      },
    });
  }
  function hoveredOpenOne() {
    gsap.to(splitClose.chars, {
      yPercent: -100,
      top: 0,
      opacity: 1,
      stagger: 0.05,
    });
    gsap.to(splitMenuInner.chars, {
      y: -100,
      opacity: 0,
      stagger: 0.05,
    });
    // setIsHoveredOne(true);
  }
  function hoveredCloseOne() {
    gsap.to(splitClose.chars, {
      yPercent: 100,
      bottom: 0,
      opacity: 0,
      stagger: 0.05,
    });
    gsap.from(splitMenuInner.chars, {
      yPercent: -100,
      opacity: 1,
      stagger: 0.05,
    });
    // setIsHoveredOne(false);
  }
  function backMainMenu() {
    gsap.to("#dropdown-nav", {
      opacity: 0,
    });
    gsap.to("#main-nav", {
      opacity: 1,
      onComplete: () => {
        // Optional reset values
        gsap.set("#dropdown-nav", { clearProps: "all" });
        gsap.set("#main-nav", { clearProps: "all" });
      },
    });
    setDropdown(null);
  }
  useGSAP(
    () => {
      const split = new SplitType("#myText", { types: "words,chars" });

      gsap.from(split.chars, {
        y: 20,
        opacity: 0,
        stagger: 0.05,
      });
    },
    { scope: galleryRef }
  );
  return (
    <>
      <header ref={galleryRef}>
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              className="w-[200px] h-[80px] object-contain"
              width={300}
              height={300}
              alt="image"
            />
          </Link>
          <button
            className="flex gap-2 cursor-pointer items-center"
            onMouseEnter={hoveredOpen}
            onMouseLeave={hoveredClose}
            onClick={openMenuFunct}
          >
            <div className="h-[20px] w-[30px]  relative">
              {/* first line  */}
              <div
                className={`w-1/2 absolute top-0 h-[2px] bg-black transition-all duration-300 ${
                  isHovered
                    ? "top-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full"
                    : ""
                }`}
              ></div>
              {/* second line  */}
              <div
                className={`w-full  h-[2px] top-1/2 -translate-y-1/2 absolute bg-black transition-all duration-300 ${
                  isHovered
                    ? "!w-[8px] h-[8px] rounded-full left-1/2 -translate-1/2"
                    : ""
                }`}
              ></div>
              {/* Third line  */}
              <div
                className={`w-1/2 h-[2px] bottom-0 right-0 absolute bg-black transition-all duration-300 ${
                  isHovered
                    ? "w-[8px] h-[8px] rounded-full top-1/2 -translate-y-1/2"
                    : ""
                }`}
              ></div>
            </div>
            <div className="relative text-lg overflow-hidden">
              <p className={`relative`} id="menu">
                Menu
              </p>
              <p
                id="open"
                className={`absolute bottom-0 translate-y-full duration-300`}
              >
                Open
              </p>
            </div>
          </button>
        </div>
        <h1 id="myText">Split and Animate This Text!</h1>
      </header>
      {/* click on  menu starts  */}
      <div
        id="overlay"
        className="fixed top-full bg-black w-[200%] h-[200%] -left-1/2 z-10 transition-all duration-300"
        style={{ clipPath: "ellipse(50% 50% at 50% 50%)" }}
      ></div>
      <div
        id="menu"
        className={`fixed top-full bg-white left-0 w-full h-full ${
          openMenu ? "" : ""
        }`}
      >
        <nav className="h-full relative">
          <div
            className="flex justify-between absolute top-0 w-full"
            id="main-menu-nav"
          >
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                className="w-[200px] h-auto"
                width={300}
                height={300}
                alt="image"
              />
            </Link>
            <button
              className="flex gap-2 cursor-pointer items-center"
              onMouseEnter={hoveredOpenOne}
              onMouseLeave={hoveredCloseOne}
              onClick={CloseMenuFunct}
            >
              <div className="h-[30px] w-[20px] text-black  relative">
                {/* first line  */}
                <div
                  className={`h-full w-[2px] absolute top-0 right-[9px] rotate-45 bg-black transition-all duration-300 `}
                ></div>
                {/* Third line  */}
                <div
                  className={`h-full w-[2px] -rotate-45 bottom-0 left-[9px] absolute bg-black transition-all duration-300 `}
                ></div>
              </div>
              <div className="relative text-lg overflow-hidden">
                <p className={`relative text-black`} id="menu-inner">
                  Menu
                </p>
                <p
                  id="close"
                  className={`absolute bottom-0 translate-y-full duration-300`}
                >
                  Close
                </p>
              </div>
            </button>
          </div>
          <Container className="h-full">
            <div className="h-full flex flex-row items-center justify-between">
              <div className="relative">
                <ul className="" id="main-nav">
                  {NAV_ITEMS.map((nav, index) => (
                    <li key={nav.name} className="nav-items">
                      {nav.isDropdown ? (
                        <button
                          className="text-3xl cursor-pointer transition-all duration-300 tracking-normal origin-top-left hover:tracking-wider hover:skew-1 inline-block"
                          onClick={() => dropdownOpen(index)}
                        >
                          <span className="text-lg">0{index + 1}</span>{" "}
                          {nav.name}
                        </button>
                      ) : (
                        <Link
                          className="text-3xl transition-all duration-300 tracking-normal origin-top-left hover:tracking-wider hover:skew-[1deg] inline-block"
                          href={nav.link}
                        >
                          <span className="text-lg">0{index + 1}</span>{" "}
                          {nav.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
                <ul className="absolute top-0 opacity-0" id="dropdown-nav">
                  <li>
                    <button className="cursor-pointer" onClick={backMainMenu}>
                      Back
                    </button>
                  </li>
                  {dropdown !== null &&
                    NAV_ITEMS[dropdown].isDropdown && // <-- type guard to ensure it's dropdown
                    NAV_ITEMS[dropdown].subItems.map((nav, index) => (
                      <li key={nav.name}>
                        <Link
                          className="text-3xl text-nowrap cursor-pointer transition-all duration-300 tracking-normal origin-top-left hover:tracking-wider hover:skew-1 inline-block"
                          href={nav.link}
                        >
                          <span className="text-lg">0{index + 1}</span>{" "}
                          {nav.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2 w-[25%] ps-6 border-l border-black">
                <div>
                  <p>Studio</p>
                  <p>Address</p>
                </div>
                <div>
                  <p>Contact</p>
                  <ul>
                    <li>telephone</li>
                    <li>email</li>
                  </ul>
                </div>
                <div>
                  <p>Follow us</p>
                  <p>Icons</p>
                </div>
              </div>
            </div>
          </Container>
        </nav>
      </div>
      {/* click on  menu ends */}
    </>
  );
};

export default Header;
