import { createSelector } from 'reselect';

export const selectAllProducts = (state) => state.product.productList;
export const selectProductsLoading = (state) => state.product.fetchState === 'FETCHING';
export const selectProductsError = (state) => state.product.fetchState === 'FAILED';
export const selectProductsTotal = (state) => state.product.total;
export const selectProductsLimit = (state) => state.product.limit;
export const selectProductsOffset = (state) => state.product.offset;
export const selectProductsFilter = (state) => state.product.filter;

// Memoized selectors
export const selectProductsByRating = createSelector(
  [selectAllProducts],
  (products) => [...(products || [])].sort((a, b) => (b.rating || 0) - (a.rating || 0))
);

export const selectProductsByPrice = createSelector(
  [selectAllProducts],
  (products) => [...(products || [])].sort((a, b) => (a.salePrice || 0) - (b.salePrice || 0))
);

export const selectProductsByPriceHighToLow = createSelector(
  [selectAllProducts],
  (products) => [...(products || [])].sort((a, b) => (b.salePrice || 0) - (a.salePrice || 0))
);

export const selectNewProducts = createSelector(
  [selectAllProducts],
  (products) => (products || []).filter(product => product.isNew)
);

export const selectProductsWithDiscount = createSelector(
  [selectAllProducts],
  (products) => (products || []).filter(product => 
    product.originalPrice && product.salePrice && product.originalPrice > product.salePrice
  )
);
