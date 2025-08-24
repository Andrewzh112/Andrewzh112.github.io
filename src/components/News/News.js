import React, { useState } from 'react';
import './News.css'; // Ensure this file has the necessary styles
import { NEWS } from '../../Util/data';

const News = ({ newsData }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const MAX_ITEMS = 5;

    const visibleNews = isExpanded ? NEWS : NEWS.slice(0, MAX_ITEMS);
    const hasMoreItems = NEWS.length > MAX_ITEMS;

    return (
        <section id="news">
            <h1>
                <span role="img" aria-label="news">📰</span>
                {' '}Latest News
            </h1>
            <div className="news-grid">
                {visibleNews.map((item, index) => (
                    <div key={index} className="news-item">
                        <div className="news-date">{item.date}</div>
                        <div className="news-content">{item.content}</div>
                    </div>
                ))}
            </div>
            {hasMoreItems && (
                <button
                    className="news-toggle"
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-label={isExpanded ? "Show less news" : "Show more news"}
                >
                    {isExpanded ? 'Show Less ▲' : `Show More (${NEWS.length - MAX_ITEMS} more) ▼`}
                </button>
            )}
        </section>
    );
};

export default News;
