import React from 'react';
import { CartContext } from '../../context/cart';
import { Link } from 'react-router-dom';
import {FaCartPlus} from 'react-icons/fa'
export default function CartLink() {
  const { cartItems } = React.useContext(CartContext);
  return (
    <div className="cart-link-container">
      <Link to="/cart"><FaCartPlus/></Link>
      <span className="cart-link-total">{cartItems}</span>
    </div>
  );
}
