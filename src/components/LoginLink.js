import React from 'react';
import { UserContext } from '../context/user';
import { CartContext } from '../context/cart';
import { Link } from 'react-router-dom';
export default function LoginLink() {
  const { user, logoutUser } = React.useContext(UserContext);
  const { clearCart } = React.useContext(CartContext);
  if (user.token) {
    return (
      <button
        className="login-btn"
        onClick={() => {
          logoutUser();
          clearCart();
        }}
      >
        Logout
      </button>
    );
  }
  return <Link to="/login">Login</Link>;
}
