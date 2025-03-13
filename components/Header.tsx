import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('');
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'portfolio', 'blog', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <a href="#home" className={styles.logo}>
                <img src="/page_icon.jpg" alt="Logo" className={styles.logoImage} />
                <span className={styles.logoText}>Maria Noronha</span>
            </a>
            <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
                <ul className={styles.navList}>
                    {['home', 'about', 'experience', 'portfolio', 'blog', 'contact'].map((section) => (
                        <li key={section}>
                            <a
                                href={`#${section}`}
                                className={activeSection === section ? styles.activeNavLink : ''}
                                onClick={() => setMenuOpen(false)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <div className={`${styles.bar} ${menuOpen ? styles.bar1 : ''}`}></div>
                <div className={`${styles.bar} ${menuOpen ? styles.bar2 : ''}`}></div>
                <div className={`${styles.bar} ${menuOpen ? styles.bar3 : ''}`}></div>
            </div>
        </header>
    );
};

export default Header;