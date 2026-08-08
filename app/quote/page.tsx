"use client";

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
            <small>GROWTH SYSTEMS STUDIO</small>
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
              I agree to be contacted regarding this project enquiry.
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

      <style jsx>{`
        .quote-page {
          min-height: 100vh;
          padding: 18px 22px 70px;
                    overflow: hidden;
          color: #f7f8fa;
          background:
            radial-gradient(circle at 12% 85%, rgba(54,228,255,.1), transparent 30%),
            radial-gradient(circle at 86% 12%, rgba(155,108,255,.13), transparent 32%),
            #0b0e14;
          font-family: Inter, Arial, sans-serif;
        }

        .quote-nav {
          width: min(1240px, 100%);
          min-height: 68px;
          margin: auto;
          padding: 9px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid rgba(255,255,255,.11);
          border-radius: 20px;
          background: rgba(17,21,29,.87);
          backdrop-filter: blur(16px);
        }

        .quote-brand {
          display: flex;
          align-items: center;
          gap: 11px;
          color: white;
          text-decoration: none;
        }

        .quote-brand > span {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          color: #101508;
          border-radius: 14px;
          background: linear-gradient(135deg, #d1ff56, #aef229);
          font-weight: 900;
        }

        .quote-brand div { display: grid; gap: 5px; }
        .quote-brand strong { font-size: 14px; letter-spacing: .06em; }
        .quote-brand small { color: #818a98; font-size: 8px; letter-spacing: .2em; }

        .back-link {
          color: #b5bdc9;
          text-decoration: none;
          font-size: 12px;
        }

        .back-link:hover { color: #c6ff3d; }

        .quote-layout {
          width: min(1180px, 100%);
          margin: 80px auto 0;
          display: grid;
          grid-template-columns: .88fr 1.12fr;
          gap: 70px;
          align-items: start;
        }

        .eyebrow {
          width: fit-content;
          padding: 9px 13px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #c4cad3;
          border: 1px solid rgba(255,255,255,.11);
          border-radius: 99px;
          font-size: 9px;
          letter-spacing: .16em;
        }

        .eyebrow i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #c6ff3d;
          box-shadow: 0 0 12px #c6ff3d;
        }

        .quote-copy h1 {
          margin: 24px 0;
          font-size: clamp(46px, 6vw, 76px);
          line-height: .96;
          letter-spacing: -.06em;
        }

        .quote-copy h1 span {
          color: transparent;
          background: linear-gradient(90deg, #c6ff3d, #36e4ff, #9b6cff);
          background-clip: text;
          -webkit-background-clip: text;
        }

        .quote-copy > p {
          max-width: 530px;
          color: #aeb6c2;
          font-size: 16px;
          line-height: 1.75;
        }

        .process-list {
          margin-top: 34px;
          display: grid;
          gap: 10px;
        }

        .process-list article {
          padding: 13px;
          display: flex;
          gap: 12px;
          align-items: center;
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 13px;
          background: rgba(255,255,255,.025);
        }

        .process-list b {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          color: #c6ff3d;
          border-radius: 9px;
          background: rgba(198,255,61,.07);
          font-size: 10px;
        }

        .process-list div { display: grid; gap: 4px; }
        .process-list strong { font-size: 12px; }
        .process-list span { color: #818b99; font-size: 10px; }

        .direct-contact {
          margin-top: 25px;
          display: grid;
          gap: 7px;
          color: #7e8794;
          font-size: 10px;
        }

        .direct-contact a {
          width: fit-content;
          color: #36e4ff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
        }

        .quote-form {
          padding: 25px;
          border: 1px solid rgba(255,255,255,.11);
          border-radius: 22px;
          background: rgba(18,23,32,.91);
          box-shadow: 0 30px 90px rgba(0,0,0,.3);
        }

        .form-header {
          margin-bottom: 23px;
          display: flex;
          justify-content: space-between;
          align-items: start;
        }

        .form-header small { color: #36e4ff; font-size: 8px; letter-spacing: .18em; }
        .form-header h2 { margin: 7px 0 0; font-size: 25px; }

        .form-header > span {
          padding: 7px 9px;
          color: #c6ff3d;
          border: 1px solid rgba(198,255,61,.22);
          border-radius: 8px;
          font-size: 8px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        label {
          display: grid;
          gap: 7px;
          color: #b7bec9;
          font-size: 10px;
        }

        input, select, textarea {
          width: 100%;
          padding: 13px;
          color: #f7f8fa;
          border: 1px solid rgba(255,255,255,.11);
          border-radius: 10px;
          outline: none;
          background: #0c1017;
          font: inherit;
          font-size: 12px;
        }

        input:focus, select:focus, textarea:focus {
          border-color: #36e4ff;
          box-shadow: 0 0 0 3px rgba(54,228,255,.07);
        }

        option { background: #10151e; }
        .full-field { margin-top: 14px; }
        textarea { resize: vertical; line-height: 1.55; }

        .consent {
          margin: 16px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .consent input {
          width: 16px;
          height: 16px;
          accent-color: #c6ff3d;
        }

        .consent span { color: #848e9c; font-size: 9px; }

        .submit-button {
          width: 100%;
          min-height: 51px;
          padding: 7px 8px 7px 17px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #101508;
          border: 0;
          border-radius: 12px;
          background: linear-gradient(135deg, #d0ff53, #aef229);
          font-size: 12px;
          font-weight: 900;
          cursor: pointer;
        }

        .submit-button:disabled { opacity: .7; cursor: wait; }

        .submit-button i {
          width: 35px;
          height: 35px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          background: rgba(0,0,0,.1);
          font-style: normal;
        }

        .form-status {
          min-height: 17px;
          margin-top: 10px;
          color: #7e8896;
          text-align: center;
          font-size: 9px;
        }

        .form-status.success { color: #c6ff3d; }
        .form-status.error { color: #ff7b7b; }

        @media (max-width: 850px) {
          .quote-layout {
            margin-top: 55px;
            grid-template-columns: 1fr;
            gap: 45px;
          }
        }

        @media (max-width: 560px) {
          .quote-page { padding: 10px 10px 55px; }
          .quote-brand small { display: none; }
          .quote-brand strong { font-size: 11px; }
          .back-link { font-size: 10px; }
          .quote-layout { margin-top: 45px; }
          .quote-copy h1 { font-size: 48px; }
          .quote-form { padding: 17px; }
          .form-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}