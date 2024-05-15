'use client';
import React from 'react';

import { Button } from '@iconzy/ui';
import { useTheme } from 'next-theme-kit';

const ThemeToggler: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button aria-label="Toggle Theme" onClick={handleThemeChange} size="icon">
      {/* Sun Icon */}
      <svg
        className="block h-6 w-6 stroke-current dark:hidden"
        fill="none"
        height="35"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
      </svg>
      {/* Moon Icon */}
      <svg
        className="hidden h-6 w-6 stroke-current dark:block"
        fill="none"
        height="35"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
      </svg>
    </Button>
  );
};

export default ThemeToggler;
