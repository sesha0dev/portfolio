import React from 'react'
import projects from "../../data/projects.json";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
    return (
        <div className={styles.projectCard}>
            {/* Image and Title (Always Visible) */}
            <img src={imageSrc} className={styles.image} alt={title} />
            <h3 className={styles.projectTitle}>{title}</h3>

            {/* Hidden Content (Visible on Hover) */}
            <div className={styles.hiddenContent}>
                <p className={styles.projectDescription}>{description}</p>
                <ul className={styles.skillsGrid}>
                    {skills.map((skill, id) => (
                        <li key={id}>{skill}</li>
                    ))}
                </ul>
                <div className={styles.links}>
                    <a href={demo} target="_blank" rel="noopener noreferrer">
                        Demo
                    </a>
                    <a href={source} target="_blank" rel="noopener noreferrer">
                        Source
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

