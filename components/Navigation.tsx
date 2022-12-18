import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useCallback } from 'react';

import { useDataStore } from '../hooks/useDataStore';
import { useTheme } from '../hooks/useTheme';
import { Theme } from '../types';
import { isLocalHost } from '../utils/isLocalHost';

import Button from './Button';
import Logo from './Logo';
import NavigationLink from './NavigationLink';

const Navigation = () => {
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
    <NavigationMenu.Root className="nav-root">
      <NavigationMenu.List className="flex justify-center w-screen p-1 m-0 list-none max-w-7xl">
        <div className="flex items-center justify-center w-full">
          {/* logo */}
          <NavigationMenu.Item className="flex w-1/4">
            <NavigationLink className="w-full text-lg" href="/">
              <Logo />
            </NavigationLink>
          </NavigationMenu.Item>
          {isLocalHost() && (
            <NavigationMenu.Item>
              <Button buttonText="Toggle Theme" onClick={toggleTheme} />
            </NavigationMenu.Item>
          )}
          {/* center nav */}
          <NavigationMenu.Sub className="flex justify-end w-1/2 ml-auto mr-0">
            <NavigationMenu.Item className="w-48">
              <NavigationLink href="/vote">Vote</NavigationLink>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="w-48">
              <NavigationLink href="/tokens">Tokens</NavigationLink>
            </NavigationMenu.Item>
          </NavigationMenu.Sub>
          {/* wallet */}
          <NavigationMenu.Item className="w-48">
            <ConnectButton />
          </NavigationMenu.Item>

          {/* <NavigationMenu.Item className='border border-red-500 border-solid'> */}
          {/* <NavigationMenu.Trigger className='border border-red-500 border-solid' /> */}
          {/* <NavigationMenu.Content className='border border-red-500 border-solid'> */}
          {/* <NavigationMenu.Sub className='border border-red-500 border-solid'> */}
          {/* <NavigationMenu.List className='border border-red-500 border-solid' /> */}
          {/* <NavigationMenu.Viewport className='border border-red-500 border-solid' /> */}
          {/* </NavigationMenu.Sub> */}
          {/* </NavigationMenu.Content> */}
          {/* </NavigationMenu.Item> */}
          <NavigationMenu.Indicator className="" />
        </div>
      </NavigationMenu.List>
      <NavigationMenu.Viewport className="" />
    </NavigationMenu.Root>
  );
};

export default Navigation;
