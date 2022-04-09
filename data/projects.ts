import { ProjectData } from '../types';

export const projects: ProjectData[] = [
  {
    repoUrl: 'https://github.com/ethereum/esp-website',
    title: 'esp-website',
    description: 'Website for the Ecosystem Support Program team (Ethereum Foundation).',
    stack:
      'NextJS, TypeScript, NodeJS, ChakraUI, react-hook-form, Framer Motion, Mailchimp & Salesforce API.'
  },
  {
    repoUrl: 'https://github.com/nhsz/nextjs-ecommerce-poc',
    title: 'nextjs-ecommerce-poc',
    description: 'PoC for digital artwork, with category filters, sorting & dynamic pagination.',
    stack: 'NextJS, TypeScript, ChakraUI, Zustand, Contentful API'
  },
  {
    repoUrl: 'https://github.com/nhsz/trello-clone',
    title: 'trello-clone',
    description: 'An attempt to mimic the UI and main features of Trello.',
    stack: 'React, TypeScript & styled-components'
  },
  {
    repoUrl: 'https://github.com/nhsz/personal-website',
    title: 'personal-website',
    description: "My personal website, which you're visiting right now.",
    stack: 'NextJS, TypeScript & TailwindCSS'
  }
];
