import { INavItem } from "@/types";
export const NAV_ITEMS: INavItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    isDropdown: true,
    subItems: [
      {
        name: "Executive Council",
        link: "/",
      },
      {
        name: "Past Presidents",
        link: "/",
      },
      {
        name: "The History of BAAD",
        link: "/",
      },
      {
        name: "Lambert Fick Memorial",
        link: "/",
      },
      {
        name: "Revised Constitution 2024",
        link: "/",
      },
      {
        name: "Testimonials",
        link: "/",
      },
    ],
  },
  {
    name: "Membership",
    isDropdown: true,
    subItems: [
      {
        name: "Members",
        link: "/",
      },
      {
        name: "Becoming a Full Member",
        link: "/",
      },
      {
        name: "Associate Membership",
        link: "/",
      },
    ],
  },
  {
    name: "Scientific Conferences",
    link: "/",
  },
  {
    name: "Masterclasses",
    link: "/",
  },
  {
    name: "Contact us",
    link: "/",
  },
];

export const WELCOME_TO = {
  heading:
    "Welcome to <span id='heading-two-span'>British Academy of Aesthetic</span> Dentistry",
  upperPara: "Advancing the Art & Science of Dentistry",
  data: [
    {
      image: "/our-mission.jpg",
      heading: "Our",
      headingTwo: "Mission",
      para: "Promoting excellence in aesthetic dentistry across the UK through education, innovation, and the sharing of expertise between clinicians, technicians, and academics.",
      btn: "Elevate Your Practice",
      href: "/",
    },
    {
      image: "/our-leadership.webp",
      heading: "Our ",
      headingTwo: "Leadership",
      para: "Meet the esteemed professionals driving BAAD’s vision forward—uniting multidisciplinary perspectives to shape the future of aesthetic dentistry.",
      reverse: true,
      href: "/",
      btn: "Get to Know Us",
    },
    {
      image: "/our-community.jpg",
      heading: "Our",
      headingTwo: "Community",
      para: "Join a dynamic network of members committed to clinical excellence, continuous learning, and elevating standards in aesthetic and restorative dental care.",
      href: "/",
      btn: "Start Your Journey",
    },
  ],
};
