var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value })
    : (obj[key] = value);
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop)) target[prop] = source[prop];
    }
  return target;
};

// src/button/button.tsx
import clsx from 'clsx';
import * as React from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
var colorSchemesStyles = {
  slate: {
    outline:
      'border-4 border-slate-300 dark:border-slate-600 hover:bg-slate-300 hover:text-slate-800 focus:ring-slate-300 dark:text-slate-200  dark:hover:bg-slate-600 dark:focus:ring-slate-500',
    solid:
      'bg-slate-200 text-slate-800 hover:bg-slate-300 focus:ring-slate-300 dark:bg-slate-700 dark:hover:bg-slate-900 dark:text-slate-200',
    ghost: 'text-slate-800 hover:bg-slate-300 focus:ring-slate-300 dark:hover:bg-slate-900 dark:text-slate-200',
  },
  gray: {
    outline:
      'border-4 border-gray-300 dark:border-gray-600 hover:bg-gray-300 hover:text-gray-800 focus:ring-gray-300 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-500',
    solid:
      'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-900 dark:text-gray-200',
    ghost: 'text-gray-800 hover:bg-gray-300 focus:ring-gray-300 dark:hover:bg-gray-900 dark:text-gray-200',
  },
  zinc: {
    outline:
      'border-4 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-300 hover:text-zinc-800 focus:ring-zinc-300 dark:text-zinc-200  dark:hover:bg-zinc-600 dark:focus:ring-zinc-500',
    solid:
      'bg-zinc-200 text-zinc-800 hover:bg-zinc-300 focus:ring-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-900 dark:text-zinc-200',
    ghost: 'text-zinc-800 hover:bg-slate-300 focus:ring-zinc-300 dark:hover:bg-zinc-900 dark:text-zinc-200',
  },
  neutral: {
    outline:
      'border-4 border-neutral-300 dark:border-neutral-600 hover:bg-neutral-300 hover:text-neutral-800 focus:ring-neutral-300 dark:text-neutral-200  dark:hover:bg-neutral-600 dark:focus:ring-neutral-500',
    solid:
      'bg-neutral-200 text-neutral-800 hover:bg-neutral-300 focus:ring-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-900 dark:text-neutral-200',
    ghost:
      'text-neutral-800 hover:bg-neutral-300 focus:ring-neutral-300 dark:hover:bg-neutral-900 dark:text-neutral-200',
  },
  stone: {
    outline:
      'border-4 border-stone-300 dark:border-stone-600 hover:bg-stone-300 hover:text-stone-800 focus:ring-stone-300 dark:text-stone-200  dark:hover:bg-stone-600 dark:focus:ring-stone-500',
    solid:
      'bg-stone-200 text-stone-800 hover:bg-stone-300 focus:ring-stone-300 dark:bg-stone-700 dark:hover:bg-stone-900 dark:text-stone-200',
    ghost: 'text-stone-800 hover:bg-stone-300 focus:ring-stone-300 dark:hover:bg-stone-900 dark:text-stone-200',
  },
  red: {
    outline:
      'border-4 border-red-300 dark:border-red-600 hover:bg-red-300 hover:text-red-800 focus:ring-red-300 dark:text-red-200 dark:hover:bg-red-600 dark:focus:ring-red-500',
    solid:
      'bg-red-200 text-red-800 hover:bg-red-300 focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-900 dark:text-red-200',
    ghost: 'text-red-800 hover:bg-red-300 focus:ring-red-300 dark:hover:bg-red-900 dark:text-red-200',
  },
  orange: {
    outline:
      'border-4 border-orange-300 dark:border-orange-600 hover:bg-orange-300 hover:text-orange-800 focus:ring-orange-300 dark:text-orange-200  dark:hover:bg-orange-600 dark:focus:ring-orange-500',
    solid:
      'bg-orange-200 text-orange-800 hover:bg-orange-300 focus:ring-orange-300 dark:bg-orange-700 dark:hover:bg-orange-900 dark:text-orange-200',
    ghost: 'text-orange-800 hover:bg-orange-300 focus:ring-orange-300 dark:hover:bg-orange-900 dark:text-orange-200',
  },
  amber: {
    outline:
      'border-4 border-amber-300 dark:border-amber-600 hover:bg-amber-300 hover:text-amber-800 focus:ring-amber-300 dark:text-amber-200  dark:hover:bg-amber-600 dark:focus:ring-amber-500',
    solid:
      'bg-amber-200 text-amber-800 hover:bg-amber-300 focus:ring-amber-300 dark:bg-amber-700 dark:hover:bg-amber-900 dark:text-amber-200',
    ghost: 'text-amber-800 hover:bg-amber-300 focus:ring-amber-300 dark:hover:bg-amber-900 dark:text-amber-200',
  },
  yellow: {
    outline:
      'border-4 border-yellow-300 dark:border-yellow-600 hover:bg-yellow-300 hover:text-yellow-800 focus:ring-yellow-300 dark:text-yellow-200  dark:hover:bg-yellow-600 dark:focus:ring-yellow-500',
    solid:
      'bg-yellow-200 text-yellow-800 hover:bg-yellow-300 focus:ring-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-900 dark:text-yellow-200',
    ghost: 'text-yellow-800 hover:bg-yellow-300 focus:ring-yellow-300 dark:hover:bg-yellow-900 dark:text-yellow-200',
  },
  lime: {
    outline:
      'border-4 border-lime-300 dark:border-lime-600 hover:bg-lime-300 hover:text-lime-800 focus:ring-lime-300 dark:text-lime-200 dark:hover:bg-lime-600 dark:focus:ring-lime-500',
    solid:
      'bg-lime-200 text-lime-800 hover:bg-lime-300 focus:ring-lime-300 dark:bg-lime-700 dark:hover:bg-lime-900 dark:text-lime-200',
    ghost: 'text-lime-800 hover:bg-lime-300 focus:ring-lime-300 dark:hover:bg-lime-900 dark:text-lime-200',
  },
  green: {
    outline:
      'border-4 border-green-300 dark:border-green-600 hover:bg-green-300 hover:text-green-800 focus:ring-green-300 dark:text-green-200  dark:hover:bg-green-600 dark:focus:ring-green-500',
    solid:
      'bg-green-200 text-green-800 hover:bg-green-300 focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-900 dark:text-green-200',
    ghost: 'text-green-800 hover:bg-green-300 focus:ring-green-300 dark:hover:bg-green-900 dark:text-green-200',
  },
  emerald: {
    outline:
      'border-4 border-emerald-300 dark:border-emerald-600 hover:bg-emerald-300 hover:text-emerald-800 focus:ring-emerald-300 dark:text-emerald-200  dark:hover:bg-emerald-600 dark:focus:ring-emerald-500',
    solid:
      'bg-emerald-200 text-emerald-800 hover:bg-emerald-300 focus:ring-emerald-300 dark:bg-emerald-700 dark:hover:bg-emerald-900 dark:text-emerald-200',
    ghost:
      'text-emerald-800 hover:bg-emerald-300 focus:ring-emerald-300 dark:hover:bg-emerald-900 dark:text-emerald-200',
  },
  teal: {
    outline:
      'border-4 border-teal-300 dark:border-teal-600 hover:bg-teal-300 hover:text-teal-800 focus:ring-teal-300 dark:text-teal-200  dark:hover:bg-teal-600 dark:focus:ring-teal-500',
    solid:
      'bg-teal-200 text-teal-800 hover:bg-teal-300 focus:ring-teal-300 dark:bg-teal-700 dark:hover:bg-teal-900 dark:text-teal-200',
    ghost: 'text-teal-800 hover:bg-teal-300 focus:ring-teal-300 dark:hover:bg-teal-900 dark:text-teal-200',
  },
  cyan: {
    outline:
      'border-4 border-cyan-300 dark:border-cyan-600 hover:bg-cyan-300 hover:text-cyan-800 focus:ring-cyan-300 dark:text-cyan-200 dark:hover:bg-cyan-600 dark:focus:ring-cyan-500',
    solid:
      'bg-cyan-200 text-cyan-800 hover:bg-cyan-300 focus:ring-cyan-300 dark:bg-cyan-700 dark:hover:bg-cyan-900 dark:text-cyan-200',
    ghost: 'text-cyan-800 hover:bg-cyan-300 focus:ring-cyan-300 dark:hover:bg-cyan-900 dark:text-cyan-200',
  },
  sky: {
    outline:
      'border-4 border-sky-300 dark:border-sky-600 hover:bg-sky-300 hover:text-sky-800 focus:ring-sky-300 dark:text-sky-200 dark:hover:bg-sky-600 dark:focus:ring-sky-500',
    solid:
      'bg-sky-200 text-sky-800 hover:bg-sky-300 focus:ring-sky-300 dark:bg-sky-700 dark:hover:bg-sky-900 dark:text-sky-200',
    ghost: 'text-sky-800 hover:bg-sky-300 focus:ring-sky-300 dark:hover:bg-sky-900 dark:text-sky-200',
  },
  blue: {
    outline:
      'border-4 border-blue-300 dark:border-blue-600 hover:bg-blue-300 hover:text-blue-800 focus:ring-blue-300 dark:text-blue-200 dark:hover:bg-blue-600 dark:focus:ring-blue-500',
    solid:
      'bg-blue-200 text-blue-800 hover:bg-blue-300 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-900 dark:text-blue-200',
    ghost: 'text-blue-800 hover:bg-blue-300 focus:ring-blue-300 dark:hover:bg-blue-900 dark:text-blue-200',
  },
  indigo: {
    outline:
      'border-4 border-indigo-300 dark:border-indigo-600 hover:bg-indigo-300 hover:text-indigo-800 focus:ring-indigo-300 dark:text-indigo-200  dark:hover:bg-indigo-600 dark:focus:ring-indigo-500',
    solid:
      'bg-indigo-200 text-indigo-800 hover:bg-indigo-300 focus:ring-indigo-300 dark:bg-indigo-700 dark:hover:bg-indigo-900 dark:text-indigo-200',
    ghost: 'text-indigo-800 hover:bg-indigo-300 focus:ring-indigo-300 dark:hover:bg-indigo-900 dark:text-indigo-200',
  },
  violet: {
    outline:
      'border-4 border-violet-300 dark:border-violet-600 hover:bg-violet-300 hover:text-violet-800 focus:ring-violet-300 dark:text-violet-200  dark:hover:bg-violet-600 dark:focus:ring-violet-500',
    solid:
      'bg-violet-200 text-violet-800 hover:bg-violet-300 focus:ring-violet-300 dark:bg-violet-700 dark:hover:bg-violet-900 dark:text-violet-200',
    ghost: 'text-violet-800 hover:bg-violet-300 focus:ring-violet-300 dark:hover:bg-violet-900 dark:text-violet-200',
  },
  purple: {
    outline:
      'border-4 border-purple-300 dark:border-purple-600 hover:bg-purple-300 hover:text-purple-800 focus:ring-purple-300 dark:text-purple-200  dark:hover:bg-purple-600 dark:focus:ring-purple-500',
    solid:
      'bg-purple-200 text-purple-800 hover:bg-purple-300 focus:ring-purple-300 dark:bg-purple-700 dark:hover:bg-purple-900 dark:text-purple-200',
    ghost: 'text-purple-800 hover:bg-purple-300 focus:ring-purple-300 dark:hover:bg-purple-900 dark:text-purple-200',
  },
  fuchsia: {
    outline:
      'border-4 border-fuchsia-300 dark:border-fuchsia-600 hover:bg-fuchsia-300 hover:text-fuchsia-800 focus:ring-fuchsia-300 dark:text-fuchsia-200  dark:hover:bg-fuchsia-600 dark:focus:ring-fuchsia-500',
    solid:
      'bg-fuchsia-200 text-fuchsia-800 hover:bg-fuchsia-300 focus:ring-fuchsia-300 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-900 dark:text-fuchsia-200',
    ghost:
      'text-fuchsia-800 hover:bg-fuchsia-300 focus:ring-fuchsia-300 dark:hover:bg-fuchsia-900 dark:text-fuchsia-200',
  },
  pink: {
    outline:
      'border-4 border-pink-300 dark:border-pink-600 hover:bg-pink-300 hover:text-pink-800 focus:ring-pink-300 dark:text-pink-200 dark:hover:bg-pink-600 dark:focus:ring-pink-500',
    solid:
      'bg-pink-200 text-pink-800 hover:bg-pink-300 focus:ring-pink-300 dark:bg-pink-700 dark:hover:bg-pink-900 dark:text-pink-200',
    ghost: 'text-pink-800 hover:bg-pink-300 focus:ring-pink-300 dark:hover:bg-pink-900 dark:text-pink-200',
  },
  rose: {
    outline:
      'border-4 border-rose-300 dark:border-rose-600 hover:bg-rose-300 hover:text-rose-800 focus:ring-rose-300 dark:text-rose-200 dark:hover:bg-rose-600 dark:focus:ring-rose-500',
    solid:
      'bg-rose-200 text-rose-800 hover:bg-rose-300 focus:ring-rose-300 dark:bg-rose-700 dark:hover:bg-rose-900 dark:text-rose-200',
    ghost: 'text-rose-800 hover:bg-rose-300 focus:ring-rose-300 dark:hover:bg-rose-900 dark:text-rose-200',
  },
  primary: {
    outline:
      'border-4 border-primary-300 dark:border-primary-600 hover:bg-primary-300 hover:text-primary-800 focus:ring-primary-300 dark:text-primary-200  dark:hover:bg-primary-600 dark:focus:ring-primary-500',
    solid:
      'bg-primary-200 text-primary-800 hover:bg-primary-300 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-900 dark:text-primary-200',
    ghost:
      'text-primary-800 hover:bg-primary-300 focus:ring-primary-300 dark:hover:bg-primary-900 dark:text-primary-200',
  },
};
var Button = React.forwardRef((props, ref) => {
  const _a = props,
    { children, leftIcon, rightIcon, colorScheme = 'primary', size = 'md', variant = 'solid' } = _a,
    rest = __objRest(_a, ['children', 'leftIcon', 'rightIcon', 'colorScheme', 'size', 'variant']);
  const getButtonSizes = () => {
    switch (size) {
      case 'xs':
        return 'py-1 px-1.5 text-sm';
      case 'sm':
        return 'py-2.5 px-3 text-base';
      case 'md':
        return 'px-5 py-2.5 text-md';
      case 'lg':
        return 'px-10 py-3.5 text-lg';
      default:
        return 'py-3 px-2.5 text-base';
    }
  };
  const getButtonVariants = () => {
    return colorSchemesStyles[colorScheme][variant];
  };
  const _b = rest,
    { className } = _b,
    excludedRest = __objRest(_b, ['className']);
  return /* @__PURE__ */ jsxs(
    'button',
    __spreadProps(
      __spreadValues(
        {
          ref,
          type: 'button',
          className: clsx(
            `inline-flex items-center justify-center rounded-lg text-base font-semibold transition-all focus:outline-none focus:ring-4`,
            getButtonSizes(),
            getButtonVariants(),
            rest.className
          ),
        },
        excludedRest
      ),
      {
        children: [
          leftIcon &&
            /* @__PURE__ */ jsx('div', { className: 'inline-flex shrink-0 self-center pr-1', children: leftIcon }),
          children,
          rightIcon &&
            /* @__PURE__ */ jsx('div', { className: 'inline-flex shrink-0 self-center pl-1', children: rightIcon }),
        ],
      }
    )
  );
});
Button.displayName = 'Button';

// src/card/card.tsx
import clsx2 from 'clsx';
import React2 from 'react';
import { jsx as jsx2 } from 'react/jsx-runtime';
var Card = React2.forwardRef((props, ref) => {
  const _a = props,
    { children, variant = 'portrait' } = _a,
    rest = __objRest(_a, ['children', 'variant']);
  return /* @__PURE__ */ jsx2(
    'div',
    __spreadProps(
      __spreadValues(
        {
          className: clsx2(
            `group cursor-pointer overflow-hidden rounded-lg bg-neutral-50 shadow-lg dark:bg-neutral-800 ${rest.className}`,
            variant === 'portrait' && 'w-full md:max-w-sm',
            variant === 'landscape' && 'grid grid-cols-2'
          ),
        },
        rest
      ),
      {
        children: /* @__PURE__ */ jsx2('div', {
          className: 'flex w-full flex-col space-y-1 p-4 text-neutral-900 dark:text-neutral-100',
          children,
        }),
      }
    )
  );
});
Card.displayName = 'Card';

// src/forms/select-input.tsx
import React3 from 'react';
import { jsx as jsx3, jsxs as jsxs2 } from 'react/jsx-runtime';
var SelectInput = React3.forwardRef((props, ref) => {
  const _a = props,
    { id, label, children } = _a,
    rest = __objRest(_a, ['id', 'label', 'children']);
  return /* @__PURE__ */ jsxs2('div', {
    children: [
      /* @__PURE__ */ jsx3('label', {
        htmlFor: id,
        className: 'block mb-1 text-sm font-semibold text-gray-900 dark:text-white',
        children: /* @__PURE__ */ jsx3('span', { children: label }),
      }),
      /* @__PURE__ */ jsx3(
        'select',
        __spreadProps(
          __spreadValues(
            {
              id,
              ref,
              className:
                'bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500',
            },
            rest
          ),
          {
            children,
          }
        )
      ),
    ],
  });
});
SelectInput.displayName = 'Select Input';

// src/forms/text-input.tsx
import clsx3 from 'clsx';
import React4, { useEffect as useEffect2, useState as useState2 } from 'react';

// src/hooks/use-debounce.ts
import { useEffect, useState } from 'react';
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}
var use_debounce_default = useDebounce;

// src/forms/text-input.tsx
import { jsx as jsx4, jsxs as jsxs3 } from 'react/jsx-runtime';
var TextInput = React4.forwardRef((props, ref) => {
  const _a = props,
    { id, icon, label, onValueChanged } = _a,
    rest = __objRest(_a, ['id', 'icon', 'label', 'onValueChanged']);
  const [value, setValue] = useState2('');
  const debouncedValue = use_debounce_default(value, 100);
  const handleChange = (event) => {
    const { value: value2 } = event.target;
    setValue(value2);
  };
  useEffect2(() => {
    onValueChanged(value);
  }, [debouncedValue]);
  return /* @__PURE__ */ jsxs3('div', {
    className: 'relative',
    children: [
      icon
        ? /* @__PURE__ */ jsx4('div', {
            className: 'absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none',
            children: icon,
          })
        : null,
      label
        ? /* @__PURE__ */ jsx4('label', {
            htmlFor: id,
            className: 'block mb-1 text-sm font-semibold text-gray-900 dark:text-white',
            children: /* @__PURE__ */ jsx4('span', { children: label }),
          })
        : null,
      /* @__PURE__ */ jsx4(
        'input',
        __spreadValues(
          {
            id,
            ref,
            className: clsx3(
              'bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500',
              icon ? 'pl-10' : ''
            ),
            value,
            onChange: handleChange,
          },
          rest
        )
      ),
    ],
  });
});
TextInput.displayName = 'Text Input';

// src/common/separator.tsx
import { jsx as jsx5 } from 'react/jsx-runtime';
var Separator = (props) => {
  const rest = __objRest(props, []);
  return /* @__PURE__ */ jsx5(
    'hr',
    __spreadValues({ className: 'h-[1px] border-none bg-neutral-200 dark:bg-neutral-700 mt-2' }, rest)
  );
};

// src/forms/range-input.tsx
import React5, { useEffect as useEffect3, useState as useState3 } from 'react';
import { jsx as jsx6, jsxs as jsxs4 } from 'react/jsx-runtime';
var RangeInput = React5.forwardRef((props, ref) => {
  const _a = props,
    { id, label, onValueChanged } = _a,
    rest = __objRest(_a, ['id', 'label', 'onValueChanged']);
  const [value, setValue] = useState3(Number(rest.placeholder) || 0);
  const debouncedValue = use_debounce_default(value, 100);
  const handleChange = (event) => {
    const { value: value2 } = event.target;
    setValue(value2);
  };
  useEffect3(() => {
    onValueChanged(value);
  }, [debouncedValue]);
  return /* @__PURE__ */ jsxs4('div', {
    className: 'space-y-2',
    children: [
      /* @__PURE__ */ jsxs4('div', {
        className: 'flex items-center justify-between',
        children: [
          /* @__PURE__ */ jsx6('label', {
            htmlFor: id,
            className: 'block font-semibold text-gray-900 dark:text-white',
            children: /* @__PURE__ */ jsx6('span', { children: label }),
          }),
          /* @__PURE__ */ jsx6(Button, {
            size: 'xs',
            colorScheme: 'red',
            variant: 'ghost',
            onClick: () => {
              setValue(Number(rest.placeholder) || 0);
            },
            children: 'Reset',
          }),
        ],
      }),
      /* @__PURE__ */ jsxs4('div', {
        className: 'flex items-center justify-between',
        children: [
          /* @__PURE__ */ jsx6(
            'input',
            __spreadValues(
              {
                id,
                ref,
                className: 'w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700',
                type: 'range',
                value,
                onChange: handleChange,
              },
              rest
            )
          ),
          /* @__PURE__ */ jsx6(
            'input',
            __spreadValues(
              {
                id,
                className:
                  'max-w-[50px] ml-4 text-center rounded-lg h-9 font-bold border-neutral-300 border-[1px] dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300',
                type: 'text',
                value,
                onChange: handleChange,
              },
              rest
            )
          ),
        ],
      }),
    ],
  });
});
RangeInput.displayName = 'Range Input';

// src/forms/color-input.tsx
import React6, { useEffect as useEffect4, useState as useState4 } from 'react';
import { jsx as jsx7, jsxs as jsxs5 } from 'react/jsx-runtime';
var ColorInput = React6.forwardRef((props, ref) => {
  const _a = props,
    { id, label, onValueChanged } = _a,
    rest = __objRest(_a, ['id', 'label', 'onValueChanged']);
  const [value, setValue] = useState4(rest.placeholder || '');
  const debouncedValue = use_debounce_default(value, 100);
  const handleChange = (event) => {
    const { value: value2 } = event.target;
    setValue(value2);
  };
  useEffect4(() => {
    onValueChanged(value);
  }, [debouncedValue]);
  return /* @__PURE__ */ jsxs5('div', {
    className: '',
    children: [
      /* @__PURE__ */ jsxs5('div', {
        className: 'flex items-center justify-between',
        children: [
          /* @__PURE__ */ jsx7('label', {
            htmlFor: id,
            className: 'block font-semibold text-gray-900 dark:text-white',
            children: /* @__PURE__ */ jsx7('span', { children: label }),
          }),
          /* @__PURE__ */ jsx7(Button, {
            size: 'xs',
            colorScheme: 'red',
            variant: 'ghost',
            onClick: () => {
              setValue(rest.placeholder || '#000000');
            },
            children: 'Reset',
          }),
        ],
      }),
      /* @__PURE__ */ jsxs5('div', {
        className: 'flex items-center justify-between',
        children: [
          /* @__PURE__ */ jsx7(
            'input',
            __spreadValues(
              {
                className: 'w-11 h-12 border-none cursor-pointer appearance-none color-input',
                id,
                ref,
                type: 'color',
                value,
                onChange: handleChange,
              },
              rest
            )
          ),
          /* @__PURE__ */ jsx7(
            'input',
            __spreadValues(
              {
                id,
                className:
                  'max-w-[120px] text-start p-2 rounded-md h-10 font-bold border-neutral-300 border-[1px] dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300',
                type: 'text',
                value,
                onChange: handleChange,
              },
              rest
            )
          ),
        ],
      }),
    ],
  });
});
ColorInput.displayName = 'Color Input';
export { Button, Card, ColorInput, RangeInput, SelectInput, Separator, TextInput };
