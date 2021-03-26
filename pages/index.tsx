import Head from 'next/head';

const Home = () => {
  return (
    <div className='page-container'>
      <Head>
        <title>Nicolás Quiroz | Software Engineer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='max-w-4xl mt-6 md:mt-12 text-gray-800'>
        <h1 className='text-4xl md:text-5xl mb-10'>
          <span className='font-semibold'>Nicolás Quiroz</span>
        </h1>

        <section>
          <p className='text-lg md:text-xl mb-6'>
            Hi! I'm a <strong>Full Stack Software Engineer</strong> based in Buenos Aires 🇦🇷,{' '}
            <strong>mentor</strong> and <strong>community builder</strong>, specializing in building
            apps with <strong className='keyword-js'>JavaScript</strong>,{' '}
            <strong className='keyword-ts'>TypeScript</strong>,{' '}
            <strong className='keyword-react'>React</strong> &{' '}
            <strong className='keyword-node'>Node</strong>.
          </p>

          <p className='text-lg md:text-xl mb-32 md:mb-16 font-light'>
            I always try to share what I learn and help those who are starting their way in
            programming and web development.
          </p>

          <section>
            <section className='mb-10'>
              <p className='mb-4'>
                Also, I'm a{' '}
                <a
                  className='text-blue-600 hover:underline'
                  href='https://freecodecampba.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  freeCodeCamp
                </a>{' '}
                local chapter co-founder/co-organizer.
              </p>

              <ul className='max-w-xl'>
                <li>
                  📝 I write{' '}
                  <a
                    className='text-blue-600 hover:underline'
                    href='https://github.com/undefinedschool/notes'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    notes
                  </a>{' '}
                  (in spanish) about JavaScript related concepts
                </li>
                <li>
                  ☕️ I love coffee: We always need more coffee. If you find useful some of the
                  content I publish,{' '}
                  <a
                    className='text-blue-600 hover:underline'
                    href='https://cafecito.app/nhsz'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    help me to buy more!
                  </a>{' '}
                  🎉
                </li>
              </ul>
            </section>

            <section>
              <p className='bg-gray-200 p-4 rounded'>
                ✨ If you speak spanish, are learning web development on your own and wanna some
                help or guidance, check my current{' '}
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

      <footer>
        <p className='mt-28 mb-4 text-sm text-left'>
          {' '}
          Built with <strong className='keyword-next-sm'>NextJS</strong>,{' '}
          <strong className='keyword-ts-sm'>TypeScript</strong> &{' '}
          <strong className='keyword-tailwind-sm'>TailwindCSS</strong> (
          <a
            className='nav-item'
            href='https://github.com/nhsz/personal-website'
            target='_blank'
            rel='noopener noreferrer'
          >
            <code>src code</code>
          </a>
          ).
        </p>
      </footer>
    </div>
  );
};

export default Home;
