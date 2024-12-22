import React, { useState, useEffect } from 'react';

const FetchProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('src/data/properties.json')  // Adjust path if needed
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setProperties(data.properties);  // Access 'properties' array
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Available Properties</h1>
      <div className="properties-list">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.picture} alt={property.type} />
            <h2>{property.type}</h2>
            <p>{property.location}</p>
            <p>{property.bedrooms} Bedrooms - ${property.price}</p>
            <p>{property.tenure}</p>
            <p>{property.description}</p>
            <a href={property.url}>More Info</a>
            <p>Added: {property.added.month} {property.added.day}, {property.added.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchProperties;