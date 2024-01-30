import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
    return (
        <nav className="nav">
            <ul className='ul'>
            <li>
                    <Link to="/">
                        <img src="/path-to-your-logo.png" alt="Logo" className="logo" />
                    </Link>
                </li>
                <li><Link to="/">Services</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Header;
