import React from 'react'

function Portfolio({ image, name }) {
    return (
        <div className='portfolio'>
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h2> {name} </h2>
        </div>
    )
}

export default Portfolio