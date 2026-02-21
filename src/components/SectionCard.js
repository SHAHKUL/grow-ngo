import React from "react";
import { Link } from "react-router-dom";

const SectionCard = ({
  title,
  description,
  icon,
  linkText,
  linkTo,
  bgColor = "white",
}) => {
  const bgColors = {
    white:
      "bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-100",

    green:
      "bg-gradient-to-br from-emerald-700 via-green-800 to-emerald-900 text-white",

    earth:
      "bg-gradient-to-br from-amber-700 via-orange-800 to-amber-900 text-white",

    sky: "bg-gradient-to-br from-blue-700 via-indigo-800 to-blue-900 text-white",
  };

  const isWhite = bgColor === "white";

  return (
    <div
      className={`
        ${bgColors[bgColor]}
        relative overflow-hidden
        rounded-2xl
        p-6 md:p-8
        shadow-md
        hover:shadow-2xl
        transition-all duration-500
        transform hover:-translate-y-2 hover:scale-[1.03]
        border ${isWhite ? "border-gray-200" : "border-white/20"}
        h-full flex flex-col
      `}
    >
      {/* Soft Glow Background Effect */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl opacity-60"></div>

      {/* Header */}
      <div className="flex items-center mb-5 relative z-10">
        <div
          className={`
            text-4xl mr-4
            transition-transform duration-500
            group-hover:scale-110
          `}
        >
          {icon}
        </div>

        <h3
          className={`
            text-lg sm:text-xl md:text-2xl
            font-bold
           text-white
          `}
        >
          {title}
        </h3>
      </div>

      {/* Description */}
      <p
        className={`
          text-sm sm:text-base md:text-lg
          leading-relaxed mb-6 flex-grow
         text-white/90
        `}
      >
        {description}
      </p>

      {/* Link */}
      {linkTo && (
        <Link
          to={linkTo}
          className={`
            inline-flex items-center font-semibold mt-auto
            transition-all duration-300 group
            
                text-white hover:text-yellow-200
            
          `}
        >
          {linkText}

          <svg
            className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default SectionCard;
