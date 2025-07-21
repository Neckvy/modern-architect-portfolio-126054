'use client';
import React from "react";

// PUBLIC_INTERFACE
export default function AboutPage() {
  /**
   * About Me page: Describes the architect's profile and experience.
   */
  return (
    <main aria-labelledby="about-heading" className="section about">
      <h1 id="about-heading">About Me</h1>
      <p>
        I am a passionate freelance architect with a love for modern, sustainable design.
        My experience spans residential, commercial, and public projects, blending creativity
        with practical solutions. Let&#39;s create inspiring spaces together.
      </p>
    </main>
  );
}
