import { FC } from 'react';

interface Props {
  repoUrl: string;
  css: string;
  title: string;
  description: string;
  stack: string;
}

const Project: FC<Props> = ({ repoUrl, css, title, description, stack }) => {
  return (
    <a href={repoUrl} target='_blank' rel='noopener noreferrer'>
      <div className={`project ${css}`}>
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
