/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, ReactNode } from 'react';
import cx from 'classnames';

const Card: FC<{
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}> = ({ onClick, className, children }) => {
  const handleOnClick = () => onClick?.();

  return (
    <div onClick={handleOnClick} className={cx('flex', className)}>
      {children}
    </div>
  );
};

export default Card;
