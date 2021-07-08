import React from 'react';
import { useHistory } from 'react-router-dom';
import loginUser from '../strapi/loginUser';
import registerUser from '../strapi/registerUser';
export default function Login() {
  const history = useHistory();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [isMember, setIsMember] = React.useState(false);

  let isEmpty = !email || !password || !username;

  const toggleMember = () => {
    // if (isMember === true) {
    //   setIsMember(false);
    // } else {
    //   setIsMember(true);
    // }
    setIsMember((currMember) => {
      let isMember = !currMember;
      isMember ? setUsername('default') : setUsername('');
      return isMember;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if (isMember) {
      // handle login
      // response = await loginUser();
    } else {
      // handle register
      response = await registerUser({ password, email, username });
      setPassword('');
      setEmail('');
      setUsername('');
    }
    if (response) {
      // handle response
      console.log('success');
      console.log(response);
    } else {
      // show alert
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
