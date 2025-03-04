"use client";

import { defaultValues } from "@/app/constants";
import { createContext, useContext, useEffect, useState } from "react";

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
    const newData = { ...data, [key]: value };
    setData(newData);
  };

  useEffect(() => {
    setTimeout(() => {
      updateData("tourFinished", false);
    }, 1000);
  }, []);

  return (
    <AppContext.Provider value={{ data, updateData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, useAppContext };
