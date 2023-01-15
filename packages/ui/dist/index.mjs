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
  }
};

// src/button/button.tsx
import clsx from "clsx";
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var colorSchemesStyles = {
  slate: {
    outline: "border-4 border-slate-300 dark:border-slate-600 hover:bg-slate-300 hover:text-slate-900 focus:ring-slate-300 dark:text-slate-200  dark:hover:bg-slate-600 dark:focus:ring-slate-500",
    solid: "bg-slate-200 text-slate-900 hover:bg-slate-300 focus:ring-slate-300 dark:bg-slate-700 dark:hover:bg-slate-900 dark:text-slate-200",
    ghost: "text-slate-900 hover:bg-slate-300 focus:ring-slate-300 dark:hover:bg-slate-900 dark:text-slate-200"
  },
  gray: {
    outline: "border-4 border-gray-300 dark:border-gray-600 hover:bg-gray-300 hover:text-gray-900 focus:ring-gray-300 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-500",
    solid: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-900 dark:text-gray-200",
    ghost: "text-gray-900 hover:bg-gray-300 focus:ring-gray-300 dark:hover:bg-gray-900 dark:text-gray-200"
  },
  zinc: {
    outline: "border-4 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-300 hover:text-zinc-900 focus:ring-zinc-300 dark:text-zinc-200  dark:hover:bg-zinc-600 dark:focus:ring-zinc-500",
    solid: "bg-zinc-200 text-zinc-900 hover:bg-zinc-300 focus:ring-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-900 dark:text-zinc-200",
    ghost: "text-zinc-900 hover:bg-slate-300 focus:ring-zinc-300 dark:hover:bg-zinc-900 dark:text-zinc-200"
  },
  neutral: {
    outline: "border-4 border-neutral-300 dark:border-neutral-600 hover:bg-neutral-300 hover:text-neutral-900 focus:ring-neutral-300 dark:text-neutral-200  dark:hover:bg-neutral-600 dark:focus:ring-neutral-500",
    solid: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300 focus:ring-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-900 dark:text-neutral-200",
    ghost: "text-neutral-900 hover:bg-neutral-300 focus:ring-neutral-300 dark:hover:bg-neutral-900 dark:text-neutral-200"
  },
  stone: {
    outline: "border-4 border-stone-300 dark:border-stone-600 hover:bg-stone-300 hover:text-stone-900 focus:ring-stone-300 dark:text-stone-200  dark:hover:bg-stone-600 dark:focus:ring-stone-500",
    solid: "bg-stone-200 text-stone-900 hover:bg-stone-300 focus:ring-stone-300 dark:bg-stone-700 dark:hover:bg-stone-900 dark:text-stone-200",
    ghost: "text-stone-900 hover:bg-stone-300 focus:ring-stone-300 dark:hover:bg-stone-900 dark:text-stone-200"
  },
  red: {
    outline: "border-4 border-red-300 dark:border-red-600 hover:bg-red-300 hover:text-red-900 focus:ring-red-300 dark:text-red-200 dark:hover:bg-red-600 dark:focus:ring-red-500",
    solid: "bg-red-200 text-red-900 hover:bg-red-300 focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-900 dark:text-red-200",
    ghost: "text-red-900 hover:bg-red-300 focus:ring-red-300 dark:hover:bg-red-900 dark:text-red-200"
  },
  orange: {
    outline: "border-4 border-orange-300 dark:border-orange-600 hover:bg-orange-300 hover:text-orange-900 focus:ring-orange-300 dark:text-orange-200  dark:hover:bg-orange-600 dark:focus:ring-orange-500",
    solid: "bg-orange-200 text-orange-900 hover:bg-orange-300 focus:ring-orange-300 dark:bg-orange-700 dark:hover:bg-orange-900 dark:text-orange-200",
    ghost: "text-orange-900 hover:bg-orange-300 focus:ring-orange-300 dark:hover:bg-orange-900 dark:text-orange-200"
  },
  amber: {
    outline: "border-4 border-amber-300 dark:border-amber-600 hover:bg-amber-300 hover:text-amber-900 focus:ring-amber-300 dark:text-amber-200  dark:hover:bg-amber-600 dark:focus:ring-amber-500",
    solid: "bg-amber-200 text-amber-900 hover:bg-amber-300 focus:ring-amber-300 dark:bg-amber-700 dark:hover:bg-amber-900 dark:text-amber-200",
    ghost: "text-amber-900 hover:bg-amber-300 focus:ring-amber-300 dark:hover:bg-amber-900 dark:text-amber-200"
  },
  yellow: {
    outline: "border-4 border-yellow-300 dark:border-yellow-600 hover:bg-yellow-300 hover:text-yellow-900 focus:ring-yellow-300 dark:text-yellow-200  dark:hover:bg-yellow-600 dark:focus:ring-yellow-500",
    solid: "bg-yellow-200 text-yellow-900 hover:bg-yellow-300 focus:ring-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-900 dark:text-yellow-200",
    ghost: "text-yellow-900 hover:bg-yellow-300 focus:ring-yellow-300 dark:hover:bg-yellow-900 dark:text-yellow-200"
  },
  lime: {
    outline: "border-4 border-lime-300 dark:border-lime-600 hover:bg-lime-300 hover:text-lime-900 focus:ring-lime-300 dark:text-lime-200 dark:hover:bg-lime-600 dark:focus:ring-lime-500",
    solid: "bg-lime-200 text-lime-900 hover:bg-lime-300 focus:ring-lime-300 dark:bg-lime-700 dark:hover:bg-lime-900 dark:text-lime-200",
    ghost: "text-lime-900 hover:bg-lime-300 focus:ring-lime-300 dark:hover:bg-lime-900 dark:text-lime-200"
  },
  green: {
    outline: "border-4 border-green-300 dark:border-green-600 hover:bg-green-300 hover:text-green-900 focus:ring-green-300 dark:text-green-200  dark:hover:bg-green-600 dark:focus:ring-green-500",
    solid: "bg-green-200 text-green-900 hover:bg-green-300 focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-900 dark:text-green-200",
    ghost: "text-green-900 hover:bg-green-300 focus:ring-green-300 dark:hover:bg-green-900 dark:text-green-200"
  },
  emerald: {
    outline: "border-4 border-emerald-300 dark:border-emerald-600 hover:bg-emerald-300 hover:text-emerald-900 focus:ring-emerald-300 dark:text-emerald-200  dark:hover:bg-emerald-600 dark:focus:ring-emerald-500",
    solid: "bg-emerald-200 text-emerald-900 hover:bg-emerald-300 focus:ring-emerald-300 dark:bg-emerald-700 dark:hover:bg-emerald-900 dark:text-emerald-200",
    ghost: "text-emerald-900 hover:bg-emerald-300 focus:ring-emerald-300 dark:hover:bg-emerald-900 dark:text-emerald-200"
  },
  teal: {
    outline: "border-4 border-teal-300 dark:border-teal-600 hover:bg-teal-300 hover:text-teal-900 focus:ring-teal-300 dark:text-teal-200  dark:hover:bg-teal-600 dark:focus:ring-teal-500",
    solid: "bg-teal-200 text-teal-900 hover:bg-teal-300 focus:ring-teal-300 dark:bg-teal-700 dark:hover:bg-teal-900 dark:text-teal-200",
    ghost: "text-teal-900 hover:bg-teal-300 focus:ring-teal-300 dark:hover:bg-teal-900 dark:text-teal-200"
  },
  cyan: {
    outline: "border-4 border-cyan-300 dark:border-cyan-600 hover:bg-cyan-300 hover:text-cyan-900 focus:ring-cyan-300 dark:text-cyan-200 dark:hover:bg-cyan-600 dark:focus:ring-cyan-500",
    solid: "bg-cyan-200 text-cyan-900 hover:bg-cyan-300 focus:ring-cyan-300 dark:bg-cyan-700 dark:hover:bg-cyan-900 dark:text-cyan-200",
    ghost: "text-cyan-900 hover:bg-cyan-300 focus:ring-cyan-300 dark:hover:bg-cyan-900 dark:text-cyan-200"
  },
  sky: {
    outline: "border-4 border-sky-300 dark:border-sky-600 hover:bg-sky-300 hover:text-sky-900 focus:ring-sky-300 dark:text-sky-200 dark:hover:bg-sky-600 dark:focus:ring-sky-500",
    solid: "bg-sky-200 text-sky-900 hover:bg-sky-300 focus:ring-sky-300 dark:bg-sky-700 dark:hover:bg-sky-900 dark:text-sky-200",
    ghost: "text-sky-900 hover:bg-sky-300 focus:ring-sky-300 dark:hover:bg-sky-900 dark:text-sky-200"
  },
  blue: {
    outline: "border-4 border-blue-300 dark:border-blue-600 hover:bg-blue-300 hover:text-blue-900 focus:ring-blue-300 dark:text-blue-200 dark:hover:bg-blue-600 dark:focus:ring-blue-500",
    solid: "bg-blue-200 text-blue-900 hover:bg-blue-300 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-900 dark:text-blue-200",
    ghost: "text-blue-900 hover:bg-blue-300 focus:ring-blue-300 dark:hover:bg-blue-900 dark:text-blue-200"
  },
  indigo: {
    outline: "border-4 border-indigo-300 dark:border-indigo-600 hover:bg-indigo-300 hover:text-indigo-900 focus:ring-indigo-300 dark:text-indigo-200  dark:hover:bg-indigo-600 dark:focus:ring-indigo-500",
    solid: "bg-indigo-200 text-indigo-900 hover:bg-indigo-300 focus:ring-indigo-300 dark:bg-indigo-700 dark:hover:bg-indigo-900 dark:text-indigo-200",
    ghost: "text-indigo-900 hover:bg-indigo-300 focus:ring-indigo-300 dark:hover:bg-indigo-900 dark:text-indigo-200"
  },
  violet: {
    outline: "border-4 border-violet-300 dark:border-violet-600 hover:bg-violet-300 hover:text-violet-900 focus:ring-violet-300 dark:text-violet-200  dark:hover:bg-violet-600 dark:focus:ring-violet-500",
    solid: "bg-violet-200 text-violet-900 hover:bg-violet-300 focus:ring-violet-300 dark:bg-violet-700 dark:hover:bg-violet-900 dark:text-violet-200",
    ghost: "text-violet-900 hover:bg-violet-300 focus:ring-violet-300 dark:hover:bg-violet-900 dark:text-violet-200"
  },
  purple: {
    outline: "border-4 border-purple-300 dark:border-purple-600 hover:bg-purple-300 hover:text-purple-900 focus:ring-purple-300 dark:text-purple-200  dark:hover:bg-purple-600 dark:focus:ring-purple-500",
    solid: "bg-purple-200 text-purple-900 hover:bg-purple-300 focus:ring-purple-300 dark:bg-purple-700 dark:hover:bg-purple-900 dark:text-purple-200",
    ghost: "text-purple-900 hover:bg-purple-300 focus:ring-purple-300 dark:hover:bg-purple-900 dark:text-purple-200"
  },
  fuchsia: {
    outline: "border-4 border-fuchsia-300 dark:border-fuchsia-600 hover:bg-fuchsia-300 hover:text-fuchsia-900 focus:ring-fuchsia-300 dark:text-fuchsia-200  dark:hover:bg-fuchsia-600 dark:focus:ring-fuchsia-500",
    solid: "bg-fuchsia-200 text-fuchsia-900 hover:bg-fuchsia-300 focus:ring-fuchsia-300 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-900 dark:text-fuchsia-200",
    ghost: "text-fuchsia-900 hover:bg-fuchsia-300 focus:ring-fuchsia-300 dark:hover:bg-fuchsia-900 dark:text-fuchsia-200"
  },
  pink: {
    outline: "border-4 border-pink-300 dark:border-pink-600 hover:bg-pink-300 hover:text-pink-900 focus:ring-pink-300 dark:text-pink-200 dark:hover:bg-pink-600 dark:focus:ring-pink-500",
    solid: "bg-pink-200 text-pink-900 hover:bg-pink-300 focus:ring-pink-300 dark:bg-pink-700 dark:hover:bg-pink-900 dark:text-pink-200",
    ghost: "text-pink-900 hover:bg-pink-300 focus:ring-pink-300 dark:hover:bg-pink-900 dark:text-pink-200"
  },
  rose: {
    outline: "border-4 border-rose-300 dark:border-rose-600 hover:bg-rose-300 hover:text-rose-900 focus:ring-rose-300 dark:text-rose-200 dark:hover:bg-rose-600 dark:focus:ring-rose-500",
    solid: "bg-rose-200 text-rose-900 hover:bg-rose-300 focus:ring-rose-300 dark:bg-rose-700 dark:hover:bg-rose-900 dark:text-rose-200",
    ghost: "text-rose-900 hover:bg-rose-300 focus:ring-rose-300 dark:hover:bg-rose-900 dark:text-rose-200"
  },
  primary: {
    outline: "border-4 border-primary-300 dark:border-primary-600 hover:bg-primary-300 hover:text-primary-900 focus:ring-primary-300 dark:text-primary-200  dark:hover:bg-primary-600 dark:focus:ring-primary-500",
    solid: "bg-primary-200 text-primary-900 hover:bg-primary-300 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-900 dark:text-primary-200",
    ghost: "text-primary-900 hover:bg-primary-300 focus:ring-primary-300 dark:hover:bg-primary-900 dark:text-primary-200"
  }
};
var Button = React.forwardRef((props, ref) => {
  const _a = props, { children, leftIcon, rightIcon, colorScheme = "primary", size = "md", variant = "solid" } = _a, rest = __objRest(_a, ["children", "leftIcon", "rightIcon", "colorScheme", "size", "variant"]);
  const getButtonSizes = () => {
    switch (size) {
      case "xs":
        return "p-[4px] text-[10px]";
      case "sm":
        return "px-[5px] py-[4px] text-[12px]";
      case "md":
        return "px-5 py-2.5 text-md";
      case "lg":
        return "px-10 py-3.5 text-lg";
    }
  };
  const getButtonVariants = () => {
    return colorSchemesStyles[colorScheme][variant];
  };
  const _b = rest, { className } = _b, excludedRest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxs(
    "button",
    __spreadProps(__spreadValues({
      ref,
      type: "button",
      className: clsx(
        `inline-flex items-center justify-center rounded-lg font-medium focus:outline-none focus:ring-4`,
        getButtonSizes(),
        getButtonVariants(),
        rest.className
      )
    }, excludedRest), {
      children: [
        leftIcon && /* @__PURE__ */ jsx("div", { className: "inline-flex shrink-0 self-center pr-1", children: leftIcon }),
        children,
        rightIcon && /* @__PURE__ */ jsx("div", { className: "inline-flex shrink-0 self-center pl-1", children: rightIcon })
      ]
    })
  );
});
Button.displayName = "Button";

// src/card/card.tsx
import clsx2 from "clsx";
import React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = React2.forwardRef((props, ref) => {
  const _a = props, { children, variant = "portrait" } = _a, rest = __objRest(_a, ["children", "variant"]);
  return /* @__PURE__ */ jsx2(
    "div",
    __spreadProps(__spreadValues({
      className: clsx2(
        `group cursor-pointer overflow-hidden rounded-lg bg-neutral-50 shadow-lg dark:bg-neutral-800 ${rest.className}`,
        variant === "portrait" && "w-full md:max-w-sm",
        variant === "landscape" && "grid grid-cols-2"
      )
    }, rest), {
      children: /* @__PURE__ */ jsx2("div", { className: "flex w-full flex-col space-y-1 p-4 text-neutral-900 dark:text-neutral-100", children })
    })
  );
});
Card.displayName = "Card";

// src/forms/select-input.tsx
import React3 from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var SelectInput = React3.forwardRef((props, ref) => {
  const _a = props, { id, label, children } = _a, rest = __objRest(_a, ["id", "label", "children"]);
  return /* @__PURE__ */ jsxs2("div", { className: "relative", children: [
    label ? /* @__PURE__ */ jsx3("label", { htmlFor: id, className: "block mb-1 text-sm font-semibold text-gray-900 dark:text-white", children: /* @__PURE__ */ jsx3("span", { children: label }) }) : null,
    /* @__PURE__ */ jsx3(
      "select",
      __spreadProps(__spreadValues({
        id,
        ref,
        className: "bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      }, rest), {
        children
      })
    )
  ] });
});
SelectInput.displayName = "Select Input";

// src/forms/text-input.tsx
import clsx3 from "clsx";
import React4, { useEffect as useEffect2, useState as useState2 } from "react";

// src/hooks/use-debounce.ts
import { useEffect, useState } from "react";
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
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var TextInput = React4.forwardRef((props, ref) => {
  const _a = props, { id, icon, label, onValueChanged } = _a, rest = __objRest(_a, ["id", "icon", "label", "onValueChanged"]);
  const [value, setValue] = useState2("");
  const debouncedValue = use_debounce_default(value, 100);
  const handleChange = (event) => {
    const { value: value2 } = event.target;
    setValue(value2);
  };
  useEffect2(() => {
    onValueChanged(value);
  }, [debouncedValue]);
  return /* @__PURE__ */ jsxs3("div", { className: "relative", children: [
    label ? /* @__PURE__ */ jsx4("label", { htmlFor: id, className: "block mb-1 text-sm font-semibold text-gray-900 dark:text-white", children: /* @__PURE__ */ jsx4("span", { children: label }) }) : null,
    /* @__PURE__ */ jsxs3("div", { className: "relative", children: [
      icon ? /* @__PURE__ */ jsx4("div", { className: "absolute inset-y-0 flex items-center pl-3 pointer-events-none", children: icon }) : null,
      /* @__PURE__ */ jsx4(
        "input",
        __spreadValues({
          id,
          ref,
          className: clsx3(
            "bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
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

// src/common/separator.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var Separator = (props) => {
  const rest = __objRest(props, []);
  return /* @__PURE__ */ jsx5("hr", __spreadValues({ className: "h-[1px] border-none bg-neutral-200 dark:bg-neutral-700 mt-2" }, rest));
};

// src/forms/range-input.tsx
import React6, { useEffect as useEffect3, useState as useState4 } from "react";

// src/forms/input-wrapper.tsx
import { useState as useState3 } from "react";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var InputWrapper = (props) => {
  const { id, label, disabled, onInputReseted, children, initiallyCollapsed = false } = props;
  const [inputCollapsed, setInputCollapsed] = useState3(initiallyCollapsed);
  const handleInputCollapse = () => {
    setInputCollapsed((prev) => !prev);
  };
  const renderButtonIcon = () => {
    if (inputCollapsed)
      return /* @__PURE__ */ jsxs4(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "stroke-neutral-800 dark:stroke-neutral-100 w-4 h-4",
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
      );
    return /* @__PURE__ */ jsxs4(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "stroke-neutral-800 dark:stroke-neutral-100 w-4 h-4",
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
  };
  return /* @__PURE__ */ jsxs4("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx6("label", { htmlFor: id, className: "block font-semibold text-gray-900 dark:text-white", children: /* @__PURE__ */ jsx6("span", { children: label }) }),
      /* @__PURE__ */ jsxs4("div", { className: "flex space-x-1 items-center", children: [
        /* @__PURE__ */ jsx6(Button, { size: "sm", "aria-label": "Reset Input", colorScheme: "red", disabled, onClick: onInputReseted, children: "Reset" }),
        /* @__PURE__ */ jsx6(
          Button,
          {
            className: "!p-[5px]",
            size: "sm",
            "aria-label": "Collapse Input",
            colorScheme: "stone",
            onClick: handleInputCollapse,
            children: renderButtonIcon()
          }
        )
      ] })
    ] }),
    !inputCollapsed ? children : null
  ] });
};

// src/forms/range-input.tsx
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var RangeInput = React6.forwardRef((props, ref) => {
  const _a = props, { id = "default-id", label, onValueChanged } = _a, rest = __objRest(_a, ["id", "label", "onValueChanged"]);
  const [value, setValue] = useState4(Number(rest.placeholder) || 0);
  const debouncedValue = use_debounce_default(value, 100);
  const handleChange = (event) => {
    const { value: value2 } = event.target;
    setValue(value2);
  };
  useEffect3(() => {
    onValueChanged(value);
  }, [debouncedValue]);
  return /* @__PURE__ */ jsx7(
    InputWrapper,
    {
      id,
      label,
      disabled: rest.disabled || false,
      onInputReseted: () => {
        setValue(Number(rest.placeholder) || 0);
      },
      children: /* @__PURE__ */ jsxs5("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx7(
          "input",
          __spreadValues({
            id,
            ref,
            className: "w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700",
            type: "range",
            value,
            onChange: handleChange
          }, rest)
        ),
        /* @__PURE__ */ jsx7(
          "input",
          __spreadValues({
            id,
            className: "max-w-[50px] ml-4 text-center rounded-lg h-9 font-bold border-neutral-300 border-[1px] dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300",
            type: "text",
            value,
            onChange: handleChange
          }, rest)
        )
      ] })
    }
  );
});
RangeInput.displayName = "Range Input";

// src/forms/color-input.tsx
import React7, { useEffect as useEffect4, useState as useState5 } from "react";
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
var ColorInput = React7.forwardRef((props, ref) => {
  const _a = props, { id = "default-id", label, onValueChanged } = _a, rest = __objRest(_a, ["id", "label", "onValueChanged"]);
  const [value, setValue] = useState5(rest.placeholder || "");
  const debouncedValue = use_debounce_default(value, 100);
  const handleChange = (event) => {
    const { value: value2 } = event.target;
    setValue(value2);
  };
  useEffect4(() => {
    onValueChanged(value);
  }, [debouncedValue]);
  return /* @__PURE__ */ jsx8(
    InputWrapper,
    {
      id,
      label,
      disabled: rest.disabled || false,
      onInputReseted: () => {
        setValue(rest.placeholder || "#a781ee");
      },
      children: /* @__PURE__ */ jsxs6("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx8(
          "input",
          __spreadValues({
            className: "w-11 h-12 border-none cursor-pointer appearance-none color-input",
            id,
            ref,
            type: "color",
            value,
            onChange: handleChange
          }, rest)
        ),
        /* @__PURE__ */ jsx8(
          "input",
          __spreadValues({
            id,
            className: "max-w-[120px] text-start p-2 rounded-md h-10 font-bold border-neutral-300 border-[1px] dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300",
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

// src/forms/select-input-sort.tsx
import { useRef, useState as useState6 } from "react";
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
var SelectInputSort = (props) => {
  const _a = props, { id, label, children, initialSortCriteria, onValueChanged } = _a, rest = __objRest(_a, ["id", "label", "children", "initialSortCriteria", "onValueChanged"]);
  const selectInputRef = useRef(null);
  const [sortCriteria, setSortCriteria] = useState6(initialSortCriteria);
  const handleSortCriteria = () => {
    setSortCriteria((prev) => prev === "asc" ? "des" : "asc");
    if (selectInputRef.current) {
      const selectValue = selectInputRef.current.value;
      handleSelectChanged(selectValue);
    }
  };
  const handleSelectChanged = (value) => {
    onValueChanged(value, sortCriteria);
  };
  return /* @__PURE__ */ jsxs7("div", { className: "relative", children: [
    label ? /* @__PURE__ */ jsx9("label", { htmlFor: id, className: "block mb-1 text-sm font-semibold text-gray-900 dark:text-white", children: /* @__PURE__ */ jsx9("span", { children: label }) }) : null,
    /* @__PURE__ */ jsxs7("div", { className: "flex space-x-1 items-center", children: [
      /* @__PURE__ */ jsx9(
        "select",
        __spreadProps(__spreadValues({
          id,
          ref: selectInputRef,
          className: "bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
          onChange: (event) => {
            handleSelectChanged(event.target.value);
          }
        }, rest), {
          children
        })
      ),
      /* @__PURE__ */ jsx9(
        Button,
        {
          className: "!p-[6px] !h-[41px]",
          size: "sm",
          "aria-label": "Change Criteria",
          colorScheme: "stone",
          onClick: handleSortCriteria,
          children: sortCriteria === "asc" ? /* @__PURE__ */ jsxs7(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "stroke-neutral-800 dark:stroke-neutral-100 w-4 h-4",
              strokeLinejoin: "round",
              strokeLinecap: "round",
              strokeWidth: "2",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ jsx9("line", { y2: "5", x2: "12", y1: "19", x1: "12", width: "35", height: "35", strokeWidth: "2" }),
                /* @__PURE__ */ jsx9("polyline", { points: "5 12 12 5 19 12", width: "35", height: "35", strokeWidth: "2" })
              ]
            }
          ) : /* @__PURE__ */ jsxs7(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "stroke-neutral-800 dark:stroke-neutral-100 w-4 h-4",
              strokeLinejoin: "round",
              strokeLinecap: "round",
              strokeWidth: "2",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ jsx9("line", { y2: "19", x2: "12", y1: "5", x1: "12", width: "35", height: "35", strokeWidth: "2" }),
                /* @__PURE__ */ jsx9("polyline", { points: "19 12 12 19 5 12", width: "35", height: "35", strokeWidth: "2" })
              ]
            }
          )
        }
      )
    ] })
  ] });
};
export {
  Button,
  Card,
  ColorInput,
  RangeInput,
  SelectInput,
  SelectInputSort,
  Separator,
  TextInput,
  defaultColors
};
