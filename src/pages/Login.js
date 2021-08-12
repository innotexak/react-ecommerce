import React from 'react';
import { useHistory } from 'react-router-dom';
import loginUser from '../strapi/loginUser';
import registerUser from '../strapi/registerUser';
import { UserContext } from '../context/user';

export default function Login() {
  const history = useHistory();
  const { LoginUser, alert, showAlert } = React.useContext(UserContext);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [isMember, setIsMember] = React.useState(false);

  let isEmpty = !email || !password || !username || alert.show;

  const toggleMember = () => {
    setIsMember((currMember) => {
      let isMember = !currMember;
      isMember ? setUsername('default') : setUsername('');
      return isMember;
    });
  };

  const handleSubmit = async (e) => {
    showAlert({ msg: "accessing user's data. please wait" });
    e.preventDefault();
    let response;
    if (isMember) {
      // handle login
      response = await loginUser({ email, password });
      // setEmail('');
      // setUsername('');
    } else {
      // handle register
      response = await registerUser({ password, email, username });
      // setPassword('');
      // setEmail('');
      // setUsername('');
    }
    if (response) {
      // handle response
      const {
        jwt: token,
        user: { username },
    
      } = response.data;

      const newUser = { token, username, email };
      console.log(newUser);
      LoginUser(newUser);
      showAlert({ msg: `You are logged in as ${username}. Continue shopping` });
      history.push('/products');
    } else {
      // show failure alert
      showAlert({ msg: 'Something went wrong, please try again..', type: 'danger' });
    }
  };

  return (
    <section className="form section">
      <h2 className="section-title"> {isMember ? 'login' : 'register'}</h2>
      <form action="" className="login-form">
        <div className="form-controls">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-controls">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {!isMember && (
          <div className="form-controls">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
        )}
        {isEmpty ? (
          <p className="form-empty">Please fill all the fields</p>
        ) : (
          <button type="button" onClick={handleSubmit} className="btn btn-block btn-primary">
            Submit
          </button>
        )}

        <p className="register-link">
          {isMember ? 'Need to register' : 'Already a member'}{' '}
          <button type="button" onClick={toggleMember}>
            click here
          </button>
        </p>
      </form>
    </section>
  );
}
