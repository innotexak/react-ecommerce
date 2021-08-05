/// submit order
import axios from 'axios';
import url from '../utils/URL';

async function submitOrder({ total, name, stripeTokenId, items, userToken }) {
  const response = await axios
    .post(
      `${url}/orders`,
      { total, name, stripeTokenId, items },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    )
    .catch((error) => console.log(error));
  return response;
}

export default submitOrder;
