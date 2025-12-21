import React from "react";
import './Work.css';
import { WORK } from '../../Util/data';

const Work = () => {
    return (
        <section id="work">
            <h1>Work</h1>
            <div className="work-grid">
                {WORK.map((project, index) => (
                    <div className="work-card" key={index}>
                        <h2>{project.title}</h2>
                        <p className="work-desc1">{project.description}</p>
                        <p className="work-desc2">{project.description2}</p>
                        <div className="work-links">
                            <a href={project.ghlink} rel="noopener noreferrer" target="_blank" className="work-link">
                                <i className="fab fa-lg fa-github"></i>
                                <span>GitHub</span>
                            </a>
                            <a href={project.extlink} rel="noopener noreferrer" target="_blank" className="work-link">
                                <i className="fas fa-lg fa-external-link-alt"></i>
                                <span>Demo</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;
