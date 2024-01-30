import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import weoptimyze from '../assets/images/WEOPTIMYZE.png'

function Header() {
    return (
        <nav className="nav">
            <ul className='ul' >
            <li>
                    <Link to="/weoptimyze.com">
                        <img src={weoptimyze} alt="Logo" className="logo" draggable="false" />
                    </Link>
                </li>
                <li className='borderBottom'><Link to="/">Services</Link></li>
                <li className='borderBottom'><Link to="/">About</Link></li>
                <li className='borderBottom'><Link to="/">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Header;
