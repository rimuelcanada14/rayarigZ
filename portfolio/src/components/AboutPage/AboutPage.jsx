import React from 'react'
import './AboutPage.css'
import melImage from './mel.jpg';
import pdfResume from './resume.pdf'

const AboutPage = () => {
  return (
    <div className="container about-container">
      <div className="about-content">
        <div className="about-title">
            <p>Hi! I'm Raya,</p>
        </div>
        <div className="col-lg-8">
            <p>I am a videographer and photographer, passionate on capturing moments of emotions and memories. I’m flexible working on live and recorded events, accentuating their stories worthy to be told. I make sure that all the shots I take are reflective of message, experience, and power.</p>
        </div>
        <a className="btn border-white resume-btn" href = {pdfResume} target='_blank'>
          View Resume
        </a>
      </div>
      <div className="about-img">
        <img src={melImage} alt="About Image" className='about-me'></img>
      </div>
      
    </div>
  )
}

export default AboutPage