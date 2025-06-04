import React from 'react';

export default function PriceDisplay({ price, originalPrice }) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedPrice = formatter.format(price);
  const formattedOriginal =
    typeof originalPrice === 'number' ? formatter.format(originalPrice) : null;

  const discount =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null;

  return (
    <div className="flex items-center space-x-2">
      <h4 className="text-lg font-medium text-blue-600">{formattedPrice}</h4>

      {formattedOriginal && (
        <>
          <p className="text-sm text-gray-600 line-through">
            {formattedOriginal}
          </p>
          {discount !== null && (
            <p className="text-sm text-green-600">-{discount}%</p>
          )}
        </>
      )}
    </div>
  );
}
