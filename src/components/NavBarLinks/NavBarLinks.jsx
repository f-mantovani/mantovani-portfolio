import { NavLink } from 'react-router-dom';
import paths from '../../utils/path.js';

import './NavBarLinks.scss';

const NavBarLinks = ({ width, setIsOpen }) => {
    return (
        <>
            {width > 730 ? (
                <section className='navbar-links'>
                    <NavLink to={paths.home}>Home</NavLink>
                    <NavLink to={paths.projects}>Projects</NavLink>
                    <NavLink to={paths.about}>About Me</NavLink>
                    <NavLink to={paths.contact}>Contact</NavLink>
                    {/* <NavLink to={'/admin '}>Admin</NavLink>
			<NavLink to={'/private/dashboard'}>Dash</NavLink> */}
                </section>
            ) : (
                <section className='navbar-links'>
                    <NavLink onClick={() => setIsOpen(false)} to={paths.home}>Home</NavLink>
                    <NavLink onClick={() => setIsOpen(false)} to={paths.projects}>Projects</NavLink>
                    <NavLink onClick={() => setIsOpen(false)} to={paths.about}>About Me</NavLink>
                    <NavLink onClick={() => setIsOpen(false)} to={paths.contact}>Contact</NavLink>
                    {/* <NavLink to={'/admin '}>Admin</NavLink>
		 <NavLink to={'/private/dashboard'}>Dash</NavLink> */}
                </section>
            )}
        </>
    );
};

export default NavBarLinks;
