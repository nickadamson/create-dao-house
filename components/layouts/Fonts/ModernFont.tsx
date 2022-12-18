import { ReactNode } from 'react';
import { Inter } from '@next/font/google';

const font = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const ModernFont = ({ children }: { children: ReactNode }) => {
  return <main className={`${font.variable} font-sans`}>{children}</main>;
};

export default ModernFont;
