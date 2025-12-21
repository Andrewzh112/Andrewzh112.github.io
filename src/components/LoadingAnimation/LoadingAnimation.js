import React from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = () => {
    return (
        <div className="loading-animation">
            <div className="loading-saucer-spinner">
                <div className="loading-saucer"></div>
            </div>
        </div>
    );
};

export default LoadingAnimation;
