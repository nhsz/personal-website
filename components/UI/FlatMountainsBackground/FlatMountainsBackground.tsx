import { FC } from 'react';

const FlatMountainsBackground: FC = () => {
  return (
    <img
      src='./Flat-Mountains.svg'
      alt='Flat mountains SVG background'
      className='absolute bottom-0 -ml-6'
      style={{ zIndex: -1 }}
    />
  );
};

export { FlatMountainsBackground };
