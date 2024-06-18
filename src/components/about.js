import React from "react";
import image from "../images/mypic.png";
import './about.css';

function About() {
    return (
        <div  id="About">
          <div className="container">
          <div className="col-left">
          <p className="about">
            I’m a Frontend Web developer looking for a position that
needs innovation, creation, dedication and
enables me to continue to my work. During
HackYourFuture bootcamp i gained strong
competence within problem solving and worked in different projects and gained hands-on 
experience in working with HTML, CSS,JavaScript,NodeJs,MySQL and ReactJs as well as a
great deal of experience in working in a team. I
am very social person and enjoy teamwork, but
can easily work independent when needed.</p>
            </div>
               <div className="col-right">
                 <img className="mypic" alt="logo" src={image} />
                </div>
            </div>
        </div>

    );
}
export default About;