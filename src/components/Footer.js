import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="section footer">
      <div className="right">
        <p>
          {' '}
          &copy;{new Date().getFullYear()} All Rights Reserved; PearlStecy Collections. Designed by:
          <a title="Innotexweb" className="designer" href="https://innotexweb.netlify.app" target="_blank">
            Innotex
          </a>
        </p>
      </div>
      <div className="social">
        <a to="" className="social-links">
          <FaFacebook />
        </a>
        <a to="" className="social-links">
          <FaWhatsapp />
        </a>
        <a to="" className="social-links">
          <FaInstagram />
        </a>
        <a to="" className="social-links">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}
