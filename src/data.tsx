import { ProjectType } from "./components/projects/Projects";

type DataType = [ProfileType, Array<ProjectType>];
type ProfileType = [string, string, string, string];

const data: DataType = [
  [
    "Husan Eshonqulov",
    "https://www.linkedin.com/in/husan-eshonqulov/",
    "https://github.com/Husan-Eshonqulov",
    "https://t.me/Husan_Eshonqulov_00",
  ],
  [
    {
      name: "Rock Paper Scissors game",
      deployPath: "https://rock-paper-scissors-game-00.netlify.app/",
      sourcePath: "https://github.com/Husan-Eshonqulov/rock-paper-scissors",
    },
    {
      name: "Stopwatch",
      deployPath: "https://stopwatch-00.netlify.app",
      sourcePath: "https://github.com/Husan-Eshonqulov/stopwatch/",
    },
    {
      name: "Calculator",
      deployPath: "https://calculator-00.netlify.app/",
      sourcePath: "https://github.com/Husan-Eshonqulov/calculator",
    },
    {
      name: "Find the Numbers game",
      deployPath: "https://find-the-numbers-00.netlify.app/",
      sourcePath: "https://github.com/Husan-Eshonqulov/find-the-numbers",
    },
    {
      name: "Number to Text",
      deployPath: "https://number-to-text-00.netlify.app/",
      sourcePath: "https://github.com/Husan-Eshonqulov/number-to-text",
    },
    {
      name: "Weather Info",
      deployPath: "https://weather-map-00.netlify.app",
      sourcePath: "https://github.com/Husan-Eshonqulov/weather-map",
    },
    {
      name: "World Wide Holidays",
      deployPath: "https://worldwide-holidays-00.netlify.app/",
      sourcePath: "https://github.com/Husan-Eshonqulov/Worldwide-Holidays",
    },
    {
      name: "My Projects",
      deployPath: "https://my-projects-00.netlify.app/",
      sourcePath: "https://github.com/Husan-Eshonqulov/my-projects",
    },
    {
      name: "Programmers Day",
      deployPath: "https://programmers-day-00.netlify.app",
      sourcePath: "https://github.com/Husan-Eshonqulov/programmers-day",
    },
    {
      name: "Light Switch",
      deployPath: "https://light-switch-00.netlify.app/",
      sourcePath: "https://github.com/Husan-Eshonqulov/light-switch",
    },
    {
      name: "ToDo app",
      deployPath: "https://to-do-list-00.netlify.app",
      sourcePath:
        "https://github.com/Husan-Eshonqulov/to-do-list-1-last-version",
    },
  ],
];

export default data;
