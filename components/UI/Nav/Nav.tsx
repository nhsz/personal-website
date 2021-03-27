import Link from 'next/link';
import { FC } from 'react';

const Nav: FC = () => {
  return (
    <nav className='mr-8 text-sm md:mr-1'>
      <ul>
        <li className='nav-item mr-4 dark:text-gray-400'>
          <Link href='/'>home</Link>
        </li>
        <li className='nav-item mr-4 dark:text-gray-400'>
          <Link href='/projects'>projects</Link>
        </li>
        <li className='nav-item mr-4 dark:text-gray-400'>
          <a href='https://www.linkedin.com/in/nhquiroz/' target='_blank' rel='noopener noreferrer'>
            linkedin
          </a>
        </li>
        <li className='nav-item md:mr-4 dark:text-gray-400'>
          <a href='mailto:nh.quiroz@gmail.com' target='_blank' rel='noopener noreferrer'>
            <strong>contact</strong>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { Nav };
