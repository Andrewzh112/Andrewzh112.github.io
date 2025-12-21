import React, { useState, useEffect, useContext, useRef, useCallback } from "react";
import './Landing.css';
import focus from '../../img/focus.png';
import focus2 from '../../img/focus2.png';
import Typed from 'react-typed';
import { SOCIAL_LINKS, FULL_NAME, RESUME_LINK } from '../../Util/data';
import { PageTransitionContext } from '../../App';

const sections = [
    { id: 'about', label: 'About' },
    { id: 'news', label: 'News' },
    { id: 'featured-publications', label: 'Selected Works' },
    { id: 'publications', label: 'Publications' },
    { id: 'academic-talks', label: 'Talks' },
    { id: 'academic-services', label: 'Service/Awards' },
    { id: 'contact', label: 'Contact & Links' },
];

const GUN_BOTTOM_OFFSET = 30; // distance from bottom of viewport to gun muzzle

const Landing = () => {
    const { setCurrentSection, setIsOnLanding } = useContext(PageTransitionContext);

    // UFO State (using refs for animation performance)
    const [, setSaucers] = useState([]);
    const saucersRef = useRef([]);

    // Laser Gun State
    const [gunAngle, setGunAngle] = useState(0);
    const [gunX, setGunX] = useState(typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
    const [lasers, setLasers] = useState([]);
    const [isVisible, setIsVisible] = useState(true);
    const [showHints, setShowHints] = useState(true);
    const [, forceUpdate] = useState(0);

    const landingRef = useRef(null);
    const requestRef = useRef();
    const frameSkipRef = useRef(0);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const moveRafRef = useRef(null);
    const pointerRef = useRef(null);
    const hintLeftRef = useRef(null);
    const hintRightRef = useRef(null);
    const pointerLatestRef = useRef({
        x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
        y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0
    });
    const gunLatestRef = useRef({ x: gunX, angle: 0 });
    const getBounds = useCallback(() => {
        const rect = landingRef.current?.getBoundingClientRect();
        return {
            width: rect?.width || window.innerWidth,
            height: rect?.height || window.innerHeight
        };
    }, []);

    const updateHintLayout = useCallback(() => {
        const leftHint = hintLeftRef.current;
        const rightHint = hintRightRef.current;
        if (!leftHint || !rightHint) return;

        const textRect = textRef.current?.getBoundingClientRect();
        const imageRect = imageRef.current?.getBoundingClientRect();
        const rects = [textRect, imageRect].filter(Boolean);
        if (!rects.length) return;

        const panelLeft = Math.min(...rects.map(rect => rect.left));
        const panelRight = Math.max(...rects.map(rect => rect.right));
        const viewportW = window.innerWidth;
        const edgeOffset = 22;
        const buffer = 16;
        const baseWidth = 240;
        const minScaleToShow = 0.45;

        const leftAvailable = Math.max(0, panelLeft - buffer - edgeOffset);
        const rightAvailable = Math.max(0, viewportW - panelRight - buffer - edgeOffset);

        const applyHintSizing = (element, availableWidth) => {
            const scale = Math.min(1, availableWidth / baseWidth);
            const finalScale = scale >= minScaleToShow ? scale : 0;
            const maxWidth = Math.max(0, Math.min(baseWidth, availableWidth));
            element.style.setProperty('--hint-scale', finalScale.toFixed(3));
            element.style.setProperty('--hint-max-width', `${maxWidth}px`);
        };

        applyHintSizing(leftHint, leftAvailable);
        applyHintSizing(rightHint, rightAvailable);
    }, []);

    const respawnSaucer = useCallback((saucerId, width = 80, height = 40) => {
        const { width: boundsW, height: boundsH } = getBounds();
        const margin = 60;
        const maxX = Math.max(margin, boundsW - margin - width);
        const maxY = Math.max(margin, boundsH * 0.35);

        const newX = Math.min(
            Math.max(margin + Math.random() * (boundsW - 2 * margin - width), margin),
            maxX
        );
        const newY = Math.min(
            Math.max(margin + Math.random() * maxY, margin),
            boundsH - height - margin
        );

        saucersRef.current = saucersRef.current.map(saucer => {
            if (saucer.id !== saucerId) return saucer;
            return {
                ...saucer,
                x: newX,
                y: newY,
                dx: (Math.random() - 0.5) * 1.6,
                dy: (Math.random() - 0.5) * 1.6,
                popped: false
            };
        });
        setSaucers([...saucersRef.current]);
    }, [getBounds, setSaucers]);

    // Initialize pointer position
    useEffect(() => {
        if (pointerRef.current) {
            pointerRef.current.style.transform = `translate3d(${pointerLatestRef.current.x}px, ${pointerLatestRef.current.y}px, 0) translate(-50%, -50%)`;
        }
    }, []);

    // Track landing page visibility
    useEffect(() => {
        const handleScroll = () => {
            const landingSection = landingRef.current;
            if (landingSection) {
                const rect = landingSection.getBoundingClientRect();
                const isOnLandingPage = rect.bottom > 100;
                const hintHideOffset = 120;
                const shouldShowHints = isOnLandingPage && rect.top > -hintHideOffset;
                setIsVisible(isOnLandingPage);
                setShowHints(shouldShowHints);
                if (setIsOnLanding) {
                    setIsOnLanding(isOnLandingPage);
                }
            }
            updateHintLayout();
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateHintLayout);
        handleScroll(); // Initial check
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateHintLayout);
        };
    }, [setIsOnLanding, updateHintLayout]);

    // Initialize UFOs with bounds from landing container
    useEffect(() => {
        const { width: w, height: h } = getBounds();
        const margin = 60; // Keep UFOs away from edges
        const usableWidth = Math.max(120, w - 2 * margin - 80);
        const usableHeight = Math.max(120, h * 0.35);
        const initialSaucers = sections.map((section) => ({
            ...section,
            x: margin + Math.random() * usableWidth,
            y: margin + Math.random() * usableHeight,
            dx: (Math.random() - 0.5) * 1.6,
            dy: (Math.random() - 0.5) * 1.6,
            width: 80,
            height: 40,
            popped: false,
            wobble: Math.random() * Math.PI * 2,
        }));
        setSaucers(initialSaucers);
        saucersRef.current = initialSaucers;
    }, [getBounds]);

    // Animation Loop using refs for performance
    const animate = useCallback(() => {
        const { width: boundsW, height: boundsH } = getBounds();
        const isCompact = boundsW <= 768;
        const textRect = !isCompact ? textRef.current?.getBoundingClientRect() : null;
        const imageRect = !isCompact ? imageRef.current?.getBoundingClientRect() : null;
        const margin = 50; // Keep UFOs visible with margin
        const separationDistance = 120; // Minimum distance between UFOs
        const maxXBound = Math.max(margin, boundsW - margin);
        const maxYBound = Math.max(margin, boundsH - 180);

        saucersRef.current = saucersRef.current.map((saucer, index) => {
            if (saucer.popped) return saucer;

            let { x, y, dx, dy, width, height, wobble } = saucer;

            // Update wobble for weird movement
            wobble += 0.07;

            // Add wobble to movement
            const wobbleX = Math.sin(wobble) * 0.35;
            const wobbleY = Math.cos(wobble * 0.7) * 0.2;

            // Update position
            x += dx + wobbleX;
            y += dy + wobbleY;

            // Wall bouncing with margins to keep fully visible
            if (x <= margin) { x = margin; dx = Math.abs(dx); }
            if (x + width >= maxXBound) { x = maxXBound - width; dx = -Math.abs(dx); }
            if (y <= margin) { y = margin; dy = Math.abs(dy); }
            if (y + height >= maxYBound) { y = maxYBound - height; dy = -Math.abs(dy); }

            // Separation from other UFOs to prevent clustering
            saucersRef.current.forEach((other, otherIndex) => {
                if (index === otherIndex || other.popped) return;
                const centerX = x + width / 2;
                const centerY = y + height / 2;
                const otherCenterX = other.x + other.width / 2;
                const otherCenterY = other.y + other.height / 2;
                const distX = centerX - otherCenterX;
                const distY = centerY - otherCenterY;
                const distance = Math.sqrt(distX * distX + distY * distY);

                if (distance < separationDistance && distance > 0) {
                    // Push apart
                    const pushFactor = (separationDistance - distance) / separationDistance * 0.35;
                    dx += (distX / distance) * pushFactor;
                    dy += (distY / distance) * pushFactor;
                }
            });

            // Random velocity changes for unpredictable movement
            if (Math.random() < 0.02) {
                dx += (Math.random() - 0.5) * 0.8;
                dy += (Math.random() - 0.5) * 0.8;
            }

            // Clamp speed
            const speed = Math.sqrt(dx * dx + dy * dy);
            if (speed > 2.2) { dx *= 0.8; dy *= 0.8; }
            if (speed < 0.8) { dx *= 1.15; dy *= 1.15; }
            // If velocity nearly zero, kick it to avoid getting stuck
            if (Math.abs(dx) + Math.abs(dy) < 0.15) {
                dx = (Math.random() - 0.5) * 1.2;
                dy = (Math.random() - 0.5) * 1.2;
            }

            // Avoid Text area
            if (textRect) {
                const buffer = 20;
                if (x + width > textRect.left - buffer && x < textRect.right + buffer &&
                    y + height > textRect.top - buffer && y < textRect.bottom + buffer) {
                    // Push away
                    if (x + width / 2 < textRect.left + textRect.width / 2) {
                        x = textRect.left - width - buffer;
                        dx = -Math.abs(dx) - 1;
                    } else {
                        x = textRect.right + buffer;
                        dx = Math.abs(dx) + 1;
                    }
                }
            }

            // Avoid Image area
            if (imageRect) {
                const buffer = 20;
                if (x + width > imageRect.left - buffer && x < imageRect.right + buffer &&
                    y + height > imageRect.top - buffer && y < imageRect.bottom + buffer) {
                    if (x + width / 2 < imageRect.left + imageRect.width / 2) {
                        x = imageRect.left - width - buffer;
                        dx = -Math.abs(dx) - 1;
                    } else {
                        x = imageRect.right + buffer;
                        dx = Math.abs(dx) + 1;
                    }
                }
            }

            // Final clamp to ensure fully visible
            const maxX = maxXBound - width;
            const maxY = maxYBound - height;
            x = Math.min(Math.max(x, margin), maxX);
            y = Math.min(Math.max(y, margin), maxY);

            return { ...saucer, x, y, dx, dy, wobble };
        });

        // Force re-render to update positions (throttled to ~30fps)
        frameSkipRef.current = (frameSkipRef.current + 1) % 2;
        if (frameSkipRef.current === 0) {
            forceUpdate(n => n + 1);
        }
        requestRef.current = requestAnimationFrame(animate);
    }, [getBounds]);

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [animate]);

    // Sync ref with state for rendering
    useEffect(() => {
        setSaucers([...saucersRef.current]);
    }, []);

    // Mouse Tracking for Gun - moves along X axis and rotates towards mouse (throttled to animation frames)
    const handleMouseMove = useCallback((e) => {
        // Move pointer immediately for responsiveness without triggering React re-render
        if (pointerRef.current) {
            pointerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        }

        const minX = 60;
        const maxX = window.innerWidth - 60;
        const newGunX = Math.max(minX, Math.min(maxX, e.clientX));

        const gunY = window.innerHeight - GUN_BOTTOM_OFFSET;
        const deltaX = e.clientX - newGunX;
        const deltaY = gunY - e.clientY;

        let angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
        angle = Math.max(-60, Math.min(60, angle));

        pointerLatestRef.current = { x: e.clientX, y: e.clientY };
        gunLatestRef.current = { x: newGunX, angle };

        if (!moveRafRef.current) {
            moveRafRef.current = requestAnimationFrame(() => {
                setGunX(gunLatestRef.current.x);
                setGunAngle(gunLatestRef.current.angle);
                moveRafRef.current = null;
            });
        }
    }, []);

    useEffect(() => {
        // Fallback listener so the gun still tracks even if the mouse leaves the landing bounds
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (moveRafRef.current) {
                cancelAnimationFrame(moveRafRef.current);
            }
        };
    }, [handleMouseMove]);

    const navigateToSaucer = useCallback((saucerId) => {
        saucersRef.current = saucersRef.current.map(saucer => {
            if (saucer.id !== saucerId || saucer.popped) return saucer;

            setTimeout(() => {
                const targetSection = document.getElementById(saucer.id);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
                setCurrentSection(saucer.id);
            }, 300);

            return { ...saucer, popped: true };
        });
        setSaucers([...saucersRef.current]);
    }, [setCurrentSection]);

    const handleLandingClick = useCallback((e) => {
        // Only fire if on landing page
        if (!isVisible) return;

        // Priority: interactive links/buttons first, then UFOs
        const target = e.target;
        const interactive = target.closest('a, button, .social-links, .landing-hint, .landing-scroll-arrow');
        if (interactive) {
            return; // let the link/button handle the click
        }

        // Create laser from gun position
        const gunY = window.innerHeight - GUN_BOTTOM_OFFSET;
        const muzzleBottom = GUN_BOTTOM_OFFSET;
        const dx = e.clientX - gunX;
        const dy = gunY - e.clientY;
        const length = Math.sqrt(dx * dx + dy * dy);
        const newLaser = {
            id: Date.now(),
            x: gunX,
            angle: gunAngle,
            length,
            bottom: muzzleBottom
        };
        setLasers(prev => [...prev, newLaser]);

        // Direct hit if clicking on a saucer element
        let hitSaucerId = null;
        const clickedSaucerEl = target.closest('.saucer');
        if (clickedSaucerEl && clickedSaucerEl.dataset.id) {
            hitSaucerId = clickedSaucerEl.dataset.id;
        } else {
            // Check if any UFO is hit (ray casting simplified: check mouse position)
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            for (const saucer of saucersRef.current) {
                if (saucer.popped) continue;
                const hitboxBuffer = 15;
                if (mouseX >= saucer.x - hitboxBuffer &&
                    mouseX <= saucer.x + saucer.width + hitboxBuffer &&
                    mouseY >= saucer.y - hitboxBuffer &&
                    mouseY <= saucer.y + saucer.height + hitboxBuffer) {
                    hitSaucerId = saucer.id;
                    break;
                }
            }
        }

        if (hitSaucerId) {
            navigateToSaucer(hitSaucerId);
            // Respawn after a short delay
            setTimeout(() => respawnSaucer(hitSaucerId), 900);
        }

        // Remove laser after animation
        setTimeout(() => {
            setLasers(prev => prev.filter(l => l.id !== newLaser.id));
        }, 300);
    }, [gunAngle, gunX, isVisible, navigateToSaucer, respawnSaucer]);

    // Function to open CV
    const openCV = (e) => {
        e.stopPropagation(); // Prevent laser from firing
        window.open(RESUME_LINK, '_blank');
    };

    // Prevent laser on social links
    const handleLinkClick = (e) => {
        e.stopPropagation();
    };

    return (
        <section
            className="landing"
            ref={landingRef}
            id="landing"
            onMouseMove={handleMouseMove}
            onClick={handleLandingClick}
        >
            {/* Laser Gun at bottom */}
            <div
                className={`laser-gun-container ${isVisible ? '' : 'hidden'}`}
                style={{
                    left: gunX,
                    transform: 'translateX(-50%)'
                }}
            >
                <div
                    className="laser-gun"
                    style={{
                        transform: `rotate(${gunAngle}deg)`
                    }}
                >
                    <div className="gun-body">
                        <div className="gun-barrel"></div>
                        <div className="gun-core"></div>
                        <div className="gun-glow"></div>
                    </div>
                </div>
            </div>

            {/* Laser Beams */}
            {lasers.map(laser => (
                <div
                    key={laser.id}
                    className="laser-beam firing"
                    style={{
                        left: laser.x,
                        bottom: laser.bottom,
                        height: laser.length,
                        transform: `translateX(-50%) rotate(${laser.angle}deg)`,
                        '--beam-height': `${laser.length}px`
                    }}
                ></div>
            ))}

            {/* Playful edge prompts */}
            <div
                ref={hintLeftRef}
                className={`landing-hint landing-hint-left ${showHints ? '' : 'hidden'}`}
            >
                <span>Aim & shoot the UFOs!</span>
            </div>
            <div
                ref={hintRightRef}
                className={`landing-hint landing-hint-right ${showHints ? '' : 'hidden'}`}
            >
                <span>
                    Scroll down to explore more!
                    <i className="fas fa-arrow-down" aria-hidden="true" style={{ marginLeft: '8px' }}></i>
                </span>
            </div>

            {/* Bottom scroll arrows */}
            <div className={`landing-scroll-arrow landing-scroll-arrow-left ${showHints ? '' : 'hidden'}`} aria-hidden="true">
                <i className="fas fa-chevron-down"></i>
            </div>
            <div className={`landing-scroll-arrow landing-scroll-arrow-right ${showHints ? '' : 'hidden'}`} aria-hidden="true">
                <i className="fas fa-chevron-down"></i>
            </div>

            {/* Pointer dot to show exact cursor position on landing */}
            <div
                ref={pointerRef}
                className={`laser-pointer ${isVisible ? '' : 'hidden'}`}
            ></div>

            {/* UFOs */}
            <div className="saucer-container">
                {saucersRef.current.map((saucer) => (
                    <div
                        key={saucer.id}
                        className={`saucer ${saucer.popped ? 'popped' : ''}`}
                        data-id={saucer.id}
                        style={{
                            left: saucer.x,
                            top: saucer.y,
                        }}
                    >
                        <div className="saucer-text">{saucer.label}</div>
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="text-content" ref={textRef}>
                <h1>{FULL_NAME}</h1>
                <h4>
                    <span className="typing">
                        <Typed
                            strings={[
                                'Researcher',
                                'PhD Candidate',
                                'Happily Married',
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                    </span>
                </h4>
                <ul className="social-links">
                    {SOCIAL_LINKS.map((social, index) => (
                        <li key={index}>
                            <a
                                href={social.link}
                                rel="noopener noreferrer"
                                target="_blank"
                                aria-label={social.name}
                                onClick={handleLinkClick}
                            >
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
                            </a>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={openCV}
                            className="cv-button"
                            aria-label="CV"
                        >
                            <i className="far fa-file-pdf"></i>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="image-container" ref={imageRef}>
                <img className="default-image" src={focus} alt="Default Illustration" />
                <img className="hover-image" src={focus2} alt="Hover Illustration" />
            </div>
        </section>
    );
};

export default Landing;
