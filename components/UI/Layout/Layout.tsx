import { useTheme } from 'next-themes';
import { FC } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { Footer, Nav, ToggleSwitch } from '../../../components';
import { FlatMountainsBackground } from '../FlatMountainsBackground';

const Layout: FC = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const toggleTheme: VoidFunction = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className='layout relative md:h-screen'>
      <header
        className='header left-0 w-full flex justify-center items-center'
        style={{
          opacity: 0.91,
          backdropFilter: 'saturate(180%) blur(20px)'
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

      <div className='flex justify-center mt-24'>
        <Footer />
      </div>
    </div>
  );
};

export { Layout };
