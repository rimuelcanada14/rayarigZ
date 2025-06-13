import React, { useState, useEffect } from 'react';
import './SkillsPage.css';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import oneImage from './1.jpg';
import twoImage from './2.jpg';
import threeImage from './3.jpg';
import fourImage from './4.jpg';

const SkillsPage = () => {

  return (
    <div className='container skills-container'>
      <p className="fw-bold skills-titles">TABLE OF PROJECTS</p>
      <div className="skills-card">

        <div className="table-card">
          <div className="flip-card">
            <div className="flip-front-s">
              <img src={oneImage} alt="About Image" className='table-img'></img>
            </div>
          </div>
          <a className="btn border-white table-btn" href="#about">
            UP Fair 2025
          </a>
        </div>


        <div className="table-card">
          <div className="flip-card">
            <div className="flip-front-s">
              <img src={twoImage} alt="About Image" className='table-img'></img>
            </div>
          </div>
          <a className="btn border-white table-btn" href="#projects">
            UP BroadAss
          </a>
        </div>

        <div className="table-card">
          <div className="flip-card">
            <div className="flip-front-s">
              <img src={threeImage} alt="About Image" className='table-img'></img>
            </div>
          </div>
          <a className="btn border-white table-btn" href="#about">
            Work Experience
          </a>
        </div>

        <div className="table-card">
          <div className="flip-card">
            <div className="flip-front-s">
              <img src={fourImage} alt="About Image" className='table-img'></img>
            </div>
          </div>
          <a className="btn border-white table-btn" href="#about">
            Freelance Works
          </a>
        </div>

      </div>
    </div>
  );
};

export default SkillsPage;
