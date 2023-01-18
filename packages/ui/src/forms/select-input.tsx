import React from 'react';

export type SelectInputProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'classsName'> & {
  children: React.ReactNode;
  label?: string;
};

export const SelectInput = React.forwardRef<HTMLSelectElement, SelectInputProps>((props, ref) => {
  const { id, label, children, ...rest } = props;

  return (
    <div className="relative">
      {label ? (
        <label htmlFor={id} className="mb-1 block text-sm font-semibold text-gray-900 dark:text-white">
          <span>{label}</span>
        </label>
      ) : null}
      <select
        id={id}
        ref={ref}
        className="focus-visible:ring-primary-500 focus-visible:border-primary-500 dark:focus-visible:ring-primary-500 dark:focus-visible:border-primary-500 block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400"
        {...rest}
      >
        {children}
      </select>
    </div>
  );
});
SelectInput.displayName = 'Select Input';
