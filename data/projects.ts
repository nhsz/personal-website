import { ProjectData } from '../types';

export const projects: ProjectData[] = [
  {
    repoUrl: 'https://github.com/nhsz/trello-clone',
    title: 'trello-clone',
    description: 'An attempt to mimic the UI and main features of Trello.',
    stack: 'React, TypeScript & styled-components'
  },
  {
    repoUrl: 'https://github.com/nhsz/airbnb-clone',
    title: 'airbnb-clone [WIP]',
    description: 'App that recreates some of the main features of AirBnB. Not finished yet.',
    stack:
      "React, TypeScript, ChakraUI, GraphQL, Node, Express, MongoDB, Google's Geocoding API & Stripe."
  },
  {
    repoUrl: 'https://github.com/undefinedschool/mentorship',
    title: 'mentorship',
    description: 'Website for the Full Stack JavaScript mentorship program.',
    stack: 'HTML5 & TailwindCSS'
  },
  {
    repoUrl: 'https://github.com/FreeCodeCampBA/conf2020',
    title: 'freeCodeCampBA Conf 2020',
    description: 'Website for the freeCodeCampBA Conf 2020 schedule.',
    stack: 'HTML5 & TailwindCSS'
  },
  {
    repoUrl: 'https://github.com/undefinedschool/payments-app',
    title: 'payments-app',
    description: 'Payments client app for the Full Stack JavaScript course.',
    stack: 'Svelte & TailwindCSS'
  },
  {
    repoUrl: 'https://github.com/undefinedschool/payments-service',
    title: 'payments-service',
    description:
      'Microservice that generates the proper payment data for MercadoPago checkout, used on the Payments client app.',
    stack: "Node, Express & MercadoPago's API"
  },
  {
    repoUrl: 'https://github.com/undefinedschool/mail-service',
    title: 'mail-service',
    description: 'Microservice that notifies a new payment via email.',
    stack: "Node, Express & SendGrid's API"
  },
  {
    repoUrl: 'https://github.com/nhsz/personal-website',
    title: 'personal-website',
    description: "My personal website, which you're visiting right now.",
    stack: 'NextJS, TypeScript & TailwindCSS'
  },
  {
    repoUrl: 'https://www.npmjs.com/package/list-range',
    title: 'list-range',
    description: 'ES6 implementation of Python built-in `range()` function.',
    stack: 'JavaScript'
  }
];
