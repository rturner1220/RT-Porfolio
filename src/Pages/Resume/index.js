import React from 'react'
import '../../components/styles/Resume.css'

function index() {
    return (
        <div className='resume'>
            <h1>Resume</h1>
            <span>
                <p>Download my resume</p>
            </span>
            <ol className='list'>

                <h2>Front-end Skills</h2>

                <span>° HTML</span><br></br>
                <span>° CSS</span><br></br>
                <span>° JavaScript</span><br></br>
                <span>° JQuery</span><br></br>
                <span>° Responsive Design</span><br></br>
                <span>° React</span><br></br>
                <span>° Bootstrap</span>
            </ol>
            <ol className='list'>
                <h2>Back-end Skills</h2>

                <span>° APIs</span><br></br>
                <span>° Node</span><br></br>
                <span>° Express</span><br></br>
                <span>° MySQL Sequelize</span><br></br>
                <span>° MongoDB, Mongoose</span><br></br>
                <span>° REST</span><br></br>
                <span>° GraphQL</span><br></br>

            </ol>

        </div>
    )
}

export default index