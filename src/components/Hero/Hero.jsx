import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import aboutMe from '../../data/aboutMe.json';

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Hello, World! I'm Sesha";
  const typingSpeed = 50;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i));
        i++;
        setTimeout(typeWriter, typingSpeed);
      }
    };
    typeWriter();
  }, []);

  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>{text}</h1>
      <div className={styles.heroContent}>
        {aboutMe.map((aboutMe, id) => (
          <div key={id} className={styles.aboutMe}> 
            <p className={styles.info}>{aboutMe.info}</p>
          </div>  
        ))}
        <a href="#form" className={styles.email} onClick={toggleMenu}>
          Contact me
        </a>
      </div>
    </section>
  );
};
