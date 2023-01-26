import Logo from '@modules/marketing/components/logo';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="fixed w-full z-10 transition-colors duration-300 top-0 shadow backdrop-blur-md bg-primary-800/35">
      <div className="flex w-full items-center">
        <div className="container mx-auto md:max-w-7xl flex items-center justify-between h-[80px] px-4">
          {/* Logo */}
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
