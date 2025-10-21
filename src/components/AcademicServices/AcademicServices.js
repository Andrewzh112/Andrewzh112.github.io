import React from "react";
import './AcademicServices.css';
import { ACADEMIC_SERVICES } from '../../Util/data';

const AcademicServices = () => {
    return (
        <section id="academic-services">
            <h1>
                <span role="img" aria-label="academic-services">🏅</span>
                {' '}Academic Services & Awards
            </h1>
            <div className="services-grid">
                {ACADEMIC_SERVICES.map((item, index) => (
                    <div key={index} className="service-item">
                        <h2>{item.title}</h2>
                        {item.detail && (
                            <p className="service-detail">{item.detail}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AcademicServices;

