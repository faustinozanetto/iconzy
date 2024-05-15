import LandingNavbar from '@modules/landing/components/landing-navbar';
import React from 'react';

export default async function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <LandingNavbar />
      <div className="elative mt-[80px] grow">{children}</div>
    </div>
  );
}
