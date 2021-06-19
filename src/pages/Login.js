import React from 'react';
import { useHistory } from 'react-router-dom';
import loginUser from '../strapi/loginUser';
import registerUser from '../strapi/registerUser';
export default function Login() {
  const history = useHistory();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [isMember, setIsMember] = React.useState(true);

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
  };

  return (
    <div className="section form">
      <h2 className="section-title">{isMember ? 'Sign in' : 'register'}</h2>
      <form className="login-form">
        {/* single input */}
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        {/* end single input */}

        {/* single input */}
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {/* end single input */}

        {/* single input */}
        {!isMember && (
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input type="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
        )}
        {/* end single input */}
        {isEmpty && <p className="form-empty">Please fill out the form</p>}
        {!isEmpty && (
          <button className="btn btn-block btn-primary" onClick={handleSubmit}>
            submit
          </button>
        )}
        <p className="register-link">
          {isMember ? 'need to register' : 'already a member'}
          <button type="button" onClick={toggleMember}>
            click here
          </button>
        </p>
      </form>
    </div>
  );
}
