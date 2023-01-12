import { convertJSXToString, getSVGSourceIntoComponent } from '@modules/icons/lib/icons-utils';
import { Icon, IconCustomization } from '@modules/icons/typings/icon.typings';
import React from 'react';

type IconEntryProps = {
  icon: Icon;
  customization: IconCustomization;
  onIconSelected: (iconElement: JSX.Element) => void;
};

const IconEntry: React.FC<IconEntryProps> = (props) => {
  const { icon, customization, onIconSelected } = props;

  const iconSVG: JSX.Element = getSVGSourceIntoComponent(icon.source, customization, 'grid-icon');

  return (
    <div className="grid-icon-wrapper" onClick={() => onIconSelected(iconSVG)}>
      <div className="grid-icon-container">
        {iconSVG}
        <div className="grid-icon-name">{icon.name}</div>
      </div>
    </div>
  );
};

export default IconEntry;
