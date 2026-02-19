import React from 'react';
import Hero from '../components/Hero';
import MissionVision from '../components/MissionVision';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="About GROW Foundation"
        subtitle="Learn about our mission, vision, and the meaning behind our name."
        showButtons={false}
        backgroundImage="about"
      />

      {/* Mission and Vision Section */}
      <MissionVision />

      {/* Meaning Behind GROW */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              The Meaning Behind GROW
            </h2>
            <p className="text-lg text-gray-600">
              Each letter represents our core philosophy and approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-grow-green text-white text-4xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                G
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Grasping</h3>
              <p className="text-gray-600">
                Identifying and utilizing available resources, opportunities, and community strengths
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-grow-green text-white text-4xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                R
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Resources</h3>
              <p className="text-gray-600">
                Mobilizing and managing resources effectively for community development
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-grow-green text-white text-4xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                O
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Offering</h3>
              <p className="text-gray-600">
                Sharing knowledge, skills, and support to empower communities
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-grow-green text-white text-4xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                W
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Wisdom</h3>
              <p className="text-gray-600">
                Applying experience, knowledge, and cultural understanding for sustainable solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-grow-accent bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide our work and decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Creating long-term solutions that benefit both current and future generations
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Working together with communities and partners for greater impact
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Accountability</h3>
              <p className="text-gray-600">
                Taking responsibility for our actions and their outcomes
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Finding creative solutions to complex community challenges
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Compassion</h3>
              <p className="text-gray-600">
                Understanding and addressing the needs of those we serve
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Transparency</h3>
              <p className="text-gray-600">
                Operating with openness and honesty in all our endeavors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Objectives
            </h2>
            <p className="text-lg text-gray-600">
              Specific goals we aim to achieve through our programs
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 flex items-start">
              <div className="text-grow-green text-2xl mr-4 mt-1">✓</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Environmental Conservation</h3>
                <p className="text-gray-600">
                  Promote environmental awareness and implement conservation projects to protect natural resources
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 flex items-start">
              <div className="text-grow-green text-2xl mr-4 mt-1">✓</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Education Enhancement</h3>
                <p className="text-gray-600">
                  Improve access to quality education and learning resources for underprivileged communities
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 flex items-start">
              <div className="text-grow-green text-2xl mr-4 mt-1">✓</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Skill Development</h3>
                <p className="text-gray-600">
                  Provide vocational training and skill development programs to enhance employability
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 flex items-start">
              <div className="text-grow-green text-2xl mr-4 mt-1">✓</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Empowerment</h3>
                <p className="text-gray-600">
                  Build capacity within communities to address their own challenges sustainably
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
