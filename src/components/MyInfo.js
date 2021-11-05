import React from "react";
import "../styles/myInfo.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
// import { Box, IconButton, Link, Button } from "@material-ui/core";
// import coding from "../images/2844250.jpg";
import BlobSceneDark from "../assets/backgrounds/blob-scene-dark.svg";

function MyInfo() {
  return (
    <div className="myInfo">
      <div className="realInfo">
        <div className="name">
          <span>Hi,</span>Abhishek
        </div>
        <div className="developer">A fullstack developer</div>
        <div>
          I enjoy solving complex problems. Frequently praised as
          detail-oriented by my peers, I can be relied upon to help your company
          achieve its goals by providing sustainable and scalable solutions.
          <div className="btn">
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
          <button>GET IN TOUCH</button>
          <button>SEE MY WORK</button>
        </div>
      </div>
      <div className="sideImg">
        image
        {/* <blobSceneDark /> */}
       
        <img src={BlobSceneDark} alt="blob" />

      </div>
      {/* <button>down button</button> */}
      {/* <img src={coding} alt="Logo" /> */}
    </div>
  );
}

export default MyInfo;
