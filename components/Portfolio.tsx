import React, { useState } from 'react';
import styles from '../styles/Portfolio.module.css';

const portfolioItems = [
    { id: 1, title: 'Project One', image: '/portfolio1.png' },
    { id: 2, title: 'Project Two', image: '/portfolio2.png' },
    { id: 3, title: 'Project Three', image: '/portfolio3.png' },
    { id: 4, title: 'Project Four', image: '/portfolio4.png' },
    { id: 5, title: 'Project Five', image: '/portfolio5.png' },
    { id: 6, title: 'Project Six', image: '/portfolio6.png' },
    { id: 7, title: 'Project One', image: '/portfolio6.png' },
    { id: 8, title: 'Project Two', image: '/portfolio5.png' },
    { id: 9, title: 'Project Three', image: '/portfolio4.png' },
    { id: 10, title: 'Project Four', image: '/portfolio3.png' },
    { id: 11, title: 'Project Five', image: '/portfolio2.png' },
    { id: 12, title: 'Project Six', image: '/portfolio1.png' },
];

const itemsPerPage = 6; // Number of items to show per grid

const Portfolio: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

    const handlePrev = () => {
        setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
    };

    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
    };

    const startIndex = currentPage * itemsPerPage;
    const currentItems = portfolioItems.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section id="portfolio" className={styles.portfolioSection}>
            <h2 className={styles.title}>Portfolio</h2>
            <div className={styles.carousel}>
                <button className={styles.arrowLeft} onClick={handlePrev}>
                    &#8249;
                </button>
                <div className={styles.grid}>
                    {currentItems.map((item) => (
                        <div key={item.id} className={styles.gridItem}>
                            <img src={item.image} alt={item.title} className={styles.image} />
                            <div className={styles.overlay}>
                                <span className={styles.workTitle}>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.arrowRight} onClick={handleNext}>
                    &#8250;
                </button>
            </div>
        </section>
    );
};

export default Portfolio;