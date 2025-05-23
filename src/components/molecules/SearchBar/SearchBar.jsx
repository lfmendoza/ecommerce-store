import React from "react";
import Input from "../../atoms/Input/Input";
import Icon from "../../atoms/Icon/Icon";

const SearchBar = ({ placeholder = "Buscar productos...", onSearch }) => {
  return (
    <div className="relative">
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch?.(e.target.value)}
        className="pl-10 pr-4"
      />
      <Icon
        name="search"
        className="absolute left-3 top-1/2 transform -translate-y-1/2"
      />
    </div>
  );
};

export default SearchBar;
