import React  from "react";
import {FaInstagram} from "react-icons/fa";
import {BsGithub,BsFacebook,BsLinkedin} from "react-icons/bs";
import './footer.css';
import './headding.css'
import Contact from "./contact";
import call from '../components/images/call.png';
import mail from '../components/images/mail.png';
import location from '../components/images/location.png';

const Footer = () => {
    return (      
        <footer>
        <h1 id="Contact" className="hedding">Contact </h1>
         <div className="footer-list"> 
          <div>
            <Contact />
          </div>                      
          <div className="address">
          <h1 className="hedding" style={{ fontSize :"25px", textShadow:'none'}}>Address</h1>  
          <p><img src={call} alt = "call"  height="18px" width='20px'/>  +4553356789.</p>
          <p><img src={mail} alt = "mail"  height="18px" width='20px'/>    boinapally.santhosh@gmail.com.</p>
          <p><img src={location} alt = "location"  height="18px" width='20px'/>    Værebrovej 4,1,3</p>
          <p> 2880 Bagsværd.</p>
          </div>
        <div className="links">
         <h1 className="hedding" style={{ fontSize :"25px", textShadow:'none'}}>LINKS</h1>
         <div className="footer-icons">
            <a href="https://www.linkedin.com/in/santhosh-boinapally/" target="_blank" rel="noopener noreferrer"><BsLinkedin  /></a>   
            <a href="https://github.com/santhoshboinapally" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
            <a href="https://www.facebook.com/santhosboinapally/" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram  /></a>
         </div>
        </div>
        </div>       
    </footer> 
 );
};
export default Footer;