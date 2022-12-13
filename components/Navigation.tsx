import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

const Navigation = () => {
  return (
    <NavigationMenu.Root className="flex justify-center w-full z-[1] text-center h-full max-h-16 border-b">
      <NavigationMenu.List className="flex justify-center w-screen p-1 m-0 text-black list-none bg-white border-b border-orange-400 dark:bg-black dark:text-white">
        <div className="flex justify-center w-full max-w-[1536px]">
          {/* logo */}
          <NavigationMenu.Item className="w-1/4 border border-orange-500 border-solid">
            <Link className="" href="/">
              Home
            </Link>
          </NavigationMenu.Item>
          {/* center nav */}
          <NavigationMenu.Sub className="flex w-1/2 border border-red-500 border-solid">
            <NavigationMenu.Item className="w-1/3">
              <Link className="" href="/vote">
                Vote
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="w-1/3">
              <Link className="" href="/tokens">
                Tokens
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.Sub>
          {/* wallet */}
          <NavigationMenu.Item className="w-1/4 border border-green-500 border-solid">
            Wallet
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
          <NavigationMenu.Indicator className="border border-red-500 border-solid" />
        </div>
      </NavigationMenu.List>
      <NavigationMenu.Viewport className="border border-red-500 border-solid" />
    </NavigationMenu.Root>
  );
};

export default Navigation;
