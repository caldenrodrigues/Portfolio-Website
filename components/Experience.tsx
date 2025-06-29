import React from 'react';
import styles from '../styles/Experience.module.css';
import { milestones } from '../data/experienceData';

const Experience: React.FC = () => {
    // Group milestones into pairs for rows
    const rows: [typeof milestones[0]?, typeof milestones[0]?][] = [];
    for (let i = 0; i < milestones.length; i += 2) {
        // For every other row, swap the order for the snake effect
        if ((Math.floor(i / 2) % 2) === 0) {
            rows.push([milestones[i], milestones[i + 1]]);
        } else {
            rows.push([milestones[i + 1], milestones[i]]);
        }
    }

    return (
        <section id="experience" className={styles.experienceSection}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.timelineGrid}>
                {rows.map((pair, rowIdx) => (
                    <React.Fragment key={rowIdx}>
                        {/* Left column */}
                        <div className={styles.timelineCell}>
                            {pair[0] && (
                                <div className={styles.timelineItemLeft}>
                                    <div className={styles.node}></div>
                                    <div className={styles.content}>
                                        <div className={styles.itemTitle}>{pair[0].title}</div>
                                        <div className={styles.itemDesc}>{pair[0].description}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Right column */}
                        <div className={styles.timelineCell}>
                            {pair[1] && (
                                <div className={styles.timelineItemRight}>
                                    <div className={styles.node}></div>
                                    <div className={styles.content}>
                                        <div className={styles.itemTitle}>{pair[1].title}</div>
                                        <div className={styles.itemDesc}>{pair[1].description}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Experience;