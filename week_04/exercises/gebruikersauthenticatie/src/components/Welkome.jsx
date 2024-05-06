import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Welcome = () => {
  const { user } = useContext(UserContext);

  if (!user.isLoggedIn) {
    return <p>You are not logged in</p>;
  }

  return <p>Welcome, {user.username}!</p>;
};

export default Welcome;
