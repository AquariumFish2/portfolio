import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Project from "./project-class";

export const socials = [
  {
    icon: FaEnvelope,
    url: "mailto: mohamed.mabrouk5560@gmail.com",
  },
  {
    icon: FaGithub,
    url: "https://github.com/AquariumFish2",
  },
  {
    icon: FaLinkedin,
    url: "https://linkedin.com/in/mohamed-mabrouk10/",
  },
  {
    icon: FaTwitter,
    url: "https://x.com/dev_in_the_void",
  },
];

export const certs = [
  require("../assets/certificates/Responsive Web Design.jpg"),
  require("../assets/certificates/JavaScript Algorithms and Data Structures.jpg"),
  require("../assets/certificates/Programming with JavaScript.jpg"),
  require("../assets/certificates/React Basics.jpg"),
  require("../assets/certificates/Advanced React.jpg"),
  // require("../assets/certificates/bagasgsag.jpg"),
];

export const projects = [
  new Project({
    title: "Coffee House",
    description:
      "A website to order your coffee the way you like it also acts as Advertisment for a coffee shop, It has two pages the main screen and cart screen connected together with context state managment, when you order the coffee you can adjust how dark you want your coffee and with milk or without and how many sugar spoons",
    technologies: ["JSX", "React.js", "Chakra UI", "Framer Motion"],
    image: require("../assets/projects/coffee.png"),
    url: "https://aquariumfish2.github.io/coffee-shop/",
  }),
  new Project({
    title: "Furni",
    description:
      "A Static website template to sell furnature and advertise for a furnature company includes many custom made pages.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: require("../assets/projects/furni.png"),
    url: "https://aquariumfish2.github.io/Furni-Template/",
  }),
  new Project({
    title: "Portfolio",
    description:
      "A custom made portfolio built from scratch includes many visuals and animations with decent color scheme.",
    technologies: ["JSX", "React.js", "Chakra UI", "Framer Motion"],
    image: require("../assets/projects/portfolio.png"),
    url: "https://aquariumfish2.github.io/portfolio/",
  }),
];
