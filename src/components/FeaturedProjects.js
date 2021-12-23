import React, { useState }from 'react'
import "../styles/featuredProjects.css"
import Project from './Project'


const githubUserName="abhishekchauhan15"
const repoName= ["DJPkart", "Twitter-Clone",  "djp-tourism","MemeGenerator", "Snake-Mania",  "Password-Generator"]

const projectsDetailsArr = [
    {
        ProjectsName: 'Project 1',
        ProjectsDescription: 'desc1',
        ProjectsImage: 'img1'
    },
    {
        ProjectsName: 'Project 2',
        ProjectsDescription: 'desc2',
        ProjectsImage: 'img2',
        left:'Ture',

    },
    {
        ProjectsName: 'Project 3',
        ProjectsDescription: 'desc3',
        ProjectsImage: 'img3',
        left:'false',
    }
    
    
    
];


function FeaturedProjects() {
    return (
        <div>
            <h1 className='content-center'>Featured Projects</h1>
            <div>
                <div>
                    {projectsDetailsArr.map(item => {
                        return (
                            <Project
                                Name={item.ProjectsName}
                                Description={item.ProjectsDescription}
                                Image={item.ProjectsImage}

                            />
                        )
                    })}
          
                </div>






                {/* <div>
                    <div>{ ProjectsDescription}</div>
                    <div> { ProjectsImage}</div>




                </div> */}





            </div>
            
        </div>
    )
}

export default FeaturedProjects
