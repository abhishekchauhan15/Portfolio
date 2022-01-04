import React from "react";
import "../styles/featuredProjects.css";
// import "../styles/project.css"

function Project({ index, Name, Description, Image, Code, Live }) {
  Description = Array.from(Description);

  let ev = "flex flex-row-reverse justify-center  w-3/5 ";

  if (index % 2 === 1) ev = "flex flex-row items-center justify-center";

  return (
    <div>
      <div className="flex justify-center text-2xl ">{Name}</div>

      <div className={ev}>
        <div>
          {Description.map((e) => {
            return <div>{e}</div>;
          })}
        </div>

        <div className="mr-8">
          <img src={Image} alt="" />{" "}
        </div>
      </div>
      <div className="">
        <div>
          {" "}
          <a href={Code} rel="noreferrer" target="_blank">
            Source Code
          </a>
        </div>{" "}
        <div>
          {" "}
          <a href={Live} rel="noreferrer" target="_blank">
            Live
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
