'use client'

import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [isUser, setIsUser] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    <UserContext.Provider value={{ isUser, setIsUser, userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}