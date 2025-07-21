'use client';
import React from "react";

// PUBLIC_INTERFACE
export default function ContactPage() {
  /**
   * Contact page: Contains accessible contact form.
   */
  return (
    <main aria-labelledby="contact-heading" className="section contact">
      <h1 id="contact-heading">Contact</h1>
      <form className="contact-form" autoComplete="off">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required aria-required="true" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required aria-required="true" />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" required aria-required="true" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required aria-required="true" />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}
