import React from "react";
import './Landing.css';
import focus from '../../img/focus.png'; // Default image
import focus2 from '../../img/focus2.png'; // Hover image
import Typed from 'react-typed';
import { SOCIAL_LINKS, FULL_NAME } from '../../Util/data';

const Landing = () => {
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
                                'Happily Engaged',
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
                </ul>
            </div>
            <div className="image-container">
                <img className="default-image" src={focus} alt="Default Illustration"/>
                <img className="hover-image" src={focus2} alt="Hover Illustration"/>
            </div>
        </section>
    );
};

export default Landing;
