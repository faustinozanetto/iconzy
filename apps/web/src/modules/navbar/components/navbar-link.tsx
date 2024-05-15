import Link from 'next/link';
import React from 'react';

type NavbarLinkProps = {
  /** Link to navigate when clicked */
  href: string;
  children: React.ReactNode;
};

const NavbarLink: React.FC<NavbarLinkProps> = (props) => {
  const { href, children, ...rest } = props;

  return (
    <Link href={href} {...rest}>
      <span className="hover:text-primary text-lg font-semibold">{children}</span>
    </Link>
  );
};

export default NavbarLink;
