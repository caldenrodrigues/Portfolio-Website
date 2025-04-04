import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import styles from '../styles/Home.module.css';
import About from '../components/About';

const Index: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <Home />
                <About />
                <section id="portfolio" className={styles.section}>
                    <h2>Portfolio</h2>
                    <p>Some of my projects.</p>
                </section>
                <section id="experience" className={styles.section}>
                    <h2>Experience</h2>
                    <p>Details about my professional experience.</p>
                </section>
                <section id="blog" className={styles.section}>
                    <h2>Blog</h2>
                    <p>My blog posts.</p>
                </section>
                <section id="contact" className={styles.section}>
                    <h2>Contact</h2>
                    <p>How to get in touch with me.</p>
                </section>
            </main>
        </div>
    );
};

export default Index;