
import React from 'react';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';

const ProductsPage: React.FC = () => {
  return (
    <div>
      <h1>Список продуктов</h1>
      <Link to="/create-product">
        <button>Создать продукт</button>
      </Link>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
