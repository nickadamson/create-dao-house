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
    <div className="footer">
      {isLocalHost() && (
        <Button onClick={toggleTheme} buttonText="Toggle Theme" />
      )}
    </div>
  );
};

export default Footer;
