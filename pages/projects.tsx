import Head from 'next/head';
import { FC } from 'react';

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
          <a href='https://github.com/nhsz/trello-clone' target='_blank' rel='noopener noreferrer'>
            <div className='project md:w-72 mb-4 md:mr-4'>
              <div>
                <h3 className='project-title'>trello-clone</h3>

                <p className='text-gray-100'>
                  An attempt to mimic the UI and main features of Trello.
                </p>
              </div>

              <p className='text-gray-100 text-xs'>React, TypeScript & styled-components</p>
            </div>
          </a>

          <a href='https://github.com/nhsz/airbnb-clone' target='_blank' rel='noopener noreferrer'>
            <div className='project md:w-96 h-52 md:h-44 mb-4 md:mr-4'>
              <div>
                <h3 className='project-title'>airbnb-clone [WIP]</h3>

                <p className='text-gray-100'>
                  Full Stack Project that recreates some of the main features of AirBnB. Not
                  finished yet.
                </p>
              </div>

              <p className='text-gray-100 text-xs'>
                React, TypeScript, Chakra UI, GraphQL (client and API), Node, Express, MongoDB,
                Google&#39;s Geocoding API and Stripe.
              </p>
            </div>
          </a>

          <a
            href='https://github.com/undefinedschool/mentorship'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='project md:w-56 mb-4 md:mr-4'>
              <div>
                <h3 className='project-title'>mentorship</h3>

                <p className='text-gray-100'>
                  Website for the Full Stack JavaScript mentorship program.
                </p>
              </div>

              <p className='text-gray-100 text-xs'>HTML5 & TailwindCSS</p>
            </div>
          </a>

          <a
            href='https://github.com/FreeCodeCampBA/conf2020'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='project mb-4 md:mr-4'>
              <div>
                <h3 className='project-title'>freeCodeCampBA Conf 2020</h3>

                <p className='text-gray-100'>Website for the freeCodeCampBA Conf 2020.</p>
              </div>

              <p className='text-gray-100 text-xs'>HTML5 & TailwindCSS</p>
            </div>
          </a>

          <a
            href='https://github.com/undefinedschool/payments-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='project md:w-56 mb-4 md:mr-4'>
              <div>
                <h3 className='project-title'>payments-app</h3>

                <p className='text-gray-100'>Payments client app for the Full Stack course.</p>
              </div>

              <p className='text-gray-100 text-xs'>Svelte & TailwindCSS</p>
            </div>
          </a>

          <a
            href='https://github.com/undefinedschool/payments-service'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='project md:w-96 mb-4 md:mr-4'>
              <div>
                <h3 className='project-title'>payments-service</h3>

                <p className='text-gray-100'>
                  Microservice that generates the proper payment data for MercadoPago checkout, used
                  on the Payments client app.
                </p>
              </div>

              <p className='text-gray-100 text-xs'>Node, Express & MercadoPago&#39;s API</p>
            </div>
          </a>

          <a
            href='https://github.com/undefinedschool/mail-service'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='project md:w-56 mb-4 md:mr-4'>
              <div>
                <h3 className='project-title'>mail-service</h3>

                <p className='text-gray-100'>Microservice that notifies a new payment via email.</p>
              </div>

              <p className='text-gray-100 text-xs'>Node, Express & SendGrid&#39;s API</p>
            </div>
          </a>

          <a
            href='https://github.com/undefinedschool/mail-service'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='project md:w-56 md:mr-4'>
              <div>
                <h3 className='project-title'>personal-website</h3>

                <p className='text-gray-100'>The site you&#39;re visiting right now.</p>
              </div>

              <p className='text-gray-100 text-xs'>NextJS, TypeScript & TailwindCSS</p>
            </div>
          </a>
        </section>
      </section>
    </div>
  );
};

export default Projects;
