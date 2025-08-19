import { createSelector } from 'reselect';

export const selectAllCategories = (state) => state.product.categories;
export const selectCategoriesLoading = (state) => state.product.categoriesLoading;
export const selectCategoriesError = (state) => state.product.categoriesError;

export const selectTop5Categories = createSelector(
  [selectAllCategories],
  (categories) =>
    [...(categories || [])]
      .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
      .slice(0, 5)
);

export const selectCategoriesByGender = createSelector(
  [selectAllCategories, (state, gender) => gender],
  (categories, gender) => (categories || []).filter((c) => c.gender === gender)
);
