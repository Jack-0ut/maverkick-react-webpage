import React from 'react';
import '../styles.css';

function Feature({ icon, title, description, className }) {
    return (
        <div className={`feature ${className}`}>
            <span className="material-icons">{icon}</span>
            <h3>{title}</h3>
            <p className="feature-description">{description}</p>
        </div>
    );
}

export default Feature;
