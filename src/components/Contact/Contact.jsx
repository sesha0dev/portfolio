import React from "react";
import contacts from "../../data/contacts.json";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
      <div className={styles.content}>
        <h2 className={styles.title}>Contact Me</h2>
        <p className={styles.skillTitle}>Feel free to reach out!</p>
      </div>
      <ul className={styles.skillsGrid}>
        {contacts.map((contact, id) => (
          <li key={id}>
            <div className={styles.skillImageContainer}>
                <a href={contact.link}><img src={contact.imageSrc} alt={`${contact.name} icon`} /></a>
            </div>

            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              {contact.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
