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
import { useRouter } from "next/navigation";
gsap.registerPlugin(CustomEase);

const Header = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  // const [isHoveredOne, setIsHoveredOne] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [dropdown, setDropdown] = useState<null | number>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);
  // ZERO-height at BOTTOM (invisible at bottom)
  const PATH_THIN_BOTTOM =
    "M 0 100 V 100 Q 50 100 100 100 V 100 Q 50 100 0 100 z";

  // ZERO-height at TOP (invisible at top)
  const PATH_THIN_TOP = "M 0 0 V 0 Q 50 0 100 0 V 0 Q 50 0 0 0 z";

  // Fully open (covers screen) + a slight curved TOP edge
  const PATH_OPEN = "M 0 0 V 100 Q 50 48 100 100 V 0 Q 50 -50 0 0 z";

  // Overshoot variants (small bounce). Same command structure in all paths.
  // const PATH_OVER_UP_TOP =
  //   "M 0 -12 V 100 Q 50 100 100 100 V -12 Q 50 -50 0 -12 z"; // bulge upward (outside)
  // const PATH_OVER_DOWN_TOP =
  //   "M 0 12 V 100 Q 50 100 100 100 V 12 Q 50 24 0 12 z"; // bulge downward (inside)
  // const PATH_OVER_DOWN_BOTTOM =
  //   "M 0 112 V 100 Q 50 100 100 100 V 112 Q 50 124 0 112 z"; // bulge below bottom

  function coverFromBottom() {
    const overlay = overlayRef.current,
      path = pathRef.current;
    const tl = gsap.timeline({ defaults: { ease: "none" } }); // linear
    if (!overlay || !path) return tl;

    return (
      tl
        .set(overlay, { opacity: 1, pointerEvents: "auto", zIndex: 1000001 }, 0)
        .set(path, { attr: { d: PATH_THIN_BOTTOM } }, 0)
        // cover up from bottom straight into the OPEN shape
        .to(path, { attr: { d: PATH_OPEN }, duration: 0.28 }, 0)
        .add(() => document.body.classList.add("over-hidden"), 0)
    );
  }

  function revealToTop() {
    const overlay = overlayRef.current,
      path = pathRef.current;
    const tl = gsap.timeline({ defaults: { ease: "none" } }); // linear
    if (!overlay || !path) return tl;

    return (
      tl
        // OPEN -> thin at TOP (reveal upward)
        .to(path, { attr: { d: PATH_THIN_TOP }, duration: 0.28 }, 0)
        .add(() => {
          document.body.classList.remove("over-hidden");
          gsap.set(overlay, { opacity: 0, pointerEvents: "none" });
        })
    );
  }

  // --- REPLACE your coverFromTop with this (linear, no bounce)
  function coverFromTop() {
    const overlay = overlayRef.current,
      path = pathRef.current;
    const tl = gsap.timeline({ defaults: { ease: "none" } });
    if (!overlay || !path) return tl;

    return (
      tl
        .set(overlay, { opacity: 1, pointerEvents: "auto", zIndex: 1000001 }, 0)
        .set(path, { attr: { d: PATH_THIN_TOP } }, 0)
        // thin at TOP -> fully OPEN (stays covering the screen)
        .to(path, { attr: { d: PATH_OPEN }, duration: 0.28 }, 0)
        .add(() => document.body.classList.add("over-hidden"), 0)
    );
  }

  // --- REPLACE your revealToBottom with this (linear, no bounce)
  function revealToBottom() {
    const overlay = overlayRef.current,
      path = pathRef.current;
    const tl = gsap.timeline({ defaults: { ease: "none" } });
    if (!overlay || !path) return tl;

    return (
      tl
        // fully OPEN -> thin at BOTTOM
        .to(path, { attr: { d: PATH_THIN_BOTTOM }, duration: 0.28 }, 0)
        .add(() => {
          document.body.classList.remove("over-hidden");
          gsap.set(overlay, { opacity: 0, pointerEvents: "none" });
        })
    );
  }

  function handleDropdownLinkClick(href: string) {
    // Run the close animation first
    CloseMenuFunct();

    // Delay navigation until animation completes
    setTimeout(() => {
      router.push(href);
    }, 700); // Match this delay with your GSAP closing animation duration
  }
  function dropdownOpen(index: number) {
    setDropdown(index);

    requestAnimationFrame(() => {
      const mainNavItems = gsap.utils.toArray("#main-nav li");
      const dropdownItems = gsap.utils.toArray("#dropdown-nav li");

      const tl = gsap.timeline();

      tl.to(mainNavItems, {
        opacity: 0,
        visibility: "hidden",
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in",
      });

      tl.fromTo(
        dropdownItems,
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
        "+=0.1"
      );
    });
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
  function openMenuFunct() {
    menuTimelineRef.current?.kill();

    setOpenMenu(true);
    setIsHovered(false);
    setDropdown(null);

    gsap.set(["#main-menu-nav", ".nav-items"], { clearProps: "all" });

    const tl = gsap.timeline({ defaults: { ease: "none" } }); // linear
    menuTimelineRef.current = tl;

    // 1) Wave covers from bottom (SVG visible)
    tl.add(coverFromBottom(), 0);

    tl.add(revealToTop(), ">");
    // 2) Slide panel up while still covered
    tl.to(
      "#menu-fixed",
      {
        top: 0,
        zIndex: 1000,
        height: "100%",
        bottom: "100%",
      },
      "-=0.5"
    ); // start right AFTER the cover finishes

    // 3) Reveal upward (clear the overlay)

    // 4) Content in
    tl.from("#main-menu-nav", { opacity: 0, y: 100, duration: 0.2 }, ">")
      .from(
        ".nav-items",
        { opacity: 0, y: -10, duration: 0.2, stagger: 0.1 },
        "-=0.5"
      )
      .from("#address", { opacity: 0, duration: 0.1 }, "<")
      .from(
        "#address div",
        { opacity: 0, y: -10, duration: 0.2, stagger: 0.1 },
        "<"
      );
  }

  function CloseMenuFunct() {
    setOpenMenu(false);

    const tl = gsap.timeline({ defaults: { ease: "none" } });

    // 1) fade content first (no overlap)
    if (dropdown !== null) {
      tl.to(
        "#dropdown-nav li",
        {
          opacity: 0,
          visibility: "hidden",
          y: -10,
          duration: 0.35,
          stagger: 0.05,
        },
        0
      );
    } else {
      tl.to(
        ".nav-items",
        {
          opacity: 0,
          y: -10,
          duration: 0.35,
          stagger: 0.05,
        },
        0
      );
    }

    tl.to(
      "#address div",
      { opacity: 0, y: -10, duration: 0.2, stagger: 0.08 },
      "<"
    )
      .to("#address", { opacity: 0, y: -10, duration: 0.2 }, "<")
      .to("#main-menu-nav", { opacity: 0, y: 100, duration: 0.2 }, "<");

    // 2) cover from TOP (SVG shows and stays on screen)
    tl.add(coverFromTop(), ">");

    // 3) slide the panel out while covered (linear)
    tl.to(
      "#menu-fixed",
      {
        top: "100vh",
        duration: 0.5,
        onComplete: () => {
          gsap.set("#menu-fixed", { clearProps: "all" });
          gsap.set("#main-menu-nav", { clearProps: "all" });
          gsap.set(".nav-items", { clearProps: "all" });
          gsap.set("#address div", { clearProps: "all" });
          gsap.set("#address", { clearProps: "all" });
        },
      },
      ">"
    );

    // 4) reveal page to BOTTOM (hide overlay)
    tl.add(revealToBottom(), "<");
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
    // setDropdown(null);
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
      <header ref={galleryRef}>
        <div className="fixed top-0 bg-white left-0 w-full shadow-2xl z-[1000] ">
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
                <div className="h-[20px] w-[30px] text-midnight relative">
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
                  <p className={`relative text-midnight`} id="menu">
                    Menu<span className="invisible">ff</span>
                  </p>
                  <p
                    id="open"
                    className={`absolute left-0 bottom-0 text-midnight translate-y-full duration-300`}
                  >
                    Open
                  </p>
                </div>
              </button>
            </div>
          </Container>
          <Link
            href={"/2026-sc"}
            className="p-3 block text-center bg-red-600 text-white"
          >
            CLICK HERE TO BOOK YOUR PLACE ON OUR ANNUAL BAAD CONFERENCE 2026
          </Link>
        </div>
        <div
          id="menu-fixed"
          // data-scroll-target
          // data-scroll-section
          className={`fixed bg-dark top-[100vh] left-0 w-full h-full z-[10001] ${
            openMenu ? "" : ""
          }`}
        >
          <nav className="h-[100vh] bg-[url(/menu-bg.webp)] bg-cover w-full">
            <div className="absolute top-0 w-full z-[10001]" id="main-menu-nav">
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
                    <div className="h-[30px] w-[20px] text-midnight relative">
                      {/* first line  */}
                      <div
                        className={`h-full w-[2px] absolute top-0 right-[9px] rotate-45 bg-midnight transition-all duration-300 `}
                      ></div>
                      {/* Third line  */}
                      <div
                        className={`h-full w-[2px] -rotate-45 bottom-0 left-[9px] absolute bg-midnight transition-all duration-300 `}
                      ></div>
                    </div>
                    <div className="relative text-lg overflow-hidden">
                      <p className={`relative text-midnight`} id="menu-inner">
                        Menu <span className="invisible">ff</span>
                      </p>
                      <p
                        id="close"
                        className={`absolute bottom-0 translate-y-full text-midnight duration-300`}
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
                <div className="">
                  <ul className="flex flex-col gap-4" id="main-nav">
                    {NAV_ITEMS.map((nav, index) => (
                      <li key={nav.name} className="nav-items">
                        {nav.isDropdown ? (
                          <button
                            className="text-4xl cursor-pointer text-midnight transition-all duration-300 tracking-normal origin-top-left hover:tracking-wider hover:skew-1 inline-block"
                            onClick={() => dropdownOpen(index)}
                          >
                            <span className="text-lg">0{index + 1}</span>{" "}
                            {nav.name}
                          </button>
                        ) : (
                          <button
                            className="text-4xl transition-all text-midnight duration-300 tracking-normal origin-top-left hover:tracking-wider hover:skew-[1deg] inline-block"
                            onClick={() => {
                              handleDropdownLinkClick(nav.link);
                            }}
                          >
                            <span className="text-lg">0{index + 1}</span>{" "}
                            {nav.name}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                  {dropdown !== null && NAV_ITEMS[dropdown].isDropdown && (
                    <ul
                      className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-4"
                      id="dropdown-nav"
                    >
                      <li>
                        <button
                          className="cursor-pointer text-midnight transition-all duration-300 "
                          onClick={backMainMenu}
                        >
                          Back
                        </button>
                      </li>
                      {NAV_ITEMS[dropdown].subItems.map((nav, index) => (
                        <li key={nav.name}>
                          <button
                            className="text-4xl lg:text-nowrap text-midnight cursor-pointer transition-all duration-300 tracking-normal origin-top-left hover:tracking-wider hover:skew-1 inline-block"
                            onClick={() => {
                              handleDropdownLinkClick(nav.link);
                            }}
                          >
                            <span className="text-lg">0{index + 1}</span>{" "}
                            {nav.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div
                  className="hidden lg:flex flex-col gap-2 w-[25%] ps-6 border-l text-midnight border-midnight"
                  id="address"
                >
                  <div>
                    <p>
                      Gower House, 18 Ashmere Lane, Felpham, West Sussex, PO22
                      7QT
                    </p>
                  </div>
                  <div>
                    <p>Contact</p>
                    <ul>
                      <li>
                        <a href="mailto:info@baad.org.uk">info@baad.org.uk</a>
                      </li>
                      <li>
                        <a href="tel:+44 (0)1243 585577">+44 (0)1243 585577</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>Follow us</p>
                    <div className="flex gap-2 items-center">
                      <div>
                        <a
                          href="https://www.facebook.com/BAADacademy/"
                          target="_blank"
                        >
                          <Image
                            src={"/facebook.svg"}
                            width={100}
                            height={100}
                            className="w-8 h-8"
                            alt="logo"
                          />
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.linkedin.com/company/british-academy-of-aesthetic-dentistry/about/"
                          target="_blank"
                        >
                          <Image
                            src={"/linkedin.svg"}
                            width={100}
                            height={100}
                            className="w-8 h-8"
                            alt="logo"
                          />
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.instagram.com/baadaestheticdentistry/"
                          target="_blank"
                        >
                          <Image
                            src={"/instagram.svg"}
                            width={100}
                            height={100}
                            className="w-8 h-8"
                            alt="logo"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <div
              id="overlay"
              ref={overlayRef}
              className="fixed left-0 right-0 top-[-10vh] h-[130vh] z-[1000001] pointer-events-none opacity-0"
            >
              <svg
                className="absolute inset-0 w-full h-full text-midnight"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path ref={pathRef} fill="currentColor" d={PATH_THIN_BOTTOM} />
              </svg>
            </div>
          </nav>
        </div>
      </header>
      {/* click on  menu starts  */}

      {/* click on  menu ends */}
    </>
  );
};

export default Header;
