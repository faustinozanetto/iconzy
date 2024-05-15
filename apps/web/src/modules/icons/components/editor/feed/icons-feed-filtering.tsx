import { Input } from '@iconzy/ui';
import React, { useRef } from 'react';

interface IconsFeedFilteringProps {
  /**
   * Callback function when the name changes
   * @param value The new name value
   * @returns Void
   */
  onNameChanged: (value: string) => void;
}

const IconsFeedFiltering: React.FC<IconsFeedFilteringProps> = (props) => {
  const { onNameChanged } = props;
  const inputNameRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex gap-2">
      <Input
        ref={inputNameRef}
        id="search-icon"
        placeholder="Search Icons"
        onChange={(e) => onNameChanged(e.target.value)}
      />
    </div>
  );
};

export default IconsFeedFiltering;
