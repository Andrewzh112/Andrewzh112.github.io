import React, { useState, useEffect, useContext } from 'react';
import './CustomCursor.css';
import { PageTransitionContext } from '../../App';

const CustomCursor = () => {
    const { isOnLanding } = useContext(PageTransitionContext);
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

    // Hide cursor on landing page (laser gun is the cursor there)
    const shouldHide = hidden || isOnLanding;
    const cursorClasses = `laser-cursor ${shouldHide ? 'laser-cursor--hidden' : ''} ${clicked ? 'laser-cursor--clicked' : ''}`;

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