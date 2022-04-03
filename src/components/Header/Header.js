import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <Link className='linking' to='/home'>Home</Link>
            <Link className='linking' to='/orders'>OrderReview</Link>
            <Link className='linking' to='/grandpa'>Grandpa</Link>
        </nav>
    );
};

export default Header;