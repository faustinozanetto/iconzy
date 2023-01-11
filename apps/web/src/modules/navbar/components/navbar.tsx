import Logo from '@modules/marketing/components/logo';
import ThemeToggler from '@modules/theming/components/theme-toggler';
import React from 'react';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = (props) => {
  const {} = props;

  return (
    <nav className="relative w-full flex h-20 items-center justify-between bg-neutral-50 drop-shadow-lg p-4 dark:bg-neutral-800">
      {/* Logo */}
      <Logo />
      {/* Buttons */}

      {/* Theme Toggler */}
      <ThemeToggler />
    </nav>
  );
};

export default Navbar;
