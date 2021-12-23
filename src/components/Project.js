import React from 'react'
// import "../styles/project.css"




function Project({ Name, Description, Image, Link }) {

    return (
        <div>
            <div className='flex justify-center '>{Name}</div>

            <div className='flex '>
                <div>{Description}</div>
                <div>{Image}</div>
            </div>

            
        </div>
    )
}

export default Project
