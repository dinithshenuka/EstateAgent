import React, { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";
import PropertyCard from "../components/PropertyCard";

function FavoritesPage() {
  const { favorites, removeFromFavorites } = useContext(PropertyContext);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">My Favorites</h1>

      <div className="row">
        {favorites.length === 0 ? (
          <div className="col-12 text-center">
            <p className="text-muted">No favorite properties yet.</p>
          </div>
        ) : (
          favorites.map((property) => (
            <div key={property.id} className="col-md-6 col-lg-4 mb-4">
              <PropertyCard
                property={property}
                isFavorite={true}
                onAction={() => removeFromFavorites(property.id)}
                actionIcon="fa-times"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;
