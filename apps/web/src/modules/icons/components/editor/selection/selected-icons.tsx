import { useIconsSelectionContext } from '@modules/icons/context/selection/icons-selection-context';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { Button, FadeAnimated } from 'ui';

import SelectedIconsMenu from './selected-icons-menu';

const SelectedIcons: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { state } = useIconsSelectionContext();

  return (
    <AnimatePresence>
      {state.selectedIcons.length ? (
        <FadeAnimated key="selected-icons">
          <Button aria-label="Selected Icons" colorScheme="teal" onClick={() => setOpen(true)}>
            {state.selectedIcons.length} Selected
          </Button>
        </FadeAnimated>
      ) : null}
      <SelectedIconsMenu open={open} onClose={() => setOpen(false)} />
    </AnimatePresence>
  );
};

export default SelectedIcons;
