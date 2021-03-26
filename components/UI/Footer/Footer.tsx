import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer>
      <p className='mt-24 text-xs sm:text-sm text-left dark:text-gray-300'>
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
