import React, { useState } from 'react';
import Hero from '../components/Hero';
import Form from '../components/Form';

const GetInvolved = () => {
  const [activeTab, setActiveTab] = useState('volunteer');

  const volunteerBenefits = [
    'Make a meaningful impact in communities',
    'Develop new skills and gain experience',
    'Network with like-minded individuals',
    'Receive certificate of appreciation',
    'Opportunity for leadership roles',
    'Personal growth and fulfillment'
  ];

  const donationImpact = [
    '$25 - Provides educational materials for 5 children',
    '$50 - Plants 10 trees in a community',
    '$100 - Supports skill training for 1 person',
    '$250 - Funds a health camp for 50 people',
    '$500 - Sets up a library corner in a school',
    '$1000+ - Sponsors a community development project'
  ];

  const partnershipOpportunities = [
    {
      title: 'Corporate Partnerships',
      description: 'Collaborate with us through CSR initiatives, employee volunteering, and program sponsorship.',
      icon: '🏢'
    },
    {
      title: 'NGO Collaborations',
      description: 'Partner with us to expand our reach and impact through shared resources and expertise.',
      icon: '🤝'
    },
    {
      title: 'Academic Institutions',
      description: 'Work together on research, internships, and educational programs.',
      icon: '🎓'
    },
    {
      title: 'Government Partnerships',
      description: 'Collaborate on government schemes and development projects.',
      icon: '🏛️'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Get Involved"
        subtitle="Join us in our mission to empower communities. Your support can make a real difference."
        showButtons={false}
      />

      {/* Tab Navigation */}
      <section className="py-8 bg-white sticky top-[100px] z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeTab === 'volunteer'
                  ? 'bg-grow-green text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Volunteer
            </button>
            <button
              onClick={() => setActiveTab('donate')}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeTab === 'donate'
                  ? 'bg-grow-green text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Donate
            </button>
            <button
              onClick={() => setActiveTab('partner')}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeTab === 'partner'
                  ? 'bg-grow-green text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      {activeTab === 'volunteer' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Become a Volunteer
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Join our team of dedicated volunteers and make a direct impact on communities. 
                  Your time, skills, and passion can help us create lasting change.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Why Volunteer With GROW?
                  </h3>
                  <ul className="space-y-3">
                    {volunteerBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="text-grow-green text-xl mr-3 mt-1">✓</div>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-grow-accent bg-opacity-20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Volunteer Areas
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🌱</span>
                      <span className="text-gray-600">Environment</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">📚</span>
                      <span className="text-gray-600">Education</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🛠️</span>
                      <span className="text-gray-600">Skills Training</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🏥</span>
                      <span className="text-gray-600">Health Camps</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">💻</span>
                      <span className="text-gray-600">Digital Literacy</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">📊</span>
                      <span className="text-gray-600">Admin Support</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Form formType="volunteer" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Donate Section */}
      {activeTab === 'donate' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Make a Donation
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Your generous donation helps us continue our work and expand our reach. 
                  Every contribution, no matter the size, makes a difference.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Your Impact
                  </h3>
                  <div className="space-y-3">
                    {donationImpact.map((impact, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="font-semibold text-grow-green mb-1">
                          {impact.split(' - ')[0]}
                        </div>
                        <div className="text-gray-600">
                          {impact.split(' - ')[1]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-grow-earth bg-opacity-10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Other Ways to Give
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Monthly giving programs</li>
                    <li>• Corporate matching gifts</li>
                    <li>• In-kind donations</li>
                    <li>• Legacy giving and bequests</li>
                    <li>• Stock donations</li>
                  </ul>
                </div>
              </div>

              <div>
                <Form formType="donation" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Partner Section */}
      {activeTab === 'partner' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Partner With Us
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe in the power of collaboration. Partner with us to amplify our impact 
                and create sustainable change together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {partnershipOpportunities.map((opportunity, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-4 text-center">{opportunity.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 text-center">{opportunity.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Why Partner With GROW?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-grow-green text-xl mr-3 mt-1">🎯</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Proven Impact</h4>
                      <p className="text-gray-600">Track record of successful community development programs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-grow-green text-xl mr-3 mt-1">🌍</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Wide Reach</h4>
                      <p className="text-gray-600">Presence in multiple communities with diverse programs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-grow-green text-xl mr-3 mt-1">🔍</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Transparency</h4>
                      <p className="text-gray-600">Regular reporting and accountability in all partnerships</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-grow-green text-xl mr-3 mt-1">🤝</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Collaborative Approach</h4>
                      <p className="text-gray-600">We value our partners and work together for mutual success</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Start a Partnership
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-grow-green focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-grow-green focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-grow-green focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Partnership Interest *
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-grow-green focus:border-transparent">
                      <option value="">Select partnership type</option>
                      <option value="corporate">Corporate Partnership</option>
                      <option value="ngo">NGO Collaboration</option>
                      <option value="academic">Academic Partnership</option>
                      <option value="government">Government Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-grow-green focus:border-transparent"
                      placeholder="Tell us about your organization and partnership ideas..."
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary">
                    Submit Partnership Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default GetInvolved;
