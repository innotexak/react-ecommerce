// cart context
import React from 'react';
import localCart from '../utils/localCart';
const CartContext = React.createContext();
function getLocalCartItem() {
  return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}
function CartProvider({ children }) {
  const [cart, setCart] = React.useState(getLocalCartItem);
  const [total, setTotal] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(0);

  // remove item from cart
  const removeItem = (id) => {
    let tempItem = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(tempItem);
  };

  // add item to cart
  const addToCart = (product) => {
    const { id, title, price, image } = product;
    const newItem = [...cart].find((item) => item.id === id);
    if (newItem) {
      increaseAmount(id);
      return;
    } else {
      const tempItem = { id, title, price, image, amount: 1 };
      let item = [...cart, tempItem];
      setCart(item);
    }
  };

  // Increase amount function
  const increaseAmount = (id) => {
    let newAmount = [...cart].map((item) => {
      return item.id === id ? { ...item, amount: item.amount + 1 } : { ...item };
    });
    setCart(newAmount);
  };

  // decrease amount
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      removeItem(id);
      return;
    } else {
      let newAmount = [...cart].map((item) => {
        return item.id === id ? { ...item, amount: item.amount - 1 } : { ...item };
      });
      setCart(newAmount);
    }
  };

  // clear the cart
  const clearCart = () => {
    setCart([]);
  };
  React.useEffect(() => {
    // localCart
    localStorage.setItem('cart', JSON.stringify(cart));
    // card items
    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItems(newCartItems);

    // item total

    let newCartTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    newCartTotal = parseFloat(newCartTotal.toFixed(2));
    setTotal(newCartTotal);
  }, [cart]);

  return (
    <CartContext.Provider value={{ total, cartItems, cart, addToCart, increaseAmount, decreaseAmount, clearCart, removeItem }}>{children}</CartContext.Provider>
  );
}

export { CartContext, CartProvider };
