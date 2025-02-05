import React from "react";
import './MobileNav.css';
import logo from '../../../Assets/Logo.png';

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
                <img className="logo" src={logo} alt="Logo" />

                <ul>
                    <li>
                        <a href="#home" className="menu-item">Home</a>
                    </li>
                    <li>
                        <a href="#skills" className="menu-item">Skills</a>
                    </li>
                    <li>
                        <a href="#work-experience" className="menu-item">Work Experience</a>
                    </li>
                    <li>
                        <a href="#contact-me" className="menu-item">Contact Me</a>
                    </li>
                    <li>
                        <button className="contact-btn" onClick={() => {}}>
                            Hire Me
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MobileNav;
