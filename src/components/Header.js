import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <span className="name">Abhishek</span>
      <div className="hambugerMenu">
        <ul className="navbar">
          <li> <button> HOME</button>  </li>
          <li><button> TOOLS AND SKILLS</button></li>
          <li><button>FEATURED PROJECTS </button></li>
          <li><button>ALL PORJECTS </button></li>
          <li><button>CONTACT ME</button></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
