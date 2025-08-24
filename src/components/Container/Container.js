import React from "react";
import './Container.css';
import Landing from "../Landing/Landing";
import About from "../About/About";
import Contact from "../Contact/Contact";
import ContactForm from "../ContactForm/ContactForm";
import News from "../News/News";
import Publications from "../Publications/Publications";
import FeaturedPublications from "../FeaturedPublications/FeaturedPublications";
import AcademicTalks from "../AcademicTalks/AcademicTalks"; // Add this line

const Container = () => {
    return (
        <div className="container">
            <Landing />
            <About />
            <News />
            <FeaturedPublications />
            <Publications />
            <AcademicTalks /> {/* Add this line */}
            <Contact />
            <ContactForm />
        </div>
    );
};

export default Container;
