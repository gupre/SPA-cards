import React from 'react';
import { Product } from '../types/Product';

import { useDispatch } from 'react-redux';
import { toggleLike, deleteProduct } from '../store';


import { useNavigate } from 'react-router-dom';

import '../styles/Card.css';

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const navigate = useNavigate();


  const dispatch = useDispatch();


  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();

    dispatch(toggleLike(product.id));

  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();

    dispatch(deleteProduct(product.id));

  };

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description.slice(0, 100)}...</p>
      <button className={`like ${product.isLiked ? 'liked' : ''}`} onClick={handleLike}>
        {product.isLiked ? '❤️' : '♡'}
      </button>
      <button className="delete" onClick={handleDelete}>🗑️</button>
    </div>
  );
};

export default Card;
