import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className='transition duration-75 absolute bottom-8 lg:bottom-6'>
      <p
        className='text-xs sm:text-sm text-left dark:text-gray-300'
        style={{
          textShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)'
        }}
      >
        {' '}
        Built with <span className='keyword-next-sm dark:text-gray-200 font-semibold'>
          NextJS
        </span>, <span className='keyword-ts-sm dark:text-gray-200 font-semibold'>TypeScript</span>{' '}
        & <span className='keyword-tailwind-sm dark:text-gray-200 font-semibold'>TailwindCSS</span>{' '}
        (
        <a
          className='nav-item dark:text-gray-400 dark:hover:text-gray-200'
          href='https://github.com/nhsz/personal-website'
          target='_blank'
          rel='noopener noreferrer'
        >
          <code>src</code>
        </a>
        )
      </p>
    </footer>
  );
};

export { Footer };
