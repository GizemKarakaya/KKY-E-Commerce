// Action types
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_FETCH_STATE = 'SET_FETCH_STATE';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_FILTER = 'SET_FILTER';

export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

// Initial state
const initialState = {
  categories: [],
  categoriesLoading: false,
  categoriesError: null,
  productList: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: '',
  fetchState: 'NOT_FETCHED' // NOT_FETCHED, FETCHING, FETCHED, FAILED
};

// Product reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    
    case SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload
      };
    
    case SET_TOTAL:
      return {
        ...state,
        total: action.payload
      };
    
    case SET_FETCH_STATE:
      return {
        ...state,
        fetchState: action.payload
      };
    
    case SET_LIMIT:
      return {
        ...state,
        limit: action.payload
      };
    
    case SET_OFFSET:
      return {
        ...state,
        offset: action.payload
      };
    
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    
    case FETCH_CATEGORIES_REQUEST:
      return { ...state, categoriesLoading: true, categoriesError: null };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, categoriesLoading: false, categories: action.payload };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, categoriesLoading: false, categoriesError: action.payload };
    
    default:
      return state;
  }
};

export default productReducer;
