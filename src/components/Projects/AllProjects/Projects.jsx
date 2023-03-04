import './Projects.scss'
import ProjectCard from '../ProjectCard'

import React from 'react'

const Projects = ({ projects }) => {
	return (
		<>
			{projects.map(project => (
				<ProjectCard key={project._id} {...project} />
			))}
		</>
	)
}

export default Projects
