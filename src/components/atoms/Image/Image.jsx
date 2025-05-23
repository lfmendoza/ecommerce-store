import React from "react";

const Image = ({
  src,
  alt,
  width,
  height,
  className = "",
  fallback = "https://via.placeholder.com/300x300/f1f1f1/999999?text=No+Image",
  ...props
}) => {
  const handleError = (e) => {
    e.target.src = fallback;
  };

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover ${className}`}
      onError={handleError}
      {...props}
    />
  );
};

export default Image;
