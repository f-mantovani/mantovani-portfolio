import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

import paths from '../../utils/path.js';
import NavBarLinks from '../NavBarLinks/NavBarLinks.jsx';
import Hamburguer from '../Icons/Hamburguer.jsx';

import './Navbar.scss';

const strings = [
    'Web Developer',
    'Software Developer',
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
];

const randomOrder = (array) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const title = (path) => {
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
            );
        case paths.projects:
            return 'Projects';
        case paths.about:
            return 'About Me';
        case paths.contact:
            return 'Contact';
    }
};

function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
}

const Navbar = ({ isOpen, setIsOpen }) => {
    const [width, setWidth] = useState(getWindowSize());
    const { pathname } = useLocation();

    useEffect(() => {
        function handleWindowResize() {
            setWidth(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <header>
            <nav className='navbar'>
                <Link to={paths.home} className='logo'>
                    Felipe Mantovani
                </Link>

                {!isOpen && width > 880 && <NavBarLinks setIsOpen={setIsOpen} width={width} />}
                {width < 880 && <Hamburguer onClick={() => setIsOpen(!isOpen)} />}
            </nav>
            <h1 className={`main-title ${pathname === paths.home && `home-title`}`}>
                {title(pathname)}
            </h1>
        </header>
    );
};

export default Navbar;
