import React from "react";
import Skilldata from "../components/Data/skillData";
import './skills.css'
import './headding.css'

export default function Skills() {
return (<div>
  <center>
  <h1 id="Skills" className="hedding">Skills</h1>
      <div className="container2">
           {Skilldata.map((info) => (
              <div className="col-icons" key={info.id}>
                <img
                  className="skill-box"
                  src={info.imageUrl}
                  alt={info.text}
                />
             </div>
            ))}
          </div>
  </center>
          </div>
  );
};
