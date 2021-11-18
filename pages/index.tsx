import Head from 'next/head';
import { FC } from 'react';
import { MiniBio, RandomDetails } from '../components';

const Home: FC = () => {
  return (
    <div className='page-container'>
      <Head>
        <title>Nicolás Quiroz | Software Engineer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='max-w-4xl mt-16 dark:text-gray-300 text-gray-800'>
        <h1 className='page-title transition duration-100'>Nicolás Quiroz</h1>

        <section>
          <MiniBio />
          <RandomDetails />
          {/* <MentorshipBanner /> */}
        </section>
      </main>
    </div>
  );
};

export default Home;
