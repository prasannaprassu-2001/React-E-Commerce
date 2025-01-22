import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FilterBar from './components/FilterBar';
import ProductGrid from './components/ProductGrid';
import CartPage from './components/CartPage';
import CartToast from './components/CartToast';
import ScrollToTop from './components/ScrollToTop';
import './styles.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];
    if (filterCategory !== 'all') {
      updatedProducts = updatedProducts.filter(
        (product) => product.category.toLowerCase() === filterCategory.toLowerCase()
      );
    }
    updatedProducts.sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
    setFilteredProducts(updatedProducts);
  }, [filterCategory, sortOrder, products]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setShowToast(true);

    // Automatically hide the toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <Router>
      <div>
        <Header cartCount={cart.length} />
        <CartToast show={showToast} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FilterBar setFilterCategory={setFilterCategory} setSortOrder={setSortOrder} />
                <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
              </>
            }
          />
          <Route path="/cart" element={<CartPage cart={cart} />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
