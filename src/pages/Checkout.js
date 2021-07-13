import React from 'react';
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';
import EmptyCart from '../components/Cart/EmptyCart';
import { useHistory } from 'react-router-dom';

// flutterwave

// import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

// export default function App() {

//   function Checkout() {
//     const { cart, total, clearCart } = React.useContext(CartContext);
//     const { alert, showAlert, hideAlert, user } = React.useContext(UserContext);

//     const history = useHistory();
//     const [name, setName] = React.useState('');
//     const [error, setError] = React.useState('');
//     const isEmpty = !name || alert.show;
//   const config = {
//     public_key: '',
//     tx_ref: Date.now(),
//     amount: total,
//     currency: 'NGN',
//     payment_options: 'card,mobilemoney,ussd',
//     customer: {
//       email: user.email,
//       phonenumber: user.phone,
//       name: user.username,
//     },
//     customizations: {
//       title: 'PearlStecy store',
//       description: 'Payment for items in cart',
//       logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
//     },
//   };

//   const fwConfig = {
//     ...config,
//     text: 'Pay Now!',
//     callback: (response) => {
//       console.log(response);
//       closePaymentModal(); // this will close the modal programmatically
//     },
//     onClose: () => {},
//   };

//   return (
//     <div className="App">
//       <h1>Pay With Flutterwave</h1>
//       <FlutterWaveButton {...fwConfig} />
//     </div>
//   );
// }

// strip elements

import { Elements, CardElement, injectStripe, StripeProvider } from 'react-stripe-elements';

function Checkout(props) {
  const { cart, total, clearCart } = React.useContext(CartContext);
  const { alert, showAlert, hideAlert, user } = React.useContext(UserContext);

  const history = useHistory();
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const isEmpty = !name || alert.show;
  async function handleSubmit(e) {
    e.preventDefault();
  }

  if (cart.length < 1) {
    return <EmptyCart />;
  }

  return (
    <section className="section form">
      <h2 className="section-title">checkout</h2>
      <form className="checkout-form">
        <h3>
          Order total: <span>NGN {total}</span>
        </h3>
        <div className="form-controls">
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        {error && <p className="form-empty">{error}</p>}
        {isEmpty ? (
          <p className="form-empty"> Please fill out the name field</p>
        ) : (
          <button className="btn btn-primary btn-block" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </form>
    </section>
  );
}

const CardForm = injectStripe(Checkout);

export default StripeWrapper = () => {
  return (
    <StripeProvider apiKey="pk_test_51HClQuLq0gfgwTXfEJeYfjqmJWXr4n8ekwsMStJqp8mD4JotkhWghLlLn34LayGcbqhkkO6jyWxAIuPoty2h4Fkp007bF2WaqI">
      <Elements>
        <CardForm />
      </Elements>
    </StripeProvider>
  );
};
