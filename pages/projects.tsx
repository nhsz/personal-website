import Head from 'next/head';
import { FC, KeyboardEvent, useEffect, useState } from 'react';
import { isBrowser } from 'react-device-detect';
import { Project } from '../components';
import { projects as projectsData } from '../data';
import { getRandomTone } from '../utils';

const tilesExtraStyle = [
  'md:w-72',
  'md:w-96',
  'md:w-56',
  '',
  'md:w-56',
  'md:w-96',
  'md:w-56',
  'md:w-56'
];

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
    return () =>
      document.removeEventListener('keydown', (handleKeyPress as unknown) as EventListener);
  }, []);

  return (
    <div className='page-container pb-7'>
      <Head>
        <title>Nicolás Quiroz | Projects</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='max-w-4xl mt-16 dark:text-gray-300 text-gray-800'>
        <div className='flex justify-between'>
          <h1 className='page-title'>Projects</h1>

          {isBrowser && (
            <span className='text-sm mt-6 mr-8'>
              {pianoMode
                ? `(now hover over the tiles 🎶. Press 's' to stop it.)`
                : `press 'm' for piano mode 🎹`}
            </span>
          )}
        </div>

        <section className='flex justify-center md:justify-start flex-wrap'>
          {projectsData.map((props, i) => (
            <Project
              key={props.repoUrl}
              {...props}
              css={tilesExtraStyle[i]}
              tone={getRandomTone()}
              pianoMode={pianoMode}
            />
          ))}
        </section>
      </section>
    </div>
  );
};

export default Projects;
