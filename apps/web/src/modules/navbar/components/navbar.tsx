import Logo from '@modules/marketing/components/logo';
import ThemeToggler from '@modules/theming/components/theme-toggler';
import React from 'react';

import NavbarLink from './navbar-link';

const Navbar: React.FC = (props) => {
  const {} = props;

  return (
    <header className="relative z-50 flex h-[80px] items-center justify-between border-[1px] border-neutral-300 bg-neutral-50 px-6 dark:border-neutral-700 dark:bg-neutral-800 md:justify-between">
      {/* Logo */}
      <Logo />
      {/* Buttons */}
      <nav className="ml-auto hidden items-center justify-center space-x-4 md:flex">
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/icons">Icons</NavbarLink>
        <ThemeToggler />
      </nav>
    </header>
  );
};

export default Navbar;
