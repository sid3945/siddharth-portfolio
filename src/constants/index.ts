import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  docker,
  urlRateLimiter,
  jobit,
  devops,
  postgres,
  redis,
  cricketDashboard
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Architect",
    icon: backend,
  },
  {
    title: "To The Cloud",
    icon: devops,
  }
];

const technologies: TTechnology[] = [
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "redis",
    icon: redis
  }
];

const experiences: TExperience[] = [
  {
    title: "Software Engineerr",
    companyName: "Alepo",
    icon: web,
    iconBg: "#383E56",
    date: "June 2023 - October 2024",
    points: [
      "I contributed to the development of key features for mobile point-of-sale and customer care applications using the MEAN stack. My role involved seamless integration of payment gateways, optimization of API flows, and crafting exceptional user experiences.",
      "I specialized in advanced Angular concepts like BehaviorSubjects, ReplaySubjects, and trackBy for high-performance applications. Additionally, I utilized browser history states for efficient data handling and customized legacy CRM systems using JSP to meet specific business needs.",
      "Was the man-in-charge infra guy covering nginx and docker."
    ],
  },
  {
    title: "SDE 1",
    companyName: "Fynd",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Building a scalable e-commerce analytics platform grounds up.",
      "Integrating intricate ui, with ML and data analytic to deliver secure and reliable software.",
      "Contributed fullstack and used K8s for easy deployment"
    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "URL Rate Limiter Middleware",
    description:
      "A flexible and robust rate limiting middleware for Node.js applications with support for both in-memory and Redis-based storage. This rate limiter can be used in both single-server and distributed environments.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "redis",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: urlRateLimiter,
    sourceCodeLink: "https://github.com/sid3945/url-shortener",
  },
  {
    name: "Cricket Dashboard",
    description:
      "For the love of cricket and BGT, deployed at: https://indvaus-cric-center.netlify.app/",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient"
      }
    ],
    image: cricketDashboard,
    sourceCodeLink: "https://github.com/sid3945/task-management-backend",
  },
];

export { services, technologies, experiences, testimonials, projects };
