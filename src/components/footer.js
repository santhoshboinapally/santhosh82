import React  from "react";
import {FaInstagram} from "react-icons/fa";
import {BsGithub,BsFacebook,BsLinkedin} from "react-icons/bs";
import './footer.css';
import './headding.css'
import Contact from "./contact";

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
          <p> +4553356789.</p>
          <p>boinapally.santhosh@gmail.com.</p>
          <p> Værebrovej 4,1,3</p>
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