import React from "react";
import styles from "../SectionFour/SectionFour.module.css";
import TitleSections from "../TitleSections/TitleSections";

const SectionFour = () => {
  const title = "Services";
  return (
    <div className={styles.containerSectionFour}>
      <TitleSections title={title} />
      <div className={styles.containerServices}>
        <div className={styles.service}></div>
        <div className={styles.service}></div>
        <div className={styles.service}></div>
      </div>
    </div>
  );
};

export default SectionFour;
