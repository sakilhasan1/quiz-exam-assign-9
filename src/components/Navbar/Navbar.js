import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='title'>Quiz Exam</h1>
            <div>
                <Link to="/topics">Topics</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </nav>

    );
};

export default Navbar;