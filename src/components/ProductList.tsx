import React, { useState } from 'react';

import Card from './Card';
import { Product } from '../types/Product';


import { useSelector } from 'react-redux';
import { RootState } from '../store';

import './styles/ProductList.css';


interface ProductListProps {
  products: Product[]; 
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [showFavorites, setShowFavorites] = useState(false);

  const favorites = useSelector((state: RootState) => state.products.favorites);

  const filteredProducts = showFavorites
    ? products.filter((product: Product) => favorites.includes(product.id))
    : products;

  return (
    <div>
      <button onClick={() => setShowFavorites(!showFavorites)}>
        {showFavorites ? 'Показать все' : 'Показать избранное'}
      </button>
      <div className="product-list">
        {filteredProducts.map(product => (
        <Card key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
};

export default ProductList;
