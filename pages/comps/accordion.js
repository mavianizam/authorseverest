import React, { useState } from 'react';
// import styles from './Accordion.module.css'; // Import your CSS module

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="accordionTitle" onClick={toggleAccordion}>
                {title}
            </div>
            {isOpen && <div className="accordionContent">{content}</div>}
        </div>
    );
};

export default Accordion;