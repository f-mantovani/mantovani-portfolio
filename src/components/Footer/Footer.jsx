import './Footer.scss'
import codeWars from '../../assets/codewars.png'
import gitHub from '../../assets/github.png'
import linkedIn from '../../assets/linkedin.png'
import mail from '../../assets/mail.png'
import ClickableLink from '../ClickableLink/ClickableLink'

const Footer = () => {
	return (
		<footer>
			<p>Developed by Felipe Mantovani 2023</p>
			<div className='footer-icons'>
				<ClickableLink link='https://github.com/f-mantovani' img={gitHub} alt='github-logo' />
				<ClickableLink
					link='https://www.codewars.com/users/F-Mantovani'
					img={codeWars}
					alt='codewars-logo'
				/>
				<ClickableLink link='mailto:felipe.mantovani@outlook.com' img={mail} alt='mail-icon' />
				<ClickableLink link='https://linkedin.com/in/f-mantovani/' img={linkedIn} alt='linkedin-logo' />
			</div>
		</footer>
	)
}

export default Footer
