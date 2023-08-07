import React from "react";
import imgFooter from "../../assets/logo-nav.png";
import styles from "../Footer/Footer.module.css";
import { FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.logoFooter}>
        <div>
          <img src={imgFooter} alt="" />
        </div>
        <hr />
        <div className={styles.footerCol}>
          <div className={styles.footerItems}>
            <Link
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About me
            </Link>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </div>
          <p>
            <p>
              © 2023 Developed by Federico Asaad. <br /> All rights reserved.
            </p>
          </p>
        </div>
      </div>
      <div className={styles.linkRedSocial}>
        <div className={styles.socialMedia}>
        <a
            href={"https://twitter.com/fedeasaad2"}
            target="_blank"
            rel="noopener noreferrer"
          >
          <FaTwitter fontSize="30" fill="#fffdfd6c" />
          </a>
          <a
            href={"https://www.instagram.com/fede.asaad/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoInstagramAlt fontSize="30" fill="#fffdfd6c" />
          </a>
          <a
            href={"https://www.facebook.com/fede.asaad/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoFacebookSquare fontSize="30" fill="#fffdfd6c" />
          </a>
          <a
            href={"mailto:federicoasaad17@gmail.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGmail fontSize="30" fill="#fffdfd6c" />
          </a>
        </div>
        <p>Thank you for visiting!</p>
      </div>
    </div>
  );
};

export default Footer;
