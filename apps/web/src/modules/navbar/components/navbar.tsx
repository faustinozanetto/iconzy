import Logo from '@modules/marketing/components/logo';
import ThemeToggler from '@modules/theming/components/theme-toggler';
import React from 'react';

import NavbarLink from './navbar-link';

const Navbar: React.FC = () => {
  return (
    <header className="flex items-center relative z-50 h-[80px] border-b px-6 bg-background justify-center md:justify-between">
      {/* Logo */}
      <Logo />
      {/* Buttons */}
      <nav className="ml-auto hidden items-center justify-center space-x-4 md:flex">
        <NavbarLink href="/icons">Browse Packs</NavbarLink>
        <ThemeToggler />
      </nav>
    </header>
  );
};

export default Navbar;
