import React from 'react';
import { useNavigate } from 'react-router-dom';

import CreateProduct from '../components/CreateProduct';

import '../styles/CreateProductPage.css'

const CreateProductPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='page-create'>
      <h1>Создать новый продукт</h1>
      <CreateProduct />
      <button className='page-create-btn' onClick={() => navigate('/products')}>Вернуться к списку</button>
    </div>
  );
};

export default CreateProductPage;
