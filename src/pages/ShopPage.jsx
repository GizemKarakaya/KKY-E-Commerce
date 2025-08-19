import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
// import { Filter, Grid, List, ChevronDown } from 'lucide-react';

const ShopPage = () => {
  const { gender, categoryName, categoryId } = useParams();
  
  useEffect(() => {
    if (gender && categoryName && categoryId) {
      console.log(`Filtering by: ${gender}/${categoryName}/${categoryId}`);
      // Burada API'den kategori bazlı ürünleri çekebiliriz
    }
  }, [gender, categoryName, categoryId]);
  // Sample product data for shop page
  const shopProducts = [
    {
      id: 1,
      name: 'Graphic Design',
      department: 'English department',
      originalPrice: 16.48,
      salePrice: 6.48,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=705&q=80',
      isNew: true,
      rating: 4.5
    },
    {
      id: 2,
      name: 'Fashion Design',
      department: 'Design department',
      originalPrice: 25.00,
      salePrice: 18.00,
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
      rating: 4.2
    },
    {
      id: 3,
      name: 'Modern Art',
      department: 'Art department',
      originalPrice: 30.00,
      salePrice: 22.00,
      image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
      rating: 4.8
    },
    {
      id: 4,
      name: 'Creative Design',
      department: 'Design department',
      originalPrice: 28.00,
      salePrice: 20.00,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1026&q=80',
      rating: 4.3
    },
    {
      id: 5,
      name: 'Digital Art',
      department: 'Digital department',
      originalPrice: 35.00,
      salePrice: 25.00,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      rating: 4.6
    },
    {
      id: 6,
      name: 'Abstract Design',
      department: 'Art department',
      originalPrice: 32.00,
      salePrice: 24.00,
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      rating: 4.1
    },
    {
      id: 7,
      name: 'Contemporary Art',
      department: 'Modern department',
      originalPrice: 40.00,
      salePrice: 30.00,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      rating: 4.7
    },
    {
      id: 8,
      name: 'Design System',
      department: 'System department',
      originalPrice: 45.00,
      salePrice: 35.00,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80',
      rating: 4.4
    },
    {
      id: 9,
      name: 'Web Design',
      department: 'Web department',
      originalPrice: 38.00,
      salePrice: 28.00,
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80',
      rating: 4.9
    },
    {
      id: 10,
      name: 'UI/UX Design',
      department: 'Design department',
      originalPrice: 42.00,
      salePrice: 32.00,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80',
      rating: 4.5
    },
    {
      id: 11,
      name: 'Brand Identity',
      department: 'Branding department',
      originalPrice: 50.00,
      salePrice: 40.00,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1026&q=80',
      rating: 4.6
    },
    {
      id: 12,
      name: 'Print Design',
      department: 'Print department',
      originalPrice: 36.00,
      salePrice: 26.00,
      image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
      rating: 4.3
    },
    {
      id: 13,
      name: 'Web Development',
      department: 'Development department',
      originalPrice: 55.00,
      salePrice: 45.00,
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80',
      rating: 4.8,
      reviewCount: 89
    },
    {
      id: 14,
      name: 'Mobile App Design',
      department: 'App department',
      originalPrice: 48.00,
      salePrice: 38.00,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      rating: 4.6,
      reviewCount: 67
    },
    {
      id: 15,
      name: 'UI/UX Design',
      department: 'Design department',
      originalPrice: 42.00,
      salePrice: 32.00,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80',
      rating: 4.5,
      reviewCount: 123
    },
    {
      id: 16,
      name: 'Brand Identity',
      department: 'Branding department',
      originalPrice: 50.00,
      salePrice: 40.00,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1026&q=80',
      rating: 4.6,
      reviewCount: 45
    },
    {
      id: 17,
      name: 'Logo Design',
      department: 'Design department',
      originalPrice: 35.00,
      salePrice: 25.00,
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      rating: 4.4,
      reviewCount: 78
    },
    {
      id: 18,
      name: 'Illustration',
      department: 'Art department',
      originalPrice: 45.00,
      salePrice: 35.00,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      rating: 4.7,
      reviewCount: 92
    },
    {
      id: 19,
      name: '3D Modeling',
      department: '3D department',
      originalPrice: 60.00,
      salePrice: 50.00,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80',
      rating: 4.9,
      reviewCount: 34
    },
    {
      id: 20,
      name: 'Animation',
      department: 'Animation department',
      originalPrice: 55.00,
      salePrice: 45.00,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1026&q=80',
      rating: 4.5,
      reviewCount: 56
    },
    {
      id: 21,
      name: 'Video Editing',
      department: 'Video department',
      originalPrice: 65.00,
      salePrice: 55.00,
      image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
      rating: 4.8,
      reviewCount: 41
    },
    {
      id: 22,
      name: 'Photography',
      department: 'Photo department',
      originalPrice: 40.00,
      salePrice: 30.00,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      rating: 4.6,
      reviewCount: 88
    },
    {
      id: 23,
      name: 'Typography',
      department: 'Design department',
      originalPrice: 38.00,
      salePrice: 28.00,
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      rating: 4.3,
      reviewCount: 62
    },
    {
      id: 24,
      name: 'Icon Design',
      department: 'Design department',
      originalPrice: 32.00,
      salePrice: 22.00,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      rating: 4.4,
      reviewCount: 73
    },
    {
      id: 25,
      name: 'Packaging Design',
      department: 'Design department',
      originalPrice: 45.00,
      salePrice: 35.00,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80',
      rating: 4.7,
      reviewCount: 29
    },
    {
      id: 26,
      name: 'Social Media Design',
      department: 'Marketing department',
      originalPrice: 35.00,
      salePrice: 25.00,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1026&q=80',
      rating: 4.5,
      reviewCount: 95
    },
    {
      id: 27,
      name: 'E-commerce Design',
      department: 'E-commerce department',
      originalPrice: 50.00,
      salePrice: 40.00,
      image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
      rating: 4.6,
      reviewCount: 51
    },
    {
      id: 28,
      name: 'Landing Page Design',
      department: 'Web department',
      originalPrice: 42.00,
      salePrice: 32.00,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      rating: 4.4,
      reviewCount: 67
    },
    {
      id: 29,
      name: 'Dashboard Design',
      department: 'UI department',
      originalPrice: 55.00,
      salePrice: 45.00,
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      rating: 4.8,
      reviewCount: 38
    },
    {
      id: 30,
      name: 'Mobile UI Design',
      department: 'Mobile department',
      originalPrice: 48.00,
      salePrice: 38.00,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      rating: 4.7,
      reviewCount: 82
    },
    {
      id: 31,
      name: 'Desktop UI Design',
      department: 'Desktop department',
      originalPrice: 52.00,
      salePrice: 42.00,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80',
      rating: 4.5,
      reviewCount: 44
    },
    {
      id: 32,
      name: 'Wireframe Design',
      department: 'UX department',
      originalPrice: 38.00,
      salePrice: 28.00,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1026&q=80',
      rating: 4.3,
      reviewCount: 59
    },
    {
      id: 33,
      name: 'Prototype Design',
      department: 'Prototype department',
      originalPrice: 45.00,
      salePrice: 35.00,
      image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
      rating: 4.6,
      reviewCount: 31
    },
    {
      id: 34,
      name: 'User Research',
      department: 'Research department',
      originalPrice: 40.00,
      salePrice: 30.00,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      rating: 4.4,
      reviewCount: 26
    },
    {
      id: 35,
      name: 'Usability Testing',
      department: 'Testing department',
      originalPrice: 35.00,
      salePrice: 25.00,
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      rating: 4.5,
      reviewCount: 42
    },
    {
      id: 36,
      name: 'Design System',
      department: 'System department',
      originalPrice: 60.00,
      salePrice: 50.00,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      rating: 4.9,
      reviewCount: 18
    }
  ];

  // Pagination state and functions
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(shopProducts.length / productsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = shopProducts.slice(indexOfFirstProduct, indexOfLastProduct);

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
                Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, shopProducts.length)} of {shopProducts.length} Products
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
          {currentProducts.map((product) => (
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
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-2 text-sm font-medium rounded-md border ${
                  currentPage === index + 1
                    ? 'text-white bg-primary-600 border-primary-600'
                    : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
                }`}
              >
                {index + 1}
              </button>
            ))}
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