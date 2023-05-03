import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ token: "" });

  const signInUser = (token) => {
    setUser({ token });
  };

  return (
    <UserContext.Provider value={{ user, signInUser }}>
      {children}
    </UserContext.Provider>
  );
};
