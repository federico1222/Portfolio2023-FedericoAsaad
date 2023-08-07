import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { BsDatabase } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { TfiHtml5 } from "react-icons/tfi";
import { FaCss3Alt } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { BiLogoRedux } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSequelize } from "react-icons/si";
import { BsGit } from "react-icons/bs";

const skills = [
  {
    title: "Java",
    icon: <FaJava fontSize="50" fill="#74f37aa2" />,
    date: "June 23, 2021",
    learningDescription:
      "I learned Java at Egg Academy, my first programming language. During the course, I acquired essential fundamentals and skills in object-oriented programming, arrays, collections, class relationships, and exception handling. This allowed me to tackle more complex projects with confidence.",
  },
  {
    title: "Spring Boot",
    icon: <SiSpringboot fontSize="50" fill="#74f37aa2" />,
    date: "Nov 10, 2021",
    learningDescription:
      "I learned Spring Boot and the MVC design pattern at Egg Academy. During the course, I focused on understanding key concepts of Spring Boot, such as project configuration, controller creation, dependency injection, and the use of annotations, while applying the MVC pattern in web application development. I also worked on practical projects to apply these skills in real-world scenarios.",
  },
  {
    title: "SQL",
    icon: <BsDatabase fontSize="50" fill="#74f37aa2" />,
    date: "Dec 05, 2021",
    learningDescription:
      "I learned SQL during these two bootcamps, at Egg Academy and Henry. Throughout the courses, I gained essential knowledge about the structure and manipulation of relational databases. I learned to design tables, perform queries to retrieve and manipulate data, and use clauses like JOIN and WHERE to combine information from multiple tables. Additionally, I mastered managing data integrity through constraints and creating stored procedures and functions to enhance data handling efficiency.",
  },
  {
    title: "MySQL",
    icon: <GrMysql fontSize="50" fill="#74f37aa2" />,
    date: "Dec 10, 2021",
    learningDescription:
      "I learned MySQL at Egg Academy. During the course, I acquired a solid understanding of database management using MySQL. I learned to create and manage databases, design tables, and perform various SQL queries to retrieve, update, and delete data.",
  },
  {
    title: "HTML5",
    icon: <TfiHtml5 fontSize="50" fill="#74f37aa2" />,
    date: "Dec 25, 2021",
    learningDescription:
      "I learned HTML5 first at Egg Academy and then reinforced my knowledge at Henry. During the learning process, I became familiar with the basics of HTML5 and how to use it to create website structures and content. I learned essential tags and elements, as well as best practices for creating accessible and well-structured web pages. Thanks to HTML5, I can effectively develop modern and responsive websites.",
  },
  {
    title: "CSS3",
    icon: <FaCss3Alt fontSize="50" fill="#74f37aa2" />,
    date: "Dec 25, 2021",
    learningDescription:
      "I learned CSS3 at Egg Academy and further strengthened my skills at Henry, where I specialized in Front-end, as web design is my greatest passion. Throughout my learning journey, I mastered CSS3 properties and selectors to create attractive and responsive styles in my projects. With these skills, I can craft visually appealing web pages that adapt seamlessly to various devices and screen sizes.",
  },
  {
    title: "Bootstrap",
    icon: <BsFillBootstrapFill fontSize="50" fill="#74f37aa2" />,
    date: "Jan 20, 2022",
    learningDescription:
      "I self-taught Bootstrap by watching tutorials and online resources. Through independent learning, I became proficient in leveraging Bootstrap's powerful CSS framework to design and develop responsive and visually appealing websites.",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript fontSize="50" fill="#74f37aa2" />,
    date: "Sep 13, 2022",
    learningDescription:
      "JavaScript was my next milestone at Henry, where I encountered another programming language for the first time. During my training at Henry, I gained essential knowledge in JavaScript, including DOM manipulation, event handling, function creation, and implementing logic and algorithms",
  },
  {
    title: "Node.js",
    icon: <DiNodejs fontSize="50" fill="#74f37aa2" />,
    date: "Nov 01, 2022",
    learningDescription:
      "After JavaScript, I continued my learning journey at Henry with Node.js. With Node.js, I was able to extend my programming skills to the server-side. I learned how to create web servers, handle routes, work with modules and packages, and perform input/output operations in the file system.",
  },
  {
    title: "React",
    icon: <FaReact fontSize="50" fill="#74f37aa2" />,
    date: "Dec 08, 2022",
    learningDescription:
      "React, a framework that enabled me to create web applications efficiently. With React, I could build interactive and functional interfaces, which significantly enhanced my web development skills.",
  },
  {
    title: "Redux",
    icon: <BiLogoRedux fontSize="50" fill="#74f37aa2" />,
    date: "Dec 20, 2022",
    learningDescription:
      "After React, I expanded my knowledge by learning Redux. With Redux, I could efficiently manage the state of my applications, improving data handling and project organization in a more scalable way",
  },
  {
    title: "Express",
    icon: <SiExpress fontSize="50" fill="#74f37aa2" />,
    date: "Dec 28, 2022",
    learningDescription:
      "Also at Henry, after learning Node.js, I was taught how to use the Express framework. With Express, I learned to create web applications faster and easier, simplifying the process of defining routes and handling server requests and responses.",
  },
  {
    title: "PostgreSQL",
    icon: <BiLogoPostgresql fontSize="50" fill="#74f37aa2" />,
    date: "Jan 07, 2023",
    learningDescription:
      "I learned PostgreSQL at Henry, where I gained knowledge about relational databases and how to interact with PostgreSQL. During the course, I learned to design and manage tables, execute complex queries, and utilize advanced functions to efficiently manipulate data.",
  },
  {
    title: "Sequelize",
    icon: <SiSequelize fontSize="50" fill="#74f37aa2" />,
    date: "Jan 10, 2023",
    learningDescription:
      "I also learned Sequelize alongside PostgreSQL and Express at Henry. Sequelize is an ORM (Object-Relational Mapping) library that simplifies database interactions in Node.js applications. With Sequelize, I mastered how to define models, create associations between tables, and perform various database operations easily and efficiently.",
  },
  {
    title: "Git",
    icon: <BsGit fontSize="50" fill="#74f37aa2" />,
    date: "Jan 20, 2023",
    learningDescription:
      "I first learned Git during my individual project at Egg Academy. Later on, I reinforced my skills by working on a group project during my time at Henry. With Git, I efficiently managed version control for my projects, tracked changes, collaborated with other developers, and ensured the integrity and security of my code.",
  },
];

export default skills;
