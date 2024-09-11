import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/Product';

import { useDispatch } from 'react-redux';
import { addProduct } from '../store';

import './styles/CreateProduct.css'

const CreateProduct: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setimage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateUrl = (url: string) => {
    const urlRegex = /^(https?:\/\/)?([a-z0-9]+[.-])*[a-z0-9]+\.[a-z]{2,}(:[0-9]{1,5})?(\/.*)?$/i;
    return urlRegex.test(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !image) {
      setError('Все поля обязательны для заполнения');
      return;
    }

    if (!validateUrl(image)) {
      setError('Введите корректный URL изображения');
      return false;
    }

    const newProduct: Product = {
      id: Date.now(), 
      title,
      description,
      image,
    };

    setError('');
    setSuccess(true);

    dispatch(addProduct(newProduct));
  };

  return (
    <form className='create-product' onSubmit={handleSubmit}>
      <div className="create-product-container">
        <div>
          <label>Название </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Описание </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Ссылка на изображение </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setimage(e.target.value)}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="form-success">Продукт успешно создан!</div>}
        <button className='create-product-btn' type="submit">Создать продукт</button>
      </div>
    </form>
  );
};

export default CreateProduct;
