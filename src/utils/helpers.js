export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-GT', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol',
  }).format(price);
};

export const generateStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push('★');
  }

  if (hasHalfStar) {
    stars.push('☆');
  }

  while (stars.length < 5) {
    stars.push('☆');
  }

  return stars.join('');
};

export const calculateDiscount = (originalPrice, currentPrice) => {
  if (!originalPrice) return 0;
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};
