import React from "react";
import "../styles/featuredProjects.css";
import Project from "./Project";
import ProjectsDetailsArr from "./ProjectsDetailsArr";


function FeaturedProjects() {
  return (
    <div className="featuredProjects">
      <h1 className="flex justify-center pt-8 pb-8 text-4xl ">
        Featured Projects
      </h1>
      <div>
        <div>
          {ProjectsDetailsArr.map((item, index) => {
            return (
              <Project
                index={index}
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
