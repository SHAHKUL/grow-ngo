import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, showButtons = true, backgroundImage = null }) => {
  const heroBackgrounds = {
    home: `linear-gradient(135deg, rgba(45,80,22,0.8) 0%, rgba(90,124,58,0.7) 50%, rgba(143,191,159,0.6) 100%), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D&auto=format&fit=crop&w=1920&q=80')`,
    about: `linear-gradient(135deg, rgba(139,111,71,0.9) 0%, rgba(45,80,22,0.8) 50%, rgba(135,206,235,0.7) 100%), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D&auto=format&fit=crop&w=1920&q=80')`,
    programs: `linear-gradient(135deg, rgba(135,206,235,0.9) 0%, rgba(45,80,22,0.8) 50%, rgba(143,191,159,0.7) 100%), url('https://bcdn.mindler.com/bloglive/wp-content/uploads/2018/01/06144354/Social-Work-Career-in-India-770x385.png')`,
    contact: `linear-gradient(135deg, rgba(45,80,22,0.8) 0%, rgba(90,124,58,0.7) 50%, rgba(143,191,159,0.6) 100%), url('https://static.vecteezy.com/system/resources/thumbnails/007/067/602/small/businessman-shows-outstretched-hand-with-social-icon-on-virtual-screen-contact-us-free-photo.jpg')`,
    default: `linear-gradient(135deg, rgba(45,80,22,0.8) 0%, rgba(90,124,58,0.7) 50%, rgba(143,191,159,0.6) 100%), url('https://apollouniversity.edu.in/blog/wp-content/uploads/2023/10/Become-a-Catalyst-for-Positive-Change-with-Master-of-Social-Work-Course-min-1568x419-1.webp')`
  };

  const backgroundStyle = backgroundImage ? heroBackgrounds[backgroundImage] || heroBackgrounds.default : heroBackgrounds.default;

  return (
    <div 
      className="relative text-white overflow-hidden"
      style={{
        background: backgroundStyle,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'multiply',
        animation: 'scrollBackground 20s linear infinite'
      }}
    >
    
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-grow-accent">
                {title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {subtitle}
            </p>
            {showButtons && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/get-involved" className="btn-primary bg-white text-white text-grow-green hover:bg-grow-accent hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Donate Now
                </Link>
                <Link to="/get-involved" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-grow-green transform hover:scale-105 transition-all duration-300">
                  Volunteer
                </Link>
                <Link to="/about" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-grow-green transform hover:scale-105 transition-all duration-300">
                  Learn More
                </Link>
              </div>
            )}
          </div>
          
        
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
