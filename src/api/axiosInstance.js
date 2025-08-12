import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://workintech-fe-ecommerce.onrender.com',
});

// NOT: Bearer ÖNEK YOK!
export const setAuthHeader = (token) => {
  if (token) axiosInstance.defaults.headers.common.Authorization = token;
};
export const clearAuthHeader = () => {
  delete axiosInstance.defaults.headers.common.Authorization;
};

// ---- Interceptors ----
axiosInstance.interceptors.response.use(
  (res) => {
    // Yalnızca /login ve /verify yanıtlarında token yenile
    const url = (res?.config?.url || '').toLowerCase();
    if (url.endsWith('/login') || url.endsWith('/verify')) {
      const tokenFromHeader = res.headers?.['x-auth-token'] ?? res.headers?.['authorization'];
      const tokenFromBody = res.data?.token;
      const newToken = tokenFromHeader ?? tokenFromBody;

      if (newToken) {
        localStorage.setItem('token', newToken);
        setAuthHeader(newToken); // Bearer ekleme
      }
    }
    return res;
  },
  (err) => {
    // İstersen: herhangi bir 401'de token'ı temizle
    const status = err?.response?.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      clearAuthHeader();
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
