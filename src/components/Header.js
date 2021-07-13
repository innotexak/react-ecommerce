import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import CartLink from './Cart/CartLink';
import { UserContext } from '../context/user';
import { CartContext } from '../context/cart';
import LoginLink from '../components/LoginLink';
export default function Header() {
  const { user } = React.useContext(UserContext);

  return (
    <header className="header">
      <img src={logo} alt=" site logo" className="logo" />
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            {user.token && (
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            )}
          </div>
          <div>
            <li>
              <LoginLink></LoginLink>
            </li>
            <li>
              <CartLink to="/cart"></CartLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
