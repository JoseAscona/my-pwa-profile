import React from 'react';
import resume from '../images/resume-website.png';

function Projects() {
    return(
        <section className="projects">
                <div className="content-wrap divider"> 
                    <h2>Featured Projects</h2>
                    <h3>View selected projects below. More information can be found at <a href="https://www.linkedin.com/in/jos%C3%A9-luis-ascona/" target="_blank" rel="noreferrer">My LinkedIn Profile</a>.</h3>

                    <section className="project-item">
                        <img src={resume} alt="Resume Icon"/>
                        <h3>Online Portfolio and Resume</h3>
                        <p>This project is both an online resume with the Projects sections acting as a portfolio. It was build with <strong>Create React App</strong> with the <strong>PWA template</strong>.
                            Is installable on Chrome , Android and IOs devices. It uses components that render all the different sections within the website.
                        </p>
                        <a className="btn" href="https://www.linkedin.com/in/jos%C3%A9-luis-ascona/" target="_blank" rel="noreferrer">View project on Github</a>
                    </section>
                </div>
        </section>    

    )

};

export default Projects;