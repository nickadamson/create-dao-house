import Image from 'next/image';
import { FC, useState } from 'react';
import cx from 'classnames';

import { useDataStore } from '../hooks/useDataStore';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  const { contractURI } = useDataStore();
  const [hidden, setHidden] = useState(false);

  return (
    <div className={cx('flex items-center', { className })}>
      <Image
        className={cx('pr-2', { hidden })}
        src={contractURI.image}
        alt="logo"
        height={32}
        width={32}
        onError={() => setHidden(true)}
      />
      {contractURI.name}
    </div>
  );
};

export default Logo;
