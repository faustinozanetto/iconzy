import { Dialog, Transition } from '@headlessui/react';
import { useIconsSelectionContext } from '@modules/icons/context/selection/icons-selection-context';
import { IconsSelectionActionType } from '@modules/icons/context/selection/reducer/types';
import { Icon } from '@modules/icons/typings/icon.typings';
import { AnimatePresence } from 'framer-motion';
import React, { Fragment } from 'react';

import SelectedIconsMenuIcon from './selected-icons-menu-icon';
import { Button, Separator, TrashIcon } from '@iconzy/ui';

interface SelectedIconsMenuProps {
  /** Wether the menu is open or not. */
  open: boolean;
  /** Callback function when the menu is closed */
  onClose: () => void;
}

const SelectedIconsMenu: React.FC<SelectedIconsMenuProps> = (props) => {
  const { open, onClose } = props;

  const { state: iconsSelectionState, dispatch } = useIconsSelectionContext();

  const handleRemoveIcon = (icon: Icon) => {
    dispatch({
      type: IconsSelectionActionType.REMOVE_SELECTED_ICON,
      payload: {
        name: icon.name,
      },
    });
  };

  const handleRemoveAllIcons = () => {
    dispatch({
      type: IconsSelectionActionType.CLEAR_SELECTED_ICONS,
      payload: {},
    });
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-background w-full max-w-md overflow-hidden rounded-lg border-2 p-5 text-left align-middle shadow-lg transition-all">
                <div className="mb-4 flex items-center justify-between">
                  <Dialog.Title as="h3" className="font-medium leading-6 md:text-lg">
                    Manage Selected Icons <br />
                    <span className="text-sm font-semibold">{iconsSelectionState.selectedIcons.length} </span>
                    selected
                  </Dialog.Title>
                  <div className="flex items-center space-x-2">
                    <Button size="icon" aria-label="Remove All" variant="ghost" onClick={handleRemoveAllIcons}>
                      <TrashIcon />
                    </Button>
                    <Button size="icon" aria-label="Close Menu" onClick={onClose}>
                      <svg
                        className="h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="none"
                        strokeWidth="1"
                      >
                        <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                      </svg>
                    </Button>
                  </div>
                </div>
                <Separator />
                <ul className="featued-icons-container hide-scrollbar flex max-h-96 w-full flex-col space-y-2 overflow-y-scroll">
                  <AnimatePresence initial={false}>
                    {iconsSelectionState.selectedIcons.map((icon) => {
                      return (
                        <SelectedIconsMenuIcon
                          key={icon.name}
                          icon={icon}
                          onRemovedClicked={() => handleRemoveIcon(icon)}
                        />
                      );
                    })}
                  </AnimatePresence>
                </ul>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default SelectedIconsMenu;
