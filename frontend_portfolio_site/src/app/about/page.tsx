'use client';
import React from "react";

// PUBLIC_INTERFACE
export default function AboutPage() {
  /**
   * About Me page: Professional profile with experience, education, and philosophy using responsive Tailwind design.
   */
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
          About Me
        </h1>
        <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
          Passionate freelance architect with a commitment to modern, sustainable design
        </p>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {/* Profile Image and Quick Info */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            {/* Profile Image Placeholder */}
            <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-accent-200 to-accent-300 flex items-center justify-center shadow-lg mb-6">
              <svg className="w-24 h-24 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-accent-200">
              <h3 className="text-lg font-semibold text-primary-800 mb-4">Quick Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-secondary-600">
                  <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Based in Modern City
                </li>
                <li className="flex items-center text-secondary-600">
                  <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  8+ Years Experience
                </li>
                <li className="flex items-center text-secondary-600">
                  <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Licensed Architect
                </li>
                <li className="flex items-center text-secondary-600">
                  <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  50+ Completed Projects
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-accent-200">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">My Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-secondary-600 leading-relaxed mb-4">
                I am a passionate freelance architect with a deep love for modern, sustainable design. 
                My journey began with a fascination for how spaces can transform the way we live, work, and interact.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-4">
                My experience spans residential, commercial, and public projects, where I blend creativity 
                with practical solutions to create spaces that inspire and function beautifully. I believe 
                that great architecture should not only be visually stunning but also environmentally 
                responsible and perfectly suited to its users&apos; needs.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Let&apos;s collaborate to create inspiring spaces that stand the test of time while respecting 
                our planet&apos;s resources.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8 border border-accent-200">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Design Philosophy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Sustainability First",
                  description: "Every design decision considers environmental impact and long-term sustainability.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )
                },
                {
                  title: "Human-Centered",
                  description: "Spaces should enhance human experience and promote well-being.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  )
                },
                {
                  title: "Timeless Beauty",
                  description: "Clean lines and thoughtful proportions create lasting aesthetic appeal.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )
                },
                {
                  title: "Functional Excellence",
                  description: "Beautiful spaces must also work perfectly for their intended purpose.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                }
              ].map((principle, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">{principle.title}</h3>
                    <p className="text-sm text-secondary-600 leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-accent-200">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Education & Credentials</h2>
            <div className="space-y-6">
              {[
                {
                  degree: "Master of Architecture",
                  institution: "University of Design Excellence",
                  year: "2016",
                  description: "Focus on sustainable design and urban planning"
                },
                {
                  degree: "Bachelor of Architectural Studies",
                  institution: "Institute of Modern Architecture",
                  year: "2014",
                  description: "Foundation in architectural principles and design theory"
                },
                {
                  degree: "LEED AP Certification",
                  institution: "Green Building Certification Institute",
                  year: "2017",
                  description: "Advanced green building design and construction"
                }
              ].map((edu, index) => (
                <div key={index} className="border-l-4 border-primary-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-primary-800">{edu.degree}</h3>
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-secondary-600 font-medium mb-2">{edu.institution}</p>
                  <p className="text-sm text-secondary-500">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="bg-primary-800 rounded-2xl shadow-xl p-8 lg:p-12 text-center text-white">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss how we can bring your architectural vision to life with sustainable, modern design.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-accent-200 text-primary-800 font-semibold rounded-lg hover:bg-accent-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Start a Conversation
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </section>
    </div>
  );
}
