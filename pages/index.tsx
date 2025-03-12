import React from 'react';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to My Portfolio</h1>
                <p className={styles.description}>
                    This is a showcase of my work and projects.
                </p>
            </main>
        </div>
    );
};

export default Home;