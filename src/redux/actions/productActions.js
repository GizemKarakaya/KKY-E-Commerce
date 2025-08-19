import { 
  SET_CATEGORIES, 
  SET_PRODUCT_LIST, 
  SET_TOTAL, 
  SET_FETCH_STATE, 
  SET_LIMIT, 
  SET_OFFSET, 
  SET_FILTER 
} from '../reducers/productReducer';

const API_BASE = "https://workintech-fe-ecommerce.onrender.com";

// Product Action Creators
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories
});

export const setProductList = (productList) => ({
  type: SET_PRODUCT_LIST,
  payload: productList
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total
});

export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState
});

export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter
});

// Thunk Action Creator to fetch products
export const fetchProducts = (limit = 25, offset = 0) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setFetchState('FETCHING'));
      
      const response = await fetch(`${API_BASE}/products?limit=${limit}&offset=${offset}`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const data = await response.json();
      console.log('Products API Response:', data);
      
      // Set total and products to Redux state
      dispatch(setTotal(data.total));
      dispatch(setProductList(data.products));
      dispatch(setFetchState('FETCHED'));
      
    } catch (error) {
      console.error('Error fetching products:', error);
      dispatch(setFetchState('FAILED'));
      
      // Fallback to test data if API fails
      console.log('API not available, using test data');
      const testProducts = [
        {
          id: 1,
          name: 'Graphic Design',
          department: 'English department',
          originalPrice: 16.48,
          salePrice: 6.48,
          image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=705&q=80',
          isNew: true,
          rating: 4.5,
          reviewCount: 123
        },
        {
          id: 2,
          name: 'Fashion Design',
          department: 'Design department',
          originalPrice: 25.00,
          salePrice: 18.00,
          image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
          rating: 4.2,
          reviewCount: 89
        },
        {
          id: 3,
          name: 'Modern Art',
          department: 'Art department',
          originalPrice: 30.00,
          salePrice: 22.00,
          image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
          rating: 4.8,
          reviewCount: 156
        },
        {
          id: 4,
          name: 'Creative Design',
          department: 'Design department',
          originalPrice: 28.00,
          salePrice: 20.00,
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1026&q=80',
          rating: 4.3,
          reviewCount: 78
        },
        {
          id: 5,
          name: 'Digital Art',
          department: 'Digital department',
          originalPrice: 35.00,
          salePrice: 25.00,
          image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
          rating: 4.6,
          reviewCount: 92
        },
        {
          id: 6,
          name: 'Abstract Design',
          department: 'Art department',
          originalPrice: 32.00,
          salePrice: 24.00,
          image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
          rating: 4.1,
          reviewCount: 45
        },
        {
          id: 7,
          name: 'Contemporary Art',
          department: 'Modern department',
          originalPrice: 40.00,
          salePrice: 30.00,
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
          rating: 4.7,
          reviewCount: 134
        },
        {
          id: 8,
          name: 'Design System',
          department: 'System department',
          originalPrice: 45.00,
          salePrice: 35.00,
          image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80',
          rating: 4.4,
          reviewCount: 67
        }
      ];
      
      dispatch(setTotal(testProducts.length));
      dispatch(setProductList(testProducts));
      dispatch(setFetchState('FETCHED'));
    }
  };
};
