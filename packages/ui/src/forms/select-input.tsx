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
        <label htmlFor={id} className="block mb-1 text-sm font-semibold text-gray-900 dark:text-white">
          <span>{label}</span>
        </label>
      ) : null}
      <select
        id={id}
        ref={ref}
        className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        {...rest}
      >
        {children}
      </select>
    </div>
  );
});
SelectInput.displayName = 'Select Input';
