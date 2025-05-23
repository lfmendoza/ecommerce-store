export default {
  title: "Molecules/ProductCard",
  component: ProductCard,
};

export const Default = {
  args: {
    product: {
      id: 1,
      name: "Smartphone Pro Max",
      price: 899.99,
      originalPrice: 999.99,
      image: "https://via.placeholder.com/300x300/007bff/ffffff?text=Phone",
      rating: 4.5,
      reviews: 128,
      hasDiscount: true,
    },
  },
};
