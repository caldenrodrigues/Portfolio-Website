import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';
import styles from '../styles/Home.module.css';

const Index: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <Home />
                <About />
                <Portfolio />
                <Experience />
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