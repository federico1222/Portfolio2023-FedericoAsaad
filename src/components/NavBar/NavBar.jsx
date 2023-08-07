import React from "react";
import styles from "../NavBar/NavBar.module.css";
import imgNav from "../../assets/logo-nav.png";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";
import cv from "../../assets/CV-FEDERICO-ASAAD-FULL-STACK-DEVELOPER-ENGLISH.pdf";
import { saveAs } from "file-saver";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDownloadCV = () => {
    saveAs(cv, "MiCV.pdf");
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoNav}>
        <img src={imgNav} alt="" />
      </div>
      <div className={styles.links}>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              PROJECTS
            </Link>
          </li>
        </ul>
        <button onClick={handleDownloadCV}>My Resumen</button>
      </div>
      <div className={styles.dropdown}>
        <button className={styles.dropdownToggle} onClick={toggleDropdown}>
          <HiMenuAlt3 />
        </button>
        {isOpen && (
          <div className={styles.dropdownMenu}>
            <ul className={styles.menuList}>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <Link
                    activeClass="active"
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    CONTACT
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    ABOUT ME
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    SKILLS
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    PROJECTS
                  </Link>
                </li>
                <li>
                <button onClick={handleDownloadCV}>My Resumen</button>
                </li>
              </ul>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
