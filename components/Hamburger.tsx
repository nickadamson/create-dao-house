import { FC, useState, useRef, useEffect, LegacyRef } from 'react';

import Button from './Button';

const Menu: FC<{ menuRef: LegacyRef<HTMLDivElement> | null }> = ({
  menuRef,
}) => {
  return (
    <div
      className="fixed top-0 bottom-0 left-0 w-60 max-w-[80%] bg-green-400"
      ref={menuRef}
    ></div>
  );
};

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
      <Button
        className="fixed bg-red-600 lg:left-36"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Button>
      {isOpen && <Menu menuRef={menuRef} />}
    </>
  );
};

export default Hamburger;
