// src/layout/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Gravatar from 'react-gravatar';
import { useNavigate, Link } from 'react-router-dom';
import { logout } from '../store/authSlice';
import { slugify } from '../utils/slug';
import { selectCategoriesByGender } from '../redux/selectors/categorySelectors';
import {
  Phone, Mail, Facebook, Instagram, Twitter, Youtube,
  Search, ShoppingCart, Heart, User, Menu, X
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const shopDropdownRef = useRef(null);
  const pagesDropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleShopDropdown = () => setIsShopDropdownOpen(!isShopDropdownOpen);
  const togglePagesDropdown = () => setIsPagesDropdownOpen(!isPagesDropdownOpen);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shopDropdownRef.current && !shopDropdownRef.current.contains(event.target)) {
        setIsShopDropdownOpen(false);
      }
      if (pagesDropdownRef.current && !pagesDropdownRef.current.contains(event.target)) {
        setIsPagesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const { user } = useSelector((state) => state.auth);
  const kadin = useSelector((state) => selectCategoriesByGender(state, "kadin"));
  const erkek = useSelector((state) => selectCategoriesByGender(state, "erkek"));

  const handleLogout = async () => {
    await dispatch(logout());
    setIsMenuOpen(false);
    navigate('/');
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs">Follow Us and get a chance to win 80% off</span>
            <div className="flex items-center space-x-2">
              <Facebook size={14} className="cursor-pointer hover:text-primary-300" />
              <Instagram size={14} className="cursor-pointer hover:text-primary-300" />
              <Twitter size={14} className="cursor-pointer hover:text-primary-300" />
              <Youtube size={14} className="cursor-pointer hover:text-primary-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-900">Bandage</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-primary-600 font-medium">Home</a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary-600 font-medium flex items-center space-x-1">
                  <span>Shop</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* DROPDOWN PANEL */}
                <div
                  className="
                    invisible opacity-0 scale-95 group-hover:visible group-hover:opacity-100 group-hover:scale-100
                    transition-all duration-150 origin-top
                    absolute left-1/2 -translate-x-1/2 mt-3 w-[640px] z-50
                  "
                >
                  <div className="rounded-2xl shadow-xl ring-1 ring-black/5 bg-white overflow-hidden">
                    {/* Üst bar (görseldeki şerit) */}
                    <div className="px-6 py-2 text-[11px] text-gray-500 border-b border-gray-100">
                      Follow Us and get a chance to win 80% off
                    </div>

                    {/* İKİ SÜTUN GRID */}
                    <div className="grid grid-cols-2 gap-12 px-6 py-6">
                      {/* Kadın */}
                      <div>
                        <div className="text-[11px] font-semibold tracking-[0.12em] text-gray-500 uppercase mb-3">
                          Kadın
                        </div>
                        <ul className="space-y-2">
                          {kadin.map((c) => (
                            <li key={c.id}>
                              <Link
                                to={`/shop/${c.gender}/${slugify(c.name)}/${c.id}`}
                                className="block text-[15px] leading-6 text-gray-800 hover:text-gray-900"
                              >
                                {c.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Erkek */}
                      <div>
                        <div className="text-[11px] font-semibold tracking-[0.12em] text-gray-500 uppercase mb-3">
                          Erkek
                        </div>
                        <ul className="space-y-2">
                          {erkek.map((c) => (
                            <li key={c.id}>
                              <Link
                                to={`/shop/${c.gender}/${slugify(c.name)}/${c.id}`}
                                className="block text-[15px] leading-6 text-gray-800 hover:text-gray-900"
                              >
                                {c.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/about" className="text-gray-700 hover:text-primary-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">Blog</a>
              <a href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">Contact</a>
              <div className="relative" ref={pagesDropdownRef}>
                <button
                  onClick={togglePagesDropdown}
                  className="text-gray-700 hover:text-primary-600 font-medium flex items-center space-x-1"
                >
                  <span>Pages</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isPagesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                    <a href="/pricing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pricing</a>
                    <a href="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Team</a>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <Gravatar email={user.email} size={30} className="rounded-full cursor-pointer" title={user.email} />
                  <span className="text-sm font-medium">{user.name || user.email}</span>
                  <button
                    onClick={handleLogout}
                    className="px-2 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <a href="/login" className="flex items-center space-x-1 text-gray-700 hover:text-primary-600">
                    <User size={20} />
                    <span className="text-sm">Login</span>
                  </a>
                  <a
                    href="/signup"
                    className="px-2 py-1 text-sm rounded bg-primary-600 text-white hover:bg-primary-700"
                  >
                    Register
                  </a>
                </div>
              )}
              <button className="text-gray-700 hover:text-primary-600">
                <Search size={20} />
              </button>
              <button className="text-gray-700 hover:text-primary-600 relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </button>
              <button className="text-gray-700 hover:text-primary-600">
                <Heart size={20} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-primary-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a href="/" className="text-gray-700 hover:text-primary-600 font-medium">Home</a>
                <a href="/shop" className="text-gray-700 hover:text-primary-600 font-medium">Shop</a>
                <a href="/about" className="text-gray-700 hover:text-primary-600 font-medium">About</a>
                <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">Blog</a>
                <a href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">Contact</a>
                <div className="relative" ref={pagesDropdownRef}>
                  <button
                    onClick={togglePagesDropdown}
                    className="text-gray-700 hover:text-primary-600 font-medium flex items-center justify-between w-full"
                  >
                    <span>Pages</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isPagesDropdownOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <a href="/pricing" className="block text-sm text-gray-600 hover:text-primary-600">Pricing</a>
                      <a href="/team" className="block text-sm text-gray-600 hover:text-primary-600">Team</a>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  {user ? (
                    <div className="flex items-center space-x-2">
                      <Gravatar email={user.email} size={30} className="rounded-full cursor-pointer" title={user.email} />
                      <span className="text-sm font-medium">{user.name || user.email}</span>
                      <button
                        onClick={handleLogout}
                        className="ml-2 px-2 py-1 text-sm rounded bg-gray-200 hover:bg-gray-300"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <a href="/login" className="flex items-center space-x-1 text-gray-700 hover:text-primary-600">
                        <User size={20} />
                        <span className="text-sm">Login</span>
                      </a>
                      <a
                        href="/signup"
                        className="px-2 py-1 text-sm rounded bg-primary-600 text-white hover:bg-primary-700"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Register
                      </a>
                    </div>
                  )}

                  <div className="flex items-center space-x-4">
                    <button className="text-gray-700 hover:text-primary-600">
                      <Search size={20} />
                    </button>
                    <button className="text-gray-700 hover:text-primary-600 relative">
                      <ShoppingCart size={20} />
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                    </button>
                    <button className="text-gray-700 hover:text-primary-600">
                      <Heart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
