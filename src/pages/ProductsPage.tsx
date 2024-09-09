import React from 'react';
import { Link } from 'react-router-dom';

import ProductList from '../components/ProductList';

import '../styles/ProductsPage.css'

const ProductsPage: React.FC = () => {
  return (
    <div className='page-products'>
      <h1>Список продуктов</h1>
      <Link to="/create-product">
        <button className='page-products-btn'>Создать продукт</button>
      </Link>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
