import React from 'react';
import '../styles.css';

function Header({ appName }) {
    return (
        <header className="container">
            <div className="app-name">{appName}</div>
        </header>
    );
}

export default Header;
