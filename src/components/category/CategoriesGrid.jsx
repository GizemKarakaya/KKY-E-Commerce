import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../../redux/selectors/categorySelectors';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils/slug';
// import { Star } from 'lucide-react';

export default function CategoriesGrid() {
  const categories = useSelector(selectAllCategories);

  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/shop/${category.gender}/${slugify(category.name)}/${category.id}`}
          className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
        >
          <div className="aspect-square bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
            <div className="text-2xl font-bold text-primary-600">
              {category.name.charAt(0)}
            </div>
          </div>
          <div className="p-3">
            <h3 className="font-medium text-gray-900 text-sm mb-1 group-hover:text-primary-600 transition-colors">
              {category.name}
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-yellow-400 text-xs">★</span>
                <span className="ml-1 text-xs text-gray-600">{category.rating}</span>
              </div>
              <span className="text-xs text-gray-500 capitalize">{category.gender}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
