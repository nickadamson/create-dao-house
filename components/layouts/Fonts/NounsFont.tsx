import { Londrina_Solid } from '@next/font/google';
import localFont from '@next/font/local';
import { ReactNode } from 'react';

// const font = localFont({
//   variable: '--font-local',
//   src: './nountown.otf',
//   display: 'swap',
// });
const font = Londrina_Solid({
  weight: ['100', '300', '400', '900'],
  variable: '--font-local',
  display: 'swap',
});

const NounsFont = ({ children }: { children: ReactNode }) => {
  return <main className={`${font.variable} font-local`}>{children}</main>;
};

export default NounsFont;
