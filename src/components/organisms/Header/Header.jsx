import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import { useCart } from '../../../contexts/CartContext';

const Header = ({ onSearch }) => {
  const navigate = useNavigate();
  const { cartTotals } = useCart();
  // useRef para el input de búsqueda oculto
  const hiddenSearchRef = useRef();

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="bg-white border-b border-gray-200 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Text
          variant="h2"
          color="primary"
          className="cursor-pointer"
          onClick={handleLogoClick}
        >
          E-Commerce Store
        </Text>

        <div className="hidden md:block flex-1 max-w-md mx-8">
          <SearchBar onSearch={onSearch} />
          <input ref={hiddenSearchRef} type="hidden" name="search-history" />
        </div>

        <Button
          variant="ghost"
          onClick={handleCartClick}
          className="flex items-center space-x-2"
        >
          <Icon name="cart" size="large" />
          <span>({cartTotals.itemCount})</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
