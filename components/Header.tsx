import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('');
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'portfolio', 'experience', 'blog', 'contact'];
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

    // Smooth scrolling for all internal links
    useEffect(() => {
        const handleLinkClick = (e: MouseEvent) => {
            let target = e.target as HTMLElement;

            // Traverse up the DOM tree to find the closest <a> tag
            while (target && target.tagName !== 'A') {
                target = target.parentElement as HTMLElement;
            }

            if (target && target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const sectionId = target.getAttribute('href')?.substring(1);
                const section = document.getElementById(sectionId || '');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        document.addEventListener('click', handleLinkClick);
        return () => document.removeEventListener('click', handleLinkClick);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <a href="#home" className={styles.logo}>
                <img src="/page_icon_without_bg.png" alt="Logo" className={styles.logoImage} />
                <span className={`${styles.logoText} ${scrolled ? styles.scrolled : ''}`}>Maria Noronha</span>
            </a>
            <nav className={`${styles.nav} ${menuOpen ? (scrolled ? styles.open_scrolled : styles.open) : ''}`}>
                <ul className={`${styles.navList} ${scrolled ? styles.scrolled : ''}`}>
                    {['home', 'about', 'portfolio', 'experience', 'blog', 'contact'].map((section) => (
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
            <div className={`${styles.hamburger} ${menuOpen ? styles.open : ''} ${scrolled ? styles.scrolled : ''}`} onClick={toggleMenu}>
                <div className={`${styles.bar} ${menuOpen ? styles.bar1 : ''} ${scrolled ? styles.scrolled : ''}`}></div>
                <div className={`${styles.bar} ${menuOpen ? styles.bar2 : ''} ${scrolled ? styles.scrolled : ''}`}></div>
                <div className={`${styles.bar} ${menuOpen ? styles.bar3 : ''} ${scrolled ? styles.scrolled : ''}`}></div>
            </div>
        </header>
    );
};

export default Header;