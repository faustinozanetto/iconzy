"use strict";
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
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
module.exports = __toCommonJS(src_exports);

// ../../node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default = clsx;

// src/button.tsx
var import_react = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var PARSED_COLOR_SCHEMES = {
  primary: {
    outline: "hover:bg-primary-300 hover:text-primary-800 focus:ring-primary-300",
    solid: "bg-primary-200 text-primary-800 hover:bg-primary-300 focus:ring-primary-300"
  },
  red: {
    outline: "hover:bg-red-300 hover:text-red-800 focus:ring-red-300",
    solid: "bg-red-200 text-red-800 hover:bg-red-300 focus:ring-red-300"
  },
  pink: {
    outline: "hover:bg-pink-300 hover:text-pink-800 focus:ring-pink-300",
    solid: "bg-pink-200 text-pink-800 hover:bg-pink-300 focus:ring-pink-300"
  },
  orange: {
    outline: "hover:bg-orange-300 hover:text-orange-800 focus:ring-orange-300",
    solid: "bg-orange-200 text-orange-800 hover:bg-orange-300 focus:ring-orange-300"
  },
  yellow: {
    outline: "hover:bg-yellow-300 hover:text-yellow-800 focus:ring-yellow-300",
    solid: "bg-yellow-200 text-yellow-800 hover:bg-yellow-300 focus:ring-yellow-300"
  },
  green: {
    outline: "hover:bg-green-300 hover:text-green-800 focus:ring-green-300",
    solid: "bg-green-200 text-green-800 hover:bg-green-300 focus:ring-green-300"
  },
  teal: {
    outline: "hover:bg-teal-300 hover:text-teal-800 focus:ring-teal-300",
    solid: "bg-teal-200 text-teal-800 hover:bg-teal-300 focus:ring-teal-300"
  },
  blue: {
    outline: "hover:bg-blue-300 hover:text-blue-800 focus:ring-blue-300",
    solid: "bg-blue-200 text-blue-800 hover:bg-blue-300 focus:ring-blue-300"
  },
  indigo: {
    outline: "hover:bg-indigo-300 hover:text-indigo-800 focus:ring-indigo-300",
    solid: "bg-indigo-200 text-indigo-800 hover:bg-indigo-300 focus:ring-indigo-300"
  },
  purple: {
    outline: "hover:bg-purple-300 hover:text-purple-800 focus:ring-purple-300",
    solid: "bg-purple-200 text-purple-800 hover:bg-purple-300 focus:ring-purple-300"
  }
};
var Button = import_react.default.forwardRef(
  (props, ref) => {
    const _a = props, {
      children,
      leftIcon,
      rightIcon,
      colorScheme = "primary",
      size = "md",
      variant = "solid"
    } = _a, rest = __objRest(_a, [
      "children",
      "leftIcon",
      "rightIcon",
      "colorScheme",
      "size",
      "variant"
    ]);
    const getButtonSizes = () => {
      switch (size) {
        case "sm":
          return "py-2.5 px-3 text-base";
        case "md":
          return "px-5 py-2.5 text-md";
        case "lg":
          return "px-10 py-3.5 text-lg";
        default:
          return "py-3 px-2.5 text-base";
      }
    };
    const getButtonVariants = () => {
      return variant === "solid" ? PARSED_COLOR_SCHEMES[colorScheme].solid : PARSED_COLOR_SCHEMES[colorScheme].outline;
    };
    const _b = rest, { className } = _b, excludedRest = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      __spreadProps(__spreadValues({
        ref,
        type: "button",
        className: clsx_m_default(
          `inline-flex items-center justify-center rounded-lg text-base font-semibold transition-all focus:outline-none focus:ring-4`,
          getButtonSizes(),
          getButtonVariants(),
          rest.className
        )
      }, excludedRest), {
        children: [
          leftIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "inline-flex shrink-0 self-center pr-1", children: leftIcon }),
          children,
          rightIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "inline-flex shrink-0 self-center pl-1", children: rightIcon })
        ]
      })
    );
  }
);
Button.displayName = "Button";
