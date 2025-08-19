import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchProducts } from '../redux/actions/productActions';
import { 
  selectAllProducts, 
  selectProductsLoading, 
  selectProductsError, 
  selectProductsTotal 
} from '../redux/selectors/productSelectors';

const ShopPage = () => {
  const dispatch = useDispatch();
  const { gender, categoryName, categoryId } = useParams();
  
  // Redux state
  const products = useSelector(selectAllProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);
  const total = useSelector(selectProductsTotal);
  
  // Local state
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  
  useEffect(() => {
    // Fetch products when component mounts or page changes
    const offset = (currentPage - 1) * productsPerPage;
    console.log('Fetching products:', { limit: productsPerPage, offset, currentPage });
    dispatch(fetchProducts(productsPerPage, offset));
  }, [dispatch, currentPage, productsPerPage]);
  
  useEffect(() => {
    if (gender && categoryName && categoryId) {
      console.log(`Filtering by: ${gender}/${categoryName}/${categoryId}`);
      // Burada API'den kategori bazlı ürünleri çekebiliriz
    }
  }, [gender, categoryName, categoryId]);
  
  // Calculate pagination
  const totalPages = Math.ceil(total / productsPerPage);
  
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Shop</h1>
            <p className="text-gray-600">Discover our collection of amazing products</p>
          </div>
        </div>
        <LoadingSpinner size="lg" text="Loading products..." />
      </div>
    );
  }
  
  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Shop</h1>
            <p className="text-gray-600">Discover our collection of amazing products</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Error Loading Products</h2>
            <p className="text-gray-600">Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Shop</h1>
          <p className="text-gray-600">Discover our collection of amazing products</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters and Sort Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left side - Filters */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-primary-600">
                <span>🔍</span>
                <span>Filter</span>
              </button>
              <span className="text-gray-500">|</span>
              <span className="text-sm text-gray-600">
                Showing {((currentPage - 1) * productsPerPage) + 1}-{Math.min(currentPage * productsPerPage, total)} of {total} Products
              </span>
            </div>

            {/* Right side - Sort and View */}
            <div className="flex items-center space-x-4">
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">▼</span>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 border border-gray-300 rounded-md">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-primary-500 text-white' : 'text-gray-600 hover:text-primary-600'}`}
                >
                  <span>⊞</span>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-primary-500 text-white' : 'text-gray-600 hover:text-primary-600'}`}
                >
                  <span>☰</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {totalPages > 0 && [...Array(Math.min(totalPages, 10))].map((_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-3 py-2 text-sm font-medium rounded-md border ${
                    currentPage === pageNumber
                      ? 'text-white bg-primary-600 border-primary-600'
                      : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </nav>
        </div>
      </div>

      {/* Client Logos Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8 md:space-x-16">
            {['hooli', 'lyft', 'stripe', 'aws', 'reddit'].map((brand) => (
              <div key={brand} className="text-gray-400 font-bold text-2xl md:text-3xl">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage; 