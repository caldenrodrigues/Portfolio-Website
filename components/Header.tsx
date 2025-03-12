import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('');

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

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/page_icon.jpg" alt="Logo" className={styles.logoImage} />
                <span className={styles.logoText}>Maria Noronha</span>
            </div>
            <nav>
                <ul className={styles.navList}>
                    {['home', 'about', 'experience', 'portfolio', 'blog', 'contact'].map((section) => (
                        <li key={section}>
                            <a
                                href={`#${section}`}
                                className={activeSection === section ? styles.activeNavLink : ''}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;