import React, { useState } from 'react';
import Card from './Card';
import { Product } from '../types/Product';

import { useSelector } from 'react-redux';
import { RootState } from '../store';

import '../styles/ProductList.css';

const ProductList: React.FC = () => {
  const [showFavorites, setShowFavorites] = useState(false);

  const products = useSelector((state: RootState) => state.products.products);

  const filteredProducts = showFavorites
    ? products.filter((product: Product) => product.isLiked)
    : products;

  return (
    <div>
      <button onClick={() => setShowFavorites(!showFavorites)}>
        {showFavorites ? 'Показать все' : 'Показать избранное'}
      </button>
      <div className="product-list">
        {filteredProducts.map((product: Product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
