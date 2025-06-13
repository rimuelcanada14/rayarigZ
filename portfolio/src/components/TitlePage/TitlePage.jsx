import React from 'react';
import { ReactTyped } from "react-typed";
import './TitlePage.css';

const TitlePage = () => {
  return (
    <div className="container-fluid title-container">
      <div className="text-center">
        <p className="text">
          I am
          <ReactTyped strings={["an event manager", "a videographer", "a photographer", "a producer", "a director", ""]} typeSpeed={40} backSpeed={30} loop className='title-type'/>
        </p>
        <div>
          <h1 className="text fw-bold fs-1 title-text">
            RAYA RIEGO DE DIOS
          </h1>
        </div>
        <a className="btn border-white title-btn" href="#about">
          Click!
        </a>
      </div>
    </div>
  );
};

export default TitlePage;
