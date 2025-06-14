import React, { useState, useEffect } from 'react';
import './WorkExp.css';

import oneImage from './1.jpg';
import twoImage from './2.jpg';
import threeImage from './3.jpg';
import fourImage from './4.jpg';

const WorkExp = () => {

  return (
    <div className='container work-container'>
      <p className="fw-bold work-titles">I worked at...</p>
      <div className="work-card">

        <div className="table-card">
          <div className="flip-card">
            <div className="flip-front-s">
              <img src={oneImage} alt="About Image" className='table-img'></img>
            </div>
          </div>
          <a className="btn border-white table-btn" href="https://www.facebook.com/ladoucegrazeph" target="_blank" rel="noopener noreferrer">
            La Douce Graze
          </a>
        </div>


        <div className="table-card">
          <div className="flip-card">
            <div className="flip-front-s">
              <img src={twoImage} alt="About Image" className='table-img'></img>
            </div>
          </div>
          <a className="btn border-white table-btn" href="https://www.facebook.com/profile.php?id=61564613235053" target="_blank" rel="noopener noreferrer">
            Memory Lane
          </a>
        </div>

        <div className="table-card">
          <div className="flip-card">
            <div className="flip-front-s">
              <img src={threeImage} alt="About Image" className='table-img'></img>
            </div>
          </div>
          <a className="btn border-white table-btn" href="https://www.facebook.com/profile.php?id=61570839572226" target="_blank" rel="noopener noreferrer">
            R Drinks
          </a>
        </div>

        <div className="table-card">
          <div className="flip-card">
            <div className="flip-front-s">
              <img src={fourImage} alt="About Image" className='table-img'></img>
            </div>
          </div>
          <a className="btn border-white table-btn" href="https://www.facebook.com/profile.php?id=61570839572226" target="_blank" rel="noopener noreferrer">
            Print-A-Pic
          </a>
        </div>

      </div>
    </div>
  );
};

export default WorkExp;
