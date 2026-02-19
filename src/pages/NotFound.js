import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-9xl font-bold text-grow-green mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            Go Home
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
        
        <div className="mt-12">
          <div className="text-6xl mb-4">🌱</div>
          <p className="text-gray-600">
            Let's grow together - explore our website to learn more about GROW Foundation
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
