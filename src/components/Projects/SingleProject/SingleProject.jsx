import { useParams } from 'react-router-dom'

import linkIcon from '../../../assets/link.png'
import './SingleProject.scss'

const SingleProject = ({ projects }) => {
	const { id } = useParams()
	const project = projects?.find(project => project._id === id)

	return (
		<div className='project-single'>
			<div className='hero'>
				<div className='img-holder'>
					<img src={project.imageUrl} alt={project.title} />
				</div>
				<p className='description'>{project.description}</p>
			</div>
			<div className='frontend'>
				<h4> FRONT-END REPO </h4>
				<div className='icon-link'>
					<img src={linkIcon} alt='link-icon' />
					<a href={project.frontendLink}> {project.frontendLink} </a>
				</div>
			</div>
			<div className='backend'>
				<h4> BACK-END REPO </h4>
				<div className='icon-link'>
					<img src={linkIcon} alt='link-icon' />
					<a href={project.backendLink}> {project.backendLink} </a>
				</div>
			</div>
			<div className='live'>
				<h4> LIVE APP </h4>
				<div className='icon-link'>
					<img src={linkIcon} alt='link-icon' />
					<a href={project.liveApp}> {project.liveApp} </a>
				</div>
			</div>
			<div className='tech-stack'>
				<h4>TECH STACK:</h4>
				<ul>
					{project.techStack.map(tech => (
						<li>{tech}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default SingleProject
