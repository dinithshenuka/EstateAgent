import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} EstateAgent. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-white mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white mx-2">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;