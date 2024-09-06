import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import CreateProductPage from './pages/CreateProductPage';

import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="/" element={<h1>Добро пожаловать! <br/><a href="/products">Перейти к продуктам</a></h1>} />
      </Routes>
    </Router>
  );
};

export default App;
