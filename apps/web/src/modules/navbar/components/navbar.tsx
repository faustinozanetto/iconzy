import Logo from '@modules/marketing/components/logo';
import ThemeToggler from '@modules/theming/components/theme-toggler';
import React from 'react';
import NavbarLink from './navbar-link';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = (props) => {
  const {} = props;

  return (
    <nav className="relative flex h-20 items-center justify-center bg-neutral-50 border-neutral-300 border-[1px] dark:border-neutral-700 p-4 dark:bg-neutral-800 md:justify-between z-50">
      {/* Logo */}
      <Logo />
      {/* Buttons */}
      <div className="flex ml-auto mr-4 items-center justify-center space-x-4">
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/icons">Icons</NavbarLink>
      </div>

      {/* Theme Toggler */}
      <div className="md:flex">
        <ThemeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
