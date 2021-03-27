import { ButtonHTMLAttributes, FC } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string;
  css: string;
  handleClick: VoidFunction;
}

const ToggleSwitch: FC<Props> = ({ ariaLabel, css, handleClick, children }) => {
  return (
    <button
      aria-label={ariaLabel}
      type='button'
      className={`${css} border-none p-2 rounded-md lg:mr-28 xl:mr-60`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export { ToggleSwitch };
