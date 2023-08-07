import React from "react";
import { useEffect, useRef, useCallback } from "react";
import styles from "../Carrusel/Carrusel.module.css";


const Carrusel = ({ projectSkill }) => {
  const carruselRef = useRef(null);

  const start = useCallback(() => {
    const carrusel = carruselRef.current;
    let interval = null;
    let step = 1;

    interval = setInterval(() => {
      carrusel.scrollLeft += step;
      if (carrusel.scrollLeft >= carrusel.scrollWidth - carrusel.clientWidth) {
        carrusel.scrollLeft = 0;
      }
    }, 30);

    return interval;
  }, []);

  useEffect(() => {
    const interval = start();

    return () => {
      clearInterval(interval);
    };
  }, [start]);

  return (
    <div className={styles.skillProject} ref={carruselRef}>
      {projectSkill.map((skill, index) => (
        <div key={index} className={styles.nameSkill}>
          <p>{skill}</p>
        </div>
      ))}
    </div>
  );
};

export default Carrusel;

