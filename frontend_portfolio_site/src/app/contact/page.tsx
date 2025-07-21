'use client';
import React, { useState } from "react";

// PUBLIC_INTERFACE
export default function ContactPage() {
  /**
   * Contact page: Professional contact form with modern design, validation, and responsive layout.
   */

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "hello@architectportfolio.com",
      link: "mailto:hello@architectportfolio.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      value: "San Francisco, CA",
      link: "#"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
          Get In Touch
        </h1>
        <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
          Ready to discuss your architectural project? I&apos;d love to hear about your vision and how we can bring it to life.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="block p-6 bg-white rounded-xl shadow-md border border-accent-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center text-primary-600 mr-4 group-hover:from-primary-200 group-hover:to-accent-200 transition-all duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-800 mb-1">{info.title}</h3>
                      <p className="text-secondary-600">{info.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-accent-200">
              <h3 className="text-lg font-semibold text-primary-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Office Hours
              </h3>
              <div className="space-y-2 text-sm text-secondary-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-6 p-4 bg-primary-800 text-accent-100 rounded-xl text-center">
              <p className="text-sm">
                <span className="font-semibold">Quick Response:</span> I typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 border border-accent-200">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-primary-800 mb-4">
                Start Your Project
              </h2>
              <p className="text-secondary-600 leading-relaxed">
                Fill out the form below and I&apos;ll get back to you with a detailed response about your project needs and how we can work together.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary-800 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-accent-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:ring-offset-2 focus:outline-none transition-all duration-200 text-primary-800 placeholder-secondary-400"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary-800 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-accent-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:ring-offset-2 focus:outline-none transition-all duration-200 text-primary-800 placeholder-secondary-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-primary-800 mb-2">
                  Project Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-accent-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:ring-offset-2 focus:outline-none transition-all duration-200 text-primary-800 placeholder-secondary-400"
                  placeholder="e.g., Residential Home Design, Office Renovation, etc."
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary-800 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-accent-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:ring-offset-2 focus:outline-none transition-all duration-200 text-primary-800 placeholder-secondary-400 resize-none"
                  placeholder="Please describe your project, including size, style preferences, budget range, timeline, and any specific requirements..."
                />
              </div>

              {/* Project Type Selection */}
              <div>
                <label className="block text-sm font-semibold text-primary-800 mb-3">
                  Project Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Residential', 'Commercial', 'Renovation', 'Consultation'].map((type) => (
                    <label key={type} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 border-2 border-accent-300 rounded focus:ring-primary-500 focus:ring-2"
                      />
                      <span className="ml-2 text-sm text-secondary-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 flex items-center justify-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Notice */}
              <div className="pt-4 border-t border-accent-200">
                <p className="text-xs text-secondary-500 leading-relaxed">
                  By submitting this form, you agree to our privacy policy. Your information will be used solely for project communication and will not be shared with third parties.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* FAQ */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-accent-200">
          <h3 className="text-2xl font-bold text-primary-800 mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              {
                question: "What's the typical project timeline?",
                answer: "Most residential projects take 3-6 months from concept to construction documents, depending on complexity."
              },
              {
                question: "Do you work on small renovation projects?",
                answer: "Yes! I work on projects of all sizes, from small renovations to large new constructions."
              },
              {
                question: "What are your consultation rates?",
                answer: "Initial consultations are complimentary. Project rates vary based on scope and complexity."
              }
            ].map((faq, index) => (
              <div key={index} className="border-l-4 border-primary-200 pl-4">
                <h4 className="font-semibold text-primary-800 mb-2">{faq.question}</h4>
                <p className="text-secondary-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Overview */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8 border border-accent-200">
          <h3 className="text-2xl font-bold text-primary-800 mb-6">My Design Process</h3>
          <div className="space-y-4">
            {[
              { step: "1", title: "Initial Consultation", description: "We discuss your vision, needs, and budget" },
              { step: "2", title: "Concept Development", description: "I create initial design concepts for review" },
              { step: "3", title: "Design Refinement", description: "We refine the design based on your feedback" },
              { step: "4", title: "Final Documentation", description: "Complete construction documents and permits" }
            ].map((process, index) => (
              <div key={index} className="flex items-start">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                  {process.step}
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800 mb-1">{process.title}</h4>
                  <p className="text-secondary-600 text-sm">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
