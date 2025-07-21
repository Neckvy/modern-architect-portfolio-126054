'use client';
import React from "react";

// PUBLIC_INTERFACE
export default function SkillsPage() {
  /**
   * Skills page: Organized display of technical and professional skills with modern design and responsive layout.
   */

  const skillCategories = [
    {
      title: "Design & Visualization",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5zM21 15a2 2 0 00-2-2h-4a2 2 0 00-2 2v2a4 4 0 004 4h2a2 2 0 002-2v-2z" />
        </svg>
      ),
      skills: [
        { name: "Architectural Design", level: 95 },
        { name: "3D Modeling & Visualization", level: 90 },
        { name: "Space Planning", level: 92 },
        { name: "Concept Development", level: 88 },
        { name: "Technical Drawing", level: 94 }
      ]
    },
    {
      title: "Software & Technology",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: "AutoCAD", level: 95 },
        { name: "Revit", level: 88 },
        { name: "SketchUp", level: 90 },
        { name: "Rhino", level: 85 },
        { name: "Adobe Creative Suite", level: 80 }
      ]
    },
    {
      title: "Specializations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      skills: [
        { name: "Sustainable Architecture", level: 92 },
        { name: "LEED Certification", level: 88 },
        { name: "Urban Planning", level: 85 },
        { name: "Interior Design", level: 80 },
        { name: "Landscape Architecture", level: 75 }
      ]
    },
    {
      title: "Project Management",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2a2 2 0 002-2V7a2 2 0 00-2-2H9m0 0V3m0 2v2M9 9h3m-3 0h3m-3 6h3" />
        </svg>
      ),
      skills: [
        { name: "Project Management", level: 90 },
        { name: "Client Communication", level: 95 },
        { name: "Team Leadership", level: 88 },
        { name: "Budget Management", level: 85 },
        { name: "Timeline Planning", level: 92 }
      ]
    }
  ];

  const certifications = [
    {
      name: "Licensed Architect",
      issuer: "State Architecture Board",
      year: "2016",
      icon: "🏗️"
    },
    {
      name: "LEED AP BD+C",
      issuer: "GBCI",
      year: "2017",
      icon: "🌱"
    },
    {
      name: "NCARB Certificate",
      issuer: "NCARB",
      year: "2018",
      icon: "📜"
    },
    {
      name: "AIA Member",
      issuer: "American Institute of Architects",
      year: "2016",
      icon: "🏛️"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
          Skills & Expertise
        </h1>
        <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
          A comprehensive overview of my technical capabilities and professional expertise in architecture and design
        </p>
      </section>

      {/* Skills Categories */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-2xl shadow-lg p-8 border border-accent-200 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-primary-800">{category.title}</h2>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-secondary-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-primary-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-accent-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-500 ease-out group-hover:from-primary-600 group-hover:to-primary-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-secondary-600 text-lg">
            Professional certifications and memberships that validate my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-accent-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">{cert.name}</h3>
              <p className="text-secondary-600 text-sm mb-2">{cert.issuer}</p>
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Software */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12 border border-accent-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Tools & Software Proficiency
            </h2>
            <p className="text-secondary-600 text-lg">
              Advanced proficiency in industry-standard design and project management tools
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "AutoCAD", icon: "📐" },
              { name: "Revit", icon: "🏗️" },
              { name: "SketchUp", icon: "📊" },
              { name: "Rhino", icon: "🦏" },
              { name: "Adobe CC", icon: "🎨" },
              { name: "V-Ray", icon: "💡" },
              { name: "Lumion", icon: "🌟" },
              { name: "Enscape", icon: "👁️" },
              { name: "BIM 360", icon: "☁️" },
              { name: "Photoshop", icon: "🖼️" },
              { name: "InDesign", icon: "📖" },
              { name: "MS Project", icon: "📅" }
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  {tool.icon}
                </div>
                <p className="text-xs font-medium text-secondary-700">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="bg-primary-800 rounded-2xl shadow-xl p-8 lg:p-12 text-center text-white">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Continuous Learning & Growth
        </h2>
        <p className="text-xl text-accent-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Architecture is an ever-evolving field. I stay current with the latest technologies, 
          sustainable practices, and design trends to deliver innovative solutions that exceed client expectations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-accent-200 text-primary-800 font-semibold rounded-lg hover:bg-accent-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View My Work
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 border-2 border-accent-200 text-accent-100 font-semibold rounded-lg hover:bg-accent-200 hover:text-primary-800 transition-all duration-200"
          >
            Let&apos;s Collaborate
          </a>
        </div>
      </section>
    </div>
  );
}
