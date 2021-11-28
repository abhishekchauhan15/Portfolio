import React from "react";
import "../styles/techStack.css";
import Set_of_programmers from "../assets/backgrounds/337180-PAF3FA-616-removebg-preview.png";
import expressjs from "../assets/icons/expressjs.png";
import bash from "../assets/icons/bash.svg";
import github from "../assets/icons/github.svg";
import git from "../assets/icons/git.svg";
import javascript from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.png";
import redux from "../assets/icons/redux.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import chartjs from "../assets/icons/chartjs.svg";
import apollo from "../assets/icons/apollo.svg";
import ejs from "../assets/icons/ejs.svg";
import materialui from "../assets/icons/materialui.svg";
import mongodb from "../assets/icons/mongodb.svg";
import nodejs from "../assets/icons/nodejs.svg";
import postgresql from "../assets/icons/postgresql.svg";
import spring from "../assets/icons/react-spring.svg";
import reactt from "../assets/icons/react.png";
import s3 from "../assets/icons/s3.svg";
import typescript from "../assets/icons/typescript.svg";
import vercel from "../assets/icons/vercel.svg";

function TechStack() {
  return (
    <div className="techStack">
      <div className="leftImg">
        <img src={Set_of_programmers} alt="" />
      </div>
      <div className="stacks">
        <h1>My Tech Stacks</h1>
        <div className="icons">
          <span>
            Git <img src={git} alt="" className="icon_" />{" "}
          </span>
          <span>
            Redux
            <img src={redux} alt="" className="icon_" />
          </span>
          <span>
            Expressjs
            <img src={expressjs} alt="" className="icon_" />
          </span>
          <span>
            React
            <img src={react} alt="" className="icon_" />
          </span>
          <span>
            Github
            <img src={github} alt="" className="icon_" />
          </span>

          <span>
            Postgresql
            <img src={postgresql} alt="" className="icon_" />
          </span>
          <span>
            Mongodb
            <img src={mongodb} alt="" className="icon_" />
          </span>
          <span>
            Nodejs
            <img src={nodejs} alt="" className="icon_" />
          </span>
          <span>
            Materialui
            <img src={materialui} alt="" className="icon_" />
          </span>
          <span>
            ejs
            <img src={ejs} alt="" className="icon_" />
          </span>
          <span>
            bootstrap
            <img src={bootstrap} alt="" className="icon_" />
          </span>
          <span>
            bash
            <img src={bash} alt="" className="icon_" />
          </span>
          <span>
            javascript
            <img src={javascript} alt="" className="icon_" />
          </span>
          <span>
            vercel
            <img src={vercel} alt="" className="icon_" />
          </span>
          <span>
            typescript
            <img src={typescript} alt="" className="icon_" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
