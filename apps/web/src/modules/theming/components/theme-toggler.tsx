import React from 'react';
import { IconButton } from 'ui';

import { useThemeContext } from '../context/theme-context';

const ThemeToggler: React.FC = () => {
  const { theme, toggle } = useThemeContext();

  const renderLightModeIcon = (
    <svg
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="#fff"
      fill="none"
      viewBox="0 0 24 24"
      height="35"
      width="35"
    >
      <circle r="5" cy="12" cx="12" width="35" height="35" stroke="#ffffff" strokeWidth="2" />
      <line y2="3" x2="12" y1="1" x1="12" width="35" height="35" stroke="#ffffff" strokeWidth="2" />
      <line y2="23" x2="12" y1="21" x1="12" width="35" height="35" stroke="#ffffff" strokeWidth="2" />
      <line y2="5.64" x2="5.64" y1="4.22" x1="4.22" width="35" height="35" stroke="#ffffff" strokeWidth="2" />
      <line y2="19.78" x2="19.78" y1="18.36" x1="18.36" width="35" height="35" stroke="#ffffff" strokeWidth="2" />
      <line y2="12" x2="3" y1="12" x1="1" width="35" height="35" stroke="#ffffff" strokeWidth="2" />
      <line y2="12" x2="23" y1="12" x1="21" width="35" height="35" stroke="#ffffff" strokeWidth="2" />
      <line y2="18.36" x2="5.64" y1="19.78" x1="4.22" width="35" height="35" stroke="#ffffff" strokeWidth="2" />
      <line y2="4.22" x2="19.78" y1="5.64" x1="18.36" width="35" height="35" stroke="#ffffff" strokeWidth="2" />
    </svg>
  );

  const renderDarkModeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="#000"
      fill="none"
      viewBox="0 0 24 24"
      height="35"
      width="35"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" width="35" height="35" strokeWidth="2" />
    </svg>
  );

  const themeIcon = () => {
    if (theme === 'dark') return renderLightModeIcon;
    return renderDarkModeIcon;
  };

  return <IconButton variant="ghost" aria-label="Toggle Theme" onClick={toggle} icon={themeIcon()} />;
};

export default ThemeToggler;
