import React from 'react';
import { CartContext } from '../context/cart';
import EmptyCart from '../components/Cart/EmptyCart';
import CartItem from '../components/Cart/CartItem';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user';
import Checkout from './Checkout';

export default function Cart() {
  const user = true;
  const { total, cart } = React.useContext(CartContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <section className="section cart-items">
      <h2>Your cart</h2>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <h2>total:NGN{total}</h2>
      {user ? (
        <Link to="/checkout" className="btn btn-primary btn-block">
          Checkout
        </Link>
      ) : (
        <Link to="/login" className="btn btn-primary btn-block">
          login
        </Link>
      )}
    </section>
  );
}
