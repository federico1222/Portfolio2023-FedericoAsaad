import React from "react";
import { useState, useRef, useEffect} from "react";
import styles from "../SectionTwo/SectionTwo.module.css";
import TitleSections from "../TitleSections/TitleSections";
import corelDraw from "../../assets/corelDraw.png";
import henry from "../../assets/henry.png";
import egg from "../../assets/egg.png";
import skills from "./Skills";
import { MdOutlineExpandMore } from "react-icons/md";
import { SiAdobephotoshop } from "react-icons/si";
import { BsTrello } from "react-icons/bs";
import { useInView } from 'react-intersection-observer';


const SectionTwo = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const bodySelectedSkillRef = useRef(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseSkill = () => {
    setSelectedSkill(null);
    if (!isScrollable) {
      document.body.style.overflow = 'auto';
    }
  };

  const handleModalScroll = (event) => {
    const scrollPosition = event.target.scrollTop;
    setIsScrollable(scrollPosition > 400); // Activa scroll si la posición es más de 400px
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25, 
  });

  useEffect(() => {
    const handleScrollIntoView = () => {
      if (selectedSkill && bodySelectedSkillRef.current) {
        const element = bodySelectedSkillRef.current;
        const elementRect = element.getBoundingClientRect();
        const offset = elementRect.top + window.scrollY;
        const centerOffset = window.innerHeight / 2 - elementRect.height / 2;
        const scrollToY = offset - centerOffset;
        window.scrollTo({ top: scrollToY, behavior: 'smooth' });
      }
    };

    if (selectedSkill) {
      handleScrollIntoView();
    }
  }, [selectedSkill]);
  const title = "Skills";
  return (
    <div className={styles.sectionTwo} id="section2">
      <TitleSections title={title} />
      <div className={styles.items}>
        <div className={styles.containerAcademicEducation}>
          <div className={styles.education}>
            <div>
              <img src={egg} alt="" style={{ width: "80px" }} />
            </div>
            <div className={styles.educationInfo}>
              <h3>Egg Academy</h3>
              <h5>Jun. 2021 - May. 2022</h5>
              <p>
                At Egg Academy, I received intensive training in Full Stack web
                development, where I acquired practical skills in key
                technologies such as JAVA, SPRINGBOOT, relational databases,
                HTML, and CSS. I worked on individual and team projects,
                enhancing my communication and collaboration skills in agile
                environments.
              </p>
            </div>
          </div>
          <div className={styles.education}>
            <div>
              <img
                src={henry}
                alt=""
                className={styles.henry}
                style={{ width: "135px" }}
              />
            </div>
            <div className={styles.educationInfo}>
              <h3>Henry</h3>
              <h5>Sep. 2022 - Feb. 2023</h5>
              <p>
                Henry is a 4-month intensive bootcamp where I learned
                technologies for complete web application development. Using
                JavaScript as the programming language, I gained expertise in
                React, Redux, Sequelize for PostgreSQL databases, Node.js,
                Express, and Git for version control. During my time at Henry, I
                honed strong skills in web application development,
                problem-solving, and teamwork.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.itemContainer} ${inView && styles.fadeIn}`} ref={ref}>
        {skills.map((element, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.buttonExpand}>
                {/* <MdOutlineExpandMore
                  fill="#47464696"
                  onClick={() => handleSkillClick(element)}
                /> */}
            </div>
            {element.icon}
            <div>
              <h3>{element.title}</h3>
              <p>{element.date}</p>
            </div>
          </div>
        ))}
        </div>
        <div className={styles.containerOtherSkills}>
          <div className={styles.otherSkill}>
            <SiAdobephotoshop fontSize="60" fill="#74f37aa2" />
            <div>
              <h3>Photoshop</h3>
              <p>
                I have skills in using Photoshop to retouch photos, create
                digital compositions, and design professional graphics.
              </p>
            </div>
          </div>
          <div className={styles.otherSkill}>
            <img src={corelDraw} alt="" />
            <div>
              <h3>CorelDRAW</h3>
              <p>
                I have experience in CorelDRAW, a versatile graphic design
                software. I can use it to create illustrations, logos, and
                custom graphics with ease.
              </p>
            </div>
          </div>
          <div className={styles.otherSkill}>
            <BsTrello fontSize="60" fill="#74f37aa2" />
            <div>
              <h3>Trello</h3>
              <p>
                I can create boards, lists, and cards to organize tasks, assign
                responsibilities, and efficiently track project progress.
              </p>
            </div>
          </div>
        </div>
        {selectedSkill && (
          <div ref={bodySelectedSkillRef} className={styles.bodySelectedSkill}>
            <div className={styles.containerSelectedSkill} onScroll={handleModalScroll}>
              <div className={styles.buttonSkill}>
                <button onClick={handleCloseSkill}>x</button>
              </div>
              <div className={styles.iconSkill}>{selectedSkill.icon}</div>
              <div className={styles.infoSkill}>
                <h3>{selectedSkill.title}</h3>
                <p>{selectedSkill.learningDescription}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionTwo;
