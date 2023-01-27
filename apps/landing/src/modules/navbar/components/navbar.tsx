import Logo from '@modules/marketing/components/logo';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-primary-800/40 fixed top-0 z-10 w-full shadow-lg backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto flex h-[80px] w-full items-center px-4 md:max-w-7xl">
        {/* Logo */}
        <Logo />

        <nav className="ml-auto flex space-x-2"></nav>
      </div>
    </header>
  );
};

export default Navbar;
