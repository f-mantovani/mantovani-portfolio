import ProjectCard from '../Projects/ProjectCard'
import './Home.scss'

const Home = ({ projects }) => {
	return (
		<div className='home'>
			<h3> Latest Projects </h3>
			<div className='home-projects'>
				{projects?.map(project => (
					<ProjectCard key={project._id} {...project} />
				))}
			</div>
		</div>
	)
}

export default Home
