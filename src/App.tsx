import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import CreateProductPage from './pages/CreateProductPage';

import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="/" element={
          <div className='home'>
            <div className="home-container">
              <h1 className='home-title'>Добро пожаловать! <br/> </h1>
              <a className='home-link' href="/products">Перейти к продуктам</a>
            </div>
          </div>
          } />
      </Routes>
    </Router>
  );
};

export default App;
