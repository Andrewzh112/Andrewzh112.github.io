import React from "react";
import './About.css';
import { ABOUT } from '../../Util/data';

const About = () => {
    return (
        <section id="about">
            <h1 className="section-title">
                <span role="img" aria-label="about">👨‍🔬</span> About Me
            </h1>
            <div className="about-container">
                {ABOUT.map((item, index) => (
                    <div key={index} className="about-item">
                        <div className="hover-icon" aria-hidden="true"></div>
                        <div className="about-item-inner">
                            <div className="about-item-front">
                                <div className="about-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                            </div>
                            <div className="about-item-back">
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
