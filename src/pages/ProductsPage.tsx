import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store'; 
import { fetchProducts } from '../store/index';

import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import '../styles/ProductsPage.css';

const ProductsPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const isFetched = useSelector((state: RootState) => state.products.isFetched);

  useEffect(() => {
    if (!isFetched) { 
      dispatch(fetchProducts());
    }
  }, [dispatch, isFetched]);

  return (
    <div className='page-products'>
      <h1>Список продуктов</h1>
      <Link to="/create-product">
        <button className='page-products-btn'>Создать продукт</button>
      </Link>
      <ProductList products={products}/>
    </div>
  );
};

export default ProductsPage;
