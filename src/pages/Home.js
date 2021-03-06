import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedProducts from '../components/Products/FeaturedProducts';
import Hero from '../components/Hero';
export default function Home() {
  return (
    <>
      <Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
          our products
        </Link>
      </Hero>
      <FeaturedProducts title="featured products" />
    </>
  );
}
