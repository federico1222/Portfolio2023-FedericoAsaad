import React from "react";
import styles from "../Main/Main.module.css";
import logoBox from "../../assets/logo-box.png";
import Hi from '../../assets/Hi.png'

const Main = () => {
  return (
    <div className={styles.containerMain}>
      <div className={styles.titleMe}>
        <h1>Hi there <img src={Hi} alt="" /> <br /> I’m Federico Asaad</h1>
        <h4>I am a Full Stack Developer</h4>
        <p>
          Welcome to my portfolio! Here you will find a selection of my best
          works and projects. I hope you enjoy your visit.
        </p>
      </div>
      <div className={styles.imageMain}>
        <div className={styles.colBox}>
          {" "}
          <div className={styles.box1}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
            <div className={styles.line4}></div>
          </div>
          <div className={styles.box2}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <img src={logoBox}  alt="" />
          </div>
        </div>
        <div className={styles.box3}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line1}></div>
        </div>
      </div>
    </div>
  );
};
export default Main;
