import React from "react";
import "../styles/footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import ContactMe from "../assets/backgrounds/20943953-removebg-preview.png";

function Footer() {
  return (
    <div className="footer">
        <div className="footer_info">
          <div className="contact">Connect with me </div>
          <div className="info">
            <div className="connect">
              <ul>
                <li>
                  {" "}
                  <span>
                    {" "}
                  <GitHubIcon
                    />
                  </span>
                  Github
                </li>
                <li>
                  {" "}
                  <span>
                    {" "}
                    <LinkedInIcon />
                  </span>{" "}
                  Linkedin
                </li>
                <li>
                  {" "}
                  <span>
                    <TwitterIcon />{" "}
                  </span>{" "}
                  Twitter
                </li>
                <li>
                  {" "}
                  <span>
                    <EmailIcon />{" "}
                  </span>{" "}
                  Email
                </li>
              </ul>
            </div>
            <div className="footerImg">
              <img src={ContactMe} alt="" />
            </div>
          </div>
        </div>
    
      <div className="rightSide">
        <div class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">Say Hi</div>
        
        <div className="userInfo">
          <span>
            {" "}
            <input></input>{" "}
          </span>
          <span>
            {" "}
            <input></input>{" "}
          </span>
          <span>
            {" "}
            <input></input>{" "}
          </span>
          <button>send</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
