import React from "react";
import "../styles/myInfo.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
// import coding from "../images/2844250.jpg";
import BlobSceneDark from "../assets/backgrounds/blob-scene-dark.svg";
import Programmer2 from "../assets/programmer2.svg";
import Button from "@mui/material/Button";
import MessageIcon from '@mui/icons-material/Message';
import CodeIcon from '@mui/icons-material/Code';

function MyInfo() {
  return (
    <div className="myInfo">
      <div className="bg">
        <div className="realInfo">
          <div className="hi">
            <span> Hi,</span> I'm Abhishek
          </div>
          <div className="developer">A fullstack developer</div>

          <div className="aboutMe">
            I enjoy solving complex problems. Frequently praised as
            detail-oriented by my peers, <br />I can be relied upon to help your
            company achieve its goals by providing sustainable <br />
            and scalable solutions.
            <div className="Socialbtn">
              <a
                rel="noopener noreferrer"
                href="https://github.com/abhishekchauhan15"
                target="_blank"
              >
                <GitHubIcon />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/abhishekchauhan15/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://twitter.com/1509_abhishek"
                target="_blank"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
          <div className="btn">
            <Button variant="contained" startIcon={<MessageIcon />}>
              GET IN TOUCH
            </Button>
            <Button variant="contained" startIcon={<CodeIcon />}>
              SEE MY WORK
            </Button>
          </div>
        </div>
        <img src={Programmer2} alt="background" className="sideImg" />
      </div>
      {/* <button>down button</button> */}
    </div>
  );
}

export default MyInfo;
