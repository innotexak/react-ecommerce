import React from 'react';
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';
import EmptyCart from '../components/Cart/EmptyCart';
import { useHistory } from 'react-router-dom';
import submitOrder from '../strapi/submitOrder';
import Flutter from '../components/Flutter';
import PayStack from '../components/PayStack';
// import {FaStripe, FaCcStripe} from 'react-icons/fa'
//  import {FaAmazonPay} from 'react-icons/fa'
//  import {HiMenuAlt2} from 'react-icons/hi'
 import flutterLogo from '../flutter.png'
import { Elements, CardElement, injectStripe, StripeProvider } from 'react-stripe-elements';

function Checkout(props) {
  const { cart, total, clearCart } = React.useContext(CartContext);
  // const { alert, showAlert, hideAlert, user } = React.useContext(UserContext);

  const [payWithFlutter, setPayWithFlutter]= React.useState(false)
  const [payWithStack, setPayWithStack]= React.useState(false)
  // const history = useHistory();
  // const [name, setName] = React.useState('');
 
  // const [error, setError] = React.useState('');
  // const isEmpty = !name || alert.show;
  // async function handleSubmit(e) {
  //   showAlert({ msg: 'submitting payment order... please wait.' });
  //   e.preventDefault();

  //   const response = await props.stripe.createToken().catch((err) => console.log(err));
  //   const { token } = response;
  //   if (token) {
  //     hideAlert('');
  //     const { id } = token;
  //     let order = await submitOrder({ total: total, name: name, items: cart, stripeTokenId: id, userToken: user.token });
  //     if (order) {
  //       showAlert({ msg: 'Your order was successful!' });
  //       clearCart();
  //       history.push('/');
  //     } else {
  //       showAlert({ msg: 'something went wrong... please try again!', type: 'danger' });
  //     }
  //   } else {
  //     setError(response.error.message);
  //   }
  // }

  // if (cart.length < 1) {
  //   return <EmptyCart />;
  // }

  return (
    <section className="section form">
      <h2 className="section-title">checkout</h2>
    {/* <form className="checkout-form"> */}
      
        <h3 className="price-control">
          Order total: <span>NGN {total}</span>
        </h3>
           {/*
          <h3 className="form-empty icon"><FaCcStripe/> </h3>
        <h3 className="form-empty">Pay with Stripe</h3>
        <div className="form-controls">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <br />
      
        <CardElement className="card-element"></CardElement>

        {error && <p className="form-empty">{error}</p>}
        {isEmpty ? (
          <p className="form-empty"> Please fill out the name field</p>
        ) : (
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </form> */}
   <div className="btn-container">
      <div className="checkout-form" >
          <input type="button" className="btn method" name={payWithStack} value="Pay With Stack" onClick={()=>{return setPayWithStack(!payWithStack) }}/> 
            {payWithStack && <div className="checkout"><h3 className="form-empty">Pay with PayStack</h3><PayStack /></div>}
      </div>

        <div className="space"></div>
        <div className="checkout-form">
              <input type="button" className="btn method" name={payWithFlutter} value="Pay With Flutter" onClick={()=>{return setPayWithFlutter(!payWithFlutter)}}/>
              {payWithFlutter && <div className="checkout"><h3 className="form-empty"><img className="flut"src={flutterLogo} alt="flutter logo"/></h3><Flutter /></div>}
        </div>
   </div>
   
   

 
    </section>
  );
}

const CardForm = injectStripe(Checkout);

const StripeWrapper = () => {
  return (
    <StripeProvider apiKey='pk_test_51HClQuLq0gfgwTXfEJeYfjqmJWXr4n8ekwsMStJqp8mD4JotkhWghLlLn34LayGcbqhkkO6jyWxAIuPoty2h4Fkp007bF2WaqI'>
      <Elements>
        <CardForm />
      </Elements>
    </StripeProvider>
  );
};

export default StripeWrapper;
