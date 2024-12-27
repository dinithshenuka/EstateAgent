import React, { createContext } from "react";
import propertiesData from "../data/properties.json";

// Create context
export const PropertyContext = createContext();

// Create provider
export const PropertyProvider = ({ children }) => {
  // Properties from JSON
  const properties = propertiesData.properties;

  // Values to provide
  const value = {
    properties,
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;
