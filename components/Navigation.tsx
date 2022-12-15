import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navigation = () => {
  return (
    <NavigationMenu.Root className="flex justify-center w-full z-[1] text-center h-full max-h-16 bg-slate-400">
      <NavigationMenu.List className="flex justify-center w-screen p-1 m-0 text-black list-none max-w-7xl">
        <div className="flex items-center justify-center w-full">
          {/* logo */}
          <NavigationMenu.Item className="flex w-1/4 ">
            <Link className="w-full text-lg" href="/">
              Home
            </Link>
          </NavigationMenu.Item>
          {/* center nav */}
          <NavigationMenu.Sub className="flex justify-end w-1/2 ml-auto mr-0">
            <NavigationMenu.Item className="w-48">
              <Link className="" href="/vote">
                Vote
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="w-48">
              <Link className="" href="/tokens">
                Tokens
              </Link>
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
