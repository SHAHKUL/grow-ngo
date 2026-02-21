import React, { useRef } from "react";
import Hero from "../components/Hero";
// import SectionCard from '../components/SectionCard';

const Programs = () => {
  const environmentRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const communityRef = useRef(null);

  const scrollToSection = (ref) => {
  if (ref.current) {
    const yOffset = -160; // adjust based on navbar height
    const y =
      ref.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
};


  const environmentPrograms = [
    {
      title: "Tree Plantation Drives",
      description:
        "Community-based tree planting initiatives to increase green cover and combat climate change.",
      icon: "🌳",
    },
    {
      title: "Water Conservation",
      description:
        "Rainwater harvesting and water conservation projects to ensure sustainable water management.",
      icon: "💧",
    },
    {
      title: "Waste Management",
      description:
        "Promoting waste segregation, recycling, and proper disposal practices in communities.",
      icon: "♻️",
    },
    {
      title: "Environmental Education",
      description:
        "Awareness programs and workshops on environmental protection and sustainability.",
      icon: "📚",
    },
  ];

  const skillPrograms = [
    {
      title: "Digital Literacy",
      description:
        "Basic computer skills and digital literacy training for youth and adults.",
      icon: "💻",
    },
    {
      title: "Vocational Training",
      description:
        "Skills training in trades like plumbing, electrical work, and tailoring.",
      icon: "🔧",
    },
    {
      title: "Entrepreneurship Development",
      description:
        "Business skills training and support for small business startups.",
      icon: "💼",
    },
    {
      title: "Financial Literacy",
      description:
        "Training on budgeting, savings, and basic financial management.",
      icon: "💰",
    },
  ];

  const educationPrograms = [
    {
      title: "After-School Tutoring",
      description:
        "Academic support and tutoring for underprivileged students.",
      icon: "🎓",
    },
    {
      title: "Scholarship Program",
      description:
        "Financial assistance for deserving students to continue their education.",
      icon: "📖",
    },
    {
      title: "Library Development",
      description: "Setting up community libraries and reading centers.",
      icon: "📚",
    },
    {
      title: "STEM Education",
      description:
        "Science, Technology, Engineering, and Mathematics workshops for students.",
      icon: "🔬",
    },
  ];

  const communityPrograms = [
    {
      title: "Health Camps",
      description:
        "Free health check-ups and medical camps in underserved communities.",
      icon: "🏥",
    },
    {
      title: "Sanitation Projects",
      description:
        "Building toilets and promoting hygiene practices in communities.",
      icon: "🚽",
    },
    {
      title: "Women Empowerment",
      description: "Self-help groups and skill training programs for women.",
      icon: "👩‍🦰",
    },
    {
      title: "Senior Care",
      description:
        "Support programs and activities for elderly community members.",
      icon: "👴",
    },
  ];

  const bgColorOne = [
    "bg-gray-900 border-gray-800",
    "bg-teal-900 border-teal-800",
    "bg-gray-800 border-gray-700",
    "bg-green-900 border-green-800",
    "bg-emerald-900 border-emerald-800",
    "bg-slate-900 border-slate-800",
  ];

  const bgColorTwo = [
    "bg-green-900 border border-green-800",
    "bg-emerald-900 border border-emerald-800",
    "bg-teal-900 border border-teal-800",
    "bg-lime-900 border border-lime-800",
    "bg-slate-900 border border-slate-800",
    "bg-gray-900 border border-gray-800",
  ];

  const bgColorThree = [
    "bg-red-900 border border-red-800",
    "bg-emerald-900 border border-emerald-800",
    "bg-teal-900 border border-teal-800",
    "bg-lime-900 border border-lime-800",
    "bg-sky-900 border border-sky-800",
    "bg-indigo-900 border border-indigo-800",
  ];
  const communityBgColors = [
    "bg-amber-900 border border-amber-800",
    "bg-orange-900 border border-orange-800",
    "bg-yellow-900 border border-yellow-800",
    "bg-stone-900 border border-stone-800",
    "bg-rose-900 border border-rose-800",
    "bg-fuchsia-900 border border-fuchsia-800",
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Our Programs"
        subtitle="Explore our thematic focus areas and the initiatives we're implementing to create positive change."
        showButtons={false}
        backgroundImage="programs"
      />

      {/* Program Navigation */}
      <section className="py-8 bg-white sticky top-[100px] z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection(environmentRef)}
              className="px-6 py-2 bg-grow-green text-white rounded-full hover:bg-grow-light-green transition-colors duration-300"
            >
              Environment
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="px-6 py-2 bg-grow-green text-white rounded-full hover:bg-grow-light-green transition-colors duration-300"
            >
              Skill Development
            </button>
            <button
              onClick={() => scrollToSection(educationRef)}
              className="px-6 py-2 bg-grow-green text-white rounded-full hover:bg-grow-light-green transition-colors duration-300"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection(communityRef)}
              className="px-6 py-2 bg-grow-green text-white rounded-full hover:bg-grow-light-green transition-colors duration-300"
            >
              Community Development
            </button>
          </div>
        </div>
      </section>

      {/* Environment Section */}
      <section
        ref={environmentRef}
        id="environment"
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🌱</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Environment Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our environmental programs focus on conservation, sustainability,
              and creating awareness about protecting our planet for future
              generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmentPrograms.map((program, index) => (
              <div
                key={index}
                className={`rounded-lg p-6 
        shadow-lg hover:shadow-2xl 
        transition-all duration-300 
        border ${bgColorOne[index % bgColorOne.length]}`}
              >
                <div className="text-4xl mb-4 text-center text-green-400">
                  {program.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-100 mb-3 text-center">
                  {program.title}
                </h3>

                <p className="text-gray-300 text-center">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Development Section */}
      <section ref={skillsRef} id="skills" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🛠️</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Skill Development Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We empower individuals with practical skills and knowledge to
              enhance their employability and create sustainable livelihoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillPrograms.map((program, index) => (
              <div
                key={index}
                className={`rounded-lg p-6 
        shadow-lg hover:shadow-2xl 
        transition-all duration-300 
        text-center 
        ${bgColorTwo[index % bgColorTwo.length]}`}
              >
                <div className="text-4xl mb-4 text-green-400">
                  {program.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-100 mb-3">
                  {program.title}
                </h3>

                <p className="text-gray-300">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section ref={educationRef} id="education" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Educational Support Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe education is the foundation of development. Our
              programs aim to make quality education accessible to all,
              regardless of their background.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationPrograms.map((program, index) => (
              <div
                key={index}
                className={`rounded-lg p-6 
        shadow-md hover:shadow-xl 
        transition-all duration-300 
        text-center 
        ${bgColorThree[index % bgColorThree.length]}`}
              >
                <div className="text-4xl mb-4 text-green-600">
                  {program.icon}
                </div>

                <h3
                  className="text-xl font-bold mb-3 
               bg-gradient-to-r from-green-300 to-emerald-400 
               bg-clip-text text-transparent"
                >
                  {program.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Development Section */}
      <section ref={communityRef} id="community" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🏘️</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Integrated Community Development
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our holistic approach addresses multiple aspects of community
              development to create sustainable and inclusive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityPrograms.map((program, index) => (
              <div
                key={index}
                className={`group rounded-lg p-6 
        shadow-lg hover:shadow-2xl 
        transition-all duration-300 
        text-center 
        ${communityBgColors[index % communityBgColors.length]}`}
              >
                <div className="text-4xl mb-4 text-green-300">
                  {program.icon}
                </div>

                <h3
                  className="text-xl font-bold mb-3 
                     bg-gradient-to-r from-green-300 to-lime-400 
                     bg-clip-text text-transparent"
                >
                  {program.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Join Our Programs
          </h2>

          <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Whether you want to volunteer, donate, or participate in our
            programs, there are many ways to get involved and make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection(environmentRef)}
              className="px-6 py-3 rounded-lg 
                   bg-grow-green text-white 
                   hover:bg-green-700 
                   transition-all duration-300 
                   shadow-md hover:shadow-lg"
            >
              Explore Programs
            </button>

            <button
              onClick={() => (window.location.href = "/get-involved")}
              className="px-6 py-3 rounded-lg 
                   border-2 border-grow-green 
                   text-grow-green 
                   hover:bg-grow-green 
                   hover:text-white 
                   transition-all duration-300"
            >
              Get Involved
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
