import { FC } from 'react';

const MentorshipBanner: FC = () => {
  return (
    <section className='transition duration-100 shadow-sm opacity-80'>
      <p className='dark:bg-gray-800 bg-gray-200 p-4 rounded-md'>
        <span role='img' aria-label='sparks-emoji'>
          ✨
        </span>{' '}
        If you speak spanish, are learning web development on your own and wanna some help or
        guidance, check my current{' '}
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
  );
};

export { MentorshipBanner };
