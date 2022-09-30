import React, { useState, useEffect } from "react";

const AuthContext = React.createContext(
{
  isLoggedIn: true,
  onLogout: () => {},
  onLogin: (email, password) => {},
}
);

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserCred = localStorage.getItem("isLoggedIn");
    // console.log("before condition");
    if (storedUserCred === "1") {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
