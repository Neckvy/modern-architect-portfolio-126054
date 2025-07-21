'use client';
import Link from 'next/link';

// PUBLIC_INTERFACE
export default function Home() {
  /**
   * Home page: Hero section with introduction and quick navigation links with modern design.
   */
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center mb-16 lg:mb-20">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-accent-200 to-accent-300 flex items-center justify-center shadow-lg">
              <svg className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6 leading-tight">
            Welcome to my
            <span className="block text-primary-600">Architecture Portfolio</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate freelance architect creating modern, sustainable designs. 
            I blend creativity with practical solutions to craft inspiring spaces 
            for residential, commercial, and public projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-primary-600 text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          {
            href: '/about',
            title: 'About Me',
            description: 'Learn about my background and design philosophy',
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            )
          },
          {
            href: '/projects',
            title: 'Projects',
            description: 'Explore my architectural works and case studies',
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            )
          },
          {
            href: '/skills',
            title: 'Skills',
            description: 'Technical expertise and design capabilities',
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            )
          },
          {
            href: '/contact',
            title: 'Contact',
            description: 'Start a conversation about your project',
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            )
          }
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-accent-200 hover:border-primary-200 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg mb-4 text-primary-600 group-hover:from-primary-200 group-hover:to-accent-200 transition-all duration-200">
              {card.icon}
            </div>
            <h3 className="text-lg font-semibold text-primary-800 mb-2 group-hover:text-primary-600 transition-colors duration-200">
              {card.title}
            </h3>
            <p className="text-secondary-600 text-sm leading-relaxed">
              {card.description}
            </p>
          </Link>
        ))}
      </section>

      {/* Features Highlight */}
      <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-accent-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
            Why Choose My Architectural Services
          </h2>
          <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
            Bringing together innovation, sustainability, and timeless design principles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Modern Design',
              description: 'Contemporary aesthetics combined with functional living spaces',
              icon: '🏢'
            },
            {
              title: 'Sustainable Focus',
              description: 'Eco-friendly materials and energy-efficient solutions',
              icon: '🌱'
            },
            {
              title: 'Client-Centered',
              description: 'Collaborative approach ensuring your vision comes to life',
              icon: '🤝'
            }
          ].map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
