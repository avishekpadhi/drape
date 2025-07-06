import React, { createContext, useState, useContext, ReactNode } from "react";

interface FilterContextType {
  selectedGender: string;
  setSelectedGender: React.Dispatch<React.SetStateAction<string>>;
  selectedColour: string;
  setSelectedColour: React.Dispatch<React.SetStateAction<string>>;
}

interface FilterProviderProps {
  chilren: ReactNode;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);
export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedColour, setSelectedColour] = useState("");

  const value = {
    selectedGender,
    setSelectedGender,
    selectedColour,
    setSelectedColour,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
