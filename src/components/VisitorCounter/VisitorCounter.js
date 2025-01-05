import React from 'react';
import './VisitorCounter.css';

const VisitorCounter = () => {
    return (
        <div className="visitor-counter">
            <h3>Visitor Map</h3>
            <div className="map-container">
                <a 
                    href="https://clustrmaps.com/site/1c3ng"  
                    title="Visit Counter and Geographic Map"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img 
                        src="//www.clustrmaps.com/map_v2.png?d=5jwyNn8OcEp2ekfzkHzp6okU1XhCDirmlVOhORIELUw&cl=ffffff" 
                        alt="Visitor Map" 
                        className="map-image"
                    />
                </a>
            </div>
        </div>
    );
};

export default VisitorCounter; 