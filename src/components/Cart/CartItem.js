import React from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { CartContext } from '../../context/cart';
import { FiDelete } from 'react-icons/fi';
export default function CartItem({ id, price, title, amount, image }) {
  const { removeItem, increaseAmount, decreaseAmount } = React.useContext(CartContext);

  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>NGN{price}</h5>
        <button type="button" className="cart-btn remove-btn" onClick={() => removeItem(id)}>
          <FiDelete />{' '}
        </button>
      </div>
      <div>
        <button type="button" className="cart-btn amount-btn" onClick={() => increaseAmount(id)}>
          {' '}
          <FaAngleUp />
        </button>
        <p className="item-amount">{amount}</p>
        <button type="button" className="cart-btn amount-btn" onClick={() => decreaseAmount(id, amount)}>
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
}
