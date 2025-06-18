import React, { useState } from 'react';
import faqData from '../data/Faq.json';

const FaqAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="accordion" id="FAQ">
            {faqData.faqs.map((faq, index) => (
                <div className="accordion-item mb-2" key={index}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={activeIndex === index ? 'true' : 'false'}
                            aria-controls={`collapse${index}`}
                        >
                            {faq.question}
                        </button>
                    </h2>
                    <div
                        id={`collapse${index}`}
                        className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                        aria-labelledby={`heading${index}`}
                    >
                        <div className="accordion-body">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqAccordion;
