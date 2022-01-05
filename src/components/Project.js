import React from "react";
import "../styles/featuredProjects.css";
// import "../styles/project.css"

function Project({ index, Name, Description, Image, Code, Live , Stack}) {
  Description = Array.from(Description);

  let ev = "flex flex-row-reverse  mt-8 justify-center ";

  if (index % 2 === 1) ev = "flex flex-row mt-8 justify-center ";

  return (
    <div>
      <div className="flex justify-center text-2xl  ">{Name}</div>

      <div className={ev}>
        <div>
          {Description.map((e) => {
            return <div>{e}</div>;
          })}
          <div className="mt-20">{Stack}</div>
        </div>

        <div className="mr-8">
          <img src={Image} alt="" />{" "}
        </div>
      </div>

      <div className="flex flex-row items-center justify-center mb-12">
        <div className="mr-4">
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
