import React from "react";
import './Publications.css';
import { PUBLICATIONS } from '../../Util/data';

const highlightText = (text) => {
  // Pattern to highlight honors
  const regex = /(Best Paper Runner-up|Best Paper|Spotlight|Oral|Runner-up)/g;
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => (
        part.match(regex) ?
          <span key={index} className="highlighted">{part}</span> :
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

const Publications = () => {
  return (
    <section id="publications">
      <h1>
        <span role="img" aria-label="publications">📑</span>
        {' '}Publications
      </h1>
      <p className="section-hint">Click on any publication to view the project page or paper.</p>
      <div className="publications-list-box">
        {PUBLICATIONS.map((pub, index) => {
          const targetLink = pub.projectPage || pub.link;
          return (
            <div
              key={pub.id}
              className="bib-entry"
              onClick={() => window.open(targetLink, "_blank")}
            >
              <span className="bib-index">[{PUBLICATIONS.length - index}]</span>
              <div className="bib-content">
                <span className="bib-title">{highlightText(pub.name)}</span>.
                <br />
                <span className="bib-authors">{formatAuthors(pub.authors)}</span>.
                <br />
                <span className="bib-venue">{highlightText(pub.journal)}</span>,
                <span className="bib-date"> {pub.date}</span>.
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Publications;
