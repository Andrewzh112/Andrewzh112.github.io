import React, { useEffect, useRef } from 'react';
import './ParticleBackground.css';

const FPS = 10;

const ParticleBackground = () => {
    const canvasRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const calculateGridSize = () => {
            const cellSize = 10; // Reduced cell size for more space
            return {
                width: Math.ceil(window.innerWidth / cellSize),
                height: Math.ceil(window.innerHeight / cellSize),
                cellSize: cellSize
            };
        };

        const initGrid = (width, height) => {
            return Array(height).fill().map(() => 
                Array(width).fill().map(() => Math.random() > 0.95) // Increased threshold for sparser grid
            );
        };

        const drawGrid = (grid, cellSize) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const isDarkTheme = document.body.classList.contains('theme-dark');
            ctx.fillStyle = isDarkTheme ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';

            grid.forEach((row, i) => {
                row.forEach((cell, j) => {
                    if (cell) {
                        ctx.beginPath();
                        ctx.arc(j * cellSize + cellSize/2, i * cellSize + cellSize/2, cellSize/3, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                });
            });
        };

        const updateGrid = (grid) => {
            const newGrid = grid.map((row, i) => 
                row.map((cell, j) => {
                    const neighbors = [
                        [-1, -1], [-1, 0], [-1, 1],
                        [0, -1],           [0, 1],
                        [1, -1],  [1, 0],  [1, 1]
                    ].reduce((acc, [x, y]) => {
                        const newI = (i + x + grid.length) % grid.length;
                        const newJ = (j + y + grid[0].length) % grid[0].length;
                        return acc + (grid[newI][newJ] ? 1 : 0);
                    }, 0);

                    if (cell) return neighbors === 2 || neighbors === 3;
                    return neighbors === 3;
                })
            );
            return newGrid;
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const { width, height, cellSize } = calculateGridSize();
            gridRef.current = initGrid(width, height);
            drawGrid(gridRef.current, cellSize);
        };

        const animate = () => {
            const { cellSize } = calculateGridSize();
            gridRef.current = updateGrid(gridRef.current);
            drawGrid(gridRef.current, cellSize);
            animationFrameId = setTimeout(() => {
                animate();
            }, 1000 / FPS);
        };

        resizeCanvas();
        animate();

        window.addEventListener('resize', resizeCanvas);

        const observer = new MutationObserver(() => {
            const { cellSize } = calculateGridSize();
            drawGrid(gridRef.current, cellSize);
        });

        observer.observe(document.body, { attributes: true });

        return () => {
            clearTimeout(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            observer.disconnect();
        };
    }, []);

    return <canvas ref={canvasRef} className="game-of-life"></canvas>;
};

export default ParticleBackground;