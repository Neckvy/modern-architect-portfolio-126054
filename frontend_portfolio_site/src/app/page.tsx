'use client';
import Link from 'next/link';

// PUBLIC_INTERFACE
export default function Home() {
  /**
   * Home page: Introduction and quick links to sections.
   */
  return (
    <main className="section home" aria-labelledby="home-heading">
      <h1 id="home-heading" style={{ color: "#22223b", fontWeight: 800, fontSize: '2.2rem' }}>Welcome to my portfolio</h1>
      <p style={{ color: "#4a4e69", fontSize: '1.1rem' }}>
        This is a modern, minimal portfolio for a freelance architect. Explore my work and background through the sections below.
      </p>
      <nav aria-label="Quick links" style={{ marginTop: "2rem" }}>
        <ul style={{ display: "flex", gap: "1.5rem", padding: 0, listStyle: "none" }}>
          <li>
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
