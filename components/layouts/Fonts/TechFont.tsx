import { ReactNode } from 'react';
import { Martian_Mono } from '@next/font/google';

const font = Martian_Mono({
  variable: '--font-martian-mono',
  subsets: ['latin'],
  display: 'swap',
});

const TechFont = ({ children }: { children: ReactNode }) => {
  return <main className={`${font.variable} font-mono`}>{children}</main>;
};

export default TechFont;
