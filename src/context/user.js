// user context
import React from 'react';
const UserContext = React.createContext();
const getLocalUser = () => {
  return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : { username: null, token: null };
};
function UserProvider({ children }) {
  const [user, setUser] = React.useState(getLocalUser());

  const LoginUser = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logoutUser = () => {
    setUser({ username: null, token: null });
  };

  const [alert, setAlert] = React.useState({ show: false, msg: '', type: 'danger' });

  const showAlert = ({ msg, type = 'success' }) => {
    setAlert({ show: true, msg, type });
  };

  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };
  return <UserContext.Provider value={{ user, LoginUser, logoutUser, alert, hideAlert, showAlert }}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
