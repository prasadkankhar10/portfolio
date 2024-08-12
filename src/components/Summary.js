import React, { useEffect, useState } from 'react';
import './Summary.css';

const Summary = () => {
    const [textIndex, setTextIndex] = useState(0);
    const textArray = [
        "game developer.",
        "B.Tech student.",
        "problem solver.",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="summary-box">
            <div className="image-container">
                <img src="/images/prasad2.jpg" alt="Prasad Kankhar" />
            </div>
            <div className="text-container">
                <h1>
                    <span className="first-name">Prasad</span> <span className="last-name">Kankhar</span>
                </h1>
                <p className="role">
                    I am <span id="dynamic-text">{textArray[textIndex]}</span>
                </p>
                <p className="description">
                    Passionate B.Tech student<br />game developer.
                </p>
                <div className="social-media-container">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-media-icon twitter">
                        <img src="/icons/twitter.svg" alt="Twitter" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-media-icon linkedin">
                        <img src="/icons/linkedin.svg" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-media-icon github">
                        <img src="/icons/github.svg" alt="GitHub" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Summary;
