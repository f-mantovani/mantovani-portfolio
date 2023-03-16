import { NavLink } from 'react-router-dom'
import './Navbar.scss'

import React from 'react'
const checkActive = ({ isActive }) => (isActive ? 'active' : null)

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar-logo'>
				<NavLink to={'/'}>
					<img src='' alt='logo' />
				</NavLink>
			</div>
			<div className='navbar-links'>
				<NavLink to={'/'} className={checkActive}>
					Home
				</NavLink>
				<NavLink to={'/projects'}>Projects</NavLink>
				<NavLink to={'/about'}>About Me</NavLink>
				<NavLink to={'/contact'}>Contact</NavLink>
				<NavLink to={'/admin '}>Admin</NavLink>
				<NavLink to={'/dashboard'}>Dash</NavLink>
			</div>
		</nav>
	)
}

export default Navbar
