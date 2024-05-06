import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "", isLoggedIn: false });
  const [error, setError] = useState(null);

  const login = (username, password) => {
    if (username === "admin" && password === "password") {
      setUser({ username, isLoggedIn: true });
      setError(null);
    } else {
      setUser({ username: "", isLoggedIn: false });
    }
    if (username !== "admin" || password !== "password") {
      setError("Invalid username or password");
    }
  };
  const logout = () => {
    setUser("");
  };

  return (
    <UserContext.Provider value={{ user, login, logout, error, setError }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
