import React from 'react';

import TitlePage from '../TitlePage/TitlePage'
import AboutPage from '../AboutPage/AboutPage'
import UpPage from '../UPFair/UpFair'
import SkillsPage from '../SkillsPage/SkillsPage'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import WorkPage from '../WorkExp/WorkExp'
import PhotoPage from '../PhotoPage/PhotoPage';
import ContactPage from '../ContactPage/ContactPage'
import Navbar from '../Navbar/Navbar'

const MainPage = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
    
    <div id="title">
      <TitlePage />
    </div>

    <div id="about">
      <AboutPage />
    </div>

    <div id="skills">
      <SkillsPage />
    </div>

    <div id="up">
      <UpPage />
    </div>

    <div id="projects">
      <ProjectsPage />
    </div>

    <div id="wrok">
      <WorkPage />
    </div>

    <div id="photo">
      <PhotoPage />
    </div>

    <div id="contact">
      <ContactPage />
    </div>
    </>
    
  )
}

export default MainPage