import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { ProductContext } from '../context/products';
import Loading from '../components/Loading';
import { CartContext } from '../context/cart';
export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { addToCart } = React.useContext(CartContext);
  const { products } = React.useContext(ProductContext);
  const product = products.find((item) => item.id === parseInt(id));
  console.log(product);
  if (product.length === 0) {
    return <Loading />;
  } else {
    const { image, price, title, description } = product;
    return (
      <section className="single-product">
        <img src={image} alt={title} className="single-product-image" />
        <article>
          <h1>{title}</h1>
          <h2>
            {' '}
            <del>N</del>
            {price}
          </h2>
          <p>{description}</p>
          <button
          
            onClick={() => {
              addToCart(product);
              history.push('/cart');
            }}
          >
            Add to cart
          </button>
        </article>
      </section>
    );
  }
}
