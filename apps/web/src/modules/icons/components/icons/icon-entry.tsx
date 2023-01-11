import { getSVGSourceIntoComponent } from '@modules/icons/lib/icons-utils';
import { Icon } from '@modules/icons/typings/editor.typings';
import React from 'react';

type IconEntryProps = {
  icon: Icon;
};

const IconEntry: React.FC<IconEntryProps> = (props) => {
  const { icon } = props;

  return (
    <div className="grid-icon-wrapper">
      <div className="grid-icon-container">
        {getSVGSourceIntoComponent(icon, 'grid-icon stroke-black dark:stroke-white')}
      </div>
    </div>
  );
};

export default IconEntry;
