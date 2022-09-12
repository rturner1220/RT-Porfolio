import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from '@material-ui/icons/Reorder';
import "../styles/Nav.css";
function Nav() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);


    return (
        <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
            <div className='toggleButton'>
                <button
                    onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                >
                    <ReorderIcon />
                </button>
            </div>
            <Link className="title" to='/about'>Rosa Turner</Link>

            <div className='links'>

                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/resume'>Resume</Link>
            </div>
        </div >

    );
}

export default Nav;
