import { getSVGSourceIntoComponent } from '@modules/icons/lib/icons-utils';
import { Icon, IconCustomization } from '@modules/icons/typings/icon.typings';
import React from 'react';

type IconEntryProps = {
  icon: Icon;
  customization: IconCustomization;
};

const IconEntry: React.FC<IconEntryProps> = (props) => {
  const { icon, customization } = props;

  return (
    <div className="grid-icon-wrapper">
      <div className="grid-icon-container">
        {getSVGSourceIntoComponent(icon.source, customization, 'grid-icon')}
        <span className="text-center mx-auto pt-2 opacity-80">{icon.name}</span>
      </div>
    </div>
  );
};

export default IconEntry;
