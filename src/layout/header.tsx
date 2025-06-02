"use client";
// import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS } from "@/constant/data";
import Container from "@/components/container";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);
export {};

declare global {
  interface Window {
    LOCO_SCROLL?: {
      update: () => void;
      start: () => void;
      stop: () => void;
    };
  }
}

const Header = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  // const [isHoveredOne, setIsHoveredOne] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [dropdown, setDropdown] = useState<null | number>(null);
  const menuTimelineRef = useRef<GSAPTimeline | null>(null);
  function dropdownOpen(index: number) {
    setDropdown(index);
    const tl: GSAPTimeline = gsap.timeline();

    tl.to("#main-nav li", {
      opacity: 0,
      visibility: "hidden",
      duration: 0.3,
      stagger: 0.01,
    });

    tl.fromTo(
      "#dropdown-nav li",
      {
        opacity: 0,
        visibility: "hidden",
        y: 10,
      },
      {
        opacity: 1,
        visibility: "visible",
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      },
      ">0.2"
    );
  }

  function hoveredOpen() {
    const split = new SplitType("#menu", { types: "words,chars" });

    const splitOpen = new SplitType("#open", { types: "words,chars" });
    const tl: GSAPTimeline = gsap.timeline();
    tl.to(splitOpen.chars, {
      yPercent: -100,
      top: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
    });
    tl.to(
      split.chars,
      {
        y: -100,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
      },
      "<"
    );
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
  // function openMenuFunct() {
  //   setOpenMenu(true);
  //   setIsHovered(false);
  //   setDropdown(null);
  //   gsap.set("#overlay", {
  //     // clipPath: "ellipse(50% 50% at 50% 50%)",
  //     yPercent: 0,
  //     // opacity: 0,
  //   });
  //   const tl: GSAPTimeline = gsap.timeline();
  //   // gsap.set("#main-menu-nav", { opacity: 0, y: 100 });
  //   // gsap.set(".nav-items", { stagger: 0.1, opacity: 0, y: -10 });
  //   // tl.to("#menu", {});
  //   tl.to(
  //     "#overlay",
  //     {
  //       // clipPath: "ellipse(50% 50% at 50% 50%)",
  //       yPercent: -200,
  //       duration: 1,
  //       ease: "circ.out",
  //       opacity: 1,
  //     },
  //     "<+0.2"
  //   );
  //   tl.to(
  //     "#menu",
  //     {
  //       yPercent: -100,
  //       zIndex: 1000,
  //       height: "100%",
  //       bottom: "100%",
  //     },
  //     "-=2"
  //   );
  //   tl.from("#main-menu-nav", {
  //     opacity: 0,
  //     y: 100,
  //   });
  //   tl.from(".nav-items", {
  //     stagger: 0.1,
  //     opacity: 0,
  //     y: -10,
  //     duration: 0.2,
  //   });
  //   tl.from(
  //     "#address div",
  //     {
  //       stagger: 0.1,
  //       opacity: 0,
  //       y: -10,
  //       duration: 0.2,
  //     },
  //     "<"
  //   );
  // }
  function openMenuFunct() {
    if (menuTimelineRef.current) {
      menuTimelineRef.current.kill();
    }
    setOpenMenu(true);
    setIsHovered(false);
    setDropdown(null);

    // ✅ Reset styles first
    gsap.set(["#main-menu-nav", ".nav-items", "#overlay"], {
      clearProps: "all",
    });

    gsap.set("#overlay", {
      yPercent: 0,
    });

    const tl: GSAPTimeline = gsap.timeline();
    menuTimelineRef.current = tl;
    tl.to("#overlay", {
      yPercent: -200,
      duration: 2,
      ease: CustomEase.create("custom", "M0,0 C0.104,0.204 0.634,0.883 1,1 "),
      opacity: 1,
    });

    tl.to(
      "#menu-fixed",
      {
        yPercent: -100,
        zIndex: 1000,
        height: "100%",
        bottom: "100%",
        onComplete: () => {
          window.LOCO_SCROLL?.stop();
        },
      },
      "-=.5"
    );

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

    tl.from(
      "#address",
      {
        opacity: 0,
        duration: 0.1,
      },
      "<"
    );
    tl.from(
      "#address div",
      {
        stagger: 0.1,
        opacity: 0,
        y: -10,
        duration: 0.2,
      },
      "<"
    );
  }

  function CloseMenuFunct() {
    setOpenMenu(false);
    // gsap.set("#overlay", {
    //   yPercent: -200,
    // });
    const tl: GSAPTimeline = gsap.timeline();
    tl.to(".nav-items", {
      stagger: 0.1,
      opacity: 0,
      y: -10,
      duration: 0.2,
    });
    tl.to(
      "#address div",
      {
        stagger: 0.1,
        opacity: 0,
        y: -10,
        duration: 0.2,
      },
      "<"
    );
    tl.to(
      "#address",
      {
        stagger: 0.1,
        opacity: 0,
        y: -10,
        duration: 0.1,
      },
      "<"
    );
    tl.to(
      "#main-menu-nav",
      {
        opacity: 0,
        y: 100,
        duration: 0.2,
      },
      "<"
    );
    tl.fromTo(
      "#overlay",
      { yPercent: -200 },
      {
        yPercent: 0,
        duration: 2.8,
        ease: "power2.out",
      },
      "<-0.5"
    );
    // tl.from(
    //   "#overlay",
    //   {
    //     clipPath: "ellipse(50% 50% at 50% 50%)",
    //     duration: 4,
    //     yPercent: -200,
    //   },
    //   ">"
    // );
    // tl.to("#menu", {
    //   //   yPercent: -100,
    //   zIndex: 1000,
    //   height: "100%",
    //   bottom: "100%",
    // });
    // tl.to("#menu", {
    //   yPercent: 100,
    // });
    tl.to(
      "#menu-fixed",
      {
        yPercent: 200,
        duration: 0.2,
        onComplete: () => {
          // Optional reset values
          window.LOCO_SCROLL?.start();
          gsap.set("#menu-fixed", { clearProps: "all" });
          gsap.set("#main-menu-nav", { clearProps: "all" });
          gsap.set(".nav-items", { clearProps: "all" });
          gsap.set("#address div", { clearProps: "all" });
          gsap.set("#address", { clearProps: "all" });
          gsap.set("#overlay", { clearProps: "all" });
        },
      },
      ">"
    );
  }
  function hoveredOpenOne() {
    const splitMenuInner = new SplitType("#menu-inner", {
      types: "words,chars",
    });

    const splitClose = new SplitType("#close", { types: "words,chars" });
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
    const splitMenuInner = new SplitType("#menu-inner", {
      types: "words,chars",
    });

    const splitClose = new SplitType("#close", { types: "words,chars" });
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
    const tl = gsap.timeline();

    tl.to("#dropdown-nav li", {
      opacity: 0,
      visibility: "hidden",
      y: -10,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.in",
    });

    tl.to(
      "#main-nav li",
      {
        opacity: 1,
        visibility: "visible",
        y: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          setDropdown(null); // 👈 Move it here to avoid flicker during animation
          gsap.set("#dropdown-nav li", { clearProps: "all" });
          gsap.set("#main-nav li", { clearProps: "all" });
        },
      },
      ">0.1"
    );
  }

  // useGSAP(
  //   () => {
  //     const split = new SplitType("#myText", { types: "words,chars" });

  //     gsap.from(split.chars, {
  //       y: 20,
  //       opacity: 0,
  //       stagger: 0.05,
  //     });
  //   },
  //   { scope: galleryRef }
  // );
  return (
    <>
      <header
        // data-scroll
        // data-scroll-sticky
        // data-scroll-target="#body"
        ref={galleryRef}
        className=""
      >
        <Container>
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              <Image
                src={"/header-logo.png"}
                className="w-[200px] h-[80px] object-contain"
                width={300}
                height={300}
                alt="image"
                quality={100}
              />
            </Link>
            <button
              className="flex h-[50px] gap-2 cursor-pointer items-center"
              onMouseEnter={hoveredOpen}
              onMouseLeave={hoveredClose}
              onClick={openMenuFunct}
            >
              <div className="h-[20px] w-[30px]  relative">
                {/* first line  */}
                <div
                  className={`w-1/2 absolute top-0 h-[2px] bg-black transition-all duration-300 ${
                    isHovered
                      ? "top-1/2 -translate-y-1/2 w-[4px] h-[4px] rounded-full"
                      : ""
                  }`}
                ></div>
                {/* second line  */}
                <div
                  className={`w-full h-[2px] top-1/2 -translate-y-1/2 absolute bg-black transition-all duration-300 ${
                    isHovered
                      ? "!w-[4px] h-[4px] rounded-full left-1/2 -translate-1/2"
                      : ""
                  }`}
                ></div>
                {/* Third line  */}
                <div
                  className={`w-1/2 h-[2px] bottom-0 right-0 absolute bg-black transition-all duration-300 ${
                    isHovered
                      ? "w-[4px] h-[4px] rounded-full top-1/2 -translate-y-1/2"
                      : ""
                  }`}
                ></div>
              </div>
              <div className="relative text-lg overflow-hidden">
                <p className={`relative`} id="menu">
                  Menu<span className="invisible">ff</span>
                </p>
                <p
                  id="open"
                  className={`absolute left-0 bottom-0 translate-y-full duration-300`}
                >
                  Open
                </p>
              </div>
            </button>
          </div>
        </Container>
      </header>
      {/* click on  menu starts  */}
      <div
        id="overlay"
        className="fixed top-full w-[200%] h-[200%] -left-1/2 z-[1001] transition-all duration-300 overflow-hidden"
      >
        <div
          className="w-[100%] h-[50%] bg-black "
          style={{ borderRadius: "50% 50% 0 0" }}
        ></div>
        <div className="w-[100%] h-[50%] bg-transparent  relative">
          <div
            className="relative left-0 w-full -top-38 bg-white h-full z-10 rounded-t-full"
            style={{ borderRadius: "50%" }}
          ></div>
        </div>
      </div>

      <div
        id="menu-fixed"
        // data-scroll-target
        // data-scroll-section
        className={`fixed top-full left-0 w-full h-full z-[1000000] ${
          openMenu ? "" : ""
        }`}
      >
        <nav className="h-[100vh] bg-[url(/menu-bg.webp)] bg-cover w-full">
          <div className="absolute top-0 w-full" id="main-menu-nav">
            <Container>
              <div className="flex justify-between">
                <Link href={"/"}>
                  <Image
                    src={"/header-logo.png"}
                    className="w-[200px] h-[80px] object-contain"
                    width={300}
                    height={300}
                    quality={100}
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
                      Menu <span className="invisible">ff</span>
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
            </Container>
          </div>
          <Container className="h-full">
            <div className="h-full flex flex-row items-center justify-between">
              <div className="relative">
                <ul className="flex flex-col gap-4" id="main-nav">
                  {NAV_ITEMS.map((nav, index) => (
                    <li key={nav.name} className="nav-items">
                      {nav.isDropdown ? (
                        <button
                          className="text-4xl cursor-pointer transition-all duration-300 tracking-normal origin-top-left hover:tracking-wider hover:skew-1 inline-block"
                          onClick={() => dropdownOpen(index)}
                        >
                          <span className="text-lg">0{index + 1}</span>{" "}
                          {nav.name}
                        </button>
                      ) : (
                        <Link
                          className="text-4xl transition-all duration-300 tracking-normal origin-top-left hover:tracking-wider hover:skew-[1deg] inline-block"
                          href={nav.link}
                          onClick={CloseMenuFunct}
                        >
                          <span className="text-lg">0{index + 1}</span>{" "}
                          {nav.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
                {dropdown !== null && NAV_ITEMS[dropdown].isDropdown && (
                  <ul
                    className="absolute top-0 flex flex-col gap-4"
                    id="dropdown-nav"
                  >
                    <li>
                      <button
                        className="cursor-pointer transition-all duration-300"
                        onClick={backMainMenu}
                      >
                        Back
                      </button>
                    </li>
                    {NAV_ITEMS[dropdown].subItems.map((nav, index) => (
                      <li key={nav.name}>
                        <Link
                          className="text-4xl text-nowrap cursor-pointer transition-all duration-300 tracking-normal origin-top-left hover:tracking-wider hover:skew-1 inline-block"
                          href={nav.link}
                          onClick={CloseMenuFunct}
                        >
                          <span className="text-lg">0{index + 1}</span>{" "}
                          {nav.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div
                className="flex flex-col gap-2 w-[25%] ps-6 border-l border-black"
                id="address"
              >
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
