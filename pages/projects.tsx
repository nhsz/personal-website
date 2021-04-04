import { motion } from 'framer-motion';
import Head from 'next/head';
import { FC, KeyboardEvent, useEffect, useState } from 'react';
import { Project } from '../components';
import { projects as projectsData } from '../data';
import { getRandomTone } from '../utils';

const tilesExtraStyle = [
  'sm:w-56 md:w-64',
  'sm:w-80 md:w-96',
  'sm:w-48',
  'sm:w-72',
  'sm:w-56',
  'sm:w-80',
  'sm:w-52',
  'sm:w-56',
  'sm:w-48',
  'sm:w-48'
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const Projects: FC = () => {
  const [pianoMode, setPianoMode] = useState(false);

  const handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key === 'm') setPianoMode(true);
    if (event.key === 's') setPianoMode(false);
  };

  useEffect(() => {
    // attach listener on component mount
    document.addEventListener('keydown', (handleKeyPress as unknown) as EventListener);
    // detach listener on component unmount
    return () => {
      document.removeEventListener('keydown', (handleKeyPress as unknown) as EventListener);
    };
  }, []);

  return (
    <div className='page-container'>
      <Head>
        <title>Nicolás Quiroz | Projects</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='max-w-4xl mt-16 dark:text-gray-300 text-gray-800'>
        <div className='flex justify-between'>
          <h1 className='page-title'>Projects</h1>

          {/* <div className='hidden md:block'>
            <span className='text-sm mt-6 mr-8'>
              {pianoMode
                ? `Hover over the tiles 🎶. Press 's' to stop it.`
                : `Press 'm' for piano mode 🎹`}
            </span>
          </div> */}
        </div>

        <motion.section
          className='flex justify-center sm:justify-start flex-wrap'
          variants={container}
          initial='hidden'
          animate='visible'
        >
          {projectsData.map((props, i) => (
            <motion.article key={i} className='item' variants={item}>
              <Project
                key={props.repoUrl}
                {...props}
                css={tilesExtraStyle[i]}
                tone={getRandomTone()}
                pianoMode={pianoMode}
              />
            </motion.article>
          ))}
        </motion.section>
      </section>
    </div>
  );
};

export default Projects;
