import React from 'react';
import styles from '../styles/About.module.css';

const About: React.FC = () => {
    return (
        <section id="about" className={styles.aboutSection}>
            <video
                className={styles.video}
                src="/about_video.mp4"
                autoPlay
                loop
                muted
            />
        </section>
    );
};

export default About;