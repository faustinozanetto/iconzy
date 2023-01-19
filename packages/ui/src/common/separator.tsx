import React from 'react';

export type SeparatorProps = Omit<React.HTMLAttributes<HTMLHRElement>, 'className'>;

export const Separator: React.FC<SeparatorProps> = (props) => {
  const { ...rest } = props;

  return (
    <hr
      aria-orientation="horizontal"
      className="my-2 h-[1px] border-none bg-neutral-200 dark:bg-neutral-700"
      {...rest}
    />
  );
};
