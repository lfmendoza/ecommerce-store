import React from "react";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import SearchBar from "../../molecules/SearchBar/SearchBar";

const Header = ({ cartItemsCount = 0, onCartClick, onSearch }) => {
  return (
    <header className="bg-white border-b border-gray-200 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Text variant="h2" color="primary">
          E-Commerce Store
        </Text>

        <div className="hidden md:block flex-1 max-w-md mx-8">
          <SearchBar onSearch={onSearch} />
        </div>

        <Button
          variant="ghost"
          onClick={onCartClick}
          className="flex items-center space-x-2"
        >
          <Icon name="cart" size="large" />
          <span>({cartItemsCount})</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
