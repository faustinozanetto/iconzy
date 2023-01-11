import React from 'react';

import { useIconsContext } from '../context/icons-context';
import IconsFeed from './icons/icons-feed';

const IconPackEditor: React.FC = () => {
  const { state } = useIconsContext();

  return <IconsFeed />;
};

export default IconPackEditor;
