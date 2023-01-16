import Link from 'next/link';
import React from 'react';

type NavbarLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavbarLink: React.FC<NavbarLinkProps> = (props) => {
  const { href, children, ...rest } = props;

  return (
    <Link href={href} {...rest}>
      <span className="hover:text-primary-500 dark:hover:text-primary-300 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
        {children}
      </span>
    </Link>
  );
};

export default NavbarLink;
