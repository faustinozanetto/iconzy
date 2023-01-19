import { Dialog, Transition } from '@headlessui/react';
import { useIconsContext } from '@modules/icons/context/icons/icons-context';
import { getSVGSourceIntoComponent } from '@modules/icons/lib/icons-utils';
import { clearSelectedIcons, removeSelectedIcon, selectSelectedIcons } from '@modules/icons/state/selected-icons.slice';
import { Icon } from '@modules/icons/typings/icon.typings';
import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Separator } from 'ui';

import SelectedIconsMenuIcon from './selected-icons-menu-icon';

type SelectedIconsMenuProps = {
  /** Wether the menu is open or not. */
  open: boolean;
  /** Callback function when the menu is closed */
  onClose: () => void;
};

const SelectedIconsMenu: React.FC<SelectedIconsMenuProps> = (props) => {
  const { open, onClose } = props;
  const { state: iconsState } = useIconsContext();
  const selectedIcons = useSelector(selectSelectedIcons);
  const dispatch = useDispatch();

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

  const handleRemoveIcon = (icon: Icon) => {
    dispatch(removeSelectedIcon(icon.name));
  };

  const handleRemoveAllIcons = () => {
    dispatch(clearSelectedIcons());
  };

  useEffect(() => {
    if (selectedIcons.length === 0) {
      onClose();
    }
  }, [selectedIcons]);

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
              <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-2xl border-2 border-neutral-300 bg-neutral-50 p-6 text-left align-middle shadow-xl transition-all dark:border-neutral-700 dark:bg-neutral-800">
                <div className="mb-4 flex items-center justify-between">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6">
                    Manage Selected Icons <br />
                    <span className="text-sm">{selectedIcons.length} selected</span>
                  </Dialog.Title>
                  <div className="flex items-center space-x-2">
                    <IconButton
                      aria-label="Remove All"
                      colorScheme="red"
                      variant="ghost"
                      onClick={handleRemoveAllIcons}
                      icon={
                        <svg
                          className="h-5 w-5 shrink-0 stroke-neutral-800 dark:stroke-neutral-50"
                          xmlns="http://www.w3.org/2000/svg"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          <line y2="17" x2="10" y1="11" x1="10" />
                          <line y2="17" x2="14" y1="11" x1="14" />
                        </svg>
                      }
                    />

                    <IconButton aria-label="Close Menu" icon={closeButtonIcon} onClick={onClose} />
                  </div>
                </div>

                <Separator />

                <ul className="featued-icons-container hide-scrollbar flex max-h-96 w-full flex-col space-y-2 overflow-y-scroll">
                  <AnimatePresence initial={false}>
                    {selectedIcons.map((icon) => {
                      const source = getSVGSourceIntoComponent(
                        icon.source,
                        iconsState.iconPack?.type || 'outline',
                        clsx(iconsState.iconPack?.type === 'fill' ? 'featured-icon-fill' : 'featured-icon', '!h-8 !w-8')
                      );
                      return (
                        <SelectedIconsMenuIcon
                          key={icon.name}
                          icon={{ ...icon, element: source }}
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
