import { createContext, useState, useEffect } from "react";
import app from "../firebase/auth";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
const auth = getAuth(app);
export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [localUser, setLocalUser] = useState(null);
  const baseUrl = "https://example.com";

  function fetchLocalUser() {
    const storedUser = localStorage.getItem("localUser");
    if (storedUser) {
      // Parse the stored user data if it exists
      return JSON.parse(storedUser);
    }
    // Return null if no user data is found
    return null;
  }

  useEffect(() => {
    fetchLocalUser();
  }, []);

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribed();
    };
  }, []);
  console.log("firebaseUser", user);
  console.log("localUser", localUser);
  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        baseUrl,
        localUser,
        setLocalUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
