import React from "react";
import Hero from "../components/Hero";
import Form from "../components/Form";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: "No:1, Netaji Nagar, Eraiyanur, Tindivanam, Villupuram, Tamil Nadu-604001",
    },
    {
      icon: "📞",
      title: "Phone",
      details: "(+91) 9092628338",
    },
    {
      icon: "✉️",
      title: "Email",
      details: "growswf@gmail.com",
    },
    {
      icon: "🕐",
      title: "Office Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
  ];

  const faqs = [
    {
      question: "How can I volunteer with GROW Foundation?",
      answer:
        "You can fill out our volunteer application form on the Get Involved page. We'll review your application and contact you about available opportunities.",
    },
    {
      question: "Where does my donation go?",
      answer:
        "85% of donations go directly to program implementation, 10% to administrative costs, and 5% to fundraising. We provide regular reports on how funds are utilized.",
    },
    {
      question: "Can I visit your project sites?",
      answer:
        "Yes! We organize regular site visits for donors and volunteers. Please contact us in advance to schedule a visit.",
    },
    {
      question: "How can I partner with GROW Foundation?",
      answer:
        "We welcome partnerships with corporations, NGOs, academic institutions, and government agencies. Please fill out the partnership inquiry form on our Get Involved page.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        subtitle="Get in touch with GROW Foundation. We'd love to hear from you and discuss how we can work together."
        showButtons={false}
         backgroundImage="contact"
      />

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              We're here to answer your questions and discuss how you can get
              involved
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600">{info.details}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h3>
              <Form formType="contact" />
            </div>

            {/* Map Placeholder */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h3>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-gray-600 font-medium">Interactive Map</p>
                  <p className="text-gray-500 text-sm mt-2">
                    123 Community Lane, City, State 12345
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-grow-accent bg-opacity-20 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Transportation Options
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Bus: Route 15, 23, 42 - Community Center Stop</li>
                  <li>• Metro: Green Line - Central Station (10 min walk)</li>
                  <li>• Parking: Free parking available on-site</li>
                  <li>• Accessibility: Wheelchair accessible entrance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about GROW Foundation
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
          {faqs.map((faq, index) => (
  <details
    key={index}
    className="group bg-white rounded-2xl shadow-md hover:shadow-xl 
               transition-all duration-500 border border-gray-100 
               hover:border-grow-green overflow-hidden"
  >
    <summary
      className="flex justify-between items-center p-6 cursor-pointer 
                 list-none hover:bg-gray-50 transition-colors duration-300"
    >
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-grow-green transition-colors duration-300">
        {faq.question}
      </h3>

      {/* Arrow Icon */}
      <span
        className="ml-4 text-grow-green transform transition-transform duration-500 group-open:rotate-180"
      >
        ▼
      </span>
    </summary>

    <div
      className="px-6 pb-6 text-gray-600 leading-relaxed 
                 transition-all duration-500 ease-in-out 
                 group-open:animate-fadeIn"
    >
      {faq.answer}
    </div>
  </details>
))}

            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn-primary"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Connect With Us
            </h2>
            <p className="text-lg text-gray-600">
              Follow us on social media for updates and stories
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-grow-green text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-grow-light-green transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-grow-green text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-grow-light-green transition-colors duration-300"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-grow-green text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-grow-light-green transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-grow-green text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-grow-light-green transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
