import ProductCard from './ProductCard';

export default {
  title: 'Molecules/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    product: {
      id: 1,
      name: 'Smartphone Pro Max',
      price: 899.99,
      originalPrice: 999.99,
      image: 'https://picsum.photos/300/300?random=1',
      rating: 4.5,
      reviews: 128,
      hasDiscount: true,
    },
  },
};

export const WithoutDiscount = {
  args: {
    product: {
      id: 2,
      name: 'Auriculares Premium',
      price: 199.99,
      originalPrice: null,
      image: 'https://picsum.photos/300/300?random=2',
      rating: 4.2,
      reviews: 89,
      hasDiscount: false,
    },
  },
};
