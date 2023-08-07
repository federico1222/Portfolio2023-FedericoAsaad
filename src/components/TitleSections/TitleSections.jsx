import React from "react";
import styles from "../TitleSections/TitleSections.module.css";
import arrow from "../../assets/arrow.png";

const TitleSections = ({ title }) => {
  return (
    <div className={styles.titulo}>
      <h3>
        {title} <img src={arrow} alt="" />
      </h3>
    </div>
  );
};

export default TitleSections;
