import { FC, PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';

import { useTheme } from '../../../hooks/useTheme';

const DynamicModernFont = dynamic(() => import('./ModernFont'), { ssr: true });
const DynamicSleekFont = dynamic(() => import('./SleekFont'), { ssr: true });
const DynamicNounsFont = dynamic(() => import('./NounsFont'), { ssr: true });

const FontWrapper: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();

  switch (theme) {
    case 'modern':
      return <DynamicModernFont>{children}</DynamicModernFont>;
    case 'sleek':
      return <DynamicSleekFont>{children}</DynamicSleekFont>;
    case 'nouns':
    default:
      return <DynamicNounsFont>{children}</DynamicNounsFont>;
  }
};

export default FontWrapper;
