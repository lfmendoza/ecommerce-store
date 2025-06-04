export const favoritesHistory = [];

export function recordFavoriteAction(productId) {
  favoritesHistory.push({
    productId,
    timestamp: new Date().toISOString(),
    action: 'toggle',
  });
}

export function getFavoritesHistory() {
  return favoritesHistory;
}
