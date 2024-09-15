import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseenter', onMouseEnter);
            document.addEventListener('mouseleave', onMouseLeave);
            document.addEventListener('mousedown', onMouseDown);
            document.addEventListener('mouseup', onMouseUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
        };

        addEventListeners();

        return () => removeEventListeners();
    }, []);

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };

    const onMouseDown = () => {
        setClicked(true);
    };

    const onMouseUp = () => {
        setClicked(false);
    };

    const cursorClasses = `laser-cursor ${hidden ? 'laser-cursor--hidden' : ''} ${clicked ? 'laser-cursor--clicked' : ''}`;

    return (
        <div
            className={cursorClasses}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            <div className="laser-dot"></div>
            <div className="laser-ring"></div>
        </div>
    );
};

export default CustomCursor;