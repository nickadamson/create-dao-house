import { FC } from 'react';

interface ButtonProps {
  buttonText: string;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ buttonText, className, onClick }) => {
  return (
    <button type="button" className={className} onClick={() => onClick?.()}>
      {buttonText}
    </button>
  );
};

export default Button;
