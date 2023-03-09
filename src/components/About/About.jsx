import Contact from '../Contact/Contact'
import './About.scss'
import '../Contact/Contact.scss'

import React from 'react'

const About = () => {
	return (
		<>
			<div className='about'>
				<h2> About me </h2>
				<p className='about-intro'>
					I'm a full-stack MERN developer experienced in learning and collaborating in dynamic and
					rapidly changing environments. I'm currently looking for a company where I can apply my
					skills and accelerate my learning path!
				</p>

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
					<Contact />
				</div>
			</div>
		</>
	)
}

export default About
