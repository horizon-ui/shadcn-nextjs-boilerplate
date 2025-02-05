import Link, { LinkProps } from 'next/link';
import React, { MouseEventHandler } from 'react';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof LinkProps> {
    size?: "sm" | "md" | "lg" | "lg_f18" | "xl" | "2xl";
    label: string;
    disabled?: boolean;
    variant?: "primary" | "gray" | "secondary" | "tertiary" | "tertiary-color" | "link-gray" | "link-color";
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    auto_margin?: boolean;
    fullwidth?: boolean;
    padding?: string;
    href?: string;
    isToNewWindow?: boolean;
    type?: "submit" | "reset" | "button";
    height?: string; // Added height prop
    width?: string;  // Added width prop
    onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
    isCTA?: boolean;
    className?: string; // Added className prop
    typeFormId?: string;
}

const buttonConfig = {
    primary: {
        base: "bg-primary-500 text-white",
        hover: "hover:bg-primary-600",
        focus: "focus:ring focus:ring-primary-500/[.24] focus:outline-none",
    },
    gray: {
        base: "border border-gray-200 text-gray-700 bg-background-secondary",
        hover: "hover:bg-background-secondary-hover hover:text-gray-800",
        focus: "focus:ring focus:ring-gray-400/[.14] focus:outline-none",
    },
    secondary: {
        base: "text-primary-700 border-primary-300 bg-white",
        hover: "hover:bg-primary-50 hover:text-primary-800",
        focus: "focus:ring focus:ring-primary-50 focus:outline-none",
    },
    tertiary: {
        base: "text-gray-600",
        hover: "hover:bg-gray-50 hover:text-gray-700",
        focus: "",
    },
    "tertiary-color": {
        base: "text-primary-700",
        hover: "hover:bg-primary-50 hover:text-primary-800",
        focus: "",
    },
    "link-gray": {
        base: "text-gray-600",
        hover: "hover:text-gray-700",
        focus: "",
    },
    "link-color": {
        base: "text-primary-700",
        hover: "hover:text-primary-800",
        focus: "",
    },
};

const sizeConfig = {
    sm: "py-2 px-3 text-text-sm",
    md: "py-2.5 px-3.5 text-text-sm",
    lg: "py-2.5 px-4 text-text-md",
    "lg_f18": "text-text-lg p-0 min-h-6",
    xl: "py-3 px-5 text-text-md",
    "2xl": "py-4 px-6 text-text-lg",
};

export const Button: React.FC<ButtonProps> = ({
    size = "md",
    label,
    disabled = false,
    variant = "primary",
    leftIcon,
    rightIcon,
    auto_margin = false,
    fullwidth = false,
    padding,
    type = "button",
    height,
    width,
    href,
    onClick,
    isCTA = false,
    typeFormId,
    className = "",
    ...props
}) => {
    const getButtonClasses = () => {
        const config = buttonConfig[variant];
        const sizeClass = padding || sizeConfig[size];
        const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
        const marginClass = auto_margin ? "m-auto" : "";
        const widthClass = fullwidth ? "w-full justify-center" : "w-fit";

        return `
      ${sizeClass}
      ${config.base}
      ${disabled ? "" : config.hover}
      ${disabled ? "" : config.focus}
      ${disabledClass}
      ${marginClass}
      ${widthClass}
      ${className}
      rounded-md font-semibold transition-all duration-200 ease-in-out
      flex items-center gap-lg
    `.replace(/\s+/g, ' ').trim();
    };

    const buttonContent = (
        <>
            {leftIcon}
            {label}
            {rightIcon}
        </>
    );

    if (href && !disabled) {
        return (
            <Link href={href} className={getButtonClasses()} target={props.isToNewWindow ? "_blank" : ""}>
                {buttonContent}
            </Link>
        );
    }

    if (isCTA) {
        if (disabled) {
            return (
                <button
                    className={getButtonClasses()}
                    onClick={onClick}
                    disabled={disabled}
                    type={type}
                    {...props}
                >
                    {buttonContent}
                </button>
            );
        }
        return (

                <button
                    className={getButtonClasses()}
                    onClick={onClick}
                    disabled={disabled}
                    type={type}
                    {...props}
                >
                    {buttonContent}
                </button>


        );
    }

    return (
        <button
            className={getButtonClasses()}
            onClick={onClick}
            disabled={disabled}
            type={type}
            {...props}
        >
            {buttonContent}
        </button>
    );
};