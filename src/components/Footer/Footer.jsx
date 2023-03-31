import './Footer.scss'
import codeWars from '../../assets/codewars.png'
import gitHub from '../../assets/github.png'
import linkedIn from '../../assets/linkedin.png'
import mail from '../../assets/mail.png'

const Footer = () => {
	return (
		<footer>
			<p>Developed by Felipe Mantovani 2023</p>
			<div className='footer-icons'>
				<img src={mail} alt='mail' />
				<img src={gitHub} alt='github' />
				<img src={linkedIn} alt='linked in' />
				<img src={codeWars} alt='code wars' />
			</div>
		</footer>
	)
}

export default Footer
