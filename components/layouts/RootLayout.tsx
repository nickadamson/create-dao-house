import { FC, ReactNode } from 'react';
import NextHead from 'next/head';
import Navigation from '../Navigation';
import Footer from '../Footer';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <NextHead>
        <title>My wagmi + RainbowKit App</title>
      </NextHead>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
