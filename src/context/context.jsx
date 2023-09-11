import { createContext, useState, useEffect } from "react";

export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <StateContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
