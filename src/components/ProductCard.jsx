import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { 
    id, 
    name, 
    department, 
    originalPrice, 
    salePrice, 
    image, 
    colors = ['#23A6F0', '#23856D', '#3C403D', '#E77C40'],
    isNew = false,
    rating = 0,
    reviewCount = 0
  } = product;

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Product Image Container */}
      <div className="relative overflow-hidden rounded-t-lg">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </Link>
        
        {/* New Badge */}
        {isNew && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
            NEW
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50">
            <Heart size={16} className="text-gray-600" />
          </button>
          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50">
            <ShoppingCart size={16} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Product Name */}
        <Link to={`/product/${id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2 hover:text-primary-600 cursor-pointer">
            {name}
          </h3>
        </Link>
        
        {/* Department */}
        <p className="text-sm text-gray-500 mb-2">
          {department}
        </p>
        
        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
            {reviewCount > 0 && (
              <span className="text-xs text-gray-500">({reviewCount})</span>
            )}
          </div>
        )}
        
        {/* Price */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-lg font-bold text-gray-900">
            ${salePrice}
          </span>
          {originalPrice !== salePrice && (
            <span className="text-sm text-gray-400 line-through">
              ${originalPrice}
            </span>
          )}
        </div>
        
        {/* Color Options */}
        <div className="flex items-center space-x-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
              title={`Color option ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 