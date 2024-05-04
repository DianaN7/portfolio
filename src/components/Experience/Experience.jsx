import React from 'react';

import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Опыт</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <ul className={styles.history}>
          <li className={styles.historyItem}>
            <div className={styles.historyItemDetails}>
              <h3>Frontend Developer, Фриланс</h3>
              <p>2023 - </p>
              <p>
                Выполняю заказы на верстку и разработку приложений, а также пишу
                свои проекты.
              </p>
              <p>Мои проекты написаны на стеке технологий:</p>
              <p>
                Frontend - JavaScript, TypeScript, фреймворк ReactJs, библиотека
                Redux Toolkit2, RTK Query, React Query, фреймворк VueJs,
                асинхронное программирование (async/await), библиотека axios:
                выполнение AJAX запросов, взаимодействие с сервером через
                классический REST API, WebSocket, система контроля версий: GIT;
              </p>
              <p>
                Backend - NodeJs, фреймворк ExpressJS, база данных MongoDB и
                MySQL.
              </p>
              <p>
                Могу задеплоить приложение на облачных серверах, таких как:
                Heroku, Render, Vercel
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      <div className={styles.lastBlur} />
    </section>
  );
};
