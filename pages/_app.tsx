import { AppProps } from 'next/app';
import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        <nav className='flex ml-6 md:justify-end md:max-w-6xl my-4'>
          <ul>
            <li className='nav-item mr-4'>
              <Link href='/'>home</Link>
            </li>
            <li className='nav-item mr-4'>
              <Link href='/projects'>projects</Link>
            </li>
            <li className='nav-item mr-4'>
              <a href='https://github.com/nhsz' target='_blank' rel='noopener noreferrer'>
                gh
              </a>
            </li>
            <li className='nav-item mr-4'>
              <a
                href='https://www.linkedin.com/in/nhquiroz/'
                target='_blank'
                rel='noopener noreferrer'
              >
                linkedin
              </a>
            </li>
            <li className='nav-item md:mr-4'>
              <a href='mailto:nh.quiroz@gmail.com' target='_blank' rel='noopener noreferrer'>
                <strong>contact</strong>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
