import { FC, PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
  buttonText?: string;
  className?: string;
  onClick?: () => void;
  buttonType?: 'button' | 'submit';
}

const Button: FC<ButtonProps> = ({
  buttonText,
  className,
  onClick,
  buttonType = 'button',
  children,
}) => {
  return (
    <button type={buttonType} className={className} onClick={() => onClick?.()}>
      {children ? children : buttonText}
    </button>
  );
};

export default Button;
