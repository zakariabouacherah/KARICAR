import React from 'react';

import QuoteForm from './QuoteForm';

const Hero = () => {
    return (
        <div className="hero-container">
            <img src="hero-img.jpg" alt="Hero Image" className="hero-image" />
            <div className="hero-overlay">
                <QuoteForm />
            </div>
        </div>
    );
};

export default Hero;
