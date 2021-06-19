import React from 'react';
import { Link } from 'react-router-dom';
export default function Product({ id, title, price, image }) {
  const url = image;
  return (
    <article className="product">
      <div className="img-container">
        <img src={url} alt={title} className="image" />
        <Link to={`products/${id}`} className="btn btn-primary product-link">
          details
        </Link>
      </div>
      <div className="product-footer">
        <p className="product-title">{title}</p>
        <p className="product-price">NGN{price}</p>
      </div>
    </article>
  );
}
