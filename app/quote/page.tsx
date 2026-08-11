"use client";
import "./quote.css";
import Link from "next/link";
import { useState } from "react";
import { FormState, submitForm } from "../lib/forms";

const steps = [
  ["01", "Share your goals", "Tell us what you want to improve."],
  ["02", "Get a strategic review", "We identify the right services and priorities."],
  ["03", "Receive your next steps", "We contact you through email or WhatsApp."],
];

const textFields = [
  ["Your name", "name", "text", "Full name"],
  ["Business name", "business", "text", "Company or brand"],
  ["Email address", "email", "email", "name@company.com"],
  ["Phone / WhatsApp", "phone", "tel", "+92..."],
];

const selectFields = [
  ["Service required", "service", "Select a service", ["Digital Marketing", "Website Development", "E-commerce Growth", "AI & Automation", "Tracking & Analytics", "Brand & Creative", "Complete Growth System"]],
  ["Project timeline", "timeline", "Select timeline", ["As soon as possible", "Within 2–4 weeks", "Within 1–2 months", "Still planning"]],
  ["Investment range", "budget", "Select a range", ["Need a recommendation", "Starter project", "Growth project", "Complete custom system"]],
  ["Main business goal", "goal", "Select your goal", ["Generate qualified leads", "Increase online sales", "Build a stronger digital presence", "Improve tracking and reporting", "Automate sales and follow-ups"]],
] as const;

export default function QuotePage() {
  const [formState, setFormState] = useState<FormState>("idle");

  return (
    <main className="quote-page">
      <nav className="quote-nav">
        <Link href="/" className="quote-brand">
          <span>MK</span>
          <div>
            <strong>MK DIGITAL LABS</strong>
            <small>YOUR GROWTH, OUR MISSION</small>
          </div>
        </Link>

        <Link href="/" className="back-link">
          ← Back to Home
        </Link>
      </nav>

      <section className="quote-layout">
        <div className="quote-copy">
          <div className="eyebrow">
            <i /> PROJECT INTAKE
          </div>

          <h1>
            Let&apos;s build your{" "}
            <span>next growth system.</span>
          </h1>

          <p>
            Tell us where your business is today and where you want it to go.
            We&apos;ll review your requirements and recommend the clearest next
            step.
          </p>

          <div className="process-list">
            {steps.map(([number, title, copy]) => (
              <article key={number}>
                <b>{number}</b>
                <div><strong>{title}</strong><span>{copy}</span></div>
              </article>
            ))}
          </div>

          <div className="direct-contact">
            Prefer a direct conversation?
            <a
              href="https://wa.me/923153063373?text=Hello%20MK%20Digital%20Labs%2C%20I%20want%20to%20request%20a%20project%20quote."
              target="_blank"
              rel="noreferrer"
            >
              Discuss on WhatsApp →
            </a>
          </div>
        </div>

        <form className="quote-form" onSubmit={(event) => submitForm(event, setFormState)}>
          <input
            type="hidden"
            name="_subject"
            value="New MK Digital Labs Quote Request"
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />

          <header className="form-header">
            <div>
              <small>PROJECT BRIEF</small>
              <h2>Tell us about your business.</h2>
            </div>
            <span>OPEN</span>
          </header>

          <div className="form-grid">
            {textFields.map(([label, name, type, placeholder]) => (
              <label key={name}>{label}<input required name={name} type={type} placeholder={placeholder} /></label>
            ))}
            {selectFields.map(([label, name, placeholder, options]) => (
              <label key={name}>{label}
                <select required name={name} defaultValue="">
                  <option value="" disabled>{placeholder}</option>
                  {options.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
            ))}
          </div>

          <label className="full-field">
            Project details
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell us about your business, current challenges and what success would look like..."
            />
          </label>

          <label className="consent">
            <input required type="checkbox" name="consent" value="Accepted" />
            <span>
                <span>
  I agree to be contacted regarding this project enquiry and accept the{" "}
  <Link href="/privacy" className="privacy-link">
    Privacy Policy
  </Link>
  .
</span>
            </span>
          </label>

          <button
            className="submit-button"
            type="submit"
            disabled={formState === "sending"}
          >
            <span>
              {formState === "sending"
                ? "Sending your brief..."
                : formState === "success"
                  ? "Project brief received"
                  : "Request my project review"}
            </span>
            <i>{formState === "success" ? "✓" : "→"}</i>
          </button>

          <div className={`form-status ${formState}`} aria-live="polite">
            {formState === "idle" &&
              "Your information is used only to review your enquiry."}
            {formState === "success" &&
              "Thank you! Our team will contact you by email or WhatsApp."}
            {formState === "error" &&
              "Something went wrong. Please try again or contact us on WhatsApp."}
          </div>
        </form>
      </section>

      
    </main>
  );
}
