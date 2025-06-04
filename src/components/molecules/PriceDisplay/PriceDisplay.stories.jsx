import PriceDisplay from './PriceDisplay';

export default {
  title: 'Molecules/PriceDisplay',
  component: PriceDisplay,
  parameters: {
    layout: 'centered',
  },
};

export const WithDiscount = {
  args: {
    price: 899.99,
    originalPrice: 999.99,
    showDiscount: true,
  },
};

export const WithoutDiscount = {
  args: {
    price: 599.99,
    originalPrice: null,
  },
};

export const LargeDiscount = {
  args: {
    price: 299.99,
    originalPrice: 599.99,
    showDiscount: true,
  },
};
