import './About.scss'

import React from 'react'

const About = () => {
	return (
		<div className='about'>
			<h1> About me </h1>
			<p className='about-intro'>
				I'm a full-stack MERN developer experienced in learning and collaborating in dynamic and
				rapidly changing environments. Working as a freelancer in software development for the past
				year, I'm currently looking for a company where I can apply my skills and accelerate my
				learning path!
			</p>
			<div className='about-contact'>
				<p>
					Check my programming skills:
					<a
						href='https://github.com/F-Mantovani'
						target='_blank'
						referrerPolicy='noreferrer'
						className='tooltip'
					>
						https://github.com/f-mantovani
					</a>
				</p>
				<p>Please feel free to get in touch with me: felipe.mantovani@outlook.com</p>
			</div>
			<div className='skills'>
				<div className='about-hard-skills'>
					<p>Technologies:</p>
					<ul>
						<li>HTML5, CSS & Responsive Web Design</li>
						<li>Frontend Development: ReactJS, Styled-Components, SASS</li>
						<li>Backend Development: Node.js & ExpressJS</li>
						<li>Integration of 3rd party services (REST APIs)</li>
						<li>Non-Relational database, MongoDB</li>
						<li>Hosting, Agile Methodologies, Git and GitHub</li>
						<li>Software testing with Jest</li>
					</ul>
				</div>
				<div className='about-soft-skills'>
					<p>Soft Skills:</p>
					<ul>
						<li>Teamwork</li>
						<li>Communication</li>
						<li>Problem Solving</li>
						<li>Feedback oriented</li>
						<li>Teaching</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default About
