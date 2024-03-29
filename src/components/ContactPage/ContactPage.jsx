import Contact from '../Contact/Contact';
import ClickableLink from '../ClickableLink/ClickableLink';
import linkedIn from '../../assets/linkedin.png';
import mail from '../../assets/mail.png';

import './ContactPage.scss';

const ContactPage = () => {
    return (
        <div className='contact'>
            <div className='contact-links'>
                <h3>Get in touch</h3>
                <ClickableLink
                    link='mailto:felipe.mantovani@outlook.com'
                    img={mail}
                    alt='mail-icon'
                >
                    felipe.mantovani@outlook.com
                </ClickableLink>
                <ClickableLink
                    link='https://linkedin.com/in/f-mantovani/'
                    img={linkedIn}
                    alt='linkedin-logo'
                >
                    linkedin.com/in/f-mantovani/
                </ClickableLink>
            </div>
            <Contact />
        </div>
    );
};

export default ContactPage;
