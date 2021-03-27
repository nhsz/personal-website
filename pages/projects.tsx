import Head from 'next/head';
import { FC } from 'react';
import { Project } from '../components';
import { projectsList as projects } from '../utils';

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
          {projects.map(props => (
            <Project key={props.repoUrl} {...props} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default Projects;
