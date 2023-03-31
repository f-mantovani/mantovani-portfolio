import React from 'react'
import './ProjectCard.scss'
import { NavLink } from 'react-router-dom'

const checkActive = ({ isActive }) => (isActive ? 'active' : null)

const titleCapitalized = title => {
	return title
		?.split(' ')
		.map(word => {
			word = word.charAt(0).toUpperCase() + word.slice(1)
			return word
		})
		.join(' ')
}

const sliceTech = techArray => techArray.slice(0, 4)

const ProjectCard = ({ imageUrl, techStack, title, _id }) => {
	return (
		<NavLink to={`/projects/${_id}`} className={checkActive}>
			<div className='project-card'>
				<img src={imageUrl} alt={titleCapitalized(title)} />
				<div className='project-card-info'>
					<h3> {titleCapitalized(title)}</h3>
					<p>Tech Stack:</p>
					<div className='project-card-tech'>
						<ul>
							{sliceTech(techStack)?.map(tech => (
								<li key={tech}>{tech}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</NavLink>
	)
}

export default ProjectCard
