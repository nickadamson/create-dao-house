import { FC } from 'react';

interface ButtonProps {
  buttonText: string;
  className?: string;
  onClick?: () => void;
  buttonType?: 'button' | 'submit';
}

const Button: FC<ButtonProps> = ({
  buttonText,
  className,
  onClick,
  buttonType = 'button',
}) => {
  return (
    <button type={buttonType} className={className} onClick={() => onClick?.()}>
      {buttonText}
    </button>
  );
};

export default Button;
