import './Projects.scss'
import ProjectCard from '../ProjectCard'
import { Outlet } from 'react-router-dom'

const Projects = ({ projects }) => {
	return (
		<div className='projects'>
			<div className='projects-all'>
				{projects.map(project => (
					<ProjectCard key={project._id} {...project} />
				))}
			</div>
			<Outlet />
		</div>
	)
}

export default Projects
