import { useIconsSelectionContext } from '@modules/icons/context/selection/icons-selection-context';
import React, { useState } from 'react';
import { Button } from 'ui';

import SelectedIconsMenu from './selected-icons-menu';

const SelectedIcons: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { state } = useIconsSelectionContext();

  return (
    <div className="absolute left-0 bottom-0 m-4 md:mb-2">
      {state.selectedIcons.length ? (
        <Button aria-label="Selected Icons" colorScheme="teal" onClick={() => setOpen(true)}>
          {state.selectedIcons.length} Selected
        </Button>
      ) : null}
      <SelectedIconsMenu open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default SelectedIcons;
