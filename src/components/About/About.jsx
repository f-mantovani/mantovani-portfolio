import Contact from '../Contact/Contact'
import './About.scss'
import '../Contact/Contact.scss'
import codeWars from '../../assets/codewars.png'
import gitHub from '../../assets/github.png'
import linkedIn from '../../assets/linkedin.png'
import mail from '../../assets/mail.png'
import ClickableLink from '../ClickableLink/ClickableLink'

const About = () => {
	return (
		<>
			<div className='about'>
				<section className='about-intro'>
					<div className='img-holder'>
						<img src='...' alt='profile-image' />
					</div>
					<div className='about-intro-text'>
						<p>
							I'm a full-stack MERN developer experienced in learning and collaborating in dynamic
							and rapidly changing environments.
						</p>
						<p>
							I'm currently looking for a company where I can apply my skills and accelerate my
							learning path!
						</p>
					</div>
				</section>

				<div className='skills'>
					<div className='links'>
						<div className='programming-skills'>
							<h3>Check my programming skills</h3>
							<ClickableLink link='https://github.com/f-mantovani' img={gitHub} alt='github-logo'>
								https://github.com/f-mantovani
							</ClickableLink>
							<ClickableLink
								link='https://www.codewars.com/users/F-Mantovani'
								img={codeWars}
								alt='codewars-logo'
							>
								https://www.codewars.com/users/F-Mantovani
							</ClickableLink>
						</div>
						<div className='contact-links'>
							<h3>Get in touch</h3>
							<ClickableLink link='mailto:felipe.mantovani@outlook.com' img={mail} alt='mail-icon'>
								felipe.mantovani@outlook.com
							</ClickableLink>
							<ClickableLink link='https://linkedin.com/in/f-mantovani/' img={linkedIn} alt='linkedin-logo'>
								linkedin.com/in/f-mantovani/
							</ClickableLink>
						</div>
					</div>

					<div className='about-hard-skills'>
						<h3>Technologies</h3>
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
						<h3>Soft Skills</h3>
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
					<Contact />
				</div>
			</div>
		</>
	)
}

export default About
