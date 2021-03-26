import { useTheme } from 'next-themes';
import { FC } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { Nav } from '../../../components';

const Layout: FC = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    console.log({ theme });
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  console.log({ theme });

  return (
    <div className='dark:bg-gray-900 bg-gray-50 px-6 h-screen overflow-hidden'>
      <header className='flex justify-between sm:justify-end items-center pt-4 mb-4 md:mb-1 md:max-w-6xl'>
        <Nav />

        {theme === 'dark' ? (
          <button
            aria-label='Toggle light mode'
            type='button'
            className='bg-gray-800 border-none p-2 rounded-md mr-4'
            onClick={toggleTheme}
          >
            <HiSun className='text-gray-300 text-2xl' />
          </button>
        ) : (
          <button
            aria-label='Toggle dark mode'
            type='button'
            className='bg-gray-200 border-none p-2 rounded-md mr-4'
            onClick={toggleTheme}
          >
            <HiMoon className='text-gray-500 text-2xl' />
          </button>
        )}
      </header>

      {children}
    </div>
  );
};

export { Layout };
