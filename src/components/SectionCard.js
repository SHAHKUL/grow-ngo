import React from 'react';
import { Link } from 'react-router-dom';

const SectionCard = ({ title, description, icon, linkText, linkTo, bgColor = 'white' }) => {
  const bgColors = {
    white: 'bg-gradient-to-br from-white to-gray-50',
    green: 'bg-gradient-to-br from-grow-accent to-grow-mint',
    earth: 'bg-gradient-to-br from-grow-earth to-grow-gold',
    sky: 'bg-gradient-to-br from-grow-sky to-grow-accent',
  };

  return (
    <div className={`${bgColors[bgColor]} rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-opacity-20 ${bgColor === 'white' ? 'border-gray-200' : 'border-white'} h-full flex flex-col`}>
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-3 animate-bounce delay-200">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{description}</p>
      {linkTo && (
        <Link
          to={linkTo}
          className="inline-flex items-center text-grow-green font-semibold hover:text-grow-light-green transition-colors duration-300 group mt-auto"
        >
          {linkText}
          <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default SectionCard;
