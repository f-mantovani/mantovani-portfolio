import './Projects.scss';
import ProjectCard from '../ProjectCard';

const Projects = ({ projects }) => {
	return (
		<div className='projects'>
			<div className='projects-all' >
				{projects?.map((project) => (
					<ProjectCard key={project._id} {...project} className='project-page' />
				))}
			</div>
		</div>
	);
};

export default Projects;
