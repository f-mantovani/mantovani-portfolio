import { NavLink } from 'react-router-dom'
import './Navbar.scss'

import React from 'react'

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar-logo'>
				<img src='' alt='logo' />
			</div>
			<div className='navbar-links'>
				<NavLink to={'/'}>Home</NavLink>
				<NavLink to={'/projects'}>Projects</NavLink>
				<NavLink to={'/about'}>About</NavLink>
				<NavLink to={'/contact'}>Contact</NavLink>
			</div>
		</nav>
	)
}

export default Navbar
