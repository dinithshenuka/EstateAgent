import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1>Welcome to EstateAgent</h1>
        <p>Your trusted platform for finding your dream home!</p>
      </div>
      <Footer />
    </>
  );
}

export default App;