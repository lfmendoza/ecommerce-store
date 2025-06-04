import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PriceDisplay from './PriceDisplay';

describe('PriceDisplay Component', () => {
  it('displays price correctly', () => {
    render(<PriceDisplay price={99.99} />);
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });

  it('shows original price when provided', () => {
    render(<PriceDisplay price={79.99} originalPrice={99.99} />);
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByText('$79.99')).toBeInTheDocument();
  });

  it('calculates discount percentage', () => {
    render(<PriceDisplay price={80} originalPrice={100} showDiscount />);
    expect(screen.getByText('-20%')).toBeInTheDocument();
  });
});
