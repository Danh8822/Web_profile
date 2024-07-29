import React, { useState } from "react";
import './Navbar.css';
import logo from "../../Assets/Logo.png";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (  
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src={logo} alt="Logo" />

                    <ul className="menu">
                        <li>
                            <a href="#home" className="menu-item">Home</a>
                        </li>
                        <li>
                            <a href="#skills" className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a href="#projects" className="menu-item">Project</a>
                        </li>
                        {/* <li>
                            <a href="#work-experience" className="menu-item">Work Experience</a>
                        </li> */}
                        <li>
                            <a href="#contact-me" className="menu-item">Contact Me</a>
                        </li>
                        <li>
                            <button className="contact-btn" onClick={() => {}}>
                                Hire Me
                            </button>
                        </li>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span
                        className = {"material-symbols-outlined"}
                        style={{ fontSize:"1.8rem"}}
                        >
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
}
 
export default Navbar;
