import { selectSelectedIcons } from '@modules/icons/state/selected-icons.slice';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, FadeAnimated } from 'ui';

import SelectedIconsMenu from './selected-icons-menu';

const SelectedIcons: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const selectedIcons = useSelector(selectSelectedIcons);

  return (
    <AnimatePresence>
      {selectedIcons.length ? (
        <FadeAnimated key="selected-icons">
          <Button aria-label="Selected Icons" colorScheme="teal" onClick={() => setOpen(true)}>
            {selectedIcons.length} Selected
          </Button>
        </FadeAnimated>
      ) : null}
      <SelectedIconsMenu open={open} onClose={() => setOpen(false)} />
    </AnimatePresence>
  );
};

export default SelectedIcons;
