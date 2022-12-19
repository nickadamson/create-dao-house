import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

import { Account } from './Account';
import Logo from './Logo';
import NavigationLink from './NavigationLink';

const Navigation = () => {
  const { isConnected } = useAccount();
  return (
    <NavigationMenu.Root className="flex justify-center w-full z-[1] text-center h-full max-h-16 pt-8">
      <NavigationMenu.List className="flex justify-center w-screen p-1 m-0 list-none max-w-7xl">
        <div className="flex items-center justify-center w-full">
          {/* logo */}
          <NavigationMenu.Item className="flex w-1/4">
            <NavigationLink className="w-full text-lg" href="/">
              <Logo />
            </NavigationLink>
          </NavigationMenu.Item>
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
          <NavigationMenu.Item className="flex justify-end">
            <ConnectButton />
            {isConnected && <Account />}
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
