import React, { useEffect, useState } from 'react';
import styles from '../styles/Experience.module.css';

type Milestone = {
    icon: string;
    title: string;
    description: string;
};

const Experience: React.FC = () => {
    const [milestones, setMilestones] = useState<Milestone[]>([]);

    useEffect(() => {
        fetch('/experience/experienceData.json')
            .then(res => res.json())
            .then(setMilestones);
    }, []);

    // Group milestones into pairs for rows (snake-like)
    const rows: [Milestone?, Milestone?][] = [];
    for (let i = 0; i < milestones.length; i += 2) {
        if ((Math.floor(i / 2) % 2) === 0) {
            rows.push([milestones[i], milestones[i + 1]]);
        } else {
            rows.push([milestones[i + 1], milestones[i]]);
        }
    }

    return (
        <section id="experience" className={styles.experienceSection}>
            <div className={styles.creativeTrailTitleWrapper}>
                <span className={styles.icon} role="img" aria-label="palette">🎨</span>
                <h2 className={styles.creativeTrailTitle}>The Creative Trail</h2>
                <span className={styles.icon} role="img" aria-label="sparkles">✨</span>
            </div>
            <div className={styles.timelineGrid}>
                {rows.map((pair, rowIdx) => (
                    <React.Fragment key={rowIdx}>
                        {/* Left column */}
                        <div className={styles.timelineCell}>
                            {pair[0] && (
                                <div className={styles.timelineNode}>
                                    <img
                                        src={`/experience/icons/${pair[0].icon}`}
                                        alt={pair[0].title + " icon"}
                                        className={styles.nodeIcon}
                                    />
                                    <div className={styles.nodeContent}>
                                        <div className={styles.itemTitle}>{pair[0].title}</div>
                                        <div className={styles.itemDesc}>{pair[0].description}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Right column with offset */}
                        <div className={styles.timelineCell}>
                            {pair[1] && (
                                <div className={`${styles.timelineNode} ${styles.trailOffset}`}>
                                    <img
                                        src={`/experience/icons/${pair[1].icon}`}
                                        alt={pair[1].title + " icon"}
                                        className={styles.nodeIcon}
                                    />
                                    <div className={styles.nodeContent}>
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