import Head from 'next/head';

const Projects = () => {
  return (
    <div className='page-container'>
      <Head>
        <title>Nicolás Quiroz | Projects</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='max-w-4xl md:mt-12 text-gray-800'>
        <h1 className='text-4xl md:text-5xl mb-10 font-semibold'>Projects</h1>

        <section className='flex justify-center md:justify-start flex-wrap'>
          <a href='https://github.com/nhsz/trello-clone' target='_blank' rel='noopener noreferrer'>
            <div className='project md:w-72 mb-4 md:mr-4'>
              <div>
                <h3 className='text-xl text-white font-bold mb-2'>trello-clone</h3>

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
                <h3 className='text-xl text-white font-bold mb-2'>airbnb-clone [WIP]</h3>

                <p className='text-gray-100'>
                  Full Stack Project that recreates some of the main features of AirBnB.
                </p>
              </div>

              <p className='text-gray-100 text-xs'>
                React, TypeScript, Chakra UI, GraphQL (client and API), Node, Express, MongoDB,
                Google's Geocoding API and Stripe.
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
                <h3 className='text-xl text-white font-bold mb-2'>mentorship</h3>

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
                <h3 className='text-xl text-white font-bold mb-2'>freeCodeCampBA Conf 2020</h3>

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
                <h3 className='text-xl text-white font-bold mb-2'>payments-app</h3>

                <p className='text-gray-100'>Payments client app for the coding bootcamp.</p>
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
                <h3 className='text-xl text-white font-bold mb-2'>payments-service</h3>

                <p className='text-gray-100'>
                  Microservice that generates the proper payment data for MercadoPago checkout, used
                  on the Payments app.
                </p>
              </div>

              <p className='text-gray-100 text-xs'>Node, Express & MercadoPago's API</p>
            </div>
          </a>

          <a
            href='https://github.com/undefinedschool/mail-service'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='project md:w-56 md:mr-4'>
              <div>
                <h3 className='text-xl text-white font-bold mb-2'>mail-service</h3>

                <p className='text-gray-100'>Microservice that notifies a new payment via email.</p>
              </div>

              <p className='text-gray-100 text-xs'>Node, Express & SendGrid's API</p>
            </div>
          </a>
        </section>
      </section>
    </div>
  );
};

export default Projects;
