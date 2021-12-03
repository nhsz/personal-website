import { FC } from 'react';

const MiniBio: FC = () => {
  return (
    <section className='transition duration-100'>
      <p className='text-lg md:text-xl mb-8 font-light'>
        Hi! I&#39;m a <strong className='font-medium'>Web Developer</strong> and{' '}
        <strong className='font-medium'>mentor</strong> based in Buenos Aires 🇦🇷, specialized in
        building apps with{' '}
        <strong className='font-medium keyword-js dark:text-gray-200'>JavaScript</strong>,{' '}
        <strong className='font-medium keyword-ts dark:text-gray-200'>TypeScript</strong>,{' '}
        <strong className='font-medium keyword-react dark:text-gray-200'>React</strong> &{' '}
        <strong className='font-medium keyword-node dark:text-gray-200'>Node</strong>.
      </p>
    </section>
  );
};

export { MiniBio };
