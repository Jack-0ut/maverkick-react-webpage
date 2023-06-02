import React from 'react';
import '../styles.css';

function Citation({ quote, author }) {
    return (
        <blockquote className="citation">
            <p>"{quote}"</p>
            <footer>— {author}</footer>
        </blockquote>
    );
}

export default Citation;
