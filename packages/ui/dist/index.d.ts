import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import React__default from 'react';
import * as class_variance_authority from 'class-variance-authority';
import { VariantProps } from 'class-variance-authority';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as _radix_ui_react_slot from '@radix-ui/react-slot';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, ControllerProps } from 'react-hook-form';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ClassValue } from 'clsx';
import * as SliderPrimitive from '@radix-ui/react-slider';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const Separator: React.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare function Skeleton({ className, ...props }: React__default.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare const iconVariants: (props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type BaseIconProps = React__default.HTMLAttributes<SVGSVGElement> & VariantProps<typeof iconVariants>;

type ChevronDownIconProps = BaseIconProps;
declare const ChevronDownIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type CopyIconProps = BaseIconProps;
declare const CopyIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type DangerIconProps = BaseIconProps;
declare const DangerIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type LoadingIconProps = BaseIconProps;
declare const LoadingIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type QRCodeIconProps = BaseIconProps;
declare const QRCodeIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type ShareIconProps = BaseIconProps;
declare const ShareIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type SuccessIconProps = BaseIconProps;
declare const SuccessIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type SunIconProps = BaseIconProps;
declare const SunIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type MoonIconProps = BaseIconProps;
declare const MoonIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type CloseIconProps = BaseIconProps;
declare const CloseIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type ChevronLeftIconProps = BaseIconProps;
declare const ChevronLeftIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type ChevronRightIconProps = BaseIconProps;
declare const ChevronRightIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type CalendarIconProps = BaseIconProps;
declare const CalendarIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type TrashIconProps = BaseIconProps;
declare const TrashIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type LogoutIconProps = BaseIconProps;
declare const LogoutIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type UserIconProps = BaseIconProps;
declare const UserIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type InfoIconProps = BaseIconProps;
declare const InfoIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type BookIconProps = BaseIconProps;
declare const BookIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type EditIconProps = BaseIconProps;
declare const EditIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type PlusIconProps = BaseIconProps;
declare const PlusIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type DownloadIconProps = BaseIconProps;
declare const DownloadIcon: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React__default.RefAttributes<SVGSVGElement>>;

type ExclamationIconProps = BaseIconProps;
declare const ExclamationIcon: React.ForwardRefExoticComponent<React.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React.RefAttributes<SVGSVGElement>>;

type CheckIconProps = BaseIconProps;
declare const CheckIcon: React.ForwardRefExoticComponent<React.HTMLAttributes<SVGSVGElement> & class_variance_authority.VariantProps<(props?: ({
    size?: "sm" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React.RefAttributes<SVGSVGElement>>;

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues extends FieldValues | undefined = undefined>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends react_hook_form.Path<TFieldValues> = react_hook_form.Path<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => react_jsx_runtime.JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    error?: react_hook_form.FieldError | undefined;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare const FormItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const FormLabel: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & React.RefAttributes<HTMLLabelElement>>;
declare const FormControl: React.ForwardRefExoticComponent<Omit<_radix_ui_react_slot.SlotProps & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLElement>>;
declare const FormDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const FormMessage: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;

declare const Select: React.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SelectContent: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

declare const Label: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: class_variance_authority_dist_types.ClassProp | undefined) => string> & React.RefAttributes<HTMLLabelElement>>;

declare const toastContainerVariants: (props?: ({
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type ToatsContainerStyleProps = VariantProps<typeof toastContainerVariants>;
type ToastsContainerProps = ToatsContainerStyleProps;
declare const ToastsContainer: React__default.FC<ToastsContainerProps>;

declare const cn: (...inputs: ClassValue[]) => string;

interface ToastsProviderProps {
    children: React__default.ReactNode;
}
declare const ToastsProvider: React__default.FC<ToastsProviderProps>;

declare const Slider: React.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;

type RangeInputProps = Omit<React__default.ComponentPropsWithoutRef<typeof Slider>, 'classsName' | 'onChange' | 'onValueChange'> & {
    label: string;
    /**
     * Callback function called when the value changes.
     * @param value New value
     * ;@returns void.
     */
    onValueChange: (value: number) => void;
};
declare const RangeInput: React__default.ForwardRefExoticComponent<Omit<Omit<Omit<SliderPrimitive.SliderProps & React__default.RefAttributes<HTMLSpanElement>, "ref"> & React__default.RefAttributes<HTMLSpanElement>, "ref">, "onChange" | "onValueChange" | "classsName"> & {
    label: string;
    /**
     * Callback function called when the value changes.
     * @param value New value
     * ;@returns void.
     */
    onValueChange: (value: number) => void;
} & React__default.RefAttributes<HTMLInputElement>>;

type ColorInputProps = Omit<React__default.ComponentPropsWithoutRef<typeof Input>, 'classsName' | 'onChange'> & {
    label: string;
    /**
     * Callback function called when the value changes.
     * @param value New value
     * ;@returns void.
     */
    onValueChange: (value: string) => void;
};
declare const ColorInput: React__default.ForwardRefExoticComponent<Omit<Omit<InputProps & React__default.RefAttributes<HTMLInputElement>, "ref">, "onChange" | "classsName"> & {
    label: string;
    /**
     * Callback function called when the value changes.
     * @param value New value
     * ;@returns void.
     */
    onValueChange: (value: string) => void;
} & React__default.RefAttributes<HTMLInputElement>>;

type MultiButtonInputOption<TValue extends React__default.ReactNode> = TValue;
type MultiButtonInputProps<TValue extends React__default.ReactNode> = {
    id: string;
    /** Label to display */
    label: string;
    /** Options to select from */
    options: MultiButtonInputOption<TValue>[];
    /** Optional: Default selected option */
    defaultSelected?: MultiButtonInputOption<TValue>;
    /**
     * Callback function called when the value changes.
     * @param value New value
     * @returns void.
     */
    onValueChange: (value: MultiButtonInputOption<TValue>) => void;
    /**
     * Custom function for rendering the option in the input.
     * @param option Input to parse.
     * @returns The parsed string to render.
     */
    optionRender: (option: MultiButtonInputOption<TValue>) => string;
};
declare const MultiButtonInput: <TValue extends React__default.ReactNode>(props: React__default.PropsWithChildren<MultiButtonInputProps<TValue>>) => react_jsx_runtime.JSX.Element;

type ToastVariants = 'success' | 'error' | 'info';
interface Toast {
    id: string;
    variant: ToastVariants;
    content: string;
}

interface UseToastReturn {
    toast: (data: Omit<Toast, 'id'>, duration?: number) => void;
}
/**
 * Hook that returns a function to create toasts.
 * @returns The function to create toast.
 */
declare const useToast: () => UseToastReturn;

export { BookIcon, BookIconProps, Button, ButtonProps, CalendarIcon, CalendarIconProps, CheckIcon, CheckIconProps, ChevronDownIcon, ChevronDownIconProps, ChevronLeftIcon, ChevronLeftIconProps, ChevronRightIcon, ChevronRightIconProps, CloseIcon, CloseIconProps, ColorInput, ColorInputProps, CopyIcon, CopyIconProps, DangerIcon, DangerIconProps, DownloadIcon, DownloadIconProps, EditIcon, EditIconProps, ExclamationIcon, ExclamationIconProps, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, InfoIcon, InfoIconProps, Input, InputProps, Label, LoadingIcon, LoadingIconProps, LogoutIcon, LogoutIconProps, MoonIcon, MoonIconProps, MultiButtonInput, MultiButtonInputOption, MultiButtonInputProps, PlusIcon, PlusIconProps, QRCodeIcon, QRCodeIconProps, RangeInput, RangeInputProps, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, Separator, ShareIcon, ShareIconProps, Skeleton, Slider, SuccessIcon, SuccessIconProps, SunIcon, SunIconProps, ToastsContainer, ToastsContainerProps, ToastsProvider, ToatsContainerStyleProps, TrashIcon, TrashIconProps, UserIcon, UserIconProps, buttonVariants, cn, toastContainerVariants, useFormField, useToast };
