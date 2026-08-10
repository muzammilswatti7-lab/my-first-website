"use client";
import "./quote.css";
import Link from "next/link";
import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function QuotePage() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setFormState("sending");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/muzammilswatti7@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        }
      );

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      setFormState("success");
    } catch {
      setFormState("error");
    }
  }

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
            <article>
              <b>01</b>
              <div>
                <strong>Share your goals</strong>
                <span>Tell us what you want to improve.</span>
              </div>
            </article>

            <article>
              <b>02</b>
              <div>
                <strong>Get a strategic review</strong>
                <span>We identify the right services and priorities.</span>
              </div>
            </article>

            <article>
              <b>03</b>
              <div>
                <strong>Receive your next steps</strong>
                <span>We contact you through email or WhatsApp.</span>
              </div>
            </article>
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

        <form className="quote-form" onSubmit={submitQuote}>
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
            <label>
              Your name
              <input
                required
                name="name"
                type="text"
                placeholder="Full name"
              />
            </label>

            <label>
              Business name
              <input
                required
                name="business"
                type="text"
                placeholder="Company or brand"
              />
            </label>

            <label>
              Email address
              <input
                required
                name="email"
                type="email"
                placeholder="name@company.com"
              />
            </label>

            <label>
              Phone / WhatsApp
              <input
                required
                name="phone"
                type="tel"
                placeholder="+92..."
              />
            </label>

            <label>
              Service required
              <select required name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>Digital Marketing</option>
                <option>Website Development</option>
                <option>E-commerce Growth</option>
                <option>AI & Automation</option>
                <option>Tracking & Analytics</option>
                <option>Brand & Creative</option>
                <option>Complete Growth System</option>
              </select>
            </label>

            <label>
              Project timeline
              <select required name="timeline" defaultValue="">
                <option value="" disabled>
                  Select timeline
                </option>
                <option>As soon as possible</option>
                <option>Within 2–4 weeks</option>
                <option>Within 1–2 months</option>
                <option>Still planning</option>
              </select>
            </label>

            <label>
              Investment range
              <select required name="budget" defaultValue="">
                <option value="" disabled>
                  Select a range
                </option>
                <option>Need a recommendation</option>
                <option>Starter project</option>
                <option>Growth project</option>
                <option>Complete custom system</option>
              </select>
            </label>

            <label>
              Main business goal
              <select required name="goal" defaultValue="">
                <option value="" disabled>
                  Select your goal
                </option>
                <option>Generate qualified leads</option>
                <option>Increase online sales</option>
                <option>Build a stronger digital presence</option>
                <option>Improve tracking and reporting</option>
                <option>Automate sales and follow-ups</option>
              </select>
            </label>
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

