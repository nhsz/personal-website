import { FC } from 'react';

const MiniBio: FC = () => {
  return (
    <section className='transition duration-100'>
      <p className='text-lg md:text-xl mb-6 font-light'>
        Hi! I&#39;m a <strong className='font-medium'>Full Stack Software Engineer</strong> based in
        Buenos Aires 🇦🇷, <strong className='font-medium'>mentor</strong> and{' '}
        <strong className='font-medium'>community builder</strong>, specializing in building apps
        with <strong className='font-medium keyword-js dark:text-gray-200'>JavaScript</strong>,{' '}
        <strong className='font-medium keyword-ts dark:text-gray-200'>TypeScript</strong>,{' '}
        <strong className='font-medium keyword-react dark:text-gray-200'>React</strong> &{' '}
        <strong className='font-medium keyword-node dark:text-gray-200'>Node</strong>.
      </p>

      <p className='text-lg md:text-xl mb-16 font-light'>
        I always try to share what I learn and help those who are starting their way in programming
        and web development.
      </p>
    </section>
  );
};

export { MiniBio };
