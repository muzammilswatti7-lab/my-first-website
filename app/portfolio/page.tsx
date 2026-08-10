"use client";
import "./portfolio.css";
import Image from "next/image";
import Link from "next/link";

const projects = [
 
 
  {
    category: "Web Design & Development",
    title: "Private Interior Experience",
    description:
      "A cinematic digital presence for an interior design atelier, combining editorial typography, immersive imagery and refined project discovery.",
    image: "/portfolio/da-elements.png",
    status: "Selected Project",
  },
  {
    category: "Business Dashboard · Web Application",
    title: "FabricPro",
    description:
      "A clear operations dashboard that brings revenue, profitability, projects and business activity into one decision-ready workspace.",
    image: "/portfolio/fabricpro.png",
    status: "Selected Project",
  },
  {
    category: "E-commerce Experience",
    title: "Aurelia",
    description:
      "A luxury commerce concept exploring elegant product storytelling, focused navigation and a calm, conversion-aware shopping journey.",
    image: "/portfolio/aurelia.png",
    status: "Concept Project",
  },
  {
    category: "Marketing Analytics · SaaS",
    title: "GrowthPulse",
    description:
      "A marketing intelligence concept that turns campaign, lead and attribution data into a focused interface for faster growth decisions.",
    image: "/portfolio/growthpulse.png",
    status: "Concept Project",
  },
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <div className="page-glow glow-one" />
      <div className="page-glow glow-two" />

      <div className="shell">
        <nav className="nav" aria-label="Portfolio navigation">
          <Link href="/" className="brand" aria-label="MK Digital Labs home">
            <span className="brand-mark">MK</span>
            <span className="brand-copy">
              <strong><b>MK</b> DIGITAL LABS</strong>
              <small>YOUR GROWTH, OUR MISSION</small>
            </span>
          </Link>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/#services">Services</Link>
            <Link href="/portfolio" className="active">Portfolio</Link>
            <Link href="/#process">Process</Link>
            <Link href="/quote">Contact</Link>
          </div>

          <Link href="/quote" className="nav-cta">
            Request a project quote <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        <header className="hero">
          <div className="eyebrow"><span /> SELECTED DIGITAL WORK</div>
          <h1>
            Digital experiences built to feel
            <em> unmistakable.</em>
          </h1>
          <p>
            A selection of websites, commerce experiences and business systems shaped around clarity, credibility and purposeful growth.
          </p>
          <div className="capabilities" aria-label="Portfolio capabilities">
            <span>Websites</span>
            <span>E-commerce</span>
            <span>Business systems</span>
            <span>Growth experiences</span>
          </div>
        </header>

        <section className="work-section" aria-labelledby="work-title">
          <div className="section-head">
            <div>
              <span className="section-index">01 / PORTFOLIO</span>
              <h2 id="work-title">Selected work.</h2>
            </div>
            <p>
              Each project is presented around its role and experience. Concept studies are clearly identified.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={`${project.title} website project preview`}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                    priority={index < 2}
                  />
                  <span className={`status ${project.status === "Concept Project" ? "concept" : ""}`}>
                    {project.status}
                  </span>
                  <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="project-content">
                  <div>
                    <span className="category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <Link href="/quote" className="project-action" aria-label={`Discuss a project like ${project.title}`}>
                    <span>Discuss a similar project</span>
                    <i aria-hidden="true">↗</i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="cta">
        <span>HAVE A PROJECT IN MIND?</span>
        <h2>Let&apos;s create something your audience remembers.</h2>
        <p>Tell us what you are building and where you want the business to go next.</p>
        <Link href="/quote" className="cta-button">
          Start your project <i aria-hidden="true">↗</i>
        </Link>
      </section>

      
    </main>
  );
}

