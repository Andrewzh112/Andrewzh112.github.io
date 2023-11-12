import React from 'react';
import './News.css'; // Ensure this file has the necessary styles
import { NEWS } from '../../Util/data';

const News = ({ newsData }) => {
    return (
        <section id="news">
            <h1>
                <span role="img" aria-label="news">📰</span>
                {' '}Latest News
            </h1>
            <div className="news-grid">
                {NEWS.map((item, index) => (
                    <div key={index} className="news-item">
                        <div className="news-date">{item.date}</div>
                        <div className="news-content">{item.content}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default News;
