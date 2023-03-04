import React from 'react'
import './ProjectCard.scss'
import { NavLink } from 'react-router-dom'
const checkActive = ({ isActive }) => isActive ? 'active' : null

const ProjectCard = ({ backendLink, frontendLink, isHighlight, techStack, title, _id }) => {
	return (
		<NavLink to={`/projects/${_id}`} className={checkActive}>
			<div className='project-card'>
				<h3>Project Title: {title}</h3>
				<div className='project-card-tech'>
					<p>Tech Stack:</p>
					<ul>
						{techStack.map(tech => (
							<li key={tech}>{tech}</li>
						))}
					</ul>
				</div>
			</div>
		</NavLink>
	)
}

export default ProjectCard
