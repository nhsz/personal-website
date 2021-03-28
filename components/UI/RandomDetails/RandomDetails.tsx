import { FC } from 'react';

const RandomDetails: FC = () => {
  return (
    <section className='mb-10 text-gray-600 dark:text-gray-400 transition duration-100'>
      <p className='mb-4'>
        Also, I&#39;m a{' '}
        <a
          className='text-blue-600 hover:underline'
          href='https://freecodecampba.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          freeCodeCamp
        </a>{' '}
        local chapter co-founder.
      </p>

      <section className='max-w-4xl'>
        <p className='mb-4'>
          <span role='img' aria-label='writing-emoji'>
            📝
          </span>{' '}
          I write{' '}
          <a
            className='text-blue-600 hover:underline'
            href='https://github.com/undefinedschool/notes'
            target='_blank'
            rel='noopener noreferrer'
          >
            notes
          </a>{' '}
          (in spanish) about Full Stack JavaScript related concepts.
        </p>

        <p>
          <span role='img' aria-label='coffee-emoji'>
            ☕
          </span>{' '}
          Some things I love: coffee, chocolate 🍫, pizza 🍕, ice-cream 🍨, hard-rock/metal music
          (and playing the guitar 🎸), Daredevil, The Witcher, thrillers, horror movies/series, etc.
        </p>
      </section>
    </section>
  );
};

export { RandomDetails };
