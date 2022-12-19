import { FC, useCallback } from 'react';

import { useDataStore } from '../hooks/useDataStore';
import { useTheme } from '../hooks/useTheme';
import { Theme } from '../types';
import { isLocalHost } from '../utils/isLocalHost';

import Button from './Button';

const Footer: FC = () => {
  const { dispatch } = useDataStore();
  const theme = useTheme();

  const toggleTheme = useCallback(() => {
    const themes: Theme[] = ['modern', 'sleek', 'nouns'];

    const currentThemeIndex = themes.indexOf(theme);

    if (currentThemeIndex >= themes.length - 1) {
      dispatch?.({ type: 'OVERRIDE_THEME', value: themes[0] });
    } else {
      dispatch?.({
        type: 'OVERRIDE_THEME',
        value: themes[currentThemeIndex + 1],
      });
    }
  }, [theme, dispatch]);

  return (
    <div className="flex items-center justify-center w-full h-12 text-center border-t">
      {isLocalHost() && (
        <Button
          onClick={toggleTheme}
          buttonText={`Toggle Theme - Current: ${theme}`}
        />
      )}
    </div>
  );
};

export default Footer;

// const modernStyles = {
//   footer: 'flex items-center justify-center w-full h-12 text-center border-t',
// };

// const nounsStyles = {
//   footer: 'flex items-center justify-center w-full h-12 text-center border-t',
// };

// const sleekStyles = {
//   footer: 'flex items-center justify-center w-full h-12 text-center border-t',
// };
