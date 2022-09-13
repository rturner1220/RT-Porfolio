import React from 'react'
import { GitHub } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import { Facebook } from '@material-ui/icons';
import "../styles/Footer.css";

function Footer() {
    return (
        <container>
            <div className="footer">
                <div className="socialMedia">
                    <a href='https://github.com/rturner1220'>
                        <GitHub />
                    </a>
                    <a href='https://www.linkedin.com/in/rosaturner/'>
                        <LinkedIn />
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100085088207581'>
                        <Facebook />
                    </a>
                </div>
                <p>&copy; 2022 Rosa Turner</p>

            </div>
        </container>
    )
}

export default Footer