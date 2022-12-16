import Image from 'next/image';

import logo from '../public/logo.svg';

const Logo = () => {
  return (
    <div className="">
      <Image src={logo} alt="logo" className="" />
    </div>
  );
};

export default Logo;
