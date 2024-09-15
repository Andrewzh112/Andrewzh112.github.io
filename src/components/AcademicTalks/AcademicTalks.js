import React from "react";
import './AcademicTalks.css';
import { ACADEMIC_TALKS } from '../../Util/data';

const AcademicTalks = () => {
    return (
        <section id="academic-talks">
            <h1>
                <span role="img" aria-label="academic-talks">🎤</span>
                {' '}Academic Talks
            </h1>
            <div className="talks-grid">
                {ACADEMIC_TALKS.map((talk, index) => (
                    <div key={index} className="talk-item">
                        <h2>{talk.title}</h2>
                        <p className="talk-date">{talk.date}</p>
                        <p className="talk-venue">{talk.venue}</p>
                        {talk.description && <p className="talk-description">{talk.description}</p>}
                        {talk.link && (
                            <a href={talk.link} target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-external-link-alt"></i> View Details
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AcademicTalks;