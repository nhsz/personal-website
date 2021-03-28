import Link from 'next/link';
import { FC } from 'react';

const Nav: FC = () => {
  return (
    <nav className='xs:mr-7 xs2:mr-8 mr-2.5 text-sm md:mr-1'>
      <ul>
        <li className='nav-item xs:mr-4 xs2:mr-5 mr-2 md:mr-12 dark:text-gray-400'>
          <Link href='/'>home</Link>
        </li>
        <li className='nav-item xs:mr-4 xs2:mr-5 mr-2 md:mr-12 dark:text-gray-400'>
          <Link href='/projects'>projects</Link>
        </li>
        <li className='nav-item xs:mr-4 xs2:mr-5 mr-2 md:mr-12 dark:text-gray-400'>
          <a href='https://www.linkedin.com/in/nhquiroz/' target='_blank' rel='noopener noreferrer'>
            linkedin
          </a>
        </li>
        <li className='nav-item mr-2 md:mr-12 dark:text-gray-400'>
          <a href='mailto:nh.quiroz@gmail.com' target='_blank' rel='noopener noreferrer'>
            <strong>contact</strong>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { Nav };
