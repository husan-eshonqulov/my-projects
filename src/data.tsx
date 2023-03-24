import { ProjectsType } from './components/projects/Projects';

type DataType = [ProfileType, Array<ProjectsType>];
type ProfileType = [string, string, string, string];

const data: DataType = [
  [
    'Husan Eshonqulov',
    'https://linkedin.com/in/husan-eshonqulov',
    'https://github.com/husan-eshonqulov',
    'https://t.me/husan_eshonqulov',
  ],
  [
    {
      projectsTitle: 'Web Projects',
      projectsInfo: [
        {
          name: 'Story Books',
          deployPath: 'https://story-books-x3k8.onrender.com',
          sourcePath: 'https://github.com/husan-eshonqulov/story-books',
        },
        {
          name: 'Jobs API',
          deployPath: 'https://jobs-api.netlify.app',
          sourcePath: 'https://github.com/husan-eshonqulov/jobs-api',
        },
        {
          name: 'Chat App',
          deployPath: 'https://chat-app-wavq.onrender.com',
          sourcePath: 'https://github.com/husan-eshonqulov/chat-app',
        },
        {
          name: 'Rock Paper Scissors game',
          deployPath: 'https://rock-paper-scissors-00.netlify.app',
          sourcePath: 'https://github.com/Husan-Eshonqulov/rock-paper-scissors',
        },
        {
          name: 'Stopwatch',
          deployPath: 'https://stopwatch-00.netlify.app',
          sourcePath: 'https://github.com/Husan-Eshonqulov/stopwatch',
        },
        {
          name: 'Calculator',
          deployPath: 'https://calculator-00.netlify.app',
          sourcePath: 'https://github.com/Husan-Eshonqulov/calculator',
        },
        {
          name: 'Tic Tac Toe game',
          deployPath: 'https://tic-tac-toe-game-00.netlify.app',
          sourcePath: 'https://github.com/Husan-Eshonqulov/tic-tac-toe',
        },
        {
          name: 'Find the Numbers game',
          deployPath: 'https://find-the-numbers-00.netlify.app',
          sourcePath: 'https://github.com/Husan-Eshonqulov/find-the-numbers',
        },
        {
          name: 'Slide Number Puzzle',
          deployPath: 'https://slide-number-puzzle-00.netlify.app',
          sourcePath: 'https://github.com/Husan-Eshonqulov/slide-number-puzzle',
        },
        {
          name: 'Number to Text',
          deployPath: 'https://number-to-text-00.netlify.app',
          sourcePath: 'https://github.com/Husan-Eshonqulov/number-to-text',
        },
        {
          name: 'Weather Info',
          deployPath: 'https://weather-map-00.netlify.app',
          sourcePath: 'https://github.com/Husan-Eshonqulov/weather-map',
        },
        {
          name: 'World Wide Holidays',
          deployPath: 'https://worldwide-holidays-00.netlify.app',
          sourcePath: 'https://github.com/Husan-Eshonqulov/Worldwide-Holidays',
        },
        {
          name: 'My Projects',
          deployPath: 'https://my-projects-00.netlify.app',
          sourcePath: 'https://github.com/Husan-Eshonqulov/my-projects',
        },
        {
          name: 'Programmers Day',
          deployPath: 'https://programmers-day-00.netlify.app',
          sourcePath: 'https://github.com/Husan-Eshonqulov/programmers-day',
        },
        {
          name: 'Light Switch',
          deployPath: 'https://light-switch-00.netlify.app',
          sourcePath: 'https://github.com/Husan-Eshonqulov/light-switch',
        },
        {
          name: 'ToDo app',
          deployPath: 'https://todo-00.netlify.app',
          sourcePath: 'https://github.com/husan-eshonqulov/todo-list',
        },
      ],
    },
    {
      projectsTitle: 'Scratch Projects',
      projectsInfo: [
        {
          name: 'Tank Battle',
          deployPath: 'https://scratch.mit.edu/projects/599539683/fullscreen',
          sourcePath: 'https://scratch.mit.edu/projects/599539683/editor',
        },
        {
          name: 'Chrome Dino',
          deployPath: 'https://scratch.mit.edu/projects/764332091/fullscreen',
          sourcePath: 'https://scratch.mit.edu/projects/764332091/editor',
        },
      ],
    },
  ],
];

export default data;
