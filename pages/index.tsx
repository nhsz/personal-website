import Head from 'next/head';
import { FC } from 'react';
import { Footer } from '../components';

const Home: FC = () => {
  return (
    <div className='page-container'>
      <Head>
        <title>Nicolás Quiroz | Software Engineer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='max-w-4xl mt-6 md:mt-4 dark:text-gray-300 text-gray-800'>
        <h1 className='page-title'>Nicolás Quiroz</h1>

        <section>
          <p className='text-lg md:text-xl mb-6 font-light'>
            Hi! I&#39;m a <strong className='font-medium'>Full Stack Software Engineer</strong>{' '}
            based in Buenos Aires 🇦🇷, <strong className='font-medium'>mentor</strong> and{' '}
            <strong className='font-medium'>community builder</strong>, specializing in building
            apps with{' '}
            <strong className='font-medium keyword-js dark:text-gray-200'>JavaScript</strong>,{' '}
            <strong className='font-medium keyword-ts dark:text-gray-200'>TypeScript</strong>,{' '}
            <strong className='font-medium keyword-react dark:text-gray-200'>React</strong> &{' '}
            <strong className='font-medium keyword-node dark:text-gray-200'>Node</strong>.
          </p>

          <p className='text-lg md:text-xl mb-16 font-light'>
            I always try to share what I learn and help those who are starting their way in
            programming and web development.
          </p>

          <section>
            <section className='mb-10'>
              <p className='mb-4'>
                Also, I&#39;m a{' '}
                <a
                  className='text-blue-600 hover:underline'
                  href='https://freecodecampba.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  freeCodeCamp
                </a>{' '}
                local chapter co-founder.
              </p>

              <section className='max-w-4xl'>
                <p className='mb-4'>
                  <span role='img' aria-label='writing-emoji'>
                    📝
                  </span>{' '}
                  I write{' '}
                  <a
                    className='text-blue-600 hover:underline'
                    href='https://github.com/undefinedschool/notes'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    notes
                  </a>{' '}
                  (in spanish) about Full Stack JavaScript related concepts.
                </p>

                <p>
                  <span role='img' aria-label='coffee-emoji'>
                    ☕
                  </span>{' '}
                  Some things I love: coffee, chocolate 🍫, pizza 🍕, ice-cream 🍨, hard-rock/metal
                  music (and playing the guitar 🎸), Daredevil, The Witcher, thrillers, horror
                  movies/series, etc.
                </p>
              </section>
            </section>

            <section>
              <p className='dark:bg-gray-800 bg-gray-200 p-4 rounded-md'>
                <span role='img' aria-label='sparks-emoji'>
                  ✨
                </span>{' '}
                If you speak spanish, are learning web development on your own and wanna some help
                or guidance, check my current{' '}
                <a
                  className='text-blue-600 hover:underline'
                  href='https://mentorship.undefinedschool.io/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  mentorship program
                </a>
                , where you can <em>pay what you want</em>.
              </p>
            </section>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
