import React from 'react'
import styles from "./About.module.css";
import moreMe from '../../data/moreMe.json';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
    <h2 className={styles.title}>About me</h2>
    <div className={styles.content}>
        <ul className={styles.aboutItems}>
            {moreMe.map((moreMe, id) => (
                <li key={id} className={styles.aboutItem}>
                    <h3 className={styles.aboutItemTitle}>{moreMe.title}</h3>
                    <p className={styles.aboutItemDescription}>{moreMe.description}</p>
                </li>
            ))}
        </ul>
    </div>
    </section>
  )
}
