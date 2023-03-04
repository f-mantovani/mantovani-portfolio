import React from 'react'

const ProjectCard = ({ backendLink, frontendLink, isHighlight, techStack, title }) => {

  return (
    <div className="project-card">
      <a href={backendLink} target="_blank" rel="noopener noreferrer">
        <div className="project-card-image">
          {/* <img src={frontendLink} alt={title} /> */}
        </div>
      </a> 
       <div className="project-card-content">
        <h3>{title}</h3>
        <p>{techStack}</p>
        <p>{isHighlight}</p>
      </div>
    </div>
  )
}

export default ProjectCard