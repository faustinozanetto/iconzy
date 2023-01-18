import { Dialog, Transition } from '@headlessui/react';
import { useIconsContext } from '@modules/icons/context/icons/icons-context';
import { useIconsSelectionContext } from '@modules/icons/context/selection/icons-selection-context';
import { IconsSelectionActionType } from '@modules/icons/context/selection/reducer/types';
import { IconWithElement } from '@modules/icons/typings/icon.typings';
import React, { Fragment, useEffect } from 'react';
import { IconButton } from 'ui';

import SelectedIconsMenuIcon from './selected-icons-menu-icon';

type SelectedIconsMenuProps = {
  /** Wether the menu is open or not. */
  open: boolean;
  /** Callback function when the menu is closed */
  onClose: () => void;
};

const SelectedIconsMenu: React.FC<SelectedIconsMenuProps> = (props) => {
  const { open, onClose } = props;
  const { state } = useIconsContext();
  const { state: iconsSelectionState, dispatch } = useIconsSelectionContext();

  const closeButtonIcon = (
    <svg
      className="h-6 w-6 fill-neutral-800 dark:fill-slate-50"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="none"
      strokeWidth="1"
    >
      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
    </svg>
  );

  const handleRemoveIcon = (icon: IconWithElement) => {
    dispatch({
      type: IconsSelectionActionType.REMOVE_SELECTED_ICON,
      payload: {
        name: icon.name,
      },
    });
  };

  useEffect(() => {
    if (iconsSelectionState.selectedIcons.length === 0) {
      onClose();
    }
  }, [iconsSelectionState.selectedIcons]);

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
              <Dialog.Panel className=" w-full max-w-md overflow-hidden rounded-2xl bg-neutral-50 p-6 text-left align-middle shadow-xl transition-all dark:bg-neutral-800">
                <div className="mb-4 flex justify-between">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6">
                    Manage Selected Icons
                  </Dialog.Title>
                  <IconButton aria-label="Close Menu" icon={closeButtonIcon} onClick={onClose} />
                </div>

                <div className="flex max-h-96 w-full flex-col space-y-2 overflow-y-scroll">
                  {iconsSelectionState.selectedIcons.map((icon) => {
                    return (
                      <SelectedIconsMenuIcon
                        key={icon.name}
                        icon={icon}
                        onRemovedClicked={() => handleRemoveIcon(icon)}
                        isFillType={state.iconPack?.requiresFill || false}
                      />
                    );
                  })}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default SelectedIconsMenu;
