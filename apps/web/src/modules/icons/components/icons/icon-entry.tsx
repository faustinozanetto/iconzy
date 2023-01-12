import { convertJSXToString, getSVGSourceIntoComponent } from '@modules/icons/lib/icons-utils';
import { Icon, IconCustomization } from '@modules/icons/typings/icon.typings';
import React from 'react';

type IconEntryProps = {
  icon: Icon;
  customization: IconCustomization;
};

const IconEntry: React.FC<IconEntryProps> = (props) => {
  const { icon, customization } = props;

  const iconSVG: JSX.Element = getSVGSourceIntoComponent(icon.source, customization, 'grid-icon');
  const iconSVGSource = convertJSXToString(iconSVG);

  const handleSourceCopy = async () => {
    try {
      const svgSource: string = iconSVGSource;
      await navigator.clipboard.writeText(svgSource);
    } catch (error) {
      console.error('An error ocurred while trying to copy to cplipboard', error);
    }
  };

  return (
    <div className="grid-icon-wrapper" onClick={handleSourceCopy}>
      <div className="grid-icon-container">
        {iconSVG}
        <div className="grid-icon-name">{icon.name}</div>
      </div>
    </div>
  );
};

export default IconEntry;
