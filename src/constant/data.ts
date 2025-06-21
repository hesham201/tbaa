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
        name: "About Us",
        link: "/",
      },
      {
        name: "Executive Council",
        link: "/executive-council",
      },
      {
        name: "Past Presidents",
        link: "/",
      },
      {
        name: "The History of BAAD",
        link: "/the-history-of-baad",
      },
      {
        name: "Lambert Fick Memorial",
        link: "/lambert-fick-memorial",
      },
      {
        name: "Revised Constitution 2024",
        link: "/2024-Revised-Constitution.pdf",
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
        link: "/full-member",
      },
      {
        name: "Associate Membership",
        link: "/associate-membership",
      },
    ],
  },
  {
    name: "Scientific Conferences",
    link: "/",
  },
  {
    name: "Masterclasses",
    link: "/masterclasses",
    // link: "/",
  },
  {
    name: "Contact us",
    link: "/contact-us",
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
      btn: "About BAAD",
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
export const MASTER_CLASSES = [
  {
    image: "/BAAD-Masterclass-Enter-The-Matrix-1086x1536.png",
    year: "2023",
    description: "Friday 16th June 2023 – ‘Enter The Matrix’ – A Masterclass",
  },
  {
    image: "/baad-masterclass-mission-impossible-pdf.jpg",
    year: "2022",
    description:
      "Friday 20th May 2022 – ‘Restorative Mission Impossible’ – The Compleat Angler, Marlow",
    link: "/baad-masterclass-mission-impossible.pdf",
  },
  {
    image: "/Untitled-design-1.png",
    year: "2020",
    description: "Friday 1st May 2020",
    link: "/Untitled-design-1.png",
  },
  {
    image: "/Untitled-design-724x1024.png",
    year: "2019",
    description: "Friday 15th November 2019",
    link: "/Untitled-design-724x1024.png",
  },
  {
    image: "/BAAD-E2019-pdf.jpg",
    year: "2019",
    description: "Friday 28th June 2019",
    link: "/BAAD-E2019-pdf.jpg",
  },
  {
    image: "/BAAD-L2018-pdf.jpg",
    year: "2018",
    description: "Friday 14th September 2018",
    link: "/BAAD-L2018-pdf.jpg",
  },
  {
    image: "/BAAD-E2018-pdf.jpg",
    year: "2018",
    description: "Friday 16th March 2018",
    link: "/BAAD-E2018-pdf.jpg",
  },
  {
    image: "/BAAD-L2017-pdf.jpg",
    year: "2017",
    description: "Friday 16th March 2018",
    link: "/BAAD-L2017-pdf.jpg",
  },
  {
    image: "/BAAD-E2017-pdf.jpg",
    year: "2017",
    description: "Friday 31st March 2017",
    link: "/BAAD-E2017-pdf.jpg",
  },
  {
    image: "/BAAD-L2016-pdf.jpg",
    year: "2016",
    description: "Friday 18th November 2016",
    link: "/BAAD-L2016-pdf.jpg",
  },
  {
    image: "/BAAD-M2016-pdf.jpg",
    year: "2016",
    description: "Friday 16th September 2016",
    link: "/BAAD-M2016-pdf.jpg",
  },
  {
    image: "/BAAD-E2016-pdf.jpg",
    year: "2016",
    description: "Friday 15th April 2016",
    link: "/BAAD-E2016-pdf.jpg",
  },
  {
    image: "/BAAD-E2016-pdf.jpg",
    year: "2016",
    description: "Friday 20th November 2015",
    link: "/BAAD-E2016-pdf.jpg",
  },
  {
    image: "/BAAD-L2015-pdf.jpg",
    year: "2015",
    description: "Friday 20th November 2015",
    link: "/BAAD-L2015-pdf.jpg",
  },
  {
    image: "/BAAD-M2015-pdf.jpg",
    year: "2015",
    description: "Friday 11th September 2015",
    link: "/BAAD-M2015-pdf.jpg",
  },
  {
    image: "/BAAD-E2015-724x1024.png",
    year: "2015",
    description: "Friday 24th April 2015",
    link: "/BAAD-E2015-724x1024.png",
  },
  {
    image: "/BAAD-L2014-pdf.jpg",
    year: "2014",
    description: "Friday 21st November 2014",
    link: "/BAAD-L2014-pdf.jpg",
  },
  {
    image: "/BAAD-E2014-pdf.jpg",
    year: "2014",
    description: "Friday 12th September 2014",
    link: "/BAAD-E2014-pdf.jpg",
  },
];
export const MASTER_CLASSES_BANNER = {
  image: "/couple.webp",
  heading: "Masterclasses",
};
export const EXECTIVE_COUNCIL_BANNER = {
  image: "/couple.webp",
  heading: "Executive Council",
};
export const EXECUTIVE_TEAM = [
  {
    image: "/Nik-Sethi.jpg",
    name: "Nik Sethi",
    jd: "President",
  },
  {
    image: "/Nik-Sisodia.jpg",
    name: "Nik Sisodia",
    jd: "Past President",
  },
  {
    image: "/Roy-Morris.jpg",
    name: "Roy Morris",
    jd: "President Elect",
  },
  {
    image: "/Fazeela-Khan-Osborne.jpg",
    name: "Fazeela Khan Osborne",
    jd: "Secretary",
  },
  {
    image: "/Elaine-Mo.jpg",
    name: "Elaine Mo",
    jd: "Treasurer",
  },
  {
    image: "/gurvinder-Bhirth.jpg",
    name: "Gurvinder Bhirth",
    jd: "Scientific Committee",
  },
  {
    image: "/dipesh-Parmar.jpg",
    name: "Dipesh Parmar",
    jd: "Scientific Committee",
  },
  {
    image: "/andrew-Chandrapal.jpg",
    name: "Andrew Chandrapal",
    jd: "Full Committee Member",
  },
  {
    image: "/jon-Ayres-1.jpg",
    name: "Jon Ayres",
    jd: "Trade Liaison & Co-opted Committee Member",
  },
  {
    image: "/penny-Sykes.jpg",
    name: "Penny Sykes",
    jd: "Executive Administrator",
  },
];
