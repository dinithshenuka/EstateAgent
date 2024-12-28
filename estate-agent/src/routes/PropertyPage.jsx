import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { PropertyContext } from "../context/PropertyContext";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const PropertyPage = () => {
  const { id } = useParams();
  const { properties, addToFavorites } = useContext(PropertyContext);
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
    borderRadius: "8px",
  };

  const galleryImages = property.gallery.map((img) => ({
    original: img,
    thumbnail: img,
    originalHeight: 500,
  }));

  const propertyLocation = {
    lat: property.coordinates.lat,
    lng: property.coordinates.lng,
  };

  return (
    <div className="container py-4">
      {/* Image Gallery Section */}
      <div className="row mb-4">
        <div className="col-md-8">
          <ImageGallery
            items={galleryImages}
            showPlayButton={false}
            showFullscreenButton={true}
            showNav={true}
            thumbnailPosition="bottom"
            autoPlay={false}
          />
        </div>
        <div className="col-md-4">
          <div className="mt-4">
            <h3>{property.name}</h3>
            <p className="h4 text-warning">
              {property.currency} {property.price.toLocaleString()}
            </p>
            <p>
              <strong>Location:</strong> {property.location} (
              {property.postalCode})
            </p>
            <p>
              <strong>Type:</strong> {property.type} • {property.bedrooms}{" "}
              bedrooms
            </p>
            <button
              className="btn btn-warning w-100"
              onClick={() => addToFavorites(property)}
            >
              <FontAwesomeIcon icon={faHeart} className="me-2" />
              Add to Favorites
            </button>
          </div>
        </div>
      </div>

      {/* Tabbed Content */}
      <div className="row">
        <div className="col-12">
          <Tabs>
            <TabList className="nav nav-tabs mb-4">
              <Tab className="nav-item">
                <button className="nav-link">Description</button>
              </Tab>
              <Tab className="nav-item">
                <button className="nav-link">Floor Plan</button>
              </Tab>
              <Tab className="nav-item">
                <button className="nav-link">Location</button>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="p-4 bg-light rounded">
                <p className="mb-0">{property.description}</p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="p-4 bg-light rounded">
                <div className="row">
                  {property.flloorPlan?.map((plan, index) => (
                    <div key={index} className="col-md-6 mb-4">
                      <img
                        src={plan}
                        alt={`Floor plan ${index + 1}`}
                        className="img-fluid rounded shadow"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="p-4 bg-light rounded">
                {!isLoaded ? (
                  <div className="text-center">Loading map...</div>
                ) : (
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={propertyLocation}
                    zoom={15}
                  >
                    <MarkerF position={propertyLocation} />
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
