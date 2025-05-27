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
