import React, { useEffect, useState, useRef } from 'react';
import Papa from 'papaparse';
import styles from '../styles/Portfolio.module.css';

type PortfolioItem = {
    id: string;
    title: string;
    image: string;
    pdf: string;
};

const itemsPerPage = 6;

const Portfolio: React.FC = () => {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);
    const [popupPdf, setPopupPdf] = useState<string | null>(null);
    const portfolioRef = useRef<HTMLDivElement>(null);

    // Fetch and parse CSV
    useEffect(() => {
        fetch('/portfolio/portfolio_content.csv')
            .then(res => res.text())
            .then(text => {
                const result = Papa.parse<PortfolioItem>(text, { header: true });
                setPortfolioItems(result.data.filter(item => item.id && item.title));
            });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setAnimationKey((prevKey) => prevKey + 1);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 }
        );

        if (portfolioRef.current) {
            observer.observe(portfolioRef.current);
        }

        return () => {
            if (portfolioRef.current) {
                observer.unobserve(portfolioRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!popupPdf) return;
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setPopupPdf(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [popupPdf]);

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
        <section
            id="portfolio"
            className={styles.portfolioSection}
            ref={portfolioRef}
        >
            <h2 className={styles.title}>Portfolio</h2>
            <div className={styles.carousel}>
                <button className={styles.arrowLeft} onClick={handlePrev}>
                    &#8249;
                </button>
                <div className={styles.grid}>
                    {currentItems.map((item, index) => (
                        <div
                            key={`${item.id}-${animationKey}`}
                            className={`${styles.gridItem} ${isVisible ? styles[`animate${index + 1}`] : ''}`}
                            onClick={() => setPopupPdf(item.pdf)}
                            style={{ cursor: 'pointer' }}
                        >
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
            {popupPdf && (
                <div className={styles.popupOverlay} onClick={() => setPopupPdf(null)}>
                    <div className={styles.popupContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={() => setPopupPdf(null)}>×</button>
                        <iframe
                            src={`${popupPdf}#toolbar=0&navpanes=0&scrollbar=0`}
                            title="PDF Viewer"
                            width="100%"
                            height="600px"
                            style={{ border: 'none' }}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;