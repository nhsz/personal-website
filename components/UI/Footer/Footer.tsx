import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer>
      <p className='mt-24 text-xs sm:text-sm text-left'>
        {' '}
        Built with <span className='keyword-next-sm font-semibold'>NextJS</span>,{' '}
        <span className='keyword-ts-sm font-semibold'>TypeScript</span> &{' '}
        <span className='keyword-tailwind-sm font-semibold'>TailwindCSS</span> (
        <a
          className='nav-item'
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
