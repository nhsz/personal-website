import Head from 'next/head';
import { FC } from 'react';
import { Project } from '../components';
import { projects as projectsData } from '../data';

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
  return (
    <div className='page-container pb-7'>
      <Head>
        <title>Nicolás Quiroz | Projects</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='max-w-4xl mt-16 dark:text-gray-300 text-gray-800'>
        <h1 className='page-title'>Projects</h1>

        <section className='flex justify-center md:justify-start flex-wrap'>
          {projectsData.map((props, i) => (
            <Project key={props.repoUrl} {...props} css={tilesExtraStyle[i]} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default Projects;
