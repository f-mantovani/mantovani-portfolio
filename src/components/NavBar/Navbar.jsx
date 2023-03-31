import { NavLink, useLocation } from 'react-router-dom'
import Typewriter from 'typewriter-effect'

import './Navbar.scss'

import paths from '../../utils/path.js'

const checkActive = ({ isActive }) => (isActive ? 'active' : null)

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

const title = path => {
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
			return 'About'
		case paths.contact:
			return 'Contact'
	}
}

const Navbar = () => {
	const { pathname } = useLocation()

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-logo'>
					<NavLink to={paths.home}>Felipe Mantovani</NavLink>
				</div>
				<div className='navbar-links'>
					<NavLink to={paths.home} className={checkActive}>
						Home
					</NavLink>
					<NavLink to={paths.projects}>Projects</NavLink>
					<NavLink to={paths.about}>About Me</NavLink>
					<NavLink to={paths.contact}>Contact</NavLink>
					<NavLink to={'/admin '}>Admin</NavLink>
					<NavLink to={'/private/dashboard'}>Dash</NavLink>
				</div>
			</nav>
			<div className='background'>
				<h1 className='main-title'> {title(pathname)}</h1>
			</div>
		</>
	)
}

export default Navbar
