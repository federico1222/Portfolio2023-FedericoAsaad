import React from "react";
import styles from "../SectionThree/SectionThree.module.css";
import thewave from "../../assets/the-wavepf.png";
import pifood from "../../assets/pi-food.png";
import rickandmorty from "../../assets/rickAndMorty.png";
import libreria from "../../assets/libreria.png";
import findajob from "../../assets/findajob.png";
import Carrusel from "../Carrusel/Carrusel";
import TitleSections from "../TitleSections/TitleSections";
import { useInView } from "react-intersection-observer";

const SectionThree = () => {
  const projectSkillOne = [
    "Express",
    "Node.js",
    "JavaScript",
    "React.js",
    "GitHub",
    "PosgretSql",
    "Sequelize",
    "CSS",
    "JWT",
    "Passport",
    "GoogleCloud",
    "MercadoPago",
    "Cloudinary",
    "Formik",
    "LocalStorage",
    "Chart.js",
    "Nodemailer",
    "LogicalDeletion",
    "Dashboard",
    "Railway",
    "Vercel",
    "SweetAlert",
  ];

  const projectSkillTwo = [
    "Express",
    "Node.js",
    "JavaScript",
    "React.js",
    "GitHub",
    "PosgretSql",
    "Sequelize",
    "HTML",
    "CSS",
  ];

  const projectSkillThree = [
    "JavaScript",
    "React.js",
    "GitHub",
    "HTML",
    "CSS",
    "APIRickAndMorty",
  ];

  const projectSkillFour = [
    "Java",
    "SpringBoot",
    "MySQLWorkbench",
    "HTML",
    "CSS",
    "Bootstrap",
    "GitHub",
  ];

  const [refOne, inViewOne] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refTwo, inViewTwo] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refThree, inViewThree] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refFour, inViewFour] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refFive, inViewFive] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const theWaveUrl = "https://proyecto-the-wave-client-1kip.vercel.app/";
  const foodApiUrl =
    "https://www.linkedin.com/feed/update/urn:li:activity:7048742498336149505/";
  const rickAndMortyUrl = "https://federico1222.github.io/RickAndMortyApi/";
  const findajobUrl = "https://github.com/MartinFiorde/EGG-3-Find-a-Job";
  const libreriaUrl = "https://github.com/federico1222/Ejercicio1Spring";

  const title = "Projects";
  return (
    <div className={styles.containerSectionThree} id="section3">
      <TitleSections title={title} />
      <div className={styles.projectsOne}>
        <div className={styles.infoProjects}>
          <h3>The Wave - Full Stack Development</h3>
          <p>
            The Wave is a project that my team and I carried out as part of our
            final assignment. We created an e-commerce platform for nautical
            products, which includes a wide variety of items ranging from
            surfboards to diving fins
          </p>
          <div>
            <Carrusel projectSkill={projectSkillOne} />
          </div>
          <button>
            <a href={theWaveUrl} target="_blank" rel="noopener noreferrer">
              Go to app
            </a>
          </button>
        </div>
        <div
          className={`${styles.imgAndSkills} ${inViewOne && styles.fadeIn}`}
          ref={refOne}
        >
          <img src={thewave} alt="" />
        </div>
      </div>
      <div className={styles.projectsTwo}>
        <div
          className={`${styles.imgAndSkills} ${inViewTwo && styles.fadeIn}`}
          ref={refTwo}
        >
          <img src={pifood} alt="" />
        </div>
        <div className={styles.infoProjects}>
          <h3>Food - Full Stack Development</h3>
          <p>
            During this project, I developed a web food application using
            back-end and server technologies such as SQL with PostgreSQL,
            Sequelize as an ORM, Node.js, and Express.js. For the front-end, the
            application was built using the JavaScript library React, along with
            Redux as the state manager, and CSS for styling.
          </p>
          <div>
            <Carrusel projectSkill={projectSkillTwo} />
          </div>
          <button>
            <a href={foodApiUrl} target="_blank" rel="noopener noreferrer">
              Go to app
            </a>
          </button>
        </div>
      </div>
      <div className={styles.projectsOne}>
        <div className={styles.infoProjects}>
          <h3>Rick And Morty - Front End Development</h3>
          <p>
            The project I have developed is an application built with React that
            utilizes a Rick and Morty API to retrieve information about the
            characters and episodes of the series. The user interface is
            intuitive and user-friendly, enabling users to explore the
            information efficiently. The application allows users to access a
            comprehensive list of characters and episodes and use a search bar
            to filter the information based on their preferences.
          </p>
          <div>
            <Carrusel projectSkill={projectSkillThree} />
          </div>
          <button>
            <a href={rickAndMortyUrl} target="_blank" rel="noopener noreferrer">
              Go to app
            </a>
          </button>
        </div>
        <div
          className={`${styles.imgAndSkills} ${inViewThree && styles.fadeIn}`}
          ref={refThree}
        >
          <img src={rickandmorty} alt="" />
        </div>
      </div>
      <div className={styles.projectsTwo}>
        <div
          className={`${styles.imgAndSkills} ${inViewFour && styles.fadeIn}`}
          ref={refFour}
        >
          <img src={findajob} alt="" />
        </div>
        <div className={styles.infoProjects}>
          <h3>Find a Job - Full Stack Development</h3>
          <p>
            In the group project, we utilized Java, Spring Boot, and MySQL,
            incorporating JPA Repository, Thymeleaf, HTML, CSS, and Bootstrap to
            create a tradespeople application. In this application, users could
            either hire services or offer their services to other users. This
            experience allowed me to apply my knowledge and enhance my technical
            skills and teamwork abilities.
          </p>
          <div>
            <Carrusel projectSkill={projectSkillFour} />
          </div>
          <button>
            <a href={findajobUrl} target="_blank" rel="noopener noreferrer">
              Go to repository
            </a>
          </button>
        </div>
      </div>
      <div className={styles.projectsOne}>
        <div className={styles.infoProjects}>
          <h3>Book Shop - Full Stack Development</h3>
          <p>
            In my individual project, I implemented a CRUD (Create, Read,
            Update, Delete) functionality using technologies such as Java,
            Spring Boot, and MySQL. For the development of the web interface, I
            used JPA Repository for database access and Thymeleaf as the
            template engine.
          </p>
          <div>
            <Carrusel projectSkill={projectSkillFour} />
          </div>
          <button>
            <a href={libreriaUrl} target="_blank" rel="noopener noreferrer">
              Go to repository
            </a>
          </button>
        </div>
        <div
          className={`${styles.imgAndSkills} ${inViewFive && styles.fadeIn}`}
          ref={refFive}
        >
          <img src={libreria} alt="" />
        </div>
      </div>
    </div>
  );
};
export default SectionThree;
