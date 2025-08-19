import React from 'react';
import { useSelector } from 'react-redux';
import { selectTop5Categories } from '../../redux/selectors/categorySelectors';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils/slug';
// import { Star } from 'lucide-react';

export default function TopCategories() {
  const topCategories = useSelector(selectTop5Categories);

  if (topCategories.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold text-gray-900 mb-2">Top Kategoriler</h2>
          <p className="text-[#737373] text-base">
            En popüler kategorilerimizi keşfedin
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {topCategories.map((category) => (
            <Link
              key={category.id}
              to={`/shop/${category.gender}/${slugify(category.name)}/${category.id}`}
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
                <div className="text-4xl font-bold text-primary-600">
                  {category.name.charAt(0)}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-sm text-gray-600">{category.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
