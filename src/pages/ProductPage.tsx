import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import { Product } from '../types/Product';

import { useSelector } from 'react-redux';
import { RootState } from '../store';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const navigate = useNavigate();

  const product = useSelector((state: RootState) =>
    state.products.products.find((p: Product) => p.id === Number(id))
  );

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div>
      <ProductDetails product={product} />
      <button onClick={() => navigate('/products')}>Вернуться к списку</button>
    </div>
  );
};

export default ProductPage;
