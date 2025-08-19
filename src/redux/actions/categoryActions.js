import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from "../reducers/productReducer";

const API_BASE = "https://workintech-fe-ecommerce.onrender.com";

export const fetchCategories = () => async (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });
  try {
    const res = await fetch(`${API_BASE}/categories`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    
    // Güvenlik: rating sayı olsun, name slug için trimlensin
    const normalized = data.map((c) => ({
      ...c,
      rating: Number(c.rating ?? 0),
      name: String(c.title ?? "").trim(),
      gender: (c.gender || "").toLowerCase() === "k" ? "kadin" : "erkek",
      image: c.img || ""
    }));

    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: normalized });
  } catch (err) {
    console.log('API not available, using test data');
    // Test data - Figma tasarımına uygun (sadece Bags, Belts, Cosmetics, Hats)
    const testCategories = [
      // Kadın Kategorileri - Figma'da gösterilen 4 kategori
      { id: 1, name: 'Bags', gender: 'kadin', rating: 4.5 },
      { id: 2, name: 'Belts', gender: 'kadin', rating: 4.2 },
      { id: 3, name: 'Cosmetics', gender: 'kadin', rating: 4.7 },
      { id: 4, name: 'Hats', gender: 'kadin', rating: 4.1 },
      
      // Erkek Kategorileri - Figma'da gösterilen 4 kategori
      { id: 5, name: 'Bags', gender: 'erkek', rating: 4.3 },
      { id: 6, name: 'Belts', gender: 'erkek', rating: 4.1 },
      { id: 7, name: 'Cosmetics', gender: 'erkek', rating: 4.4 },
      { id: 8, name: 'Hats', gender: 'erkek', rating: 4.2 }
    ];
    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: testCategories });
    dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: err.message }); // Still dispatch failure for logging
  }
};
