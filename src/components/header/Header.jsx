import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';

import dataHeader from './Data';
import logo from '../../public/assets/shared/logo.svg';
import menuHamburger from '../../public/assets/shared/icon-hamburger.svg';
import menuClose from '../../public/assets/shared/icon-close.svg';

function Header() {

    const [isActive, setIsActive] = useState(false);

    const [hamburger, setHamburger] = useState(true);

    const { pathname } = useLocation();

    const handleToggle = () => {
        setHamburger(!hamburger);
        setIsActive(!isActive);
    }

    const itemNavActive = dataHeader.findIndex(e => e.path === pathname);

    return (

        <header className='wrap'>
            <div className="logo">
                <Link to='/'> <img src={logo} alt="logo" /> </Link>
            </div>
            <div className="line"></div>
            <div className="menu-hamburger">
                <a onClick={handleToggle}
                    className="icon"
                >
                    <img src={menuHamburger} alt="Hamburger Icon" />
                </a>
            </div>

            <ul className={isActive ? 'navbar active' : 'navbar'}>
                <div className="menu-hamburger close">
                    <a onClick={handleToggle}
                        className="icon"
                    >
                        <img src={menuClose} alt="Close Hamburger Menu" />
                    </a>
                </div>
                {

                    dataHeader.map((li, index) => (
                        <li key={index}

                        >

                            <Link to={li.path}
                                className={itemNavActive === index ? 'active' : ''}
                            >  <span>0{index}</span>{li.display}</Link>
                        </li>
                    ))
                }
            </ul>





        </header>
    )
}

export default Header;
