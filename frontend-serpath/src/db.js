import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiExpress,
  SiDjango,
  SiPython,
  SiHtml5,
  SiCss3,
  SiSass,
  SiDocker,
  SiGit,
  SiMongodb,
} from "react-icons/si";

export const projectDb = [
  {
    id: 1,
    project: "Serpath",
    details:
      "This is my own website(this site). It's been great fun to makehopefully you'll spend a bit of time clicking about it!",
    url: "",
    image: require("./site-images/serpath.png"),
    tech: [
      <FaReact />,
      <SiJavascript />,
      <SiHtml5 />,
      <SiSass />,
      <SiDocker />,
      <SiGit />,
    ],
    challenges: "The main challenge with this site was the",
  },
  {
    id: 2,
    project: "MisPartituras",
    details:
      "This is my own website(this site). It's been great fun to makehopefully you'll spend a bit of time clicking about it! ",
    url: "https://serpath.com",
    image: require("./site-images/serpath.png"),
  },
  {
    id: 3,
    project: "Serpath",
    details:
      "This is my own website(this site). It's been great fun to makehopefully you'll spend a bit of time clicking about it! ",
    url: "https://serpath.com",
    image: require("./site-images/serpath.png"),
  },
];

export const skillDb = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "NodeJs",
    icon: <FaNodeJs />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Express",
    icon: <SiExpress />,
  },
  {
    name: "Django",
    icon: <SiDjango />,
  },
  {
    name: "Python",
    icon: <SiPython />,
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
  },
  {
    name: "SASS",
    icon: <SiSass />,
  },
  {
    name: "Docker",
    icon: <SiDocker />,
  },
  {
    name: "Git",
    icon: <SiGit />,
  },
];
