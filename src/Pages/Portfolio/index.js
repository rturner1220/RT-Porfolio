import React from 'react';
import Portfolio from '../../components/Portfolio/Portfolio.js';
import { PortfolioList } from '../../helpers/PortfolioList';

import '../../components/styles/Portfolio.css';

function index() {
    return (
        <div className='projects'>
            <h1>Portfolio</h1>
            <div className='portfolioList'>
                {PortfolioList.map((project) => {
                    return <Portfolio name={project.name} image={project.image} link={project.link} />
                })}
            </div>
        </div>
    )
}


export default index