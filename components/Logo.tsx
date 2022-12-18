import Image from 'next/image';
import { useState } from 'react';

import { useDataStore } from '../hooks/useDataStore';
import logo from '../public/logo.svg';

const Logo = () => {
  const { contractURI } = useDataStore();
  const [hidden, setHidden] = useState(false);

  return (
    <div className="flex items-center">
      <Image
        className={`pr-2 ${hidden ? 'hidden' : ''}`}
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
