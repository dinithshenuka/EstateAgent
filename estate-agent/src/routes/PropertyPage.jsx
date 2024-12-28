import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { PropertyContext } from "../context/PropertyContext";
import { useLoadScript, GoogleMap } from "@react-google-maps/api";
import { AdvancedMarkerElement } from "@googlemaps/markerclusterer";

const PropertyPage = () => {
  const { id } = useParams();
  const { properties } = useContext(PropertyContext);
  const [mainImage, setMainImage] = useState(0);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const property = properties.find((p) => p.id === id);

  if (!property) {
    return <div className="text-center py-5">Property not found</div>;
  }

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 7.8731,
    lng: 80.7718,
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Image Gallery */}
        <div className="col-md-8 mb-4">
          <img
            src={property.gallery[mainImage]}
            alt={property.name}
            className="img-fluid rounded shadow-sm"
          />
          <div className="row mt-3 g-2">
            {property.gallery.map((img, index) => (
              <div key={index} className="col-2">
                <img
                  src={img}
                  alt={`${property.name} view ${index + 1}`}
                  className={`img-fluid rounded ${
                    mainImage === index ? "border border-warning" : "border"
                  }`}
                  onClick={() => setMainImage(index)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{property.name}</h2>
              <p className="h3 text-warning mb-3">
                {property.currency} {property.price.toLocaleString()}
              </p>
              <hr />
              <div className="mb-2">
                <strong>Type:</strong> {property.type}
              </div>
              <div className="mb-2">
                <strong>Bedrooms:</strong> {property.bedrooms}
              </div>
              <div className="mb-2">
                <strong>Location:</strong> {property.location}
              </div>
              <div className="mb-2">
                <strong>Postal Code:</strong> {property.postalCode}
              </div>
              <div className="mb-2">
                <strong>Tenure:</strong> {property.tenure}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabbed Content */}
      <div className="row mt-4">
        <div className="col-12">
          <Tabs>
            <TabList>
              <Tab>Description</Tab>
              <Tab>Floor Plan</Tab>
              <Tab>Location</Tab>
            </TabList>

            <TabPanel>
              <div className="p-4 bg-light rounded">
                <p>{property.description}</p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="p-4 bg-light rounded">
                {property.flloorPlan.map((plan, index) => (
                  <img
                    key={index}
                    src={plan}
                    alt={`Floor plan ${index + 1}`}
                    className="img-fluid mb-3"
                  />
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="p-4 bg-light rounded">
                {!isLoaded ? (
                  <div>Loading map...</div>
                ) : (
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={13}
                  >
                    <AdvancedMarkerElement
                      position={center}
                      title={property.name}
                    />
                  </GoogleMap>
                )}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
