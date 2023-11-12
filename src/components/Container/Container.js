import React from "react";
import './Container.css';
import Landing from "../Landing/Landing";
import About from "../About/About";
// import Skills from "../Skills/Skills";
// import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import News from "../News/News";
import Publications from "../Publications/Publications";
import FeaturedPublications from "../FeaturedPublications/FeaturedPublications";

const Container = () => {
    return (
        <div className="container">
            <Landing />
            <About />
            <News />
            <FeaturedPublications />
            <Publications />
            <Contact />
        </div>
    );
};

export default Container;
