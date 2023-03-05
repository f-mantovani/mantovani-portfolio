import React from 'react'
import './ProjectCard.scss'
import { NavLink } from 'react-router-dom'

const checkActive = ({ isActive }) => isActive ? 'active' : null

const titleCapitalized = (title) => {
	return title.split(' ').map((word) => {
		word = word.charAt(0).toUpperCase() + word.slice(1)
    return word
	 }).join(' ')
}

const ProjectCard = ({ techStack, title, _id }) => {
	
	return (
		<NavLink to={`/projects/${_id}`} className={checkActive}>
			<div className='project-card'>
				<h3> {titleCapitalized(title)}</h3>
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
