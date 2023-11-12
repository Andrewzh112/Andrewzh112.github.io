import React from "react";
import './About.css';
import { ABOUT } from '../../Util/data';

const About = () => {
    return (
        <section id="about">
            <h1>
                <span role="img" aria-label="me">👨‍💻</span>
                {' '}About
            </h1>
            <div>
                {ABOUT.map(para => (
                    <p>
                        {para.text}
                    </p>
                ))}
            </div>
      </section>
    );
};

export default About;
