import React from "react";

const Text = ({
  children,
  variant = "body",
  color = "default",
  className = "",
  ...props
}) => {
  const variants = {
    h1: "text-3xl font-bold",
    h2: "text-2xl font-semibold",
    h3: "text-xl font-semibold",
    h4: "text-lg font-medium",
    body: "text-base",
    small: "text-sm",
    caption: "text-xs",
  };

  const colors = {
    default: "text-gray-900",
    muted: "text-gray-600",
    light: "text-gray-400",
    primary: "text-blue-600",
    danger: "text-red-600",
    success: "text-green-600",
  };

  const Component = variant.startsWith("h") ? variant : "p";
  const classes = `${variants[variant]} ${colors[color]} ${className}`;

  return React.createElement(
    Component,
    { className: classes, ...props },
    children
  );
};

export default Text;
