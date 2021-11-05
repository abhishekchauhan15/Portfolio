import React from "react";
import "../styles/myInfo.css";
// import coding from "../images/2844250.jpg";
import blobSceneDark from "../assets/backgrounds/blob-scene-dark.svg";

function MyInfo() {
  return (
    <div className="myInfo">
      <div>
        <div>
          <span>Hi,</span>Abhishek
        </div>
        <div>A fullstack developer</div>
        <div>
          I enjoy solving complex problems. Frequently praised as
          detail-oriented by my peers, I can be relied upon to help your company
          achieve its goals by providing sustainable and scalable solutions.
          <div>
            <span>github logo</span>
            <span>linkedin logo</span>
            <span>twitter logo</span>
          </div>
        </div>
        <div className="btn">
          <button></button>
          <button></button>
        </div>
      </div>
      <div>
        {/* <blobSceneDark /> */}
      </div>
      {/* <button>down button</button> */}
      {/* <img src={coding} alt="Logo" /> */}
    </div>
  );
}

export default MyInfo;
