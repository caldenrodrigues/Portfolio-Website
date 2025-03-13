import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('');
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

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

            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>
                <img src="/page_icon_without_bg.png" alt="Logo" className={styles.logoImage} />
                <span className={`${styles.logoText} ${scrolled ? styles.scrolled : ''}`}>Maria Noronha</span>
            </div>
            <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
                <ul className={`${styles.navList} ${scrolled ? styles.scrolled : ''}`}>
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
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
        </header>
    );
};

export default Header;