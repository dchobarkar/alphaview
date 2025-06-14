import { JSX, ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: keyof JSX.IntrinsicElements;
  maxWidth?: "default" | "full" | "narrow";
  padding?: "default" | "none" | "lg";
  background?: "theme" | "white" | "gray" | "transparent";
  rounded?: boolean;
  shadow?: boolean;
}

const PageLayout = ({
  children,
  className = "",
  id,
  as: Component = "section",
  maxWidth = "default",
  padding = "default",
  background = "theme",
  rounded = false,
  shadow = false,
}: PageLayoutProps) => {
  const maxWidthMap = {
    default: "max-w-7xl",
    full: "w-full",
    narrow: "max-w-3xl",
  };

  const paddingMap = {
    default: "px-4 py-8",
    none: "",
    lg: "px-6 py-12",
  };

  const backgroundMap = {
    theme: "bg-background text-foreground",
    white: "bg-white text-gray-900",
    gray: "bg-gray-100 text-gray-900",
    transparent: "",
  };

  const finalClassName = [
    "mx-auto flex flex-col",
    maxWidthMap[maxWidth],
    paddingMap[padding],
    backgroundMap[background],
    rounded && "rounded-2xl",
    shadow && "shadow-md",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component id={id} className={finalClassName}>
      {children}
    </Component>
  );
};

export default PageLayout;
