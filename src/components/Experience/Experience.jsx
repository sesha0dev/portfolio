import React from 'react';
import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';

export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skillsGrid}>
          {skills.map((skill, id) => (
            <div
              key={id}
              className={styles.skill}
            >
              <p className={styles.skillTitle}>{skill.title}</p>
              <div
                className={styles.skillImageContainer}
                style={{ "--hoverColor": skill.color }}
              >
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
