import { quiz, surfboard, restaurant, blog, github, chatgpt } from '../img';

export default [
  {
    id: 'quiz-box',
    title: 'Quiz Box',
    image: quiz,
    badges: ['БЭМ', 'CSS', 'Flexbox', 'Анимации CSS', 'JavaScript'],
    link: 'https://dianan7.github.io/quiz_box/',
  },

  {
    id: 'chat-gpt',
    title: 'Chat GPT',
    image: chatgpt,
    badges: ['БЭМ', 'CSS', 'React', 'Адаптивная верстка'],
    link: 'https://dianan7.github.io/GPT_project/',
  },
  {
    id: 'restaraunt',
    title: 'Restaurant',
    image: restaurant,
    badges: ['БЭМ', 'CSS', 'React', 'Адаптивная верстка'],
    link: 'https://dianan7.github.io/restaurant/',
  },
  {
    id: 'surfboard',
    title: 'Surfboard',
    image: surfboard,
    badges: ['БЭМ', 'SCSS', 'JavaScript', 'Ajax', 'JQuery', 'Gulp'],
    demo: 'https://www.example.com',
    link: 'https://dianan7.github.io/Surfboard/src/',
  },
  {
    id: 'react-blog',
    title: 'React Blog',
    image: blog,
    badges: ['React', 'Redux Toolkit2', 'Axios', 'Node', 'Express', 'MongoDB'],
    link: 'https://blog-frontend-flame-rho.vercel.app/',
  },

  {
    id: 'github-search',
    title: 'Github Search',
    image: github,
    badges: [
      'JavaScript',
      'React',
      'TypeScript',
      'Redux Toolkit2',
      'RTK Query',
    ],
    link: 'https://git-search-chi.vercel.app',
  },
];
