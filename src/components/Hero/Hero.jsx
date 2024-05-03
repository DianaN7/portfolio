import React from 'react';

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Diana</h1>
        <p className={styles.description}>
          Я начинающая фронтенд разработчица. Мне нравится узнавать что-то новое
          в области разработки для совершенствования моих навыков написания
          кода.
        </p>
        <a href="mailto:12diana13@gmail.com" className={styles.contactBtn}>
          Связаться со мной
        </a>
      </div>
      <img
        src={getImageUrl('hero/heroImage.png')}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
