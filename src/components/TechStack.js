import React from "react";
import "../styles/techStack.css";
import githubDots from "../assets/github-dots.svg";
import expressjs from "../assets/icons/expressjs.png";
import bash from "../assets/icons/bash.svg";
import github from "../assets/icons/github.svg";
import git from "../assets/icons/git.svg";
import javascript from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.png";
import redux from "../assets/icons/redux.svg";

function TechStack() {
  return (
    <div className="techStack">
      <div className="leftImg">
        <img src={githubDots} alt="" />
      </div>
      <div className="stacks">
        <h1>My Tech Stacks</h1>
        <div className="icons">
          {/* <img src={expressjs} alt="" />
                  <img src={git} alt="" />
                  <img src={github} alt="" />
                  <img src={bash} alt="" />
                  <img src={javascript} alt="" />
                  <img src={react} alt="" />
                  <img src={redux} alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
