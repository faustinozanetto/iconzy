import React from 'react';
import NavbarLogo from './navbar-logo';

const Navbar: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 z-40 flex w-full items-center backdrop-blur-sm bg-black/10 shadow-md">
      <div className="container mx-auto md:max-w-7xl flex items-center justify-between h-[80px] px-4">
        {/* Logo */}
        <NavbarLogo />
      </div>
    </div>
  );
};

export default Navbar;
