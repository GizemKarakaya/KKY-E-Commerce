import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Star, Heart, ShoppingCart, Share2, Truck, RefreshCw, Shield } from 'lucide-react';

const ProductDetailPage = () => {
  const [selectedColor, setSelectedColor] = useState('yellow');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Product data
  const product = {
    id: 1,
    name: 'Floating Phone',
    price: 1139.33,
    originalPrice: 1299.99,
    rating: 4.8,
    reviewCount: 123,
    description: 'The quick fox jumps over the lazy dog. The quick fox jumps over the lazy dog. The quick fox jumps over the lazy dog.',
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'yellow', hex: '#FFD700' },
      { name: 'blue', hex: '#3B82F6' },
      { name: 'green', hex: '#10B981' },
      { name: 'red', hex: '#EF4444' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'High-quality materials',
      'Durable construction',
      'Modern design',
      'Comfortable fit'
    ]
  };

  // Related products
  const relatedProducts = [
    {
      id: 1,
      name: 'Graphic Design',
      department: 'English department',
      originalPrice: 16.48,
      salePrice: 6.48,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=705&q=80',
      isNew: true
    },
    {
      id: 2,
      name: 'Fashion Design',
      department: 'Design department',
      originalPrice: 25.00,
      salePrice: 18.00,
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80'
    },
    {
      id: 3,
      name: 'Modern Art',
      department: 'Art department',
      originalPrice: 30.00,
      salePrice: 22.00,
      image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80'
    },
    {
      id: 4,
      name: 'Creative Design',
      department: 'Design department',
      originalPrice: 28.00,
      salePrice: 20.00,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1026&q=80'
    },
    {
      id: 5,
      name: 'Digital Art',
      department: 'Digital department',
      originalPrice: 35.00,
      salePrice: 25.00,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 6,
      name: 'Abstract Design',
      department: 'Art department',
      originalPrice: 32.00,
      salePrice: 24.00,
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Product Hero Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                  <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color.name ? 'border-gray-900' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
                <div className="flex space-x-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md text-sm font-medium ${
                        selectedSize === size
                          ? 'border-primary-600 text-primary-600'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-md font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </button>
                <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50">
                  <Heart size={20} className="text-gray-600" />
                </button>
                <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50">
                  <Share2 size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Features */}
              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Truck size={20} className="text-primary-600" />
                    <span className="text-sm text-gray-600">Free shipping</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RefreshCw size={20} className="text-primary-600" />
                    <span className="text-sm text-gray-600">30 day return</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield size={20} className="text-primary-600" />
                    <span className="text-sm text-gray-600">2 year warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {[
                { id: 'description', label: 'Description' },
                { id: 'additional', label: 'Additional information' },
                { id: 'reviews', label: 'Reviews' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="p-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'additional' && (
              <div className="text-gray-600">
                <p>Additional information about the product will be displayed here.</p>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="text-gray-600">
                <p>Customer reviews will be displayed here.</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">BESTSELLER PRODUCTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Brand Logos */}
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <div className="flex flex-wrap justify-center items-center space-x-8 md:space-x-16">
            {['hooli', 'lyft', 'stripe', 'aws', 'reddit'].map((brand) => (
              <div key={brand} className="text-gray-400 font-bold text-xl">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 