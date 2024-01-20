import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  bg,
  bglogo,
  // docker,
  // meta,
  // starbucks,
  // tesla,
  php,
  sql,
  shopify,
  theworks,
  deciml,
  decimllogo,
  sumiilogo,
  sumii,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "PHP Developer",
    icon: backend,
  },
  {
    title: "Seo Associate",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "php",
    icon: php,
  },
  {
    name: "sql",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Jr Developer",
    company_name: "Powermaster",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2021 - Jan 2022",
    points: [
      "Create Multipurpose store website to sell mechanical Tools online over the World",
      "Collaborating with cross-functional teams including Seo Team, Ads Team to rank the website and get the optimal customers to company",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Zencommerce",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - July 2022",
    points: [
      "Developing and maintaining web applications Html ,css and javscript",
      "Also use the company software to create ecommerce store",
      "Handle clients and manage the maintenance of the Websites",
    ],
  },
  {
    title: "Web Developer",
    company_name: "The Works",
    icon: theworks,
    iconBg: "#383E56",
    date: "July 2022 - July 2023",
    points: [
      "Developing and maintaining web applications using Html ,Css and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Sr Web Developer",
    company_name: "The Works",
    icon: theworks,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Developing and maintaining web applications using Html ,Css and other related technologies.",
      "Handle Multiple Web softwares and manage team",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bombay Gymkhana",
    description:
      "Web-based platform with Progressive Web App that allows users to see the Gym functions and",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Php",
        color: "green-text-gradient",
      },
      {
        name: "Restfull Apis",
        color: "pink-text-gradient",
      },
    ],
    icon:bglogo,
    image: bg,
    source_code_link: "https://bombaygymkhana.com/",
  },
  {
    name: "Deciml",
    description:
      "Redesining the entire website and create multifuntional blog page with filter,Use restfull api to send sms for phone verification for sending app links to user.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "jquery",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    icon:decimllogo,
    image: deciml,
    source_code_link: "https://deciml.in/",
  },
  {
    name: "Sumii",
    description:
      "This project involved the meticulous design and implementation of a visually appealing and user-friendly interface to provide customers with an immersive shopping experience.",
    tags: [
      {
        name: "Shopify",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "jquery",
        color: "pink-text-gradient",
      },
    ],
    icon:sumiilogo,
    image: sumii,
    source_code_link: "https://sumii.in/",
  },
];

export { services, technologies, experiences, testimonials, projects };