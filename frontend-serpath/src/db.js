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
    id: 3,
    project: "ClimbingNI",
    details:
      "Who doesn't love a good climbing app! I put this together for the climbing comunity of Northern Ireland as the climbing over here is world renound. ",
    image: require("./site-images/climbingni.png"),
    tech: [
      <FaReact />,
      <FaNodeJs />,
      <SiMongodb />,
      <SiExpress />,
      <SiHtml5 />,
      <SiSass />,
      <SiDocker />,
      <SiGit />,
    ],
    challenges: [
      "Storage of sufficiently hi-res images at an efficient file size.",
      "Gathering enough data to render the app useful.",
    ],
    github: "https://github.com/mikebarr24/climbing",
  },
  {
    id: 1,
    project: "MisPartituras",
    details:
      "A Django porject for music teachers to assign music to their students. ",
    image: require("./site-images/mispartituras.png"),
    tech: [
      <SiDjango />,
      <SiPython />,
      <SiJavascript />,
      <SiHtml5 />,
      <SiSass />,
      <SiDocker />,
      <SiGit />,
    ],
  },
  {
    id: 2,
    project: "Serpath",
    details:
      "This is my own website (this site). It's been great fun to make so hopefully you'll spend a bit of time clicking about it! I've done everything on this site from design to deployment and I hope it will be a springboard to display and share many more projects with you so watch this space! :) ",
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
    challenges: [
      "Displaying projects clearly in a way that is intuitive for the visitor to see.",
    ],
    github: "https://github.com/mikebarr24/serpath",
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
