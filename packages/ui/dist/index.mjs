var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/animation/fade-animated.tsx
import { m } from "framer-motion";
import { jsx } from "react/jsx-runtime";
var FadeAnimated = (props) => {
  const { children } = props;
  return /* @__PURE__ */ jsx(
    m.div,
    {
      initial: { opacity: 0 },
      animate: {
        opacity: 1
      },
      exit: { opacity: 0 },
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      },
      children
    }
  );
};

// src/button/button.tsx
import clsx from "clsx";
import * as React from "react";

// src/button/button-styles.ts
var BUTTON_SIZES = {
  xs: "px-2 h-6 min-w-[1.5rem] text-[0.75rem]",
  sm: "px-3 h-8 min-w-[2rem] text-[0.875rem]",
  md: "px-4 h-10 min-w-[2.5rem] text-[1rem]",
  lg: "px-6 h-12 min-w-[3rem] text-[1.125rem]",
  xl: "px-6 h-16 min-w-[3.5rem] text-[1.125rem]"
};
var BUTTON_COLOR_SCHEMES = {
  plain: {
    outline: "border-4 border-slate-300 dark:border-slate-600 hover:bg-slate-400 hover:border-slate-400 focus-visible:ring-slate-300 dark:hover:bg-slate-600 dark:focus-visible:ring-slate-500",
    solid: "bg-white hover:bg-neutral-50 focus-visible:ring-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800",
    ghost: "hover:bg-white focus-visible:ring-slate-300 dark:hover:bg-black"
  },
  slate: {
    outline: "border-4 border-slate-300 dark:border-slate-600 hover:bg-slate-400 hover:border-slate-400 focus-visible:ring-slate-300 dark:hover:bg-slate-600 dark:focus-visible:ring-slate-500",
    solid: "bg-slate-300 hover:bg-slate-400 focus-visible:ring-slate-300 dark:bg-slate-700 dark:hover:bg-slate-900",
    ghost: "hover:bg-slate-400 focus-visible:ring-slate-300 dark:hover:bg-slate-900"
  },
  gray: {
    outline: "border-4 border-gray-300 dark:border-gray-600 hover:bg-gray-400 hover:border-gray-400 focus-visible:ring-gray-300 dark:hover:bg-gray-600 dark:focus-visible:ring-gray-500",
    solid: "bg-gray-300 hover:bg-gray-400 focus-visible:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-900",
    ghost: "hover:bg-gray-400 focus-visible:ring-gray-300 dark:hover:bg-gray-900"
  },
  zinc: {
    outline: "border-4 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-400 hover:border-zinc-400 focus-visible:ring-zinc-300 dark:hover:bg-zinc-600 dark:focus-visible:ring-zinc-500",
    solid: "bg-zinc-300 hover:bg-zinc-400 focus-visible:ring-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-900",
    ghost: "hover:bg-zinc-400 focus-visible:ring-zinc-300 dark:hover:bg-zinc-900"
  },
  neutral: {
    outline: "border-4 border-neutral-300 dark:border-neutral-600 hover:bg-neutral-400 hover:border-neutral-400 focus-visible:ring-neutral-300 dark:hover:bg-neutral-600 dark:focus-visible:ring-neutral-500",
    solid: "bg-neutral-300 hover:bg-neutral-400 focus-visible:ring-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-900",
    ghost: "hover:bg-neutral-400 focus-visible:ring-neutral-300 dark:hover:bg-neutral-900 "
  },
  stone: {
    outline: "border-4 border-stone-300 dark:border-stone-600 hover:bg-stone-400 hover:border-stone-400 focus-visible:ring-stone-300 dark:hover:bg-stone-600 dark:focus-visible:ring-stone-500",
    solid: "bg-stone-300 hover:bg-stone-400 focus-visible:ring-stone-300 dark:bg-stone-700 dark:hover:bg-stone-900",
    ghost: "hover:bg-stone-400 focus-visible:ring-stone-300 dark:hover:bg-stone-900"
  },
  red: {
    outline: "border-4 border-red-300 dark:border-red-600 hover:bg-red-400 hover:border-red-400 focus-visible:ring-red-300 dark:hover:bg-red-600 dark:focus-visible:ring-red-500",
    solid: "bg-red-300 hover:bg-red-400 focus-visible:ring-red-300 dark:bg-red-700 dark:hover:bg-red-900",
    ghost: "hover:bg-red-400 focus-visible:ring-red-300 dark:hover:bg-red-900"
  },
  orange: {
    outline: "border-4 border-orange-300 dark:border-orange-600 hover:bg-orange-400 hover:border-orange-400 focus-visible:ring-orange-300 dark:hover:bg-orange-600 dark:focus-visible:ring-orange-500",
    solid: "bg-orange-300 hover:bg-orange-400 focus-visible:ring-orange-300 dark:bg-orange-700 dark:hover:bg-orange-900",
    ghost: "hover:bg-orange-400 focus-visible:ring-orange-300 dark:hover:bg-orange-900"
  },
  amber: {
    outline: "border-4 border-amber-300 dark:border-amber-600 hover:bg-amber-400 hover:border-amber-400 focus-visible:ring-amber-300 dark:hover:bg-amber-600 dark:focus-visible:ring-amber-500",
    solid: "bg-amber-300 hover:bg-amber-400 focus-visible:ring-amber-300 dark:bg-amber-700 dark:hover:bg-amber-900",
    ghost: "hover:bg-amber-400 focus-visible:ring-amber-300 dark:hover:bg-amber-900"
  },
  yellow: {
    outline: "border-4 border-yellow-300 dark:border-yellow-600 hover:bg-yellow-400 hover:border-yellow-400 focus-visible:ring-yellow-300 dark:hover:bg-yellow-600 dark:focus-visible:ring-yellow-500",
    solid: "bg-yellow-300 hover:bg-yellow-400 focus-visible:ring-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-900",
    ghost: "hover:bg-yellow-400 focus-visible:ring-yellow-300 dark:hover:bg-yellow-900"
  },
  lime: {
    outline: "border-4 border-lime-300 dark:border-lime-600 hover:bg-lime-400 hover:border-lime-400 focus-visible:ring-lime-300 dark:hover:bg-lime-600 dark:focus-visible:ring-lime-500",
    solid: "bg-lime-300 hover:bg-lime-400 focus-visible:ring-lime-300 dark:bg-lime-700 dark:hover:bg-lime-900",
    ghost: "hover:bg-lime-400 focus-visible:ring-lime-300 dark:hover:bg-lime-900"
  },
  green: {
    outline: "border-4 border-green-300 dark:border-green-600 hover:bg-green-400 hover:border-green-400 focus-visible:ring-green-300 dark:hover:bg-green-600 dark:focus-visible:ring-green-500",
    solid: "bg-green-300 hover:bg-green-400 focus-visible:ring-green-300 dark:bg-green-700 dark:hover:bg-green-900",
    ghost: "hover:bg-green-400 focus-visible:ring-green-300 dark:hover:bg-green-900"
  },
  emerald: {
    outline: "border-4 border-emerald-300 dark:border-emerald-600 hover:bg-emerald-400 hover:border-emerald-400 focus-visible:ring-emerald-300 dark:hover:bg-emerald-600 dark:focus-visible:ring-emerald-500",
    solid: "bg-emerald-300 hover:bg-emerald-400 focus-visible:ring-emerald-300 dark:bg-emerald-700 dark:hover:bg-emerald-900",
    ghost: "hover:bg-emerald-400 focus-visible:ring-emerald-300 dark:hover:bg-emerald-900"
  },
  teal: {
    outline: "border-4 border-teal-300 dark:border-teal-600 hover:bg-teal-400 hover:border-teal-400 focus-visible:ring-teal-300 dark:hover:bg-teal-600 dark:focus-visible:ring-teal-500",
    solid: "bg-teal-300 hover:bg-teal-400 focus-visible:ring-teal-300 dark:bg-teal-700 dark:hover:bg-teal-900",
    ghost: "hover:bg-teal-400 focus-visible:ring-teal-300 dark:hover:bg-teal-900"
  },
  cyan: {
    outline: "border-4 border-cyan-300 dark:border-cyan-600 hover:bg-cyan-400 hover:border-cyan-400 focus-visible:ring-cyan-300 dark:hover:bg-cyan-600 dark:focus-visible:ring-cyan-500",
    solid: "bg-cyan-300 hover:bg-cyan-400 focus-visible:ring-cyan-300 dark:bg-cyan-700 dark:hover:bg-cyan-900",
    ghost: "hover:bg-cyan-400 focus-visible:ring-cyan-300 dark:hover:bg-cyan-900"
  },
  sky: {
    outline: "border-4 border-sky-300 dark:border-sky-600 hover:bg-sky-400 hover:border-sky-400 focus-visible:ring-sky-300 dark:hover:bg-sky-600 dark:focus-visible:ring-sky-500",
    solid: "bg-sky-300 hover:bg-sky-400 focus-visible:ring-sky-300 dark:bg-sky-700 dark:hover:bg-sky-900",
    ghost: "hover:bg-sky-400 focus-visible:ring-sky-300 dark:hover:bg-sky-900 "
  },
  blue: {
    outline: "border-4 border-blue-300 dark:border-blue-600 hover:bg-blue-400 hover:border-blue-400 focus-visible:ring-blue-300 dark:hover:bg-blue-600 dark:focus-visible:ring-blue-500",
    solid: "bg-blue-300 hover:bg-blue-400 focus-visible:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-900",
    ghost: "hover:bg-blue-400 focus-visible:ring-blue-300 dark:hover:bg-blue-900"
  },
  indigo: {
    outline: "border-4 border-indigo-300 dark:border-indigo-600 hover:bg-indigo-400 hover:border-indigo-400 focus-visible:ring-indigo-300 dark:hover:bg-indigo-600 dark:focus-visible:ring-indigo-500",
    solid: "bg-indigo-300 hover:bg-indigo-400 focus-visible:ring-indigo-300 dark:bg-indigo-700 dark:hover:bg-indigo-900",
    ghost: "hover:bg-indigo-400 focus-visible:ring-indigo-300 dark:hover:bg-indigo-900"
  },
  violet: {
    outline: "border-4 border-violet-300 dark:border-violet-600 hover:bg-violet-400 hover:border-violet-400 focus-visible:ring-violet-300 dark:hover:bg-violet-600 dark:focus-visible:ring-violet-500",
    solid: "bg-violet-300 hover:bg-violet-400 focus-visible:ring-violet-300 dark:bg-violet-700 dark:hover:bg-violet-900",
    ghost: "hover:bg-violet-400 focus-visible:ring-violet-300 dark:hover:bg-violet-900"
  },
  purple: {
    outline: "border-4 border-purple-300 dark:border-purple-600 hover:bg-purple-400 hover:border-purple-400 focus-visible:ring-purple-300 dark:hover:bg-purple-600 dark:focus-visible:ring-purple-500",
    solid: "bg-purple-300 hover:bg-purple-400 focus-visible:ring-purple-300 dark:bg-purple-700 dark:hover:bg-purple-900",
    ghost: "hover:bg-purple-400 focus-visible:ring-purple-300 dark:hover:bg-purple-900"
  },
  fuchsia: {
    outline: "border-4 border-fuchsia-300 dark:border-fuchsia-600 hover:bg-fuchsia-400 hover:border-fuchsia-400 focus-visible:ring-fuchsia-300 dark:hover:bg-fuchsia-600 dark:focus-visible:ring-fuchsia-500",
    solid: "bg-fuchsia-300 hover:bg-fuchsia-400 focus-visible:ring-fuchsia-300 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-900",
    ghost: "hover:bg-fuchsia-400 focus-visible:ring-fuchsia-300 dark:hover:bg-fuchsia-900"
  },
  pink: {
    outline: "border-4 border-pink-300 dark:border-pink-600 hover:bg-pink-400 hover:border-pink-400 focus-visible:ring-pink-300 dark:hover:bg-pink-600 dark:focus-visible:ring-pink-500",
    solid: "bg-pink-300 hover:bg-pink-400 focus-visible:ring-pink-300 dark:bg-pink-700 dark:hover:bg-pink-900",
    ghost: "hover:bg-pink-400 focus-visible:ring-pink-300 dark:hover:bg-pink-900"
  },
  rose: {
    outline: "border-4 border-rose-300 dark:border-rose-600 hover:bg-rose-400 hover:border-rose-400 focus-visible:ring-rose-300 dark:hover:bg-rose-600 dark:focus-visible:ring-rose-500",
    solid: "bg-rose-300 hover:bg-rose-400 focus-visible:ring-rose-300 dark:bg-rose-700 dark:hover:bg-rose-900",
    ghost: "hover:bg-rose-400 focus-visible:ring-rose-300 dark:hover:bg-rose-900"
  },
  primary: {
    outline: "border-4 border-primary-300 dark:border-primary-600 hover:bg-primary-400 hover:border-primary-400 focus-visible:ring-primary-300 dark:hover:bg-primary-600 dark:focus-visible:ring-primary-500",
    solid: "bg-primary-300 hover:bg-primary-400 focus-visible:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-900",
    ghost: "hover:bg-primary-400 focus-visible:ring-primary-300 dark:hover:bg-primary-900"
  }
};

// src/button/button.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Button = React.forwardRef((props, ref) => {
  const _a = props, {
    children,
    leftIcon,
    rightIcon,
    colorScheme = "primary",
    size = "md",
    variant = "solid",
    isDisabled = false
  } = _a, rest = __objRest(_a, [
    "children",
    "leftIcon",
    "rightIcon",
    "colorScheme",
    "size",
    "variant",
    "isDisabled"
  ]);
  const _b = rest, { className } = _b, excludedRest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxs(
    "button",
    __spreadProps(__spreadValues({
      ref,
      type: "button",
      disabled: isDisabled,
      className: clsx(
        `inline-flex appearance-none items-center justify-center select-none relative whitespace-nowrap align-middle leading-[1.2] rounded-lg font-medium focus-visible:outline-none focus-visible:ring-4 transition-colors text-neutral-900 dark:text-neutral-50 disabled:cursor-not-allowed`,
        BUTTON_SIZES[size],
        BUTTON_COLOR_SCHEMES[colorScheme][variant],
        rest.className
      )
    }, excludedRest), {
      children: [
        leftIcon && /* @__PURE__ */ jsx2("span", { className: "inline-flex shrink-0 self-center mr-2", children: leftIcon }),
        children,
        rightIcon && /* @__PURE__ */ jsx2("span", { className: "inline-flex shrink-0 self-center ml-2", children: rightIcon })
      ]
    })
  );
});
Button.displayName = "Button";

// src/button/icon-button.tsx
import clsx2 from "clsx";
import * as React2 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var IconButton = React2.forwardRef((props, ref) => {
  const _a = props, { icon, colorScheme = "primary", size = "md", variant = "solid" } = _a, rest = __objRest(_a, ["icon", "colorScheme", "size", "variant"]);
  const _b = rest, { className } = _b, excludedRest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx3(
    "button",
    __spreadProps(__spreadValues({
      ref,
      type: "button",
      className: clsx2(
        `inline-flex appearance-none items-center justify-center select-none relative whitespace-nowrap align-middle leading-[1.2] rounded-lg font-semibold focus-visible:outline-none focus-visible:ring-4 transition-colors text-neutral-900 dark:text-neutral-50 !p-0`,
        BUTTON_SIZES[size],
        BUTTON_COLOR_SCHEMES[colorScheme][variant],
        rest.className
      )
    }, excludedRest), {
      children: icon
    })
  );
});
IconButton.displayName = "Icon Button";

// src/common/separator.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Separator = (props) => {
  const rest = __objRest(props, []);
  return /* @__PURE__ */ jsx4(
    "hr",
    __spreadValues({
      "aria-orientation": "horizontal",
      className: "my-2 h-[1px] border-none bg-neutral-200 dark:bg-neutral-700"
    }, rest)
  );
};

// src/common/tooltip.tsx
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Fragment, jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var Tooltip = ({ text, children }) => {
  var _a, _b, _c;
  const [isVisible, setIsVisible] = useState(false);
  const [portalRoot, setPortalRoot] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPortalRoot(document.getElementById("tooltip-root"));
    }
  }, []);
  return /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx5("div", { ref, onMouseEnter: () => setIsVisible(true), onMouseLeave: () => setIsVisible(false), children }),
    isVisible && portalRoot && createPortal(
      /* @__PURE__ */ jsx5(
        "div",
        {
          className: "bg-gray-800 text-white rounded py-2 px-3 absolute",
          style: {
            left: (_a = ref.current) == null ? void 0 : _a.offsetLeft,
            top: ((_b = ref.current) == null ? void 0 : _b.offsetTop) - ((_c = ref.current) == null ? void 0 : _c.clientHeight) / 2
          },
          children: text
        }
      ),
      portalRoot
    )
  ] });
};

// src/forms/color-input.tsx
import React5, { useEffect as useEffect2, useState as useState3 } from "react";

// src/forms/input-wrapper.tsx
import { useState as useState2 } from "react";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var InputWrapper = (props) => {
  const { id, label, disabled, onInputReseted, children, reseteable = true, initiallyCollapsed = false } = props;
  const [inputCollapsed, setInputCollapsed] = useState2(initiallyCollapsed);
  const handleInputCollapse = () => {
    setInputCollapsed((prev) => !prev);
  };
  const renderButtonIcon = inputCollapsed ? /* @__PURE__ */ jsxs3(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100",
      strokeLinejoin: "round",
      strokeLinecap: "round",
      strokeWidth: "2",
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ jsx6("line", { y2: "5", x2: "12", y1: "19", x1: "12", width: "35", height: "35", strokeWidth: "2" }),
        /* @__PURE__ */ jsx6("polyline", { points: "5 12 12 5 19 12", width: "35", height: "35", strokeWidth: "2" })
      ]
    }
  ) : /* @__PURE__ */ jsxs3(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100",
      strokeLinejoin: "round",
      strokeLinecap: "round",
      strokeWidth: "2",
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ jsx6("line", { y2: "19", x2: "12", y1: "5", x1: "12", width: "35", height: "35", strokeWidth: "2" }),
        /* @__PURE__ */ jsx6("polyline", { points: "19 12 12 19 5 12", width: "35", height: "35", strokeWidth: "2" })
      ]
    }
  );
  return /* @__PURE__ */ jsxs3("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx6("label", { htmlFor: id, className: "block font-semibold text-gray-900 dark:text-white text-sm", children: /* @__PURE__ */ jsx6("span", { children: label }) }),
      /* @__PURE__ */ jsxs3("div", { className: "flex items-center space-x-1", children: [
        reseteable ? /* @__PURE__ */ jsx6(
          Button,
          {
            size: "sm",
            variant: "ghost",
            "aria-label": "Reset Input",
            colorScheme: "red",
            isDisabled: disabled,
            onClick: onInputReseted,
            children: "Reset"
          }
        ) : null,
        /* @__PURE__ */ jsx6(
          IconButton,
          {
            size: "sm",
            "aria-label": "Collapse Input",
            colorScheme: "stone",
            onClick: handleInputCollapse,
            icon: renderButtonIcon
          }
        )
      ] })
    ] }),
    !inputCollapsed && /* @__PURE__ */ jsx6(FadeAnimated, { children }, `input-${id}`)
  ] });
};

// src/forms/color-input.tsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var ColorInput = React5.forwardRef((props, ref) => {
  const _a = props, { id = "default-id", label, onValueChanged } = _a, rest = __objRest(_a, ["id", "label", "onValueChanged"]);
  const [value, setValue] = useState3(rest.placeholder || "");
  const handleChange = (event) => {
    const { value: updatedValue } = event.target;
    setValue(updatedValue);
  };
  useEffect2(() => {
    onValueChanged(value);
  }, [value]);
  return /* @__PURE__ */ jsx7(
    InputWrapper,
    {
      id,
      label,
      disabled: rest.disabled || false,
      onInputReseted: () => {
        setValue(rest.placeholder || "#a781ee");
      },
      children: /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-between ", children: [
        /* @__PURE__ */ jsx7(
          "input",
          __spreadValues({
            className: "color-input h-12 w-11 shrink-0 cursor-pointer appearance-none border-none",
            id,
            ref,
            type: "color",
            value,
            onChange: handleChange
          }, rest)
        ),
        /* @__PURE__ */ jsx7(
          "input",
          __spreadValues({
            id: `manual-${id}`,
            className: "h-10 w-full rounded-md border-[1px] border-neutral-300 bg-neutral-100 p-2 text-start font-bold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 ml-4",
            type: "text",
            value,
            onChange: handleChange
          }, rest)
        )
      ] })
    }
  );
});
ColorInput.displayName = "Color Input";

// src/forms/multi-button-input.tsx
import { useEffect as useEffect3, useState as useState4 } from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var MultiButtonInput = (props) => {
  const { id, label, options, defaultSelected, colorScheme = "primary", onValueChanged, optionRender } = props;
  const [value, setValue] = useState4(defaultSelected || options[0]);
  const handleChange = (selectedOption) => {
    setValue(selectedOption);
  };
  useEffect3(() => {
    onValueChanged(value);
  }, [value]);
  useEffect3(() => {
    if (defaultSelected)
      setValue(defaultSelected);
  }, [defaultSelected]);
  return /* @__PURE__ */ jsx8(InputWrapper, { id, label, disabled: false, reseteable: false, children: /* @__PURE__ */ jsx8("div", { className: "grid multi-button-wrapper gap-2", children: options.map((option) => {
    const isCurrentlySelected = option === value;
    return /* @__PURE__ */ jsx8(
      Button,
      {
        size: "sm",
        colorScheme,
        className: "w-full",
        "aria-label": `Option ${option}`,
        variant: isCurrentlySelected ? "solid" : "ghost",
        onClick: () => handleChange(option),
        children: optionRender(option)
      },
      option == null ? void 0 : option.toString()
    );
  }) }) });
};

// src/forms/range-input.tsx
import React7, { useEffect as useEffect4, useState as useState5 } from "react";

// src/utils/index.ts
var defaultColors = {
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337"
  },
  primary: {
    50: "#e0e7ff",
    100: "#f0ebfe",
    200: "#e1d7fd",
    300: "#d2c3fc",
    400: "#c3affb",
    500: "#b49bfa",
    600: "#a586f9",
    700: "#9672f8",
    800: "#875ef7",
    900: "#784af6"
  }
};

// src/forms/range-input.tsx
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
var RangeInput = React7.forwardRef((props, ref) => {
  const _a = props, { id = "default-id", label, onValueChanged } = _a, rest = __objRest(_a, ["id", "label", "onValueChanged"]);
  const [value, setValue] = useState5(Number(rest.placeholder) || 0);
  const handleChange = (event) => {
    const { value: updatedValue } = event.target;
    setValue(Number(updatedValue));
  };
  useEffect4(() => {
    onValueChanged(Number(value));
  }, [value]);
  const sliderControllerPosition = value / (Number(rest.max) || 100) * 100;
  return /* @__PURE__ */ jsx9(
    InputWrapper,
    {
      id,
      label,
      disabled: rest.disabled || false,
      onInputReseted: () => {
        setValue(Number(rest.placeholder) || 0);
      },
      children: /* @__PURE__ */ jsxs5("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx9(
          "input",
          __spreadValues({
            id,
            ref,
            className: "h-2 w-full cursor-pointer appearance-none rounded-lg bg-neutral-200 dark:bg-neutral-700 disabled:cursor-not-allowed",
            type: "range",
            value,
            onChange: handleChange,
            style: {
              background: `linear-gradient(to right, ${defaultColors.primary[500]} ${sliderControllerPosition}%, gray 0%)`
            }
          }, rest)
        ),
        /* @__PURE__ */ jsx9(
          "input",
          __spreadValues({
            id: `manual-${id}`,
            className: "ml-4 h-9 max-w-[50px] rounded-lg border-[1px] border-neutral-300 bg-neutral-100 text-center font-bold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 disabled:cursor-not-allowed",
            type: "text",
            inputMode: "numeric",
            value,
            onChange: handleChange
          }, rest)
        )
      ] })
    }
  );
});
RangeInput.displayName = "Range Input";

// src/forms/select-input.tsx
import React8 from "react";
import { jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
var SelectInput = React8.forwardRef((props, ref) => {
  const _a = props, { id, label, children } = _a, rest = __objRest(_a, ["id", "label", "children"]);
  return /* @__PURE__ */ jsxs6("div", { className: "relative", children: [
    label ? /* @__PURE__ */ jsx10("label", { htmlFor: id, className: "mb-1 block text-sm font-semibold text-gray-900 dark:text-white", children: /* @__PURE__ */ jsx10("span", { children: label }) }) : null,
    /* @__PURE__ */ jsx10(
      "select",
      __spreadProps(__spreadValues({
        id,
        ref,
        className: "focus-visible:ring-primary-500 focus-visible:border-primary-500 dark:focus-visible:ring-primary-500 dark:focus-visible:border-primary-500 block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400"
      }, rest), {
        children
      })
    )
  ] });
});
SelectInput.displayName = "Select Input";

// src/forms/select-input-sort.tsx
import { useRef as useRef2, useState as useState6 } from "react";
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
var SelectInputSort = (props) => {
  const _a = props, { id, label, children, initialSortCriteria, onValueChanged } = _a, rest = __objRest(_a, ["id", "label", "children", "initialSortCriteria", "onValueChanged"]);
  const selectInputRef = useRef2(null);
  const [sortCriteria, setSortCriteria] = useState6(initialSortCriteria);
  const handleSelectChanged = (value) => {
    onValueChanged(value, sortCriteria);
  };
  const handleSortCriteria = () => {
    setSortCriteria((prev) => prev === "asc" ? "des" : "asc");
    if (selectInputRef.current) {
      const selectValue = selectInputRef.current.value;
      handleSelectChanged(selectValue);
    }
  };
  const sortCriteriaIcon = sortCriteria === "asc" ? /* @__PURE__ */ jsxs7(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100",
      strokeLinejoin: "round",
      strokeLinecap: "round",
      strokeWidth: "2",
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ jsx11("line", { y2: "5", x2: "12", y1: "19", x1: "12", width: "35", height: "35", strokeWidth: "2" }),
        /* @__PURE__ */ jsx11("polyline", { points: "5 12 12 5 19 12", width: "35", height: "35", strokeWidth: "2" })
      ]
    }
  ) : /* @__PURE__ */ jsxs7(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100",
      strokeLinejoin: "round",
      strokeLinecap: "round",
      strokeWidth: "2",
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ jsx11("line", { y2: "19", x2: "12", y1: "5", x1: "12", width: "35", height: "35", strokeWidth: "2" }),
        /* @__PURE__ */ jsx11("polyline", { points: "19 12 12 19 5 12", width: "35", height: "35", strokeWidth: "2" })
      ]
    }
  );
  return /* @__PURE__ */ jsxs7("div", { className: "relative", children: [
    label ? /* @__PURE__ */ jsx11("label", { htmlFor: id, className: "mb-1 block text-sm font-semibold text-gray-900 dark:text-white", children: /* @__PURE__ */ jsx11("span", { children: label }) }) : null,
    /* @__PURE__ */ jsxs7("div", { className: "flex items-center space-x-1", children: [
      /* @__PURE__ */ jsx11(
        "select",
        __spreadProps(__spreadValues({
          id,
          ref: selectInputRef,
          className: "focus-visible:ring-primary-500 focus-visible:border-primary-500 dark:focus-visible:ring-primary-500 dark:focus-visible:border-primary-500 block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 h-11",
          onChange: (event) => {
            handleSelectChanged(event.target.value);
          }
        }, rest), {
          children
        })
      ),
      /* @__PURE__ */ jsx11(
        IconButton,
        {
          className: "h-11",
          "aria-label": "Change Criteria",
          colorScheme: "stone",
          onClick: handleSortCriteria,
          icon: sortCriteriaIcon
        }
      )
    ] })
  ] });
};

// src/forms/text-input.tsx
import clsx3 from "clsx";
import React10, { useEffect as useEffect5, useState as useState7 } from "react";
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
var TextInput = React10.forwardRef((props, ref) => {
  const _a = props, { id, icon, label, onValueChanged } = _a, rest = __objRest(_a, ["id", "icon", "label", "onValueChanged"]);
  const [value, setValue] = useState7("");
  const handleChange = (event) => {
    const { value: updatedValue } = event.target;
    setValue(updatedValue);
  };
  useEffect5(() => {
    onValueChanged(value);
  }, [value]);
  return /* @__PURE__ */ jsxs8("div", { className: "relative", children: [
    label ? /* @__PURE__ */ jsx12("label", { htmlFor: id, className: "mb-1 block text-sm font-semibold text-gray-900 dark:text-white", children: /* @__PURE__ */ jsx12("span", { children: label }) }) : null,
    /* @__PURE__ */ jsxs8("div", { className: "relative", children: [
      icon ? /* @__PURE__ */ jsx12("div", { className: "pointer-events-none absolute inset-y-0 flex items-center pl-3", children: icon }) : null,
      /* @__PURE__ */ jsx12(
        "input",
        __spreadValues({
          id,
          ref,
          className: clsx3(
            "focus-visible:ring-primary-500 focus-visible:border-primary-500 dark:focus-visible:ring-primary-500 dark:focus-visible:border-primary-500 block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 h-11",
            icon ? "pl-10" : ""
          ),
          value,
          onChange: handleChange
        }, rest)
      )
    ] })
  ] });
});
TextInput.displayName = "Text Input";

// src/forms/toggle-input.tsx
import React11, { useEffect as useEffect6, useState as useState8 } from "react";
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
var ToggleInput = React11.forwardRef((props, ref) => {
  const _a = props, { id, label, onValueChanged } = _a, rest = __objRest(_a, ["id", "label", "onValueChanged"]);
  const [value, setValue] = useState8(false);
  const handleChange = (event) => {
    const { checked } = event.target;
    setValue(checked);
  };
  useEffect6(() => {
    onValueChanged(value);
  }, [value]);
  return /* @__PURE__ */ jsx13(
    InputWrapper,
    {
      id,
      label,
      disabled: rest.disabled || false,
      onInputReseted: () => {
        setValue(false);
      },
      children: /* @__PURE__ */ jsxs9("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx13("span", { className: "text-sm font-medium", children: "Toggle me" }),
        /* @__PURE__ */ jsxs9("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ jsx13(
            "input",
            __spreadValues({
              id,
              ref,
              className: "sr-only peer",
              type: "checkbox",
              checked: value,
              onChange: handleChange
            }, rest)
          ),
          /* @__PURE__ */ jsx13("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-primary-600" })
        ] })
      ] })
    }
  );
});
ToggleInput.displayName = "Toggle Input";

// src/toast/components/toasts-container.tsx
import { AnimatePresence } from "framer-motion";

// src/toast/context/toast-context.tsx
import { createContext, useContext, useReducer } from "react";

// src/toast/context/reducer/index.ts
var reducer = (state, action) => {
  switch (action.type) {
    case 0 /* ADD_TOAST */: {
      return __spreadProps(__spreadValues({}, state), {
        toasts: [...state.toasts, action.payload.toast]
      });
    }
    case 1 /* REMOVE_TOAST */: {
      const updatedToasts = state.toasts.filter((toast) => toast.id !== action.payload.toast);
      return __spreadProps(__spreadValues({}, state), {
        toasts: updatedToasts
      });
    }
    default:
      throw new Error("The action you requested does not exists!");
  }
};

// src/toast/context/toast-context.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
var initialState = {
  state: { toasts: [] },
  dispatch: () => {
  }
};
var ToastContext = createContext(initialState);
var useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context)
    throw new Error("Tried to use ThemeContext with no context avaiable!");
  return context;
};
var useToast = () => {
  const { dispatch } = useToastContext();
  const toast = (toast2, duration = 3e3) => {
    const toastId = Math.random().toString(12).substring(2, 10);
    dispatch({
      type: 0 /* ADD_TOAST */,
      payload: {
        toast: __spreadProps(__spreadValues({}, toast2), { id: toastId })
      }
    });
    setTimeout(() => {
      dispatch({
        type: 1 /* REMOVE_TOAST */,
        payload: {
          toast: toastId
        }
      });
    }, duration);
  };
  return { toast };
};
var ToastProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    toasts: []
  });
  return /* @__PURE__ */ jsx14(ToastContext.Provider, { value: { state, dispatch }, children });
};

// src/toast/components/toast.tsx
import clsx4 from "clsx";
import { m as m2 } from "framer-motion";
import { jsx as jsx15, jsxs as jsxs10 } from "react/jsx-runtime";
var Toast2 = (props) => {
  const { toast } = props;
  const toastIcon = () => {
    switch (toast.variant) {
      case "info": {
        return /* @__PURE__ */ jsxs10(
          "svg",
          {
            className: "h-5 w-5 stroke-neutral-800 dark:stroke-neutral-50",
            fill: "none",
            strokeLinejoin: "round",
            strokeLinecap: "round",
            strokeWidth: "2",
            viewBox: "0 0 24 24",
            height: "50px",
            width: "50px",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ jsx15("path", { fill: "none", d: "M0 0h24v24H0z", stroke: "none" }),
              /* @__PURE__ */ jsx15("path", { d: "M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" }),
              /* @__PURE__ */ jsx15("line", { y2: "9", x2: "16", y1: "9", x1: "8" }),
              /* @__PURE__ */ jsx15("line", { y2: "13", x2: "14", y1: "13", x1: "8" })
            ]
          }
        );
      }
      case "success": {
        return /* @__PURE__ */ jsxs10(
          "svg",
          {
            className: "h-5 w-5 stroke-neutral-800 dark:stroke-neutral-50",
            xmlns: "http://www.w3.org/2000/svg",
            strokeLinejoin: "round",
            strokeLinecap: "round",
            strokeWidth: "2",
            stroke: "#ffffff",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              /* @__PURE__ */ jsx15("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
              /* @__PURE__ */ jsx15("polyline", { points: "22 4 12 14.01 9 11.01" })
            ]
          }
        );
      }
      case "error": {
        return /* @__PURE__ */ jsxs10(
          "svg",
          {
            className: "h-5 w-5 stroke-neutral-800 dark:stroke-neutral-50",
            xmlns: "http://www.w3.org/2000/svg",
            strokeLinejoin: "round",
            strokeLinecap: "round",
            strokeWidth: "2",
            stroke: "#ffffff",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              /* @__PURE__ */ jsx15("circle", { r: "10", cy: "12", cx: "12" }),
              /* @__PURE__ */ jsx15("line", { y2: "12", x2: "12", y1: "8", x1: "12" }),
              /* @__PURE__ */ jsx15("line", { y2: "16", x2: "12.01", y1: "16", x1: "12" })
            ]
          }
        );
      }
    }
  };
  return /* @__PURE__ */ jsx15(
    m2.li,
    {
      initial: { height: 0, opacity: 0 },
      animate: {
        height: "auto",
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.3
        }
      },
      exit: { height: 0, opacity: 0 },
      transition: {
        duration: 0.6,
        type: "spring",
        bounce: 0
      },
      className: "flex flex-col items-center m-2",
      children: /* @__PURE__ */ jsxs10(
        "div",
        {
          className: clsx4(
            "flex p-4 rounded-md items-start overflow-hidden shadow-md text-neutral-800 dark:text-neutral-50",
            toast.variant === "success" && "bg-green-200 dark:bg-green-700",
            toast.variant === "error" && "bg-red-200 dark:bg-red-700",
            toast.variant === "info" && "bg-blue-200 dark:bg-blue-700"
          ),
          children: [
            /* @__PURE__ */ jsx15("div", { className: "flex-shrink-0 mr-2", children: toastIcon() }),
            /* @__PURE__ */ jsx15("div", { className: "flex-1 max-w-full", children: /* @__PURE__ */ jsx15("p", { className: "text-sm font-medium", children: toast.content }) })
          ]
        }
      )
    }
  );
};

// src/toast/components/toasts-container.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
var ToastsContainer = () => {
  const { state } = useToastContext();
  return /* @__PURE__ */ jsx16("div", { className: "fixed z-50 flex flex-col bottom-0 right-0 left-0 pointer-events-none", children: /* @__PURE__ */ jsx16("ul", { className: "max-w-xl mx-auto", children: /* @__PURE__ */ jsx16(AnimatePresence, { initial: false, children: state.toasts && state.toasts.map((toast) => {
    return /* @__PURE__ */ jsx16(Toast2, { toast }, toast.id);
  }) }) }) });
};
export {
  Button,
  ColorInput,
  FadeAnimated,
  IconButton,
  MultiButtonInput,
  RangeInput,
  SelectInput,
  SelectInputSort,
  Separator,
  TextInput,
  ToastProvider,
  ToastsContainer,
  ToggleInput,
  Tooltip,
  defaultColors,
  useToast,
  useToastContext
};
