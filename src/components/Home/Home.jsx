import ProjectCard from '../Projects/ProjectCard'
import './Home.scss'

import Typewriter from 'typewriter-effect'

const Home = ({ projects }) => {
	return (
		<div className='home'>
      <h1> Felipe Mantovani </h1>
			<div>
				<Typewriter
					options={{
						strings: [
							'Web developer',
							'Software Developer',
							'Full Stack Developer',
							'Frontend Developer',
							'Backend Developer',
						],
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
