import React from 'react';
import { Product } from '../types/Product';

import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, removeProduct, RootState } from '../store';


import { useNavigate } from 'react-router-dom';

import './styles/Card.css';

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favorites = useSelector((state: RootState) => state.products.favorites);

  const handleFavoriteClick = (id: number) => {
    dispatch(toggleFavorite(id));
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();

    dispatch(removeProduct(product.id));

  };

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.title} onClick={handleCardClick} />
      <h3>{product.title}</h3>
      <p>{product.description.slice(0, 100)}...</p>
      <button className={`like ${favorites.includes(product.id) ? 'liked' : ''}`} onClick={() => handleFavoriteClick(product.id)}>
        {favorites.includes(product.id) ? '❤️' : '♡'}
      </button>
      <button className="delete" onClick={handleDelete}>🗑️</button>
    </div>
  );
};

export default Card;
