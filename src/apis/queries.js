const BookNowQuery = '*[_type == "book"]';
const ContactUsQuery = '*[_type == "contactus"]';
const RoomsQuery = '*[_type == "rooms"]';
const AboutQuery = '*[_type == "about"]';
const RoomsGalleryQuery = '*[_type == "roomsgallery"]';
const ServicesQuery = '*[_type == "services"]';
const EventsQuery = '*[_type == "events"]';
export const getquery = (text) => {
  switch (text) {
    case "book":
      return BookNowQuery;
    case "contactus":
      return ContactUsQuery;
    case "about":
      return AboutQuery;
    case "rooms":
      return RoomsQuery;
    case "roomsgallery":
      return RoomsGalleryQuery;
    case "services":
      return ServicesQuery;
    case "events":
      return EventsQuery;
    default:
      return -1; // check
  }
};
