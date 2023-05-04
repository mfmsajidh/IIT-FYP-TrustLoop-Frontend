import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ token: "", id: "" });

  const signInUser = (data) => {
    setUser(data);
  };

  return (
    <UserContext.Provider value={{ user, signInUser }}>
      {children}
    </UserContext.Provider>
  );
};
