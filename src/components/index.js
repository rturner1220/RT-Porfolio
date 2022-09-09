import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
    return (
        <div className='navbar'>
            <div className='toggleButton'>
                <button> </button>
            </div>
            <div className='links'>
                <h2>
                    <a data-testid="link" href="/">
                        Rosa Turner
                    </a>
                </h2>

                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/resume'>Resume</Link>
            </div>
        </div>

    );
}

export default Nav;
