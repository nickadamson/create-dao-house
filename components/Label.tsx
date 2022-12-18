import { FC } from 'react';
import cx from 'classnames';

const Label: FC<{
  text: string;
  className?: string;
}> = ({ text, className }) => {
  return <span className={cx('flex', className)}>{text}</span>;
};

export default Label;
