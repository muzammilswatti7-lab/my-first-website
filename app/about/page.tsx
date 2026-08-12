import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet MK Digital Labs, a digital growth agency connecting strategy, marketing, premium websites, analytics and AI automation.",
  alternates: {
    canonical: "/about",
  },
};

const capabilities = [
  "Growth strategy",
  "Performance marketing",
  "Premium web development",
  "E-commerce and CRO",
  "Analytics and attribution",
  "AI and business automation",
];

const principles = [
  {
    number: "01",
    title: "Strategy before activity",
    copy: "Every engagement begins with the business objective, customer journey and clearest path to measurable growth.",
  },
  {
    number: "02",
    title: "One connected system",
    copy: "Marketing, websites, data and automation work better together. We connect them instead of treating them as separate tasks.",
  },
  {
    number: "03",
    title: "Clarity over complexity",
    copy: "We turn complicated digital challenges into focused priorities, practical execution and reporting that makes sense.",
  },
  {
    number: "04",
    title: "Built for the long term",
    copy: "Our work is designed to strengthen your digital foundation today while making future growth easier to manage and scale.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <nav className="about-nav">
        <Link href="/" className="about-brand" aria-label="MK Digital Labs home">
          <span>MK</span>
          <strong>
            MK DIGITAL LABS
            <small>YOUR GROWTH, OUR MISSION</small>
          </strong>
        </Link>

        <Link href="/" className="back-link">
          ← Back to Home
        </Link>
      </nav>

      <section className="about-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            ABOUT MK DIGITAL LABS
          </p>

          <h1>
            Growth is not one service.
            <em> It is a connected system.</em>
          </h1>

          <p className="hero-intro">
            MK Digital Labs is a digital growth agency helping ambitious
            businesses build stronger brands, attract the right audience,
            convert attention into revenue and scale with confidence.
          </p>

          <div className="hero-actions">
            <Link href="/quote" className="primary-button">
              Start a project <span>↗</span>
            </Link>

            <Link href="/portfolio" className="secondary-button">
              Explore our work
            </Link>
          </div>
        </div>

        <aside className="mission-card">
          <p>OUR MISSION</p>
          <h2>
            To turn disconnected digital efforts into one clear, measurable
            growth engine.
          </h2>
          <div className="mission-status">
            <span />
            STRATEGY / CREATIVE / TECHNOLOGY
          </div>
        </aside>
      </section>

      <section className="about-story">
        <div className="section-label">WHO WE ARE</div>

        <div className="story-copy">
          <h2>
            A modern digital partner built around your complete customer
            journey.
          </h2>

          <div className="story-columns">
            <p>
              Businesses rarely struggle because they lack digital tools. They
              struggle because their website, campaigns, content, tracking and
              follow-up systems are not working together.
            </p>

            <p>
              MK Digital Labs brings these moving parts into one focused
              strategy. We combine commercial thinking, premium creative work
              and practical technology to build digital experiences that look
              credible, perform efficiently and support real business goals.
            </p>
          </div>
        </div>
      </section>

      <section className="capabilities-section">
        <div>
          <p className="section-kicker">WHAT WE CONNECT</p>
          <h2>Everything your digital growth system needs.</h2>
        </div>

        <div className="capability-list">
          {capabilities.map((capability, index) => (
            <div className="capability-item" key={capability}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{capability}</strong>
              <i>↗</i>
            </div>
          ))}
        </div>
      </section>

      <section className="principles-section">
        <div className="principles-heading">
          <p className="section-kicker">HOW WE THINK</p>
          <h2>The principles behind our work.</h2>
          <p>
            Premium execution matters, but the thinking behind it matters even
            more.
          </p>
        </div>

        <div className="principles-grid">
          {principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <p>READY TO BUILD WHAT COMES NEXT?</p>
        <h2>
          Let&apos;s create a digital system designed around your business.
        </h2>
        <Link href="/quote">
          Request a project quote <span>↗</span>
        </Link>
      </section>

      <footer className="about-footer">
        <span>© 2026 MK Digital Labs</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/">Home</Link>
        </div>
      </footer>

      <style>{`
        .about-page {
          min-height: 100vh;
          padding: 18px 22px 40px;
          overflow: hidden;
          color: #f4efe5;
          background:
            radial-gradient(circle at 78% 12%, rgba(164, 126, 66, .18), transparent 30%),
            radial-gradient(circle at 12% 70%, rgba(105, 119, 78, .10), transparent 28%),
            #191713;
          font-family: Arial, sans-serif;
        }

        .about-nav {
          width: min(1180px, 100%);
          min-height: 78px;
          margin: auto;
          padding: 9px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid rgba(224, 211, 190, .14);
          border-radius: 20px;
          background: rgba(37, 33, 27, .92);
          box-shadow: 0 18px 50px rgba(0, 0, 0, .16);
        }

        .about-nav a {
          text-decoration: none;
        }

        .about-brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .about-brand > span {
          width: 60px;
          height: 60px;
          display: grid;
          place-items: center;
          color: #21180d;
          border: 1px solid rgba(239, 213, 152, .8);
          border-radius: 17px;
          background: linear-gradient(145deg, #efd598, #c9954b);
          box-shadow: 0 12px 34px rgba(143, 96, 35, .25);
          font-size: 21px;
          font-weight: 900;
        }

        .about-brand strong {
          display: grid;
          gap: 5px;
          color: #f8f3ea;
          font-size: 17px;
          letter-spacing: .02em;
        }

        .about-brand small {
          color: #afa596;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: .15em;
        }

        .back-link {
          padding: 12px 15px;
          color: #d8cfc2;
          border: 1px solid rgba(224, 211, 190, .12);
          border-radius: 12px;
          font-size: 12px;
        }

        .about-hero {
          width: min(1180px, 100%);
          margin: 90px auto 110px;
          display: grid;
          grid-template-columns: 1.25fr .75fr;
          gap: 70px;
          align-items: center;
        }

        .eyebrow,
        .section-kicker {
          color: #c8b99f;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: .15em;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .eyebrow span {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #d4a95f;
          box-shadow: 0 0 18px rgba(212, 169, 95, .65);
        }

        .hero-copy h1 {
          max-width: 760px;
          margin: 25px 0;
          font-size: clamp(48px, 6.5vw, 86px);
          line-height: .98;
          letter-spacing: -.055em;
        }

        .hero-copy h1 em {
          color: #d7b879;
          font-style: normal;
        }

        .hero-intro {
          max-width: 690px;
          color: #bbb1a3;
          font-size: 18px;
          line-height: 1.75;
        }

        .hero-actions {
          margin-top: 34px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .hero-actions a,
        .about-cta > a {
          min-height: 54px;
          padding: 0 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 35px;
          border-radius: 14px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
        }

        .primary-button,
        .about-cta > a {
          color: #21180d;
          background: linear-gradient(135deg, #efd79f, #c99649);
          box-shadow: 0 15px 35px rgba(133, 88, 29, .22);
        }

        .secondary-button {
          color: #e7dfd4;
          border: 1px solid rgba(224, 211, 190, .17);
          background: rgba(255, 255, 255, .025);
        }

        .mission-card {
          padding: 34px;
          border: 1px solid rgba(224, 211, 190, .15);
          border-radius: 26px;
          background:
            linear-gradient(145deg, rgba(82, 77, 53, .38), rgba(36, 32, 27, .88));
          box-shadow: 0 35px 80px rgba(0, 0, 0, .22);
        }

        .mission-card > p {
          color: #ba9d68;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: .16em;
        }

        .mission-card h2 {
          margin: 42px 0 70px;
          font-size: clamp(27px, 3vw, 40px);
          line-height: 1.18;
          letter-spacing: -.035em;
        }

        .mission-status {
          padding-top: 20px;
          display: flex;
          align-items: center;
          gap: 9px;
          color: #999082;
          border-top: 1px solid rgba(224, 211, 190, .12);
          font-family: monospace;
          font-size: 9px;
          letter-spacing: .12em;
        }

        .mission-status span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #9caa63;
        }

        .about-story,
        .capabilities-section,
        .principles-section {
          width: min(1180px, 100%);
          margin: auto;
          padding: 95px 0;
          border-top: 1px solid rgba(224, 211, 190, .12);
        }

        .about-story {
          display: grid;
          grid-template-columns: .35fr 1.65fr;
          gap: 50px;
        }

        .section-label {
          color: #a99c8a;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: .16em;
        }

        .story-copy h2,
        .capabilities-section h2,
        .principles-heading h2,
        .about-cta h2 {
          margin: 0;
          font-size: clamp(34px, 5vw, 62px);
          line-height: 1.08;
          letter-spacing: -.045em;
        }

        .story-columns {
          margin-top: 45px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 35px;
        }

        .story-columns p,
        .principles-heading > p:last-child {
          color: #b8aea0;
          font-size: 16px;
          line-height: 1.75;
        }

        .capabilities-section {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 70px;
        }

        .capabilities-section h2 {
          max-width: 480px;
          margin-top: 18px;
        }

        .capability-item {
          min-height: 70px;
          display: grid;
          grid-template-columns: 45px 1fr auto;
          align-items: center;
          border-bottom: 1px solid rgba(224, 211, 190, .12);
        }

        .capability-item > span {
          color: #a58c60;
          font-family: monospace;
          font-size: 10px;
        }

        .capability-item strong {
          color: #e9e2d7;
          font-size: 18px;
        }

        .capability-item i {
          color: #caa45e;
          font-style: normal;
        }

        .principles-section {
          display: grid;
          grid-template-columns: .7fr 1.3fr;
          gap: 70px;
        }

        .principles-heading h2 {
          margin: 18px 0 25px;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .principles-grid article {
          min-height: 235px;
          padding: 25px;
          border: 1px solid rgba(224, 211, 190, .13);
          border-radius: 20px;
          background: rgba(49, 44, 36, .58);
        }

        .principles-grid article > span {
          color: #c49d58;
          font-family: monospace;
          font-size: 10px;
        }

        .principles-grid h3 {
          margin: 38px 0 12px;
          color: #eee7dc;
          font-size: 20px;
        }

        .principles-grid p {
          margin: 0;
          color: #aaa092;
          font-size: 14px;
          line-height: 1.65;
        }

        .about-cta {
          width: min(1180px, 100%);
          margin: 20px auto 70px;
          padding: 75px;
          text-align: center;
          border: 1px solid rgba(224, 211, 190, .15);
          border-radius: 28px;
          background:
            radial-gradient(circle at 50% 120%, rgba(177, 134, 64, .28), transparent 42%),
            rgba(43, 39, 32, .78);
        }

        .about-cta > p {
          color: #b99b66;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: .16em;
        }

        .about-cta h2 {
          max-width: 820px;
          margin: 25px auto 35px;
        }

        .about-footer {
          width: min(1180px, 100%);
          margin: auto;
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          color: #8f8679;
          border-top: 1px solid rgba(224, 211, 190, .1);
          font-size: 11px;
        }

        .about-footer div {
          display: flex;
          gap: 20px;
        }

        .about-footer a {
          color: #a99f91;
          text-decoration: none;
        }

        @media (max-width: 800px) {
          .about-page {
            padding: 12px 12px 30px;
          }

          .about-brand strong {
            font-size: 14px;
          }

          .about-brand small {
            font-size: 7px;
          }

          .back-link {
            font-size: 0;
          }

          .back-link::after {
            content: "← Home";
            font-size: 11px;
          }

          .about-hero {
            margin: 65px auto 75px;
          }

          .about-hero,
          .about-story,
          .capabilities-section,
          .principles-section {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .hero-copy h1 {
            font-size: clamp(45px, 13vw, 65px);
          }

          .mission-card h2 {
            margin-bottom: 45px;
          }

          .about-story,
          .capabilities-section,
          .principles-section {
            padding: 70px 0;
          }

          .story-columns,
          .principles-grid {
            grid-template-columns: 1fr;
          }

          .about-cta {
            padding: 55px 22px;
          }
        }

        @media (max-width: 480px) {
          .about-nav {
            padding: 8px;
          }

          .about-brand {
            gap: 9px;
          }

          .about-brand > span {
            width: 52px;
            height: 52px;
            border-radius: 15px;
          }

          .about-brand strong {
            font-size: 12px;
          }

          .hero-intro {
            font-size: 16px;
          }

          .hero-actions a {
            width: 100%;
          }

          .story-columns {
            gap: 8px;
          }

          .principles-grid article {
            min-height: auto;
          }

          .about-footer {
            gap: 20px;
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
