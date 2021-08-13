/// fetching user profiles
import axios from 'axios';
import url from '../utils/URL';

async function userProfile(user) {
  const profile = await axios
    .post(
      `${url}/users`,

      {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      }
    )
    .catch((error) => console.log(error));
  return profile;
}
export default userProfile;
