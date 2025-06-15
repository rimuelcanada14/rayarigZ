import React from 'react';
import './ContactPage.css';
import MelCon from './mel-con.gif';

import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";



const ContactPage = () => {
  return (
    <>
    <div className='container-fluid contact-container'>
        <h2 className="contact-nice fw-bold">
            Let's capture memories together!
        </h2>
        <h4 className='fs-5 fs-sm-9 fs-md-9'>Get on my socials...</h4>
        <div className="icons">
            {/* <a target="_blank" href="https://github.com/rimuelcanada14/" ><IoLogoGithub className="github"/></a> */}
            <a target="_blank" href="https://ph.linkedin.com/in/raya-riego-de-dios-70b5b0236" ><FaLinkedinIn className="linkedin"/></a>
            <a target="_blank" href="mailto:riegodediosraya@gmail.com" ><BiLogoGmail className="facebook"/></a>
            <a target="_blank" href="tel:+639474882067" className='ig'><MdLocalPhone /></a>
        </div>
        {/* <img src={MelCon} className='contact-image'></img> */}
    </div>
    
    </>
    
  )
}

export default ContactPage