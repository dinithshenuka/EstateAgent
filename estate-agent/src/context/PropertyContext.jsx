import React, { createContext, useState, useEffect } from "react";
import propertiesData from "../data/properties.json";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties] = useState(propertiesData.properties);
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem("favorites");
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch (error) {
      console.error("Error loading favorites:", error);
      return [];
    }
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (error) {
      console.error("Error saving favorites:", error);
      setError("Failed to save favorites");
    }
  }, [favorites]);

  const addToFavorites = (property) => {
    try {
      if (favorites.find((fav) => fav.id === property.id)) {
        setError("Property already in favorites");
        return false;
      }
      setFavorites([...favorites, property]);
      setError(null);
      return true;
    } catch (error) {
      console.error("Error adding to favorites:", error);
      setError("Failed to add to favorites");
      return false;
    }
  };

  const removeFromFavorites = (propertyId) => {
    try {
      setFavorites(favorites.filter((fav) => fav.id !== propertyId));
      setError(null);
      return true;
    } catch (error) {
      console.error("Error removing from favorites:", error);
      setError("Failed to remove from favorites");
      return false;
    }
  };

  const clearFavorites = () => {
    try {
      if (window.confirm("Are you sure you want to clear all favorites?")) {
        setFavorites([]);
        setError(null);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error clearing favorites:", error);
      setError("Failed to clear favorites");
      return false;
    }
  };

  const value = {
    properties,
    favorites,
    error,
    addToFavorites,
    removeFromFavorites,
    clearFavorites,
  };

  return (
    <PropertyContext.Provider value={value}>
      {error && (
        <div
          className="alert alert-danger position-fixed top-0 end-0 m-3"
          role="alert"
        >
          {error}
        </div>
      )}
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;
