import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/Product';

import { useDispatch } from 'react-redux';
import { addProduct } from '../store';

const CreateProduct: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !image) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }

    const newProduct: Product = {
      id: Date.now(), 
      title,
      description,
      image,
      isLiked: false,
    };

    dispatch(addProduct(newProduct));
    
    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Название:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Описание:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Ссылка на изображение:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit">Создать продукт</button>
    </form>
  );
};

export default CreateProduct;
