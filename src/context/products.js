import React from 'react';
import axios from 'axios';
import url from '../utils/URL';
import fruit1 from '../images/fruit1.png';
import fruit2 from '../images/fruit2.png';
import fruit3 from '../images/fruit3.jpg';
import fruit4 from '../images/fruit4.jpg';
import fruit5 from '../images/fruit5.jpg';
import fruit6 from '../images/fruit6.jpg';
import { homeFeatured } from '../utils/helpers';
export const ProductContext = React.createContext();
const data = [
  {
    id: 1,
    title: 'Rose flower',
    price: 450,
    image: fruit1,
    amount: 3,
    featured: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae ullam sint beatae vel molestiae, nam veniam, dolorem eum fugit ipsum, incidunt ipsam deserunt. Veritatis doloribus omnis architecto fuga error!',
  },
  {
    id: 2,
    title: 'Abiscus flower',
    price: 550,
    amount: 1,
    image: fruit2,
    featured: false,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae ullam sint beatae vel molestiae, nam veniam, dolorem eum fugit ipsum, incidunt ipsam deserunt. Veritatis doloribus omnis architecto fuga error!',
  },
  {
    id: 3,
    title: 'Tendrol flower',
    price: 750,
    amount: 2,
    image: fruit3,
    featured: false,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae ullam sint beatae vel molestiae, nam veniam, dolorem eum fugit ipsum, incidunt ipsam deserunt. Veritatis doloribus omnis architecto fuga error!',
  },
  {
    id: 4,
    title: 'Lily flower',
    price: 700,
    amount: 1,
    image: fruit4,
    featured: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae ullam sint beatae vel molestiae, nam veniam, dolorem eum fugit ipsum, incidunt ipsam deserunt. Veritatis doloribus omnis architecto fuga error!',
  },
  {
    id: 5,
    title: 'Sharon flower',
    price: 1450,
    image: fruit5,
    amount: 3,
    featured: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae ullam sint beatae vel molestiae, nam veniam, dolorem eum fugit ipsum, incidunt ipsam deserunt. Veritatis doloribus omnis architecto fuga error!',
  },
  {
    id: 6,
    title: 'Sunshine flower',
    price: 2450,
    image: fruit6,
    featured: true,
    amount: 4,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae ullam sint beatae vel molestiae, nam veniam, dolorem eum fugit ipsum, incidunt ipsam deserunt. Veritatis doloribus omnis architecto fuga error!',
  },
];
// provider and consumer, useContext()
export default function ProductProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    // axios.get(`${url}/products`).then((response) => {
    //   // setProducts
    //   const newFeatured = homeFeatured(response.data);
    //   setProducts(response.data);
    //   setFeatured(newFeatured);
    //   setLoading(false);
    // });
    const newFeatured = homeFeatured(data);
    setProducts(data);
    setFeatured(newFeatured);
    setLoading(false);
    return () => {};
  }, []);

  return <ProductContext.Provider value={{ loading, products, featured }}>{children}</ProductContext.Provider>;
}
