import React from "react";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const ourGlovbal = [
    {
      name:
        "That this group would somehow form a family that's the way we all became the Brady Bunch. Doin' it our way. There's nothing we wont try never heard word.",
      link: "/",
    },
  ];
  const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },
  ];
  const openingHours = [
    { name: "Monday - 9:00AM to 6:00PM", link: "/" },
    { name: "Tuesday - 9:00AM to 6:00PM", link: "/" },
    { name: "Wednesay - 9:00AM to 6:00PM", link: "/" },
    { name: "Thursday - 9:00AM to 6:00PM", link: "/" },
    { name: "Friday - 9:00AM to 4:00PM", link: "/" },
    { name: "Saturday - 9:00AM to 6:00PM", link: "/" }
  ];
  const useFullLinks = [
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/" },
    { name: "Latest News", link: "/" },
    { name: "Our Galary", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Online Booking", link: "/" },
    { name: " Recent Projects", link: "/" },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol
            key={1}
            menuTitle={"ABOUT OUR GLOBAL"}
            menuItems={ourGlovbal}
          />
          <FooterCol
            key={2}
            menuTitle="USEFULL LINKS"
            menuItems={useFullLinks}
          />
          <FooterCol
            key={3}
            menuTitle="OPENING HOURS"
            menuItems={openingHours}
          />
          <FooterCol key={4} menuTitle="CONTACT HERE" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6 className="text-warning">Call now</h6>
              <button className="btn btn-warning">+(10) 123 456 7966</button>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved | Develop by Younus Ali Akash</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
