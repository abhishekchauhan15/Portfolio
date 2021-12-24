import React from "react";
import "../styles/featuredProjects.css";
// import "../styles/project.css"

function Project({ Name, Description, Image, Left, Code, Live }) {
  return (
    <div>
      <div className="flex justify-center text-2xl ">{Name}</div>

      <div className="flex justify-center pt-4">
        {Left === 1 ? (
          <div className="flex justify-center">
            <div className="mr-18">
              {" "}
              <img src={Image} alt="" />
            </div>
            <div className="desc">{Description} </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div  className="desc">{Description}</div>
            <div>
              <img src={Image} alt="" />{" "}
            </div>
          </div>
        )}
      </div>
      <div className="flex ml-28 pb-12">
        <div>
          {" "}
          <a href={Code}  rel="noreferrer" target="_blank">Source Code</a>
        </div>{" "}
        <div>
          {" "}
          <a href={Live} rel="noreferrer" target="_blank">Live</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
