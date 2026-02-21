import React from 'react';

const MissionVision = ({ showSlogan = true, layout = 'default' }) => {
  const slogan = "Empowering Communities by Grasping Resources and Offering Wisdom";
  
  const visionStatement = "To empower communities by grasping resources and offering wisdom, fostering a future where every individual has the opportunity to thrive, contribute, and lead a fulfilling life.";
  
  const missionStatement = "The GROW (Grasping Resources, Offering Wisdom) Social Work Foundation is dedicated to creating lasting social change by mobilizing resources, enhancing access to knowledge, and providing support for skill development. Through community-driven initiatives, we aim to uplift marginalized populations, promote sustainable development, and create pathways to opportunity for all, with a focus on both rural and urban areas.";

  if (layout === 'compact') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showSlogan && (
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-grow-green to-grow-accent text-white p-6 rounded-xl shadow-lg mb-8">
              <p className="text-2xl md:text-3xl font-bold">
                "{slogan}"
              </p>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
       <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black 
                rounded-2xl p-8 shadow-2xl border border-white/10">
  <div className="flex items-center mb-6">
    <div className="text-4xl mr-4">🌍</div>
    <h2 className="text-2xl md:text-3xl font-bold text-white">
      Our Vision
    </h2>
  </div>

  <p className="text-lg text-gray-300 leading-relaxed">
    {visionStatement}
  </p>
</div>


          {/* Mission */}
       <div className="bg-gradient-to-br from-amber-800 via-orange-900 to-amber-950 
                rounded-2xl p-8 shadow-2xl border border-amber-500/20
                transition-all duration-500 hover:scale-[1.02]">
  <div className="flex items-center mb-6">
    <div className="text-4xl mr-4">🤝</div>

    <h2 className="text-2xl md:text-3xl font-bold text-white">
      Our Mission
    </h2>
  </div>

  <p className="text-lg text-amber-100 leading-relaxed">
    {missionStatement}
  </p>
</div>

        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {showSlogan && (
        <div className="text-center mb-12 mt-7">
          <div className="bg-gradient-to-r from-grow-green to-grow-accent text-white p-6 rounded-xl shadow-lg mb-8">
            <p className="text-2xl md:text-3xl font-bold">
              "{slogan}"
            </p>
          </div>
        </div>
      )}

      {/* Vision Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div className="flex items-center mb-6">
            <div className="text-5xl mr-4">🌍</div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Our Vision
            </h2>
          </div>
          {/* <div className="bg-gradient-to-r from-grow-green to-grow-accent text-white p-4 rounded-lg mb-6">
            <p className="text-lg font-semibold">
              "{slogan}"
            </p>
          </div> */}
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {visionStatement}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We envision empowered communities that are self-sufficient, environmentally conscious, 
            and socially inclusive, where every individual can reach their full potential.
          </p>
        </div>
        <div className="bg-grow-accent bg-opacity-20 rounded-xl p-8 text-center">
          <div className="text-6xl mb-4">🌍</div>
          <p className="text-xl text-grow-green font-semibold">
            Sustainable Development Goals
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="bg-grow-earth bg-opacity-10 rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">🤝</div>
            <p className="text-xl text-grow-earth font-semibold">
              Community First Approach
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="flex items-center mb-6">
            <div className="text-5xl mr-4">🎯</div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Our Mission
            </h2>
          </div>
          {/* <div className="bg-gradient-to-r from-grow-earth to-grow-gold text-white p-4 rounded-lg mb-6">
            <p className="text-lg font-semibold">
              "{slogan}"
            </p>
          </div> */}
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {missionStatement}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We work collaboratively with local communities, government agencies, and partner organizations 
            to implement sustainable solutions that create lasting positive change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
