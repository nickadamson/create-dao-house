import Image from 'next/image';

import logo from '../public/logo.svg';

const Logo = () => {
  return (
    <div className="">
      <Image src={logo} alt="logo" height={32} width={32} />
    </div>
  );
};

export default Logo;
