import React, { useState } from "react";
import "../styles/featuredProjects.css";
import Project from "./Project";

const projectsDetailsArr = [
  {
    ProjectsName: "DJPkart",
    ProjectsDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ProjectsImage: "https://picsum.photos/200/300",
    Left: 0,
    Code: "github.com/DJPkart",
    Live: "https://djpkart.com",
  },
  {
    ProjectsName: "Twitter-Clone",
    ProjectsDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ProjectsImage: "https://picsum.photos/200/300",
    Left: 1,
    Code: "github.com/DJPkart",
    Live: "https://djpkart.com",
  },
  {
    ProjectsName: "MemeGenerator",
    ProjectsDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ProjectsImage: "https://picsum.photos/200/300",
    Left: 0,
    Code: "github.com/DJPkart",
    Live: "https://djpkart.com",
  },
];

function FeaturedProjects() {
  return (
    <div className="featuredProjects">
      <h1 className="flex justify-center pt-8 pb-8 text-4xl ">Featured Projects</h1>
      <div>
        <div>
          {projectsDetailsArr.map((item) => {
            return (
              <Project
                Name={item.ProjectsName}
                Description={item.ProjectsDescription}
                Image={item.ProjectsImage}
                Left={item.Left}
                Code={item.Code}
                Live={item.Live}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
