// user context

import React from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
  <UserContext.Provider value="hello">{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
