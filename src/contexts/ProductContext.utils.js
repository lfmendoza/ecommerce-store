import { productsData } from '../data/products';

export function getProducts() {
  return productsData.products;
}

export function buildRecommendations(viewedIds, currentProductId, limit = 4) {
  const current = productsData.products.find((p) => p.id === currentProductId);

  let recs = productsData.products.filter(
    (p) => p.id !== currentProductId && p.category === current?.category
  );

  if (recs.length < limit) {
    const extras = productsData.products.filter(
      (p) =>
        p.id !== currentProductId &&
        viewedIds.includes(p.id) &&
        !recs.find((r) => r.id === p.id)
    );
    recs = [...recs, ...extras];
  }

  if (recs.length < limit) {
    const remaining = productsData.products.filter(
      (p) => p.id !== currentProductId && !recs.find((r) => r.id === p.id)
    );
    recs = [...recs, ...remaining];
  }

  return recs.slice(0, limit);
}
