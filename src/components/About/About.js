import React from "react";
import './About.css';

const About = () => {
    return (
        <section id="about">
            <h1 className="section-title">
                <span role="img" aria-label="about">👨‍🔬</span> About Me
            </h1>
            <div className="about-textbox" aria-label="About me text">
                <p>
                    My name is Andrew Zhao, final year PhD candidate at Tsinghua University advised by Professor <a href="https://gaohuang-net.github.io/" target="_blank" rel="noopener noreferrer">Gao Huang</a>.
                    I obtained my masters degree from the University of Southern California and my Undergraduate degree from the University of British Columbia.\n
                </p>
                <p>
                    My research interest is in self-improving AI, reasoning of LLMs, and agents. In my free time I like to play basketball and video games.
                </p>
            </div>
        </section>
    );
};

export default About;
