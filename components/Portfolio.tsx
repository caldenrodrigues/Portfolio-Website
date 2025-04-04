import React, { useEffect, useState } from 'react';
import styles from '../styles/Portfolio.module.css';

const portfolioItems = [
    { id: 1, title: 'Project One', image: '/portfolio1.png' },
    { id: 2, title: 'Project Two', image: '/portfolio2.png' },
    { id: 3, title: 'Project Three', image: '/portfolio3.png' },
    { id: 4, title: 'Project Four', image: '/portfolio4.png' },
    { id: 5, title: 'Project Five', image: '/portfolio5.png' },
    { id: 6, title: 'Project Six', image: '/portfolio6.png' },
];

const Portfolio: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const portfolioSection = document.getElementById('portfolio');
            if (portfolioSection) {
                const rect = portfolioSection.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.8) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="portfolio" className={styles.portfolioSection}>
            <h2 className={styles.title}>Portfolio</h2>
            <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
                {portfolioItems.map((item) => (
                    <div key={item.id} className={styles.gridItem}>
                        <img src={item.image} alt={item.title} className={styles.image} />
                        <div className={styles.overlay}>
                            <span className={styles.workTitle}>{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;