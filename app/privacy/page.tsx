import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how MK Digital Labs collects, uses and protects information submitted through its website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <nav className="privacy-nav">
        <Link href="/" className="privacy-brand">
          <span>MK</span>
          <strong>MK DIGITAL LABS</strong>
        </Link>
        <Link href="/">← Back to Home</Link>
      </nav>

      <header className="privacy-hero">
        <small>LEGAL / PRIVACY</small>
        <h1>Privacy Policy</h1>
        <p>Last updated: 9 August 2026</p>
      </header>

      <article className="privacy-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            MK Digital Labs respects your privacy. This policy explains how we
            collect, use and protect information when you visit our website,
            submit a project enquiry or contact us through WhatsApp or email.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We may collect information you voluntarily provide, including:</p>
          <ul>
            <li>Name, business name and contact details</li>
            <li>Email address and phone or WhatsApp number</li>
            <li>Service interests, project goals, timeline and budget range</li>
            <li>Messages and other details included in your enquiry</li>
          </ul>
          <p>
            Our hosting provider may also process basic technical information,
            such as browser type, device information, IP address and server
            logs, for security and website operation.
          </p>
        </section>

        <section>
          <h2>3. How We Use Information</h2>
          <p>Information may be used to:</p>
          <ul>
            <li>Review and respond to project enquiries</li>
            <li>Recommend relevant marketing, website or automation services</li>
            <li>Prepare proposals and arrange strategy discussions</li>
            <li>Improve website performance, security and user experience</li>
            <li>Meet applicable legal and administrative requirements</li>
          </ul>
        </section>

        <section>
          <h2>4. Form and Communication Services</h2>
          <p>
            Website enquiries may be processed through FormSubmit and delivered
            to our business email. If you continue a conversation on WhatsApp,
            your information is also handled under WhatsApp&apos;s privacy
            practices. These providers process information according to their
            own terms and policies.
          </p>
        </section>

        <section>
          <h2>5. Sharing of Information</h2>
          <p>
            We do not sell or rent personal information. Information may be
            shared only with service providers required to operate the website,
            deliver communications or complete an agreed project, or when
            required by law.
          </p>
        </section>

        <section>
          <h2>6. Data Retention and Security</h2>
          <p>
            We retain enquiry information only for as long as reasonably needed
            for communication, business records and legal obligations. We use
            reasonable safeguards, but no internet transmission or storage
            system can be guaranteed completely secure.
          </p>
        </section>

        <section>
          <h2>7. Your Choices</h2>
          <p>
            You may request access, correction or deletion of personal
            information you have submitted, subject to applicable legal and
            business-record requirements.
          </p>
        </section>

        <section>
          <h2>8. International Enquiries</h2>
          <p>
            MK Digital Labs is based in Pakistan and serves clients worldwide.
            Information may therefore be processed in Pakistan or through
            service providers operating in other countries.
          </p>
        </section>

        <section>
          <h2>9. Policy Updates</h2>
          <p>
            We may update this policy when our website, services or legal
            requirements change. The latest version will be published on this
            page with an updated date.
          </p>
        </section>

        <section>
          <h2>10. Contact</h2>
          <p>
            For privacy questions or requests, email{" "}
            <a href="mailto:muzammilswatti7@gmail.com">
              muzammilswatti7@gmail.com
            </a>
            .
          </p>
        </section>
      </article>

      <footer className="privacy-footer">
        <span>© 2026 MK Digital Labs</span>
        <Link href="/quote">Request a project quote →</Link>
      </footer>

      <style>{`
        .privacy-page {
          min-height: 100vh;
          padding: 18px 22px 50px;
          color: #f4efe5;
          background:
            radial-gradient(circle at 82% 8%, rgba(115,101,78,.16), transparent 28%),
            #191713;
          font-family: Inter, Arial, sans-serif;
        }

        .privacy-nav {
          width: min(1180px, 100%);
          min-height: 66px;
          margin: auto;
          padding: 9px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid rgba(255,255,255,.11);
          border-radius: 19px;
          background: rgba(36,32,26,.92);
        }

        .privacy-nav a {
          color: #d8cfc2;
          text-decoration: none;
          font-size: 12px;
        }

        .privacy-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .privacy-brand span {width:60px;height:60px;display:grid;place-items:center;color:#21180d;border:1px solid rgba(226,193,127,.72);border-radius:17px;background:linear-gradient(145deg,#efd598,#c9954b);box-shadow:0 12px 34px rgba(143,96,35,.25);font-family:Arial,sans-serif;font-size:20px;font-weight:900;font-style:normal;}

        .privacy-brand strong {
          color: white;
          font-size: 13px;
          letter-spacing: .06em;
        }

        .privacy-hero,
        .privacy-content,
        .privacy-footer {
          width: min(820px, 100%);
          margin-inline: auto;
        }

        .privacy-hero {
          padding: 85px 0 45px;
          border-bottom: 1px solid rgba(255,255,255,.1);
        }

        .privacy-hero small {
          color: #c99d58;
          font-size: 9px;
          letter-spacing: .18em;
        }

        .privacy-hero h1 {
          margin: 13px 0;
          font-size: clamp(48px, 8vw, 84px);
          letter-spacing: -.06em;
        }

        .privacy-hero p {
          color: #aaa093;
          font-size: 11px;
        }

        .privacy-content {
          padding: 34px 0;
        }

        .privacy-content section {
          padding: 24px 0;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }

        .privacy-content h2 {
          margin: 0 0 13px;
          color: #d4ad68;
          font-size: 18px;
        }

        .privacy-content p,
        .privacy-content li {
          color: #c7beb1;
          font-size: 14px;
          line-height: 1.8;
        }

        .privacy-content ul {
          padding-left: 20px;
        }

        .privacy-content a,
        .privacy-footer a {
          color: #c99d58;
        }

        .privacy-footer {
          padding-top: 25px;
          display: flex;
          justify-content: space-between;
          color: #9f9689;
          font-size: 11px;
        }

        @media (max-width: 600px) {
          .privacy-page { padding: 10px 12px 40px; }
          .privacy-brand strong { display: none; }
          .privacy-hero { padding-top: 55px; }
          .privacy-footer { gap: 15px; flex-direction: column; }
        }
      `}</style>
    </main>
  );
}
