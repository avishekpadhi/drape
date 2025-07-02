import React, { createContext, useState, useContext, ReactNode } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedGender, setSelectedGender] = useState("");

  const value = { selectedGender, setSelectedGender };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
