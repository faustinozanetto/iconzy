import { useIconsSelectionContext } from '@modules/icons/context/selection/icons-selection-context';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

import SelectedIconsMenu from './selected-icons-menu';
import { Button } from '@iconzy/ui';

const SelectedIcons: React.FC = () => {
  const { state } = useIconsSelectionContext();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AnimatePresence>
      {state.selectedIcons.length ? (
        <Button aria-label="Selected Icons" className="font-medium border" onClick={() => setOpen(true)}>
          {state.selectedIcons.length} Selected
        </Button>
      ) : null}
      <SelectedIconsMenu open={open} onClose={() => setOpen(false)} />
    </AnimatePresence>
  );
};

export default SelectedIcons;
