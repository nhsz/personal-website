import { FC, useEffect, useState } from 'react';
import { bgColorsList } from '../../utils';

interface Props {
  repoUrl: string;
  css: string;
  title: string;
  description: string;
  stack: string;
}

const Project: FC<Props> = ({ repoUrl, css, title, description, stack }) => {
  const [bgColor, setBgColor] = useState(
    bgColorsList[Math.floor(Math.random() * bgColorsList.length)]
  );

  const randomizeBg: VoidFunction = () => {
    const randomColor = bgColorsList[Math.floor(Math.random() * bgColorsList.length)];
    setBgColor(randomColor);
  };
  const paintIndigo: VoidFunction = () => setBgColor('bg-indigo-600');
  const paintGreen: VoidFunction = () => setBgColor('bg-green-500');

  useEffect(() => {
    randomizeBg();
  }, []);

  return (
    <a href={repoUrl} target='_blank' rel='noopener noreferrer' onClick={paintGreen}>
      <div className={`project ${bgColor} ${css}`} onMouseEnter={paintIndigo}>
        <div>
          <h3 className='project-title'>{title}</h3>

          <p className='text-gray-100'>{description}</p>
        </div>

        <p className='text-gray-100 text-xs'>{stack}</p>
      </div>
    </a>
  );
};

export { Project };
