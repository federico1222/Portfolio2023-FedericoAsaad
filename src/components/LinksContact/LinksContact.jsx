import React from "react";
import git from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import mail from "../../assets/mail.png";
import slack from "../../assets/slack.png";
import whatsapp from "../../assets/whatsapp.png";
import styles from "../LinksContact/LinksContact.module.css";
import { useInView } from "react-intersection-observer";

const LinksContact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const linkedinUrl = "https://linkedin.com/in/federicoasaad";
  const gitHubUrl = "https://github.com/federico1222";
  const slackUrl =
    "https://join.slack.com/t/federicoasaadinbox/shared_invite/zt-210pfwlps-_hOtNkxeeIwZmzJxPfhKgA";
  const whatsappUrl = "https://wa.me/5493543641916";
  const mailUrl = "mailto:fedeasaad1099@outlook.com";

  return (
    <div
      className={`${styles.redSocial} ${inView && styles.fadeIn}`}
      id="contact"
      ref={ref}
    >
      <div className={styles.social}>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="" />
        </a>
      </div>
      <div className={styles.social}>
        <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
          <img src={git} alt="" />
        </a>
      </div>
      <div className={styles.social}>
        <a href={slackUrl} target="_blank" rel="noopener noreferrer">
          <img src={slack} alt="" />
        </a>
      </div>
      <div className={styles.social}>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="" />
        </a>
      </div>
      <div className={styles.social}>
        <a href={mailUrl} target="_blank" rel="noopener noreferrer">
          <img src={mail} alt="" />
        </a>
      </div>
    </div>
  );
};

export default LinksContact;
