import React from 'react';
import underconstruction from '../images/Under-Construction-600.jpg';

function Projects() {
    return(
        <section className="projects">
                <div className="content-wrap divider"> 
                    <h2>Featured Projects</h2>
                    <p>View selected projects below. More information can be found at <a href="https://www.linkedin.com/in/jos%C3%A9-luis-ascona/" target="_blank" rel="noreferrer">My LinkedIn Profile</a>.</p>

                    <section className="project-item">
                        <img src={underconstruction} alt="Under Construction"/>
                        <h3>Project Name</h3>
                        <p>Summary or description of the project and/or your role in it. Add as many paragraphs as you need.</p>
                        <a className="btn" href="https://www.linkedin.com/in/jos%C3%A9-luis-ascona/" target="_blank" rel="noreferrer">View project / case study</a>
                    </section>

                </div>
        </section>    

    )

};

export default Projects;