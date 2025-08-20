// Represents a single item inside a dropdown
export interface SimpleSubItem {
  name: string; // Label shown in dropdown
  link: string; // Destination URL
}

// Common properties for all nav items
interface INavItemBase {
  name: string; // Menu title (e.g., "Home", "Membership")
  link?: string; // Optional for dropdowns
}

// Dropdown item with sub-items
export interface ISimpleDropdownItem extends INavItemBase {
  isDropdown: true;
  subItems: SimpleSubItem[]; // Array of dropdown links
}

// Regular (non-dropdown) navigation item
export interface IRegularNavItem extends INavItemBase {
  link: string; // Required for regular links
  isDropdown?: false; // Can be omitted or explicitly false
}

// Final navigation type (union of both)
export type INavItem = ISimpleDropdownItem | IRegularNavItem;
// useEffect(() => {
//   let scroll: any; // eslint-disable-line

//   (async () => {
//     const LocomotiveScroll = (await import("locomotive-scroll")).default;

//     if (scrollRef.current) {
//       scroll = new LocomotiveScroll({
//         el: scrollRef.current,
//         smooth: true,
//       });
//     }
//   })();
// }, []);
export interface IBanner {
  image: string;
  heading: string;
  para?: string;
}
export type SpeakerGroup = { date: string; speak: string[] };

export interface IBaseCard {
  description: string;
  image: string;
}

export interface IWithLink extends IBaseCard {
  link: string;
  pageHeader: string;
  heading: string;
  venue: string;
  date: string;
  upperPara: string;
  speakers?: string[];
  speakersDateBased?: { date: string; speak: string[] }[];
  learnMoreLink?: string;
  programmeLink?: string;
  imageArray?: string[];
}

export type IScientificCard = IBaseCard | IWithLink;

// Type guard
export function isRoutable(card: IScientificCard): card is IWithLink {
  return (
    "link" in card &&
    typeof card.link === "string" &&
    "pageHeader" in card &&
    typeof card.pageHeader === "string"
  );
}
