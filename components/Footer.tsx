import { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="flex items-center justify-center w-full h-12 text-center bg-slate-400">
      <div className=" max-w-7xl">foot</div>
    </div>
  );
};

export default Footer;
