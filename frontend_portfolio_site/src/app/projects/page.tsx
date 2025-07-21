'use client';
import React from "react";
import Image from "next/image";

// PUBLIC_INTERFACE
export default function ProjectsPage() {
  /**
   * Projects page: Displays sample architect projects.
   */
  return (
    <main aria-labelledby="projects-heading" className="section projects">
      <h1 id="projects-heading">Projects</h1>
      <div className="projects-grid" role="region" aria-label="Sample Portfolio Projects">
        <article className="project-card">
          <Image src="/project1.jpg" alt="Modern House project" width={400} height={250} style={{ borderRadius: "6px", width: "100%", height: "auto" }} />
          <h2>Modern House</h2>
          <p>Single-family home focused on light and space, with eco-friendly materials.</p>
        </article>
        <article className="project-card">
          <Image src="/project2.jpg" alt="Urban Office" width={400} height={250} style={{ borderRadius: "6px", width: "100%", height: "auto" }} />
          <h2>Urban Office</h2>
          <p>Open-concept workspace for a tech firm, designed for flexibility and collaboration.</p>
        </article>
        <article className="project-card">
          <Image src="/project3.jpg" alt="Community Center" width={400} height={250} style={{ borderRadius: "6px", width: "100%", height: "auto" }} />
          <h2>Community Center</h2>
          <p>Public building emphasizing inclusivity and sustainability for neighborhood use.</p>
        </article>
      </div>
    </main>
  );
}
