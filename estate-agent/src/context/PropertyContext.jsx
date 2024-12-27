import React, { createContext, useState, useEffect } from "react";
import propertiesData from "../data/properties.json";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties] = useState(propertiesData.properties);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (property) => {
    if (!favorites.find((fav) => fav.id === property.id)) {
      setFavorites([...favorites, property]);
    }
  };

  const removeFromFavorites = (propertyId) => {
    setFavorites(favorites.filter((fav) => fav.id !== propertyId));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  const value = {
    properties,
    favorites,
    addToFavorites,
    removeFromFavorites,
    clearFavorites,
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;
