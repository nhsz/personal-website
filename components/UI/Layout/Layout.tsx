import { useTheme } from 'next-themes';
import { FC } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { Nav, ToggleSwitch } from '../../../components';
import { FlatMountainsBackground } from '../FlatMountainsBackground';

const Layout: FC = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const toggleTheme: VoidFunction = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className='layout relative'>
      <header
        className='fixed top-0 left-0 w-full flex justify-center items-center py-3 bg-gray-50 dark:bg-gray-900 transition duration-200 border-t-4 dark:border-gray-300 border-gray-800'
        style={{
          opacity: 0.84,
          backdropFilter: 'saturate(180%) blur(24px)'
        }}
      >
        <Nav />

        {theme === 'dark' ? (
          <ToggleSwitch ariaLabel='Toggle light mode' css='bg-gray-800' handleClick={toggleTheme}>
            <HiSun className='text-gray-300 text-xl' />
          </ToggleSwitch>
        ) : (
          <ToggleSwitch ariaLabel='Toggle dark mode' css='bg-gray-200' handleClick={toggleTheme}>
            <HiMoon className='text-gray-500 text-xl' />
          </ToggleSwitch>
        )}
      </header>

      {children}

      <FlatMountainsBackground />
    </div>
  );
};

export { Layout };
