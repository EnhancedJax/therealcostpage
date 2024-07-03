"use client";

import { defaultValues } from "@/app/constants";
import { createContext, useContext, useState } from "react";

// Create a new context
const AppContext = createContext();

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

const AppProvider = ({ children }) => {
  const [data, setData] = useState(defaultValues);

  const updateData = (key, value) => {
    setData({ ...data, [key]: value });
  };

  return (
    <AppContext.Provider value={{ data, updateData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, useAppContext };
