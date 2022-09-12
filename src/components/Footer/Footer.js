import React from 'react'
import { GitHub } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import { Facebook } from '@material-ui/icons';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <GitHub />
                <LinkedIn />
                <Facebook />
            </div>
            <p>&copy; 2022 Rosa Turner</p>

        </div>
    )
}

export default Footer