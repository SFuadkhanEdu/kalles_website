import React, { createContext } from "react";

// Create the context
export const MainContext = createContext();

// Create a provider component
export const MainProvider = ({ children }) => {
  function sayHi() {
    console.log("HI");
  }

  return (
    <MainContext.Provider value={sayHi}>
      {children}
    </MainContext.Provider>
  );
};
