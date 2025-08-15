import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { autoLoginByToken } from './store/authSlice';

import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const ran = useRef(false); // StrictMode'da iki kez çalışmayı engelle

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const lsToken = localStorage.getItem('token');
    console.log('[APP] boot; ls token =', !!lsToken ? '(exists)' : '(none)');

    // T11 şartı: sadece token varsa /verify çağır
    if (lsToken) {
      dispatch(autoLoginByToken());
    }
  }, [dispatch]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <PageContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </PageContent>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
