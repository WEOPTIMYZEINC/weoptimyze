// slideshow.js
import React, { useState, useEffect } from 'react';
import './slideshow.css'; // Import the CSS for slideshow

const Slideshow = ({ slogans }) => {
    const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSloganIndex((currentSloganIndex + 1) % slogans.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [currentSloganIndex, slogans.length]);

    return (
        <div className="slideshow">
            {slogans.map((slogan, index) => (
                <p 
                    key={index}
                    className={`slogan ${index === currentSloganIndex ? 'active' : ''}`}
                >
                    {slogan}
                </p>
            ))}
        </div>
    );
};

export default Slideshow;
