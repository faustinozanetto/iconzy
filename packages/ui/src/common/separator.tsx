import React from 'react';

export type SeparatorProps = React.HTMLAttributes<HTMLHRElement> & {};

export const Separator: React.FC<SeparatorProps> = (props) => {
  const { ...rest } = props;

  return <hr className="h-[1px] border-none bg-neutral-200 dark:bg-neutral-700 mt-2" {...rest} />;
};
