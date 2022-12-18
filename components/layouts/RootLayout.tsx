import { FC, ReactNode } from 'react';
import NextHead from 'next/head';

import Navigation from '../Navigation';
import Footer from '../Footer';
import { getFontWrapper } from '../../utils/styling';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const DynamicFontWrapper = getFontWrapper();

  return (
    <>
      <NextHead>
        <title>My wagmi + RainbowKit App</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> */}
      </NextHead>

      {/* <DynamicFontWrapper> */}
      <div className="flex flex-col justify-between items-center w-screen min-h-screen">
        <Navigation />
        {/* <button>HIIIIIIIIII</button> */}
        <div className="flex-grow px-5 py-5 w-full max-w-7xl xl:px-0">
          {children}
        </div>
        <Footer />
      </div>
      {/* </DynamicFontWrapper> */}
    </>
  );
};

export default RootLayout;
