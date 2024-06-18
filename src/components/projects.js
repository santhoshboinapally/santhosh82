import React from "react";
import projectList from "../components/Data/projectData";
import {BsGithub} from "react-icons/bs";
import {CgScreen} from "react-icons/cg";
import './projects.css';
import './headding.css';

export default function Projects () {
        return(
        <div>
            <h1 id="Projects" className="hedding" >Projects</h1>   
            <div className="projects">
          {projectList.map((info) => (       
                  <div className="cards"  key={info.id}>                      
                     <p className="proj-title" >{info.title}</p>
                     <p><img src={info.image} alt={info.title}/></p>
                     <p><a href={info.codeurl}><BsGithub /></a></p>
                     <p><a href={info.appurl}><CgScreen /> </a></p>
                        
                  </div>
                 
            ))}</div>
            </div>
    );
}