import React from 'react';
import { Product } from '../types/Product';

import './styles/ProductDetails.css';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="product-details">
      <div className='product-details-container'>
        <h1 className='product-details-title'>{product.title}</h1>
        <img className='product-details-image' src={product.imageUrl} alt={product.title} />
        <p className='product-details-description'>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
