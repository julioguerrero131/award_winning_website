import { IconType } from 'react-icons';

interface IButton {
  id: string;
  title: string;
  LeftIcon?: IconType;
  RightIcon?: IconType;
  containerClass: string;
};

const Button = ({ id, title, LeftIcon, RightIcon, containerClass }: IButton) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
      {LeftIcon && <LeftIcon />}
      <span className='relative incline-flex overflow-hidden font-general text-xs uppercase'>
        <div>
          {title}
        </div>
      </span>
      {RightIcon && <RightIcon />}
    </button>
  );
};

export default Button;