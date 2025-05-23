export default {
  title: "Molecules/PriceDisplay",
  component: PriceDisplay,
};

export const WithDiscount = {
  args: {
    price: 899.99,
    originalPrice: 999.99,
  },
};

export const WithoutDiscount = {
  args: {
    price: 599.99,
  },
};
