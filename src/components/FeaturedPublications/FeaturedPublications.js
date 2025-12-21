import React from "react";
import './FeaturedPublications.css';
import { FEATUREDPUBLICATIONS } from '../../Util/data';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};

const highlightText = (text) => {
  // Pattern to highlight honors
  const regex = /(Best Paper Runner-up|Best Paper|Spotlight|Oral|Runner-up)/g;
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => (
        part.match(regex) ?
          <span key={index} className="highlighted" style={{ fontWeight: 'bold' }}>{part}</span> :
          part
      ))}
    </>
  );
};

const formatAuthors = (authors) => {
  return authors.split(', ').map((author, index, array) => {
    const isBold = author === "Andrew Zhao" || author === "Andrew Zhao*";
    const needsComma = index !== array.length - 1;

    return (
      <span key={index} style={{ fontWeight: isBold ? 'bold' : 'normal' }}>
        {author}{needsComma ? ', ' : ''}
      </span>
    );
  });
};

const FeaturedPublications = () => {
  return (
    <section id="featured-publications">
      <h1>
        <span role="img" aria-label="sparkles">✨</span>
        {'Selected Works'}
      </h1>
      <div className="publications-grid">
        {FEATUREDPUBLICATIONS.map(pub => (
          <div key={pub.id} className="publication-entry">
            <img src={pub.image} alt={pub.name} className="publication-image" />
            <div className="publication-content">
              <h2 onClick={() => window.open(pub.link, "_blank")}>
                {highlightText(pub.name)}
              </h2>
              <p className="publication-date">{formatDate(pub.date)}</p>
              <p className="publication-venue">{highlightText(pub.journal)}</p>
              <p style={{ fontStyle: 'italic' }}>{formatAuthors(pub.authors)}</p>
              <div className="publication-links">
                <a href={pub.link} rel="noopener noreferrer" target="_blank" className="publication-link">
                  <i className="fas fa-file-alt"></i>
                  <span>Paper</span>
                </a>
                {pub.code && (
                  <a href={pub.code} rel="noopener noreferrer" target="_blank" className="publication-link">
                    <i className="fas fa-code"></i>
                    <span>Code</span>
                  </a>
                )}
                {pub.projectPage && (
                  <a href={pub.projectPage} rel="noopener noreferrer" target="_blank" className="publication-link">
                    <i className="fas fa-globe"></i>
                    <span>Project Page</span>
                  </a>
                )}
                {pub.models && (
                  <a href={pub.models} rel="noopener noreferrer" target="_blank" className="publication-link">
                    <i className="fas fa-box"></i>
                    <span>Models</span>
                  </a>
                )}
                {pub.logs && (
                  <a href={pub.logs} rel="noopener noreferrer" target="_blank" className="publication-link">
                    <i className="fas fa-chart-line"></i>
                    <span>Logs</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPublications;
