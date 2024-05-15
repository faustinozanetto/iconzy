import Navbar from '@modules/navbar/components/navbar';
import React from 'react';

export default async function CoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}
