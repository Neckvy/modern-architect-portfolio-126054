'use client';
import React from "react";

// PUBLIC_INTERFACE
export default function SkillsPage() {
  /**
   * Skills page: Lists architect's key skills.
   */
  return (
    <main aria-labelledby="skills-heading" className="section skills">
      <h1 id="skills-heading">Skills</h1>
      <ul>
        <li>Architectural Design</li>
        <li>3D Modeling & Visualization</li>
        <li>Sustainable Architecture</li>
        <li>Project Management</li>
        <li>Client Communication</li>
        <li>AutoCAD, Revit, SketchUp</li>
      </ul>
    </main>
  );
}
