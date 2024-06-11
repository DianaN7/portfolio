import React from 'react';
import portfolioData from '../../data/project';
import styles from './Project.module.css';

function Portfolio() {
  const projectElements = portfolioData.map((project) => (
    <div
      id="projects"
      key={project.id}
      className="w-full max-w-[280px] flex flex-col justify-end bg-slate-200 dark:bg-stone-900 border-2 outline-dashed outline-3 outline-gray-700 dark:border-white rounded-md"
    >
      <a href={project.link} className="relative overflow-hidden">
        <figure
          className={`w-full h-[180px] m-0 relative rounded-t-[3px] overflow-hidden shadow-main
				${project.id === 'youtube-clone' ? 'decrease-top' : ''}`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="relative top-0 object-contain transition-all duration-[2s] ease-out"
          />
          <figcaption className="absolute opacity-0 w-full h-0 bottom-0 text-[0px] text-center text-white bg-[rgba(0,0,0,0.7)]">
            {project.title}
          </figcaption>
        </figure>
      </a>
      <div className=" py-2 px-3">
        <h3 className="font-inter font-semibold text-lg text-stone-900 dark:text-white border-b-2 border-cyan-800 dark:border-white pl-0.5 mb-3 pb-1">
          {project.title}
        </h3>
        <div className="flex flex-row flex-wrap items-center text-sm gap-2 pb-3">
          {project.badges.map((badge, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-inter font-medium text-stone-900 dark:text-white border-2 border-cyan-800 hover:border-zinc-600 rounded-md cursor-pointer duration-200 ease-out hover:bg-zinc-600  hover:text-white "
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  ));

  return (
    <section className=" flex flex-col justify-center items-center pt-16 sm:pt-24 pb-10">
      <h2 className="font-inter font-bold text-2xl dark:text-white mb-6">
        Проекты
      </h2>
      <div className="z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 col items-start gap-4">
        {projectElements}
      </div>
      <a
        target="_blank"
        href="https://github.com/DianaN7?tab=repositories"
        className="bg-slate-200 hover:bg-zinc-600  text-black  outline-dashed outline-3 outline-gray-700 hover:text-white border-2 rounded-md  font-inter font-medium text-lg text-center duration-200 ease-out py-1 px-4 mt-6"
      >
        Посмотреть все
      </a>
      <div className={styles.bottomBlur} />
    </section>
  );
}
export default Portfolio;
