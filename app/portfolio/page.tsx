import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Business Website",
    title: "Digital Presence",
    text: "A clear, conversion-focused website designed to build trust and turn visitors into customers.",
  },
  {
    number: "02",
    category: "E-Commerce",
    title: "Online Store",
    text: "A modern shopping experience with a clean catalogue, effortless checkout and mobile-first design.",
  },
  {
    number: "03",
    category: "Brand Identity",
    title: "Brand Launch",
    text: "A memorable visual identity and polished digital direction for a confident market entry.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <style>{`
        .portfolio-page { min-height: 100vh; color: #f8fafc; background: #07111f; font-family: Arial, sans-serif; }
        .portfolio-nav { max-width: 1180px; margin: auto; padding: 24px; display: flex; justify-content: space-between; align-items: center; }
        .portfolio-logo { color: white; text-decoration: none; font-size: 19px; font-weight: 800; letter-spacing: -.5px; }
        .portfolio-logo span { color: #3ddcff; }
        .back-link { color: #b8c7d9; text-decoration: none; font-size: 14px; }
        .back-link:hover { color: #3ddcff; }
        .portfolio-hero { max-width: 1180px; margin: auto; padding: 92px 24px 70px; }
        .eyebrow { color: #3ddcff; letter-spacing: 2px; font-size: 12px; font-weight: 700; text-transform: uppercase; }
        .portfolio-hero h1 { max-width: 760px; margin: 18px 0; font-size: clamp(44px, 8vw, 96px); line-height: .96; letter-spacing: -4px; }
        .portfolio-hero p { max-width: 580px; color: #aebdce; font-size: 18px; line-height: 1.7; }
        .work-grid { max-width: 1180px; margin: auto; padding: 0 24px 90px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .project-card { min-height: 350px; padding: 28px; display: flex; flex-direction: column; justify-content: flex-end; border: 1px solid #20334a; border-radius: 20px; background: linear-gradient(145deg, #10243b, #091725); transition: transform .25s ease, border-color .25s ease; }
        .project-card:nth-child(2) { background: linear-gradient(145deg, #16304a, #0e2032); }
        .project-card:nth-child(3) { background: linear-gradient(145deg, #123332, #0a1f26); }
        .project-card:hover { transform: translateY(-8px); border-color: #3ddcff; }
        .project-number { margin-bottom: auto; color: #3ddcff; font-weight: 800; }
        .project-category { color: #aebdce; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; }
        .project-card h2 { margin: 10px 0; font-size: 29px; letter-spacing: -1px; }
        .project-card p { margin: 0; color: #c5d1df; line-height: 1.6; font-size: 15px; }
        .portfolio-cta { padding: 80px 24px; text-align: center; background: #0c1c2d; }
        .portfolio-cta h2 { margin: 0; font-size: clamp(32px, 5vw, 56px); letter-spacing: -2px; }
        .portfolio-cta p { color: #b8c7d9; margin: 16px auto 28px; }
        .cta-button { display: inline-block; padding: 14px 22px; border-radius: 9px; background: #3ddcff; color: #05101c; text-decoration: none; font-weight: 800; }
        @media (max-width: 760px) { .work-grid { grid-template-columns: 1fr; } .portfolio-hero { padding-top: 60px; } }
      `}</style>

      <nav className="portfolio-nav">
        <Link href="/" className="portfolio-logo">MK <span>Digital Labs</span></Link>
        <Link href="/" className="back-link">← Back to Home</Link>
      </nav>

      <section className="portfolio-hero">
        <div className="eyebrow">Selected Work</div>
        <h1>Ideas shaped into digital experiences.</h1>
        <p>
          We combine strategy, design and technology to create websites and brands
          that make a powerful first impression.
        </p>
      </section>

      <section className="work-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-number">{project.number}</div>
            <div className="project-category">{project.category}</div>
            <h2>{project.title}</h2>
            <p>{project.text}</p>
          </article>
        ))}
      </section>

      <section className="portfolio-cta">
        <h2>Have a project in mind?</h2>
        <p>Let&apos;s turn your idea into something people remember.</p>
        <Link href="/#contact" className="cta-button">Start a Conversation</Link>
      </section>
    </main>
  );
}