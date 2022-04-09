import { motion } from 'framer-motion';
import Head from 'next/head';
import { FC } from 'react';
import { Project } from '../components';
import { projects as projectsData } from '../data';

const tilesExtraStyle = [
  'sm:w-96', // esp
  'sm:w-96', // e-commerce
  'sm:w-80', // trello
  'sm:w-80' // personal-website
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
  return (
    <div className='page-container'>
      <Head>
        <title>Nicolás Quiroz | Projects</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='max-w-4xl mt-16 dark:text-gray-300 text-gray-800'>
        <div className='flex justify-between'>
          <h1 className='page-title'>Projects</h1>
        </div>

        <motion.section
          className='flex justify-center sm:justify-start flex-wrap'
          variants={container}
          initial='hidden'
          animate='visible'
        >
          {projectsData.map((props, i) => (
            <motion.article key={i} className='item' variants={item}>
              <Project key={props.repoUrl} {...props} css={tilesExtraStyle[i]} />
            </motion.article>
          ))}
        </motion.section>
      </section>
    </div>
  );
};

export default Projects;
