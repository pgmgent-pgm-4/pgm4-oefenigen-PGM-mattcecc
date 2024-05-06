import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, logout, user, error } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {!user.isLoggedIn && <button type="submit">Login</button>}
      </form>

      {user.isLoggedIn && <button onClick={logout}>Logoff</button>}

      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default Login;
