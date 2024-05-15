import React from 'react';

type IconPackCardAttributeProps = {
  name: string;
  children: React.ReactNode;
};

const IconPackCardAttribute: React.FC<IconPackCardAttributeProps> = (props) => {
  const { name, children } = props;

  return (
    <div className="flex justify-between">
      <p className="text-sm md:text-base">{name}</p>
      <span className="text-sm font-medium">{children}</span>
    </div>
  );
};

export default IconPackCardAttribute;
