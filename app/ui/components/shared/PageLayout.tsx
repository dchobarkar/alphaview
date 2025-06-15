import { JSX, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: keyof JSX.IntrinsicElements;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "sm" | "md" | "lg";
  background?: "default" | "white" | "gray" | "transparent";
  rounded?: boolean;
  shadow?: boolean;
}

const PageLayout = ({
  children,
  className,
  id,
  as: Component = "section",
  size = "lg",
  padding = "md",
  background = "default",
  rounded = false,
  shadow = false,
}: PageLayoutProps) => {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  const paddingMap = {
    none: "",
    sm: "px-4 py-4",
    md: "px-6 py-8",
    lg: "px-8 py-12",
  };

  const backgroundMap = {
    default: "bg-white",
    white: "bg-white",
    gray: "bg-gray-50",
    transparent: "",
  };

  return (
    <Component
      id={id}
      className={twMerge(
        "mx-auto",
        sizes[size],
        paddingMap[padding],
        backgroundMap[background],
        rounded && "rounded-lg",
        shadow && "shadow-sm",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default PageLayout;
