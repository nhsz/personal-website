import Head from 'next/head';
import { FC } from 'react';
import { Project } from '../components';

const Projects: FC = () => {
  return (
    <div className='page-container pb-7'>
      <Head>
        <title>Nicolás Quiroz | Projects</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='max-w-4xl mt-6 md:mt-4 dark:text-gray-300 text-gray-800'>
        <h1 className='page-title'>Projects</h1>

        <section className='flex justify-center md:justify-start flex-wrap'>
          <Project
            repoUrl='https://github.com/nhsz/trello-clone'
            css='md:w-72 mb-4 md:mr-4'
            title='trello-clone'
            description='An attempt to mimic the UI and main features of Trello.'
            stack='React, TypeScript & styled-components'
          />

          <Project
            repoUrl='https://github.com/nhsz/airbnb-clone'
            css='md:w-96 h-52 md:h-44 mb-4 md:mr-4'
            title='airbnb-clone [WIP]'
            description='Full Stack Project that recreates some of the main features of AirBnB. Not
            finished yet.'
            stack='React, TypeScript, Chakra UI, GraphQL (client and API), Node, Express, MongoDB,
            Google&#39;s Geocoding API and Stripe.'
          />

          <Project
            repoUrl='https://github.com/undefinedschool/mentorship'
            css='md:w-56 mb-4 md:mr-4'
            title='mentorship'
            description='Website for the Full Stack JavaScript mentorship program.'
            stack='HTML5 & TailwindCSS'
          />

          <Project
            repoUrl='https://github.com/FreeCodeCampBA/conf2020'
            css='mb-4 md:mr-4'
            title='freeCodeCampBA Conf 2020'
            description='Website for the freeCodeCampBA Conf 2020.'
            stack='HTML5 & TailwindCSS'
          />

          <Project
            repoUrl='https://github.com/undefinedschool/payments-app'
            css='md:w-56 mb-4 md:mr-4'
            title='payments-app'
            description='Payments client app for the Full Stack course.'
            stack='Svelte & TailwindCSS'
          />

          <Project
            repoUrl='https://github.com/undefinedschool/payments-service'
            css='md:w-96 mb-4 md:mr-4'
            title='payments-service'
            description='Microservice that generates the proper payment data for MercadoPago checkout, used
            on the Payments client app.'
            stack='Node, Express & MercadoPago&#39;s API'
          />

          <Project
            repoUrl='https://github.com/undefinedschool/mail-service'
            css='md:w-56 mb-4 md:mr-4'
            title='mail-service'
            description='Microservice that notifies a new payment via email.'
            stack='Node, Express & SendGrid&#39;s API'
          />

          <Project
            repoUrl='https://github.com/nhsz/personal-website'
            css='md:w-56 md:mr-4'
            title='personal-website'
            description='The site you&#39;re visiting right now.'
            stack='NextJS, TypeScript & TailwindCSS'
          />
        </section>
      </section>
    </div>
  );
};

export default Projects;
