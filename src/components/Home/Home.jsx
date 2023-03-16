import ProjectCard from '../Projects/ProjectCard'
import './Home.scss'

import Typewriter from 'typewriter-effect'

const strings = [
	'Web Developer',
	'Software Developer',
	'Full Stack Developer',
	'Frontend Developer',
	'Backend Developer',
]

const randomOrder = array => {
	for (let i = array.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}

const Home = ({ projects }) => {
	return (
		<div className='home'>
			<h1> Felipe Mantovani </h1>
			<div>
				<Typewriter
					options={{
						strings: randomOrder(strings),
						autoStart: true,
						loop: true,
					}}
				/>
			</div>
			<div className='home-projects'>
				{projects.map(project => (
					<ProjectCard key={project._id} {...project} />
				))}
			</div>
		</div>
	)
}

export default Home
