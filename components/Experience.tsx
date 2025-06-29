import React from 'react';
import styles from '../styles/Experience.module.css';
import { experienceSections, ExperienceItem, ExperienceSection } from '../data/experienceData';

const Experience: React.FC = () => {
    return (
        <section id="experience" className={styles.experienceSection}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.timelineWrapper}>
                {experienceSections.map((section: ExperienceSection, sectionIdx: number) => (
                    <div key={section.label} className={styles.sectionGroup}>
                        <div className={styles.sectionLabel}>{section.label}</div>
                        <div className={styles.timeline}>
                            {section.items.map((item: ExperienceItem, idx: number) => (
                                <div key={item.title} className={styles.timelineItemWrapper}>
                                    <div
                                        className={`
                                            ${styles.timelineItem}
                                            ${((sectionIdx + idx) % 2 === 0) ? styles.left : styles.right}
                                        `}
                                    >
                                        <div className={styles.node}></div>
                                        <div className={styles.content}>
                                            <div className={styles.itemTitle}>{item.title}</div>
                                            <div className={styles.itemDesc}>{item.description}</div>
                                        </div>
                                    </div>
                                    {/* Connector */}
                                    {idx < section.items.length - 1 && (
                                        <div className={styles.connector}>
                                            <svg width="60" height="60" viewBox="0 0 60 60">
                                                <path
                                                    d={
                                                        ((sectionIdx + idx) % 2 === 0)
                                                            ? "M0,30 Q30,30 30,60 Q30,30 60,30"
                                                            : "M60,30 Q30,30 30,60 Q30,30 0,30"
                                                    }
                                                    stroke="#ea4342"
                                                    strokeWidth="3"
                                                    fill="none"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;