import React from 'react';
import axios from 'axios';
import url from '../utils/URL';
import { homeFeatured, flattenedProducts } from '../utils/helpers';
export const ProductContext = React.createContext();

// provider and consumer, useContext()
export default function ProductProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then((response) => {
      // setProducts
      const newFeatured = homeFeatured(flattenedProducts(response.data));
      const products = flattenedProducts(response.data);
      setProducts(products);
      setFeatured(newFeatured);
      setLoading(false);
    });
    // const newFeatured = homeFeatured(data);
    // setProducts(data);
    // setFeatured(newFeatured);
    // setLoading(false);
    return () => {};
  }, []);

  return <ProductContext.Provider value={{ loading, products, featured }}>{children}</ProductContext.Provider>;
}
