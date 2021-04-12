import { FC, useEffect, useState } from 'react';

interface Props {
  repoUrl: string;
  css: string;
  title: string;
  description: string;
  stack: string;
}

const bgColorsList = [
  'bg-indigo-400',
  'bg-indigo-600',
  'bg-gray-400',
  'bg-gray-600',
  'bg-red-400',
  'bg-green-400',
  'bg-green-600',
  'bg-purple-400',
  'bg-purple-500',
  'bg-yellow-500',
  'bg-yellow-600',
  'bg-blue-500',
  'bg-blue-700'
];

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
  const handleMouseHover: VoidFunction = () => {
    paintIndigo();
  };

  useEffect(() => {
    randomizeBg();
  }, []);

  return (
    <a href={repoUrl} target='_blank' rel='noopener noreferrer' onClick={paintGreen}>
      <article
        className={`project duration-500 ${bgColor} ${css} mb-4 sm:mr-4`}
        onMouseEnter={handleMouseHover}
      >
        <div>
          <h3 className='project-title'>{title}</h3>

          <p className='text-gray-100 text-sm'>{description}</p>
        </div>

        <p className='text-gray-100 text-xs'>{stack}</p>
      </article>
    </a>
  );
};

export { Project };
