import { ReactNode } from 'react';
import { Source_Serif_4 } from '@next/font/google';

const font = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
  display: 'swap',
});

const SleekFont = ({ children }: { children: ReactNode }) => {
  return <main className={`${font.variable} font-serif`}>{children}</main>;
};

export default SleekFont;
