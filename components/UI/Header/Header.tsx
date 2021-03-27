import { useTheme } from 'next-themes';
import { FC } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { Nav, ToggleSwitch } from '../../../components';

const Header: FC = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme: VoidFunction = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <header className='flex justify-between sm:justify-end items-center pt-3 mb-4 md:mb-1'>
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
  );
};

export { Header };
