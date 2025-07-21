'use client';
import React from "react";

// PUBLIC_INTERFACE
export default function ProjectsPage() {
  /**
   * Projects page: Displays architectural projects in a responsive grid with detailed cards and high-quality images.
   */

  const projects = [
    {
      id: 1,
      title: "Modern Residential Villa",
      category: "Residential",
      location: "Beverly Hills, CA",
      year: "2023",
      description: "A stunning contemporary villa featuring clean lines, floor-to-ceiling windows, and sustainable materials. The design maximizes natural light while maintaining privacy through strategic landscaping and architectural elements.",
      features: ["Sustainable Materials", "Smart Home Integration", "Energy Efficient", "Open Floor Plan"],
      imageAlt: "Modern residential villa with clean lines and large windows",
      imagePlaceholder: "🏡"
    },
    {
      id: 2,
      title: "Urban Office Complex",
      category: "Commercial",
      location: "Downtown Seattle, WA",
      year: "2023",
      description: "A flexible workspace designed for the modern tech company, emphasizing collaboration, natural lighting, and employee well-being. Features include green rooftop spaces and innovative meeting areas.",
      features: ["Flexible Workspace", "Green Roof", "Collaboration Zones", "Natural Lighting"],
      imageAlt: "Modern office building with glass facade and green elements",
      imagePlaceholder: "🏢"
    },
    {
      id: 3,
      title: "Community Cultural Center",
      category: "Public",
      location: "Portland, OR",
      year: "2022",
      description: "A vibrant community hub that celebrates local culture while providing inclusive spaces for events, education, and social gatherings. The design incorporates local materials and traditional elements.",
      features: ["Community Focused", "Local Materials", "Inclusive Design", "Multi-Purpose Spaces"],
      imageAlt: "Community center with modern architecture and cultural elements",
      imagePlaceholder: "🏛️"
    },
    {
      id: 4,
      title: "Sustainable Housing Complex",
      category: "Residential",
      location: "San Francisco, CA",
      year: "2022",
      description: "An innovative affordable housing project that prioritizes environmental sustainability without compromising on design quality. Features solar panels, rainwater harvesting, and community gardens.",
      features: ["Affordable Housing", "Solar Energy", "Community Gardens", "Water Conservation"],
      imageAlt: "Sustainable housing complex with solar panels and green spaces",
      imagePlaceholder: "🏘️"
    },
    {
      id: 5,
      title: "Art Gallery & Studio",
      category: "Cultural",
      location: "Santa Fe, NM",
      year: "2021",
      description: "A contemporary art space that blends gallery exhibition areas with artist studios. The design emphasizes natural lighting and flexible spaces that can adapt to various art installations.",
      features: ["Natural Lighting", "Flexible Spaces", "Artist Studios", "Exhibition Areas"],
      imageAlt: "Modern art gallery with clean white walls and artistic lighting",
      imagePlaceholder: "🎨"
    },
    {
      id: 6,
      title: "Eco-Friendly Restaurant",
      category: "Commercial",
      location: "Austin, TX",
      year: "2021",
      description: "A farm-to-table restaurant design that incorporates living walls, reclaimed materials, and an open kitchen concept. The space connects diners with nature and the food preparation process.",
      features: ["Living Walls", "Reclaimed Materials", "Open Kitchen", "Biophilic Design"],
      imageAlt: "Restaurant interior with living walls and natural materials",
      imagePlaceholder: "🌿"
    }
  ];

  const categories = ["All", "Residential", "Commercial", "Public", "Cultural"];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6">
          My Projects
        </h1>
        <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
          A showcase of architectural works spanning residential, commercial, and public projects
        </p>
      </section>

      {/* Filter Categories */}
      <section className="mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-white border-2 border-accent-200 text-secondary-600 font-medium rounded-lg hover:border-primary-300 hover:text-primary-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-accent-200 overflow-hidden transform hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="relative h-64 bg-gradient-to-br from-accent-200 to-accent-300 flex items-center justify-center overflow-hidden">
              {/* Placeholder for project image */}
              <div className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-300">
                {project.imagePlaceholder}
              </div>
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary-700 text-white text-sm font-medium rounded-full shadow-md">
                  {project.category}
                </span>
              </div>
              {/* Year Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-white text-primary-700 text-sm font-medium rounded-full shadow-md">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary-800 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-secondary-500 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </p>
              </div>

              <p className="text-secondary-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent-100 text-secondary-700 text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                View Details
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12 text-center border border-accent-200">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-6">
          Have a Project in Mind?
        </h2>
        <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
          I&apos;m always excited to take on new challenges and bring innovative architectural solutions to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Project
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="/about"
            className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-200"
          >
            Learn More About Me
          </a>
        </div>
      </section>
    </div>
  );
}
