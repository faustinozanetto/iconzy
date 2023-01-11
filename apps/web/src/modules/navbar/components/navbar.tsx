import Logo from '@modules/marketing/components/logo';
import ThemeToggler from '@modules/theming/components/theme-toggler';
import React from 'react';
import NavbarLink from './navbar-link';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = (props) => {
  const {} = props;

  return (
    <nav className="relative flex h-20 items-center justify-center bg-neutral-50 drop-shadow-lg p-4 dark:bg-neutral-800 sm:justify-between z-50">
      {/* Logo */}
      <Logo />
      {/* Buttons */}
      <div className="flex ml-auto mr-4 items-center justify-center space-x-4">
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/icons">Icons</NavbarLink>
      </div>

      {/* Theme Toggler */}
      <div className="sm:flex">
        <ThemeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
