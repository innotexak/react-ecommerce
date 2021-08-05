 import React from 'react';
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';
import { usePaystackPayment } from 'react-paystack';
import submitOrder from '../strapi/submitOrder'
import { useHistory } from 'react-router-dom';
function PayStack() {
        const { cart, total, clearCart } = React.useContext(CartContext);
        const { alert, showAlert, hideAlert, user } = React.useContext(UserContext);
        const history = useHistory()

    const config = {
        reference: (new Date()).getTime().toString(),
        email: "example@gmail.com",
        amount: total*100,
        publicKey: 'pk_test_f0d7067c272c03c1020e1a118b35794c9dcaf092',
    };
  
    // you can call this function anything
    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        const ref = reference
        if(ref.status ==="success"){
            const trxref = ref.trxref
            const order = submitOrder({ total: total, name:user.username,  items: cart, stripeTokenId: trxref, userToken: user.token });
           if(order){
               showAlert({msg:"your order was successful!"})
               clearCart('')
               history.push('/')
           }
        }else{

        }
    };

    // you can call this function anything
    const onClose = () => {
            showAlert({msg:"Something went wrong, please try again !", type:"danger"})     
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const PaystackHook = () => {

        const initializePayment = usePaystackPayment(config);
        return (
            <div>
                <button onClick={() => {
                    initializePayment(onSuccess, onClose)
                }} className="btn btn-secondary">Pay Now</button>
            </div>
        );
    };
  

    return (
      <div className="">
        <PaystackHook />
      </div>
    );
  }
  
  export default PayStack;