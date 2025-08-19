import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from '../components/Slider';
import ProductCard from '../components/ProductCard';
import TopCategories from '../components/category/TopCategories';
import CategoriesGrid from '../components/category/CategoriesGrid';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  // Sample slider data
  const sliderData = [
    {
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'NEW COLLECTION',
      description: 'Discover the latest trends in fashion and style',
      buttonText: 'SHOP NOW'
    },
    {
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'SUMMER SALE',
      description: 'Up to 50% off on selected items',
      buttonText: 'SHOP NOW'
    }
  ];

  // Sample product data
  const featuredProducts = [
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

  return (
    <div className="min-h-screen">
      {/* Hero Section - Slider */}
      <section className="w-full">
        <Slider slides={sliderData} />
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-[#FAFAFA]">
  <div className="max-w-screen-xl mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">EDITOR'S PICK</h2>
    <p className="text-center text-gray-500 mb-12">
      Problems trying to resolve the conflict between
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* Placeholder for editor's pick categories */}
      <div className="relative overflow-hidden rounded-lg group aspect-[3/4] cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
          alt="Category 1"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-sm font-semibold shadow-md">
          Bags
        </div>
        <div className="absolute top-4 right-4 bg-yellow-400 text-white px-2 py-1 rounded text-xs font-semibold">
          ⭐ 4.5
        </div>
      </div>
      
      <div className="relative overflow-hidden rounded-lg group aspect-[3/4] cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
          alt="Category 2"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-sm font-semibold shadow-md">
          Belts
        </div>
        <div className="absolute top-4 right-4 bg-yellow-400 text-white px-2 py-1 rounded text-xs font-semibold">
          ⭐ 4.2
        </div>
      </div>
      
      <div className="relative overflow-hidden rounded-lg group aspect-[3/4] cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
          alt="Category 3"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-sm font-semibold shadow-md">
          Cosmetics
        </div>
        <div className="absolute top-4 right-4 bg-yellow-400 text-white px-2 py-1 rounded text-xs font-semibold">
          ⭐ 4.7
        </div>
      </div>
      
      <div className="relative overflow-hidden rounded-lg group aspect-[3/4] cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1026&q=80"
          alt="Category 4"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-sm font-semibold shadow-md">
          Hats
        </div>
        <div className="absolute top-4 right-4 bg-yellow-400 text-white px-2 py-1 rounded text-xs font-semibold">
          ⭐ 4.1
        </div>
      </div>
    </div>
  </div>
</section>




      {/* Featured Products */}
           {/* Top Categories */}
      <TopCategories />

      {/* All Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[32px] font-bold text-gray-900 mb-2">Tüm Kategoriler</h2>
            <p className="text-[#737373] text-base">
              Kategorilerimize göz atın ve istediğiniz ürünleri bulun
            </p>
          </div>
          <CategoriesGrid />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
  <div className="max-w-[1440px] mx-auto px-4">
    <div className="text-center mb-12">
      <p className="text-center font-medium text-gray uppercase mb-2">Featured Products</p>
      <h2 className="text-[32px] font-bold text-gray-900 mb-2">BESTSELLER PRODUCTS</h2>
      <p className="text-[#737373] text-base">
        Problems trying to resolve the conflict between
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
</section>


      {/* Promotional Banner 1 */}
      <section className="py-16 bg-green-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
              <div className="text-white">
                <span className="text-sm font-medium text-gray-300 mb-2 block">SUMMER 2020</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Vita Classic Product</h2>
                <p className="text-lg text-green-100 mb-6">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                 <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold">$16.48</span>
        <button className="bg-white text-green-900 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
          ADD TO CART
        </button>
      </div>
    </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                alt="Vita Classic Product"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

  {/* Promo Banner 2 */}
<section className="bg-white">
  <div className="max-w-screen-xl mx-auto h-[682px] px-4 flex flex-col lg:flex-row-reverse items-center justify-center gap-12">
    
    {/* Yazı Alanı */}
    <div className="lg:w-1/2 max-w-md">
      <span className="text-sm text-gray-500 block mb-2">SUMMER 2020</span>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Part of the Neural Universe</h2>
      <p className="text-lg text-gray-600 mb-6">
        We know how large objects will act, but things on a small scale.
      </p>

      {/* Butonlar Yan Yana */}
      <div className="flex space-x-4">
        <button className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors">
          BUY NOW
        </button>
        <button className="border border-gray-400 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
          READ MORE
        </button>
      </div>
    </div>

    {/* Görsel */}
    <div className="lg:w-1/2 flex justify-center">
      <img
        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=687&q=80"
        alt="Part of the Neural Universe"
        className="max-h-[400px] w-auto object-contain"
      />
    </div>
  </div>
</section>

    </div>
  );
};

export default HomePage; 