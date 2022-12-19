import Link from 'next/link';
import { FC, useState, useRef, useEffect, forwardRef } from 'react';

import Button from './Button';
import { CloseIcon, HamburgerIcon } from './Icons';
import Logo from './Logo';

interface MenuProps {
  closeMenu: () => void;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>(({ closeMenu }, ref) => (
  <div
    className="fixed top-0 bottom-0 left-0 w-60 max-w-[80%] hamburger-menu bg-white"
    ref={ref}
  >
    <Button buttonType="button" onClick={() => closeMenu()}>
      <CloseIcon />
    </Button>
    <div className="flex flex-col w-full h-full text-lg">
      <Link
        href="/"
        className="flex justify-center h-24"
        onClick={() => closeMenu()}
      >
        <Logo className="hamburger-logo" />
      </Link>
      <Link
        href="/vote"
        className="flex justify-center h-24 border-t border-black"
        onClick={() => closeMenu()}
      >
        <span className="self-center">Vote</span>
      </Link>
      <Link
        href="/tokens"
        className="flex justify-center h-24 border-t border-black"
        onClick={() => closeMenu()}
      >
        <span className="self-center">Tokens</span>
      </Link>
    </div>
  </div>
));

Menu.displayName = 'Menu';

const Hamburger: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target && !menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    isOpen && document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isOpen]);

  return (
    <>
      <Button className="fixed lg:left-36" onClick={() => setIsOpen(!isOpen)}>
        <HamburgerIcon />
      </Button>
      {isOpen && <Menu ref={menuRef} closeMenu={() => setIsOpen(false)} />}
    </>
  );
};

export default Hamburger;
