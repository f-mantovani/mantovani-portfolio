import { NavLink, Link, useLocation } from 'react-router-dom'
import Typewriter from 'typewriter-effect'

import './Navbar.scss'

import paths from '../../utils/path.js'

const strings = [
	'Web Developer',
	'Software Developer',
	'Full Stack Developer',
	'Frontend Developer',
	'Backend Developer',
]

const randomOrder = (array) => {
	for (let i = array.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}

const title = (path) => {
	if (path.includes('projects')) {
		return 'Projects'
	}
	switch (path) {
		case paths.home:
			return (
				<Typewriter
					options={{
						strings: randomOrder(strings),
						autoStart: true,
						loop: true,
					}}
				/>
			)
		case paths.projects:
			return 'Projects'
		case paths.about:
			return 'About Me'
		case paths.contact:
			return 'Contact'
	}
}

const Navbar = ({ highlightId }) => {
	const { pathname } = useLocation()

	return (
		<header>
			<nav className='navbar'>
				<Link to={paths.home} className='logo'>
					Felipe Mantovani
				</Link>
				<section className='navbar-links'>
					<NavLink to={paths.home}>Home</NavLink>
					<NavLink to={`${paths.projects}`}>Projects</NavLink>
					<NavLink to={paths.about}>About Me</NavLink>
					<NavLink to={paths.contact}>Contact</NavLink>
					{/* <NavLink to={'/admin '}>Admin</NavLink>
					<NavLink to={'/private/dashboard'}>Dash</NavLink> */}
				</section>
			</nav>
			<h1 className='main-title'> {title(pathname)}</h1>
		</header>
	)
}

export default Navbar
