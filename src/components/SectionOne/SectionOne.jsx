import React from "react";
import styles from "../SectionOne/SectionOne.module.css";
import imgMe from "../../assets/img-me.png";
import { BsFillLightbulbFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsWrenchAdjustableCircleFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import TitleSections from "../TitleSections/TitleSections";
import { useInView } from 'react-intersection-observer';


const SectionOne = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25, 
  });
  const title = 'About me'
  return (
    <div className={styles.aboutMe} id="section1">
      <TitleSections title={title}/>
      <div className={`${styles.content} ${inView && styles.fadeIn}`} ref={ref}>
        <div className={styles.imgProfile}>
          <img src={imgMe}  alt="" />
        </div>
        <div className={styles.softSkills}>
          <div className={styles.squareSKills}>
            <BsFillLightbulbFill fontSize="60" fill="#74f37aa2" />
            <div>
              <h5>Creativity</h5>
              <p>
                I am a creative programmer, capable of finding innovative
                solutions and thinking outside the box in every challenge.
              </p>
            </div>
          </div>
          <div className={styles.squareSKills}>
            <BsSearch fontSize="60" fill="#74f37aa2" />
            <div>
              <h5>Critical thinking</h5>
              <p>
                Critical thinking is my strength, enabling me to analyze
                situations objectively and make informed decisions
              </p>
            </div>
          </div>
          <div className={styles.squareSKills}>
            <BsWrenchAdjustableCircleFill fontSize="60" fill="#74f37aa2" />
            <div>
              <h5>Problem resolution</h5>
              <p>
                Problem resolution is my standout skill, allowing me to identify
                and address situations efficiently.
              </p>
            </div>
          </div>
          <div className={styles.squareSKills}>
            <BsFillPeopleFill fontSize="60" fill="#74f37aa2" />
            <div>
              <h5>Teamwork</h5>
              <p>
                I excel in teamwork, combining my technical expertise with
                effective communication.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profile}>
        <h3>Profile</h3>
        <p>
          Hello, my name is Federico Asaad. I am a 24-year-old full stack web
          programmer with a great passion for web development and design in
          general. My experience in web programming has been developed through
          projects in which I have worked with a variety of languages and
          technologies. Currently, I am looking for my first job in the IT
          sector in order to develop my skills and evolve in my field, as I am
          seeking opportunities that will allow me to do so while aligning
          myself with the company's objectives.
        </p>
          <button type="button" className={styles.buttonWatchMe}>
            Watch my introduction video <BsArrowUpRight/>
          </button>
      </div>
    </div>
  );
};

export default SectionOne;
