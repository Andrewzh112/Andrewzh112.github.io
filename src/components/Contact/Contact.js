import React from "react";
import './Contact.css';
import { SOCIAL_LINKS, RESUME_LINK } from '../../Util/data';

const Contact = () => {
    const contactLinks = [
        ...SOCIAL_LINKS,
        { name: "CV", icon: "far fa-lg fa-file-pdf", link: RESUME_LINK }
    ];

    return (
        <section id="contact">
            <h1>
                <span role="img" aria-label="contact">📧</span>
                {' '}Contact & Links
            </h1>
            <div className="contact-social-wrapper">
                <ul className="contact-social">
                    {contactLinks.map((social, idx) => (
                        <li key={idx}>
                            <a href={social.link} rel="noopener noreferrer" target="_blank" aria-label={social.name}>
                                {social.customIcon === 'x' ? (
                                    <svg
                                        className="social-icon-svg"
                                        aria-hidden="true"
                                        viewBox="0 0 1200 1227"
                                        role="img"
                                    >
                                        <path d="M714.163 519.284L1160.89 0H1054.09L667.137 450.887L357.328 0H0L465.501 681.821L0 1226.37H106.798L515.77 749.218L842.672 1226.37H1200L714.137 519.284H714.163ZM566.248 686.087L521.704 622.646L145.769 79.6946H306.615L612.405 524.348L656.949 587.789L1054.15 1150.3H893.304L566.248 686.113V686.087Z" />
                                    </svg>
                                ) : (
                                    <i className={social.icon}></i>
                                )}
                                <span className="contact-social-label">{social.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Contact;
