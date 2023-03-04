import './Home.scss'

import Typewriter from 'typewriter-effect'

const Home = () => {
	return (
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
	)
}

export default Home
