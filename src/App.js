import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Error from './pages/Error';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Cart from './pages/Cart';

import './index.css';
// components
import Header from './components/Header';
import Alert from './components/Alert';
import PrivateRoute from './components/PrivateRoute';
import Footer from "./components/Footer"

export default function App() {
  return (
    <Router>
      <Header />
      <Alert />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id" children={<ProductDetails />}></Route>
        <PrivateRoute exact path="/checkout">
          <Checkout />
        </PrivateRoute>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer /> 
    </Router>
  );
}
