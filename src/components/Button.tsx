import { IconType } from 'react-icons';

interface IButton {
  id: string;
  title: string;
  LeftIcon?: IconType;
  containerClass: string;
}

const Button = ({ id, title, LeftIcon, containerClass } : IButton) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
      {LeftIcon && <LeftIcon />}
      {title}
    </button>
  )
}

export default Button