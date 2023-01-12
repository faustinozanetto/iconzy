'use strict';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, 'default', { value: mod, enumerable: true }) : target,
    mod
  )
);
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Card: () => Card,
  ColorInput: () => ColorInput,
  RangeInput: () => RangeInput,
  SelectInput: () => SelectInput,
  Separator: () => Separator,
  TextInput: () => TextInput,
});
module.exports = __toCommonJS(src_exports);

// src/button/button.tsx
var import_clsx = __toESM(require('clsx'));
var React = __toESM(require('react'));
var import_jsx_runtime = require('react/jsx-runtime');
var colorSchemesStyles = {
  primary: {
    outline:
      'border-4 border-primary-300 dark:border-primary-600 hover:bg-primary-300 hover:text-primary-800 focus:ring-primary-300 dark:text-primary-200  dark:hover:bg-primary-600 dark:focus:ring-primary-500',
    solid:
      'bg-primary-200 text-primary-800 hover:bg-primary-300 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-900 dark:text-primary-200',
  },
  red: {
    outline:
      'border-4 border-red-300 dark:border-red-600 hover:bg-red-300 hover:text-red-800 focus:ring-red-300 dark:text-red-200  dark:hover:bg-red-600 dark:focus:ring-red-500',
    solid:
      'bg-red-200 text-red-800 hover:bg-red-300 focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-900 dark:text-red-200',
  },
  orange: {
    outline:
      'border-4 border-orange-300 dark:border-orange-600 hover:bg-orange-300 hover:text-orange-800 focus:ring-orange-300 dark:text-orange-200 dark:hover:bg-orange-600 dark:focus:ring-orange-500',
    solid:
      'bg-orange-200 text-orange-800 hover:bg-orange-300 focus:ring-orange-300 dark:bg-orange-700 dark:hover:bg-orange-900 dark:text-orange-200',
  },
  yellow: {
    outline:
      'border-4 border-yellow-300 dark:border-yellow-600 hover:bg-yellow-300 hover:text-yellow-800 focus:ring-yellow-300 dark:text-yellow-200  dark:hover:bg-yellow-600 dark:focus:ring-yellow-500',
    solid:
      'bg-yellow-200 text-yellow-800 hover:bg-yellow-300 focus:ring-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-900 dark:text-yellow-200',
  },
  green: {
    outline:
      'border-4 border-green-300 dark:border-green-600 hover:bg-green-300 hover:text-green-800 focus:ring-green-300 dark:text-green-200  dark:hover:bg-green-600 dark:focus:ring-green-500',
    solid:
      'bg-green-200 text-green-800 hover:bg-green-300 focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-900 dark:text-green-200',
  },
  blue: {
    outline:
      'border-4 border-blue-300 dark:border-blue-600 hover:bg-blue-300 hover:text-blue-800 focus:ring-blue-300 dark:text-blue-200  dark:hover:bg-blue-600 dark:focus:ring-blue-500',
    solid:
      'bg-blue-200 text-blue-800 hover:bg-blue-300 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-900 dark:text-blue-200',
  },
  indigo: {
    outline:
      'border-4 border-indigo-300 dark:border-indigo-600 hover:bg-indigo-300 hover:text-indigo-800 focus:ring-indigo-300 dark:text-indigo-200 dark:hover:bg-indigo-600 dark:focus:ring-indigo-500',
    solid:
      'bg-indigo-200 text-indigo-800 hover:bg-indigo-300 focus:ring-indigo-300 dark:bg-indigo-700 dark:hover:bg-indigo-900 dark:text-indigo-200',
  },
  purple: {
    outline:
      'border-4 border-purple-300 dark:border-purple-600 hover:bg-purple-300 hover:text-purple-800 focus:ring-purple-300 dark:text-purple-200  dark:hover:bg-purple-600 dark:focus:ring-purple-500',
    solid:
      'bg-purple-200 text-purple-800 hover:bg-purple-300 focus:ring-purple-300 dark:bg-purple-700 dark:hover:bg-purple-900 dark:text-purple-200',
  },
  teal: {
    outline:
      'border-4 border-teal-300 dark:border-teal-600 hover:bg-teal-300 hover:text-teal-800 focus:ring-teal-300 dark:text-teal-200  dark:hover:bg-teal-600 dark:focus:ring-teal-500',
    solid:
      'bg-teal-200 text-teal-800 hover:bg-teal-300 focus:ring-teal-300 dark:bg-teal-700 dark:hover:bg-teal-900 dark:text-teal-200',
  },
  pink: {
    outline:
      'border-4 border-pink-300 dark:border-pink-600 hover:bg-pink-300 hover:text-pink-800 focus:ring-pink-300 dark:text-pink-200  dark:hover:bg-pink-600 dark:focus:ring-pink-500',
    solid:
      'bg-pink-200 text-pink-800 hover:bg-pink-300 focus:ring-pink-300 dark:bg-primary-700 dark:hover:bg-pink-900 dark:text-pink-200',
  },
};
var Button = React.forwardRef((props, ref) => {
  const _a = props,
    { children, leftIcon, rightIcon, colorScheme = 'primary', size = 'md', variant = 'solid' } = _a,
    rest = __objRest(_a, ['children', 'leftIcon', 'rightIcon', 'colorScheme', 'size', 'variant']);
  const getButtonSizes = () => {
    switch (size) {
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
    return variant === 'solid' ? colorSchemesStyles[colorScheme].solid : colorSchemesStyles[colorScheme].outline;
  };
  const _b = rest,
    { className } = _b,
    excludedRest = __objRest(_b, ['className']);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    'button',
    __spreadProps(
      __spreadValues(
        {
          ref,
          type: 'button',
          className: (0, import_clsx.default)(
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
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)('div', {
              className: 'inline-flex shrink-0 self-center pr-1',
              children: leftIcon,
            }),
          children,
          rightIcon &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)('div', {
              className: 'inline-flex shrink-0 self-center pl-1',
              children: rightIcon,
            }),
        ],
      }
    )
  );
});
Button.displayName = 'Button';

// src/card/card.tsx
var import_clsx2 = __toESM(require('clsx'));
var import_react = __toESM(require('react'));
var import_jsx_runtime2 = require('react/jsx-runtime');
var Card = import_react.default.forwardRef((props, ref) => {
  const _a = props,
    { children, variant = 'portrait' } = _a,
    rest = __objRest(_a, ['children', 'variant']);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    'div',
    __spreadProps(
      __spreadValues(
        {
          className: (0, import_clsx2.default)(
            `group cursor-pointer overflow-hidden rounded-lg bg-neutral-50 shadow-lg dark:bg-neutral-800 ${rest.className}`,
            variant === 'portrait' && 'w-full md:max-w-sm',
            variant === 'landscape' && 'grid grid-cols-2'
          ),
        },
        rest
      ),
      {
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)('div', {
          className: 'flex w-full flex-col space-y-1 p-4 text-neutral-900 dark:text-neutral-100',
          children,
        }),
      }
    )
  );
});
Card.displayName = 'Card';

// src/forms/select-input.tsx
var import_react2 = __toESM(require('react'));
var import_jsx_runtime3 = require('react/jsx-runtime');
var SelectInput = import_react2.default.forwardRef((props, ref) => {
  const _a = props,
    { id, label, children } = _a,
    rest = __objRest(_a, ['id', 'label', 'children']);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)('div', {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)('label', {
        htmlFor: id,
        className: 'block mb-1 text-sm font-semibold text-gray-900 dark:text-white',
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)('span', { children: label }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_clsx3 = __toESM(require('clsx'));
var import_react4 = __toESM(require('react'));

// src/hooks/use-debounce.ts
var import_react3 = require('react');
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = (0, import_react3.useState)(value);
  (0, import_react3.useEffect)(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}
var use_debounce_default = useDebounce;

// src/forms/text-input.tsx
var import_jsx_runtime4 = require('react/jsx-runtime');
var TextInput = import_react4.default.forwardRef((props, ref) => {
  const _a = props,
    { id, icon, label, onValueChanged } = _a,
    rest = __objRest(_a, ['id', 'icon', 'label', 'onValueChanged']);
  const [value, setValue] = (0, import_react4.useState)('');
  const debouncedValue = use_debounce_default(value, 100);
  const handleChange = (event) => {
    const { value: value2 } = event.target;
    setValue(value2);
  };
  (0, import_react4.useEffect)(() => {
    onValueChanged(value);
  }, [debouncedValue]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)('div', {
    className: 'relative',
    children: [
      icon
        ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)('div', {
            className: 'absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none',
            children: icon,
          })
        : null,
      label
        ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)('label', {
            htmlFor: id,
            className: 'block mb-1 text-sm font-semibold text-gray-900 dark:text-white',
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)('span', { children: label }),
          })
        : null,
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        'input',
        __spreadValues(
          {
            id,
            ref,
            className: (0, import_clsx3.default)(
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
var import_jsx_runtime5 = require('react/jsx-runtime');
var Separator = (props) => {
  const rest = __objRest(props, []);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    'hr',
    __spreadValues({ className: 'h-[1px] border-none bg-neutral-200 dark:bg-neutral-700 mt-2' }, rest)
  );
};

// src/forms/range-input.tsx
var import_react5 = __toESM(require('react'));
var import_jsx_runtime6 = require('react/jsx-runtime');
var RangeInput = import_react5.default.forwardRef((props, ref) => {
  const _a = props,
    { id, label, onValueChanged } = _a,
    rest = __objRest(_a, ['id', 'label', 'onValueChanged']);
  const [value, setValue] = (0, import_react5.useState)(Number(rest.placeholder) || 0);
  const debouncedValue = use_debounce_default(value, 100);
  const handleChange = (event) => {
    const { value: value2 } = event.target;
    setValue(value2);
  };
  (0, import_react5.useEffect)(() => {
    onValueChanged(value);
  }, [debouncedValue]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)('div', {
    className: '',
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)('div', {
        className: 'flex items-center justify-between',
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)('label', {
          htmlFor: id,
          className: 'block font-semibold text-gray-900 dark:text-white',
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)('span', { children: label }),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)('div', {
        className: 'flex items-center justify-between',
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
var import_react6 = __toESM(require('react'));
var import_jsx_runtime7 = require('react/jsx-runtime');
var ColorInput = import_react6.default.forwardRef((props, ref) => {
  const _a = props,
    { id, label, onValueChanged } = _a,
    rest = __objRest(_a, ['id', 'label', 'onValueChanged']);
  const [value, setValue] = (0, import_react6.useState)(rest.placeholder || '');
  const debouncedValue = use_debounce_default(value, 100);
  const handleChange = (event) => {
    const { value: value2 } = event.target;
    setValue(value2);
  };
  (0, import_react6.useEffect)(() => {
    onValueChanged(value);
  }, [debouncedValue]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)('div', {
    className: '',
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)('div', {
        className: 'flex items-center justify-between mb-2',
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)('label', {
          htmlFor: id,
          className: 'block font-semibold text-gray-900 dark:text-white',
          children: label,
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)('div', {
        className: 'flex items-center justify-between',
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    Button,
    Card,
    ColorInput,
    RangeInput,
    SelectInput,
    Separator,
    TextInput,
  });
