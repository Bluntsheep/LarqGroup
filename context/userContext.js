"use client";

const { createContext, useState, useContext } = require("react");

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedJObCard, setSelectedJobCard] = useState();

  return (
    <UserContext.Provider
      value={{ user, setUser, selectedJObCard, setSelectedJobCard }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
