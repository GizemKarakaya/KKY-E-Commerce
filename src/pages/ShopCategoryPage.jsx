import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllCategories } from "../redux/selectors/categorySelectors";

export default function ShopCategoryPage() {
  const { gender, categoryName, categoryId } = useParams();
  const categories = useSelector(selectAllCategories);
  
  const category = categories.find((c) => String(c.id) === String(categoryId));

  if (!category) {
    return (
      <div className="container mx-auto py-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Kategori bulunamadı.</h1>
          <p className="text-gray-600">Aradığınız kategori mevcut değil.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <a href="/" className="hover:text-primary-600">Ana Sayfa</a>
          <span>/</span>
          <a href="/shop" className="hover:text-primary-600">Mağaza</a>
          <span>/</span>
          <span className="text-gray-900 capitalize">{gender}</span>
          <span>/</span>
          <span className="text-gray-900">{category.name}</span>
        </nav>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {category.name} — {gender === 'kadin' ? 'Kadın' : 'Erkek'}
        </h1>
        <p className="text-gray-600">
          Bu kategoriye ait ürünler burada listelenecek.
        </p>
      </div>

      {/* Placeholder for products */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">🛍️</div>
        <h2 className="text-xl font-semibold mb-2">Ürünler Yakında</h2>
        <p className="text-gray-600">
          Bu kategoriye ait ürünler henüz eklenmemiş. Lütfen daha sonra tekrar kontrol edin.
        </p>
      </div>
    </div>
  );
}
