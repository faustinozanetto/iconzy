import Logo from '@modules/marketing/components/logo';
import ThemeToggler from '@modules/theming/components/theme-toggler';
import React from 'react';

import NavbarLink from './navbar-link';

const Navbar: React.FC = (props) => {
  const {} = props;

  return (
    <nav className="relative z-50 flex h-[90px] items-center justify-between border-[1px] border-neutral-300 bg-neutral-50 px-6 dark:border-neutral-700 dark:bg-neutral-800 md:justify-between">
      {/* Logo */}
      <Logo />
      {/* Buttons */}
      <div className="ml-auto hidden items-center justify-center space-x-4 md:flex">
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/icons">Icons</NavbarLink>
        <ThemeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
