import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <div>Connect with me </div>
        <div className="info">
          <div className="connect">
            <ul>
              <li> <span> </span>Github</li>
              <li> <span> </span> Linkedin</li>
              <li> <span> </span> Twitter</li>
              <li> <span> </span> email</li>
            </ul>
          </div>
          <div>img</div>
        </div>
      </div>
      <div className="rightSide">
        <div>Say Hi</div>
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
