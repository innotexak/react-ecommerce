// import React from 'react';
import axios from 'axios';
import URL from '../utils/URL.js';

// register user

async function registerUser({ email, password, username }) {
  const response = await axios.post(`${URL}/auth/local/register`, { username, email, password }).catch((error) => {
    console.log(error);
  });

  return response;
}

export default registerUser;
