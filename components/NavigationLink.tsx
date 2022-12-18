import type { FC, PropsWithChildren } from 'react';
import { Link as NavLink } from '@radix-ui/react-navigation-menu';
import Link, { LinkProps } from 'next/link';

interface NavigationLinkProps extends PropsWithChildren, LinkProps {
  className?: string;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  children,
  className,
  href,
}) => {
  return (
    <Link className={className} href={href} passHref legacyBehavior>
      <NavLink>{children}</NavLink>
    </Link>
  );
};

export default NavigationLink;
