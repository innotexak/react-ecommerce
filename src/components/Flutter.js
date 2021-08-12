import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';

function Flutter() {
  const { cart, total, clearCart } = React.useContext(CartContext);
  const { alert, showAlert, hideAlert, user } = React.useContext(UserContext);

  //   const history = useHistory();
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const isEmpty = !name || alert.show;
  const config = {
    public_key: 'FLWPUBK-35d93d1fdd0e1283690917e0aa9cff76-X',
    tx_ref: Date.now(),
    amount: total,
    currency: 'NGN',
    payment_options: 'card',
    customer: {
      email: "innotexak@yahoo.com",
      phone_number: '08168653156',
      name: `${user.username}`,
    },
    customizations: {
      title: 'PearlStecy store',
      description: 'Payment for items in cart',
      logo: 'https://innotexweb.netlify.app/img/logo2.png',
    },
  };
  const fwConfig = {
    ...config,
    text: 'Pay Now',
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="flutter_div">
      <FlutterWaveButton {...fwConfig} className="btn method" />
    </div>
  );
}
export default Flutter;
