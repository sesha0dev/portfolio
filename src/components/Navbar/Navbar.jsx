import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Handle menu toggle
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">sesha.dev</a>
            
            {/* Menu Button Icon */}
            <div
                className={`${styles.menuBtn} ${menuOpen ? styles.active : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                <div className={styles.hamburgerLine}></div>
                <div className={styles.hamburgerLine}></div>
                <div className={styles.hamburgerLine}></div>
            </div>

            {/* Menu Items */}
            <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
                <ul className={styles.menuItems}>
                    <li>
                        <a
                            href="#about"
                            className={styles.link}
                            onClick={toggleMenu}
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#experience"
                            className={styles.link}
                            onClick={toggleMenu}
                        >
                            Experience
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={styles.link}
                            onClick={toggleMenu}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={styles.link}
                            onClick={toggleMenu}
                        >
                            Contact Me
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
