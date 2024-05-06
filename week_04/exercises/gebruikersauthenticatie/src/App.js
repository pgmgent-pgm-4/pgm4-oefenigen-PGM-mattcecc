import React from "react";
import { UserProvider } from "./components/UserContext";
import Login from "./components/Login";
import Welcome from "./components/Welkome";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <Login />
        <Welcome />
      </UserProvider>
    </div>
  );
};

export default App;
