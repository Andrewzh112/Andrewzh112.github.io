import React from "react";
import './Landing.css';
import focus from '../../img/focus.png'; // Default image
import focus2 from '../../img/focus2.png'; // Hover image
import Typed from 'react-typed';
import { SOCIAL_LINKS, FULL_NAME, RESUME_LINK } from '../../Util/data';

const Landing = () => {
    // Function to open CV in a new window
    const openCV = () => {
        window.open(RESUME_LINK, '_blank');
    };
    
    return (
        <section className="landing">
            <div className="text-content">
                <h1>{FULL_NAME}</h1>
                <h4>
                    <span className="typing">
                        <Typed
                            strings={[
                                'Researcher',
                                'PhD Student',
                                'Research Intern @ Microsoft Research',
                                'Happily Married',
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                    </span>
                </h4>
                <ul className="social-links">
                    {SOCIAL_LINKS.map((social, index) => (
                        <li key={index}>
                            <a href={social.link} rel="noopener noreferrer" target="_blank" aria-label={social.name}>
                                <i className={social.icon}></i>
                            </a>
                        </li>
                    ))}
                    <li>
                        <button 
                            onClick={openCV} 
                            className="cv-button"
                            aria-label="CV"
                        >
                            <i className="far fa-file-pdf"></i>
                        </button>
                    </li>
                </ul>
                {/* job notice */}
                <div className="job-notice">
                    <p><a href="https://andrewzh112.github.io/" target="_blank" rel="noopener noreferrer">Andrew Zhao</a> is currently looking for <span className="highlight-text">full-time research scientist industry positions</span> (preferrably in NA) starting June 2026. Feel free to email: <span className="email">andrewzhao112@gmail.com</span> or <span className="email">zqc21@mails.tsinghua.edu.cn</span>. His research interests mainly include RL for LLMs, reasoning, and RL agents.</p>
                    <div className="cv-download-container">
                        <button 
                            onClick={openCV} 
                            className="cv-download-button"
                        >
                            <i className="far fa-file-pdf"></i> View CV
                        </button>
                    </div>
                </div>
            </div>
            <div className="image-container">
                <img className="default-image" src={focus} alt="Default Illustration"/>
                <img className="hover-image" src={focus2} alt="Hover Illustration"/>
            </div>
        </section>
    );
};

export default Landing;
