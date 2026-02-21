import React from "react";
import Hero from "../components/Hero";
import SectionCard from "../components/SectionCard";
import MissionVision from "../components/MissionVision";
import { Link } from "react-router-dom";

const Home = () => {
  const thematicAreas = [
    {
      title: "Environment",
      description:
        "Promoting sustainable practices, conservation efforts, and environmental education to protect our planet for future generations.",
      icon: "🌱",
      linkText: "Learn More",
      linkTo: "/programs#environment",
      bgColor: "green",
    },
    {
      title: "Skill Development",
      description:
        "Empowering individuals with vocational training, digital literacy, and professional skills to enhance employability.",
      icon: "🛠️",
      linkText: "Learn More",
      linkTo: "/programs#skills",
      bgColor: "earth",
    },
    {
      title: "Education",
      description:
        "Providing educational support, scholarships, and learning resources to underprivileged children and youth.",
      icon: "📚",
      linkText: "Learn More",
      linkTo: "/programs#education",
      bgColor: "sky",
    },
    {
      title: "Community Development",
      description:
        "Building stronger communities through integrated development programs focusing on health, sanitation, and social welfare.",
      icon: "🏘️",
      linkText: "Learn More",
      linkTo: "/programs#community",
      bgColor: "white",
    },
  ];

  const impactStats = [
    { number: "10,000+", label: "Lives Impacted" },
    { number: "50+", label: "Communities Served" },
    { number: "100+", label: "Volunteers" },
    { number: "25+", label: "Active Programs" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Program Beneficiary",
      content:
        "GROW Foundation changed my life. The skill development program helped me find a better job and support my family.",
      image: "👩‍💼",
    },
    {
      name: "Michael Chen",
      role: "Volunteer",
      content:
        "Volunteering with GROW has been incredibly rewarding. Seeing the positive impact on communities is truly inspiring.",
      image: "👨‍🏫",
    },
    {
      name: "Maria Rodriguez",
      role: "Community Leader",
      content:
        "The environmental initiatives have transformed our village. We now have cleaner water and sustainable practices.",
      image: "👩‍🌾",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="GROW (Grasping Resources, Offering Wisdom) Social Work Foundation"
        subtitle="Empowering Communities by Grasping Resources and Offering Wisdom."
        backgroundImage="home"
      />

      {/* Introduction Section */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Welcome to GROW Foundation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are a non-profit organization dedicated to creating sustainable
              change in communities through focused interventions in
              environment, education, skill development, and integrated
              community development.
            </p>
          </div>

          {/* Thematic Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {thematicAreas.map((area, index) => (
              <div key={index} className="card-hover h-full">
                <SectionCard {...area} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-600">
              Learn more about our commitment to empowering communities
            </p>
          </div>
          <MissionVision layout="compact" />
        </div>
      </section>

      {/* Impact Statistics */}
    <section className="py-16 bg-gradient-to-r from-emerald-800 via-green-900 to-emerald-950">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Our Impact
      </h2>

      <p className="text-lg text-emerald-100">
        Making a difference, one community at a time
      </p>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {impactStats.map((stat, index) => (
        <div
          key={index}
          className="group text-center 
                     bg-white/95 backdrop-blur-sm 
                     rounded-2xl p-6 
                     shadow-xl hover:shadow-2xl
                     transition-all duration-500 
                     transform hover:scale-105
                     border border-white/20"
        >
          {/* Number */}
          <div
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                       font-extrabold text-emerald-700 mb-3
                       transition-all duration-500 
                       group-hover:text-emerald-600"
          >
            {stat.number}
          </div>

          {/* Label */}
          <div
            className="text-xs sm:text-sm md:text-base lg:text-lg
                       text-gray-700 font-semibold
                       group-hover:text-gray-900 
                       transition-colors duration-300"
          >
            {stat.label}
          </div>

          {/* Decorative Line */}
          <div
            className="h-1 w-8 bg-emerald-600 mx-auto mt-3 
                       transition-all duration-500 
                       group-hover:w-12 rounded-full"
          ></div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Testimonials */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Community Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from those whose lives we've touched
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-grow-accent bg-opacity-10 rounded-lg p-6 shadow-md card-hover"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-grow-green via-grow-light-green to-grow-accent text-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 text-white opacity-90">
            Your support can help us reach more communities and create lasting
            change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="btn-primary bg-white text-white text-grow-green hover:bg-grow-accent hover:text-white"
            >
              Get Involved
            </Link>
            <Link
              to="/contact"
              className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-grow-green"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
