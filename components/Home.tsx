import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const roles = ["Copywriter", "Storyteller", "Chai Loyalist", "Cat Lover", "Bookworm", "Dreamer"];

const Home: React.FC = () => {
    const [currentRole, setCurrentRole] = useState<string>(roles[0]);
    const [roleIndex, setRoleIndex] = useState<number>(0);
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000); // Change role every 3 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setAnimate(true);
        setCurrentRole(roles[roleIndex]);
        const timeout = setTimeout(() => setAnimate(false), 2800); // Duration of the animation

        return () => clearTimeout(timeout);
    }, [roleIndex]);

    return (
        <section id="home" className={styles.home}>
            <div className={styles.content}>
                <div className={styles.intro}>
                    <h1 className={styles.hello}>Hello, I'm</h1>
                    <h1 className={styles.name}>Maria</h1>
                    <h2 className={`${styles.role} ${animate ? styles.animate : ''}`}>{currentRole}</h2>
                    <div className={styles.socials}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                    <div className={styles.buttons}>
                        <a href="#contact" className={styles.button}>Say Hello</a>
                        <a href="#about" className={styles.button}>About Me</a>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src="/profile.jpg" alt="Profile" />
                </div>
            </div>
        </section>
    );
};

export default Home;