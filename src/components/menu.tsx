import React from 'react';
import './firstpagestyle.css';

const Menu = () => {
    return (
        <div className="main-menu">
            <ul className="menu">
                <li><a href="#first-page">Home</a></li>
                <li><a href="#second-page">About</a></li>
                <li><a href="#fourth-page">Education</a></li>
                <li><a href="#fifth-page">Portfolio</a></li>
                <li><a href="#sixth-page">Contacts</a></li>
            </ul>
        </div>
    );
};

export default Menu;