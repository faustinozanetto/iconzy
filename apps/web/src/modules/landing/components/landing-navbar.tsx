import Logo from '@modules/marketing/components/logo';
import NavbarLink from '@modules/navbar/components/navbar-link';
import React from 'react';

const LandingNavbar: React.FC = () => {
  return (
    <header className="bg-background border-b fixed top-0 z-10 w-full shadow-lg backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto flex h-[80px] w-full items-center justify-center px-4 md:max-w-7xl">
        <Logo />
        <nav className="ml-auto hidden space-x-2 md:flex">
          <NavbarLink href="/icons">Browse Packs</NavbarLink>
        </nav>
      </div>
    </header>
  );
};

export default LandingNavbar;
