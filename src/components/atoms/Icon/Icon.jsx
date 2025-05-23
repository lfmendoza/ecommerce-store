import React from "react";

const Icon = ({ name, size = "medium", color = "default", className = "" }) => {
  const icons = {
    cart: "🛒",
    heart: "❤️",
    star: "⭐",
    search: "🔍",
    plus: "+",
    minus: "-",
    delete: "🗑️",
    favorite: "💝",
    back: "←",
  };

  const sizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
    xl: "text-xl",
  };

  const colors = {
    default: "text-gray-600",
    primary: "text-blue-600",
    danger: "text-red-600",
    success: "text-green-600",
  };

  return (
    <span className={`${sizes[size]} ${colors[color]} ${className}`}>
      {icons[name] || name}
    </span>
  );
};

export default Icon;
