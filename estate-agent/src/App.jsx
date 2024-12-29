import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import SearchPage from "./routes/SearchPage";
import PropertyPage from "./routes/PropertyPage";
import FavoritesPage from "./routes/FavoritesPage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PropertyProvider from "./context/PropertyContext";
import AboutPage from "./routes/AboutPage";
import ContactPage from "./routes/ContactPage";

function App() {
  return (
    <PropertyProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/property/:id" element={<PropertyPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </PropertyProvider>
  );
}

export default App;
