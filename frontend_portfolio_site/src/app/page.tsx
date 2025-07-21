"use client";
import { useRef } from "react";
import Image from "next/image";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const COLOR = {
  primary: "#22223b",
  secondary: "#4a4e69",
  accent: "#f2e9e4",
};

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// PUBLIC_INTERFACE
export default function HomePage() {
  // For accessibility, refocus main content on navigation
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <div className="font-sans bg-[var(--background)] text-[var(--foreground)]">
      {/* Sticky Navigation */}
      <nav
        className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-[#e0e0e0] dark:bg-[#171725cc] dark:border-[#222] shadow-sm transition"
        aria-label="Main Navigation"
      >
        <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3 sm:px-8">
          <span className="font-bold text-lg tracking-wide" style={{ color: COLOR.primary }}>
            ARCHITECT PORTFOLIO
          </span>
          <ul className="flex gap-1 sm:gap-4 text-sm font-medium">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => {
                    scrollToSection(s.id);
                    mainRef.current?.focus();
                  }}
                  className="px-3 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] hover:bg-indigo-50 dark:hover:bg-[#22223b33] transition"
                  tabIndex={0}
                  aria-label={s.label}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* Main Content */}
      <main ref={mainRef} tabIndex={-1} className="outline-none">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center text-center pt-20 pb-16"
          aria-labelledby="home-heading"
        >
          <h1
            id="home-heading"
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: COLOR.primary }}
          >
            Hi, I&#39;m Taylor Smith
          </h1>
          <p className="text-lg sm:text-xl mb-6" style={{ color: COLOR.secondary }}>
            Award-winning Freelance Architect from New York City
          </p>
          <p className="max-w-xl mb-7 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            I create sustainable, human-centric spaces blending form and function. Explore my work and philosophy below.
          </p>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="inline-block px-6 py-3 font-medium rounded bg-[#4a4e69] text-white shadow-md hover:bg-[#22223b] focus-visible:ring-2 focus-visible:ring-accent transition"
            style={{ background: COLOR.secondary }}
          >
            Contact Me
          </a>
        </section>
        {/* About Me Section */}
        <section
          id="about"
          className="max-w-4xl mx-auto px-4 py-24 sm:py-32"
          aria-labelledby="about-heading"
        >
          <h2
            id="about-heading"
            className="text-3xl font-bold mb-4"
            style={{ color: COLOR.primary }}
          >
            About Me
          </h2>
          <p className="text-lg sm:text-xl mb-3" style={{ color: COLOR.secondary }}>
            Passion, Precision, Perspective
          </p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
            With over a decade of experience, I specialize in residential and urban architecture that responds to both client needs and community context. My focus is on innovative, sustainable solutions. I&#39;ve led and contributed to award-winning projects in the US and abroad.
          </p>
          <ul className="mt-6 space-y-2 text-sm sm:text-base text-gray-500">
            <li>• Licenced Architect (NY, CA)</li>
            <li>• AIA, LEED AP</li>
            <li>• Featured in ArchDaily, Dwell, Dezeen</li>
            <li>• NYC, available for global projects</li>
          </ul>
        </section>
        {/* Projects Section */}
        <section
          id="projects"
          className="py-24 px-4 bg-[var(--accent-bg)]"
          aria-labelledby="projects-heading"
          style={{ background: COLOR.accent }}
        >
          <h2
            id="projects-heading"
            className="text-3xl font-bold mb-10 text-center"
            style={{ color: COLOR.primary }}
          >
            Selected Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {/* Project 1 */}
            <ProjectCard
              title="Riverside Residence"
              image="/project1.jpeg"
              alt="Riverside Residence modern home"
              desc="A modern, passive-home residence along the Hudson River. Features natural materials and large windows for optimal daylight."
              tags={["Residential", "Sustainable"]}
              color={COLOR.secondary}
            />
            {/* Project 2 */}
            <ProjectCard
              title="Urban Oasis Pavilion"
              image="/project2.jpeg"
              alt="Urban Oasis Pavilion Public Park"
              desc="Public park pavilion focused on biophilic design with flexible indoor-outdoor space. Awarded NYC Green Project of the Year."
              tags={["Public", "Award-winning"]}
              color={COLOR.secondary}
            />
            {/* Project 3 */}
            <ProjectCard
              title="Green Tower NY"
              image="/project3.jpeg"
              alt="Green Tower NY Highrise"
              desc="High-rise mixed-use development integrating green roofs, community spaces, and smart energy systems."
              tags={["Highrise", "Community"]}
              color={COLOR.secondary}
            />
          </div>
        </section>
        {/* Skills Section */}
        <section
          id="skills"
          className="max-w-4xl mx-auto px-4 py-24 sm:py-32"
          aria-labelledby="skills-heading"
        >
          <h2
            id="skills-heading"
            className="text-3xl font-bold mb-8"
            style={{ color: COLOR.primary }}
          >
            Skills
          </h2>
          <ul className="flex flex-wrap gap-3 text-sm" aria-label="Skills List">
            {[
              "Concept Design",
              "Project Management",
              "BIM (Revit, ArchiCAD)",
              "Rhino/Grasshopper",
              "Sustainability",
              "LEED Documentation",
              "Rendering/Visualization",
              "Construction Admin",
              "Urban Planning",
              "Client Relations"
            ].map(skill => (
              <li
                key={skill}
                className="px-4 py-1 rounded-full bg-[#ededed] text-[#22223b] border border-[#d2d2d2] shadow-sm dark:bg-[#232333] dark:text-[#f2e9e4] dark:border-[#34345c] font-medium transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 px-4 bg-[var(--accent-bg)]"
          aria-labelledby="contact-heading"
          style={{ background: COLOR.accent }}
        >
          <h2
            id="contact-heading"
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: COLOR.primary }}
          >
            Contact
          </h2>
          <ContactForm />
        </section>
        {/* Footer */}
        <footer className="text-center text-xs py-8 border-t border-[#d6d6d6] text-gray-500 bg-white/70 dark:bg-[#191929cc]">
          <span>
            © {new Date().getFullYear()} Taylor Smith. Architect Portfolio. Built with Next.js.
          </span>
        </footer>
      </main>
    </div>
  );
}

// PUBLIC_INTERFACE
function ProjectCard({
  title,
  image,
  alt,
  desc,
  tags,
  color,
}: {
  title: string;
  image: string;
  alt: string;
  desc: string;
  tags: string[];
  color: string;
}) {
  return (
    <div
      tabIndex={0}
      className="group rounded-lg bg-white dark:bg-[#23233a] shadow-md border border-[#e8e8ef] dark:border-[#33334c] overflow-hidden transition hover:shadow-xl focus-within:ring-2 focus-within:ring-[var(--foreground)]"
    >
      <div className="aspect-[4/3] bg-gray-100 dark:bg-[#17173a] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          className="block object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-transform duration-300"
          width={400}
          height={300}
          loading="lazy"
          sizes="(max-width: 900px) 100vw, 400px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4">
        <h3
          className="font-bold text-lg mb-1 truncate"
          style={{ color: color }}
        >
          {title}
        </h3>
        <div className="mb-2 text-xs text-gray-400 flex flex-wrap gap-1">
          {tags.map(t => (
            <span
              className="px-2 py-[1.5px] rounded bg-[#4a4e6920] text-[#4a4e69] dark:bg-[#f2e9e420] dark:text-[#f2e9e4] font-medium"
              key={t}
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">{desc}</p>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function ContactForm() {
  // Dummy submit for demo - in production, setup backend/integration with .env config.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Thank you for reaching out!\n(This is a demo. Wire up the form backend for production.)");
  }

  return (
    <form
      className="max-w-lg mx-auto grid gap-4 bg-white/80 rounded p-6 shadow-md border border-[#dedede] dark:bg-[#23233a] dark:border-[#383860]"
      aria-label="Contact Form"
      autoComplete="on"
      onSubmit={handleSubmit}
      tabIndex={0}
    >
      {/* Name */}
      <div className="flex flex-col">
        <label htmlFor="contact-name" className="mb-1 font-medium text-sm" style={{ color: "#22223b" }}>
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          className="px-3 py-2 rounded border border-[#dcdcdc] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4a4e69] transition text-[var(--foreground)] bg-[var(--background)]"
          placeholder="Your Name"
          autoComplete="name"
        />
      </div>
      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="contact-email" className="mb-1 font-medium text-sm" style={{ color: "#22223b" }}>
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          className="px-3 py-2 rounded border border-[#dcdcdc] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4a4e69] transition text-[var(--foreground)] bg-[var(--background)]"
          placeholder="Your Email"
          autoComplete="email"
        />
      </div>
      {/* Subject */}
      <div className="flex flex-col">
        <label htmlFor="contact-subject" className="mb-1 font-medium text-sm" style={{ color: "#22223b" }}>
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          required
          className="px-3 py-2 rounded border border-[#dcdcdc] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4a4e69] transition text-[var(--foreground)] bg-[var(--background)]"
          placeholder="Subject"
          autoComplete="on"
        />
      </div>
      {/* Message */}
      <div className="flex flex-col">
        <label htmlFor="contact-message" className="mb-1 font-medium text-sm" style={{ color: "#22223b" }}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className="px-3 py-2 rounded border border-[#dcdcdc] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4a4e69] transition resize-vertical text-[var(--foreground)] bg-[var(--background)]"
          placeholder="Describe your project or message"
        />
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="mt-2 w-full px-5 py-3 rounded bg-[#22223b] text-white font-semibold transition hover:bg-[#4a4e69] focus-visible:ring-2 focus-visible:ring-[#4a4e69]"
      >
        Send Message
      </button>
      <p className="text-xs text-gray-400 mt-4 text-center">
        {/* To send messages, configure backend/email integration. Store API endpoint or keys in .env for production. */}
      </p>
    </form>
  );
}
